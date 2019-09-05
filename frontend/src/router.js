import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})

router.beforeEach((to, from , next) => {
  if (to.meta.requiresAuth !== true) {
    next()
  } else {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        axios.post('/api/vertify_token', {
          id: user.id,
          token: user.token
        }).then(response => {
            console.log(response)
            if (response.data === 'success') {
              store.dispatch('login', user)
              next()
            } else {
                next({ path: '/login' })
                next()
            }
          })
    } else {
      next({ path: '/login' })
      next()
    }
  }
})

export default router
