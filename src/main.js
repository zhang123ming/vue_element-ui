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
    let isLogin = true;
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
