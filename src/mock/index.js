import Mock from "mockjs"
import homeApi from "./home"

// 设置延迟时间200-2000毫秒延迟时间
Mock.setup({
  timeout: '200-2000'
})

// 首页
// 拦截的是home/getData
Mock.mock(/\/home\/getData/, 'get', homeApi)
