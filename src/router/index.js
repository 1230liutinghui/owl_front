import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import User from '../components/user'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/user',
    name: 'user',
    component: User
  }
  ]
})
