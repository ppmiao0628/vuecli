import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mpp from '@/components/Mpp'
import MppLeft from '@/components/MppLeft'
import MppRight from '@/components/MppRight'
import Mpp1 from '@/components/Mpp1'
import TomatoTime from '@/view/tomatoTime/App'
import RegexCheck from '@/view/regex_check/App'
import ImgInfo from '@/view/imgInfo/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: MppLeft,
        right: MppRight
      }
    },
    {
      path: '/regex_check',
      name: 'RegexCheck',
      components: {
        default: RegexCheck
      }
    },
    {
      path: '/tomatotime',
      name: 'TomatoTime',
      components: {
        default: TomatoTime
      }
    },
    {
      path: '/imginfo',
      name: 'ImgInfo',
      components: {
        default: ImgInfo
      }
    },
    {
      path: '/lr',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: MppRight,
        right: MppLeft
      }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:username/:age(\\d+)',
      redirect: '/mpp/:username/:age(\\d+)'
    },
    {
      path: '/mpp/:username/:age(\\d+)',
      component: Mpp,
      children: [
        {
          path: '/',
          name: 'mpp',
          component: Mpp
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
