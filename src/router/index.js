import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import( /*webpackChunkName:'Register'*/ '@/pages/Form/Login.vue');
const Demo = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/Index.vue');
const Video = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/Video/Index.vue');
const Home = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/Home/Index.vue');
const User = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/User/Index.vue');
const Cart = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/Cart/Index.vue');
const Other1 = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/Other/Other1.vue');
const Other2 = () => import( /*webpackChunkName:'Register'*/ '@/pages/View/Other/Other2.vue');
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
  {path:'/demo',name:'Demo',component:Demo,children:[
    {path:'home',name:'Home',component:Home,meta:{requireAuth:true}},
    {path:'video',name:'Video',component:Video,meta:{requireAuth:true}},
    {path:'user',name:'User',component:User,meta:{requireAuth:true}},
    {path:'cart',name:'Cart',component:Cart,meta:{requireAuth:true}},
    {path:'other1',name:'Other1',component:Other1,meta:{requireAuth:true}},
    {path:'other2',name:'Other2',component:Other2,meta:{requireAuth:true}},
    {path:'/demo',redirect:"/demo/home"}
  ]},
  {path:'/login',name:'Login',component:Login,meta:{requireAuth:false}},
  {path:'/',redirect:'/demo'}
  ]
})
