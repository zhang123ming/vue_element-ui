import Vue from 'vue'
import App from './App'
import router from './router'

import http from "./../src/api/config"
Vue.prototype.$http = http;
import "./mock"

import Vuex from "vuex"
Vue.use(Vuex);

import echarts from "echarts"
Vue.prototype.$echarts = echarts;

import * as filters from "./filters//Index"
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import store from "./store/Index"

Vue.config.productionTip = false
import './../static/reset.css'



import ElementUI, {
  Form
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let isLogin = localStorage.getItem("token");
    if (isLogin) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      }) // 将跳转的路由path作为参数，登录成功后跳转到该路由
    }
  } else {
    next();
  }
})


// /**
//  * http request 请求拦截
//  * 
//  */
// axios.interceptors.request.use(function (config) { // 每次请求时会从localStorage中获取token
//     console.log("http request");
//     let token = localStorage.getItem("token");
//     if (token) {
//       token = 'Bearer' + ' ' + token.replace(/'|"/g, '') // 把token加入到默认请求参数中
//       config.headers.common['Authorization'] = token
//     }
//     return config
//   },
//   function (error) {
//     console.log("http request error", error);
//     return Promise.reject(error)

//   })

// /**
//  * http response 响应拦截器
//  * 
//  */
// axios.interceptors.response.use(response => {
//   console.log("http response");
//   response.data.code = 10010; //模拟token失效
//   if (response.data.code === 10010 || response.data.code == 10011) {
//     router.push({
//       path: '/login',
//       query: {
//         redirect: router.currentRoute.fullPath
//       }
//     })
//     window.localStorage.removeItem("token"); //删除失效或过期的token
//     console.log("会话已过期,请重新登陆");
//   } else if (response.data.token) { //token存在 覆盖原有的token
//     window.localStorage.setItem("token", response.data.token);
//   }
//   return response;
// }, error => {
//   if (error.response) {
//     switch (error.response.status) {
//       case 401:
//       case 402:
//       case 403:
//         console.log("main.js:拦截错误信息", error.response.data);
//     }
//     // 返回接口返回的错误信息
//     return Promise.reject(error.response.data);
//   }
// });




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
