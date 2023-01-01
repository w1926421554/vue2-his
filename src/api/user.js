//用户相关的逻辑接口
import request from '@/utils/request'

//登录接口
export const userLogin = data => {
    return request({
        method: 'post',
        url: '/users/login',
        data
    })
}