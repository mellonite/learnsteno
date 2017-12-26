import Vue from 'vue'
import Router from 'vue-router'
import Drills from '@/components/Drills'
import About from '@/components/About'
import Drill from '@/components/Drill'
import Lessons from '@/components/Lessons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lessons',
      component: Lessons
    },
    {
      path: '/drills',
      name: 'Drills',
      component: Drills
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/drill/:drillName',
      name: 'Drill',
      component: Drill,
      props: true
    }
  ]
})
