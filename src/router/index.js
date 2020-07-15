import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../layouts/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/rainbow6',
        name: 'Rainbow6',
        component: () => import('../views/Rainbow6.vue')
      },
      {
        path: '/booking',
        name: 'Booking',
        component: () => import('../views/Booking.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../layouts/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.bcToken
  if (!needLogin(to.path)) {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

function needLogin (path) {
  switch (path) {
    case '/':
    case '/login':
    case '/rainbow6':
      return false
    default:
      return true
  }
}

export default router

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
