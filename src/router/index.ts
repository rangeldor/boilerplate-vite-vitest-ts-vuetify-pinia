import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteName, RoutePath } from '@/enums/route'

const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/pages/dashboard/NotFound.vue')
const AuthLayout = () => import(/* webpackChunkName: "AuthLayout" */ '@/components/layouts/AuthLayout.vue')
const SignIn = () => import(/* webpackChunkName: "SignIn" */ '@/pages/auth/SignIn.vue')
const DashboardLayout = () => import(/* webpackChunkName: "DashboardLayout" */ '@/components/layouts/DashboardLayout.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/dashboard/Home.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.NotFound,
    name: RouteName.NotFound,
    component: NotFound,
    meta: { toTop: true, smoothScroll: true }
  },
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
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: RoutePath.Home,
        name: RouteName.Home,
        component: Home,
        meta: { toTop: true, smoothScroll: true }
      }
    ]
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
