import { createRouter, createWebHistory, NavigationGuardNext, RouteRecordRaw } from 'vue-router'
import { RouteBrazilianName, RouteName, RoutePath } from '@/enums/route'
import { Permission } from '@/enums/permission'
import { IUser } from '@/interfaces/user'

const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/pages/dashboard/NotFound.vue')
const AuthLayout = () => import(/* webpackChunkName: "AuthLayout" */ '@/components/layouts/AuthLayout.vue')
const SignIn = () => import(/* webpackChunkName: "SignIn" */ '@/pages/auth/SignIn.vue')
const DashboardLayout = () => import(/* webpackChunkName: "DashboardLayout" */ '@/components/layouts/DashboardLayout.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/dashboard/Home.vue')
const Account = () => import(/* webpackChunkName: "Account" */ '@/pages/dashboard/Account.vue')
const FeeQueue = () => import(/* webpackChunkName: "FeeQueue" */ '@/pages/dashboard/fee-queue/FeeQueue.vue')
const FeeQueueDetail = () => import(/* webpackChunkName: "FeeQueueDetail" */ '@/pages/dashboard/fee-queue/FeeQueueDetail.vue')
const CreditQueue = () => import(/* webpackChunkName: "CreditQueue" */ '@/pages/dashboard/credit-queue/CreditQueue.vue')

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
        meta: { toTop: true, smoothScroll: true, translatedName: RouteBrazilianName.Home }
      },
      {
        path: RoutePath.Account,
        name: RouteName.Account,
        component: Account,
        meta: { toTop: true, smoothScroll: true, translatedName: RouteBrazilianName.Account }
      },
      {
        path: RoutePath.FeeQueue,
        name: RouteName.FeeQueue,
        component: FeeQueue,
        meta: { toTop: true, smoothScroll: true, translatedName: RouteBrazilianName.FeeQueue },
        beforeEnter: (to, from, next) => {
          permissionGuard(Permission.FeeQueue, next)
        }
      },
      {
        path: RoutePath.FeeQueueDetail,
        name: RouteName.FeeQueueDetail,
        component: FeeQueueDetail,
        meta: { toTop: true, smoothScroll: true, translatedName: RouteBrazilianName.FeeQueueDetail }
      },
      {
        path: RoutePath.CreditQueue,
        name: RouteName.CreditQueue,
        component: CreditQueue,
        meta: { toTop: true, smoothScroll: true, translatedName: RouteBrazilianName.CreditQueue }
      }
    ]
  }
]

const permissionGuard = (permission: Permission, next: NavigationGuardNext) => {
  const user: IUser = JSON.parse(localStorage.getItem('user') || '{}')
  const hasUser = Object.keys(user).length > 0
  const userHasPermission = user.permissions.includes(permission)

  if(hasUser) {
    userHasPermission ? next() : next({ name: RouteName.CreditQueue })
  }
}

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

router.beforeEach((to, _, next) => {
  const publicPages = [`${RoutePath.SignIn}`]
  const authRequired = !publicPages.includes(to.path)
  const user: IUser = JSON.parse(localStorage.getItem('user') || '{}')

  const isLogged = Object.keys(user).length > 0
  const isRouteSignIn = to.name === RouteName.SignIn

  if (isLogged && isRouteSignIn) return next({ name: RouteName.CreditQueue })
  if (!isLogged && authRequired) return next({ name: RouteName.SignIn })
   
  next()
})

export default router
