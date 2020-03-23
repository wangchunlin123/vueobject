import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './components/app/login.vue'
import reg from './components/app/reg.vue'
import info from './components/app/info.vue'
import counter from "./components/counter/counter.vue"
import Mains from "./components/todolist/mains.vue"
import getname from "./components/app/getname.vue"
import shopping from "./components/shopping/mainss.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/login/:username',
      name: 'login',
      component: login,
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg,
    },
    {
      path: '/info',
      name: 'info',
      component: info,
      children:[{
        path:"/counter",
        name:"counter",
        component: counter,
      },
      {
        path:"/mains",
        name:"mains",
        component: Mains,
      },
      {
        path:"/getname",
        name:"getname",
        component: getname,
      },
      {
        path:"/shopping",
        name:"shopping",
        component: shopping,
      }]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
