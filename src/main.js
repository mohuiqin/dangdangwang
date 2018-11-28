import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './assets/js/router.js'
//引入配置好的路由

import '../node_modules/mint-ui/lib/style.css'
import './assets/css/cssreset.css'
import axios from 'axios'
Vue.prototype.$http=axios

Vue.use(VueRouter)
// 把路由挂载到实例上
import Mint from 'mint-ui'
Vue.use(Mint)

//引入自定义的全局函数文件
//import myglobal from './components/global.vue'//引用文件
//Vue.use(myglobal);//挂载到Vue实例上面
import common from './assets/js/common.js'
Vue.prototype.common=common

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
