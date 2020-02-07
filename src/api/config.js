import axios from "axios"

// 创建一个axios 实例
const service = axios.create({
  timeout: 3000, //请求超时

})
// 请求拦截器
service.interceptors.request.use(
  config => {
    // success
    return config;
  }, err => {
    //   err
    console.log("请求拦截失败", err)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status;
    res.data = response.data;
    return res;
  }, err => {
    //   err
    console.log("响应拦截失败", err);
  }

)

export default service;
