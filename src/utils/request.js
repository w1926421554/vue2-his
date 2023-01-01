import axios from "axios";
import { Message } from "element-ui";
// 配置服务器地址
// axios.defaults.baseURL = "http://129.211.169.131:21009";
const SERVER_AX = axios.create({
  baseURL: "http://129.211.169.131:21009", //服务器基本路径
  timeout: 8000, //超时
});
// 请求拦截器
// axios.interceptors.request.use((config) => {
//   return config;
// });
// 响应拦截器
// response: 后端正常返回了数据
// err: 后端返回了错误的信息
SERVER_AX.interceptors.response.use(
  (response) => {
    if (response.data.code != undefined && response.data.msg != undefined) {
      if (response.data.code === 1) {
        Message.success(response.data.msg);
      }else {
        Message.error(response.data.msg);
      }
    }
    return response;
  },
  (err) => {
    // 如果用户的token是错误的,就强制跳转登录界面
    if (err.response?.status == 401) {
      router.push("/login");
      return Promise.reject(err);
    }
  }
);

export default SERVER_AX;
