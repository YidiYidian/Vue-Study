import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Main from '@/page/main'
import User from '@/page/user'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      // 嵌套路由
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/',
        name: 'Main',
        component: Main
      }, {
        path: '/user',
        name: 'User',
        component: User
      }]
    }
  ]
})
