import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    meta: {
      auth: true,
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/wallets',
    name: 'wallets',
    component: () => import('@/views/wallet/Wallets.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/transfers',
    name: 'transfers',
    component: () => import('@/views/transfers/Transfers.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
      auth: false,
    },
  },
  {
    path: '/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
      auth: false,
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
      auth: false,
    },
  },
  {
    path: '*',
    redirect: 'error-404',
    meta: {
      layout: 'blank',
      auth: false,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthRequired = to.meta.auth
  const token = localStorage.getItem('token')
  const isTokenNotExist = token == null
  if (!isAuthRequired) {
    return next()
  }
  if (isTokenNotExist) return next('/login')

  return next()
})

export default router
