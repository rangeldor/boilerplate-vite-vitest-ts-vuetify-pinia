import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteName, RoutePath } from '@/enums/route'

const AuthLayout = () => import(/* webpackChunkName: "AuthLayout" */ '@/components/layouts/AuthLayout.vue')
const SignIn = () => import(/* webpackChunkName: "SignIn" */ '@/pages/auth/SignIn.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/Home.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: RoutePath.SignIn,
        name: RouteName.SignIn,
        component: SignIn,
        meta: { toTop: true, smoothScroll: true }
      }
    ]
  },
  {
    path: RoutePath.Home,
    name: RouteName.Home,
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
