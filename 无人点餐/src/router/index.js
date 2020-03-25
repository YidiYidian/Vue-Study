import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Router11 from "@/components/Router11";
import Router22 from "@/components/Router22";
import Usercenter from "@/components/Usercenter";
import Content from "@/components/Content";
import Product from "@/components/Product";
import User from "@/components/User";
import Useradd from "@/components/user/Useradd";
import Userlist from "@/components/user/Userlist";


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/router11',
      name: 'Router11',
      component: Router11
    },
    {
      path: '/usercenter',
      name: 'Usercenter',
      component: Usercenter,
      children: [
        {
          path: '/useradd',
          name: 'Useradd',
          component: Useradd
        },
        {
          path: '/userlist',
          name: 'Userlist',
          component: Userlist
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/router22',
      name: 'Router22',
      component: Router22
    },
    
    {
      path: '/content/:aid',
      name: 'Content',
      component: Content,
     
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    }
    // {
    //   path: '*',
    //   redirect: '/router22'
    // }
  ]
})
