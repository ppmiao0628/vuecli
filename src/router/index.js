import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mpp from '@/components/Mpp'
import Mpp1 from '@/components/Mpp1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mpp',
      name: 'Mpp',
      component: Mpp,
      children: [
        {
          path:'/',
          name:'mpp',
          component:Mpp
        },
        {
          path: 'mpp1',
          name: 'mpp1',
          component: Mpp1
        }
      ]
    }
  ]
})
