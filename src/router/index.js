import Vue from 'vue'
import Router from 'vue-router'
import Lessons from '@/components/Lessons'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lessons',
      component: Lessons
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }    
  ]
})
