import Vue from 'vue'
import Router from 'vue-router'

import axios from 'axios'
Vue.prototype.$http = axios
//引入外部css文件
import '../../static/css/reset.css'
import '../../static/css/common.css'
//引入外部js文件
import '../../static/js/rem.js'

import index from 'components/index/index'
import map from 'components/map/map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/map',
      component: map
    }
  ]
})
