import Vue from 'vue'
import Router from 'vue-router'
import Lessons from '@/components/Lessons'
import About from '@/components/About'
import Lesson from '@/components/Lesson'

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
    },
    {
      path: '/lesson/:lessonName',
      name: 'Lesson',
      component: Lesson,
      props: true
    }
  ]
})
