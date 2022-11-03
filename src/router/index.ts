import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteName, RoutePath } from '@/enums/route'
const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/Home.vue')

export const routes: Array<RouteRecordRaw> = [
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
