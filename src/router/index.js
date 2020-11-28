import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: `/`,
    component: () => import('@/components/container/Container'),
    children: [
        {
            path: '/',
            name: 'Login',
            component: () => import('@/views/Login')
        },
        {
            path: '/sign-in',
            name: 'Sign-in',
            component: () => import('@/views/Signin')
        },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
