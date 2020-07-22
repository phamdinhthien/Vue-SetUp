import Vue from 'vue'
import Router from 'vue-router'
import TestDemo from '@/views/TestDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestDemo',
      component: TestDemo
    }
  ]
})
