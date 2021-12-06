
import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Output from '@/components/Output'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },

    //②profile
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },

    {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})
