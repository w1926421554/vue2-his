import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入初始化样式
import '@/assets/css/normalize.css'
import '@/assets/css/reset.css'
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
