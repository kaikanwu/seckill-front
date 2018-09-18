import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'

//import css
import 'element-ui/lib/theme-chalk/index.css'
//import js
import routes from './js/router/routes'


Vue.use(VueRouter)
Vue.use(Element)
Vue.use(VueAxios, Axios)
Vue.use(Qs)

//使用Axios向后端服务器发送请求进行登录
Axios.defaults.baseURL = 'http://localhost:8080'
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.defaults.withCredentials = true





// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]


const router = new VueRouter({
  mode:'history',
  routes
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
