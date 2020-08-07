import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/store'
  },
  {
    path: '/ebook',
    component: () => import('@/views/ebook/index.vue'),
    children: [
      {
        path: ':fileName',
        component: () => import('@/components/ebook/EbookReader.vue')
      }
    ]
  },
  {
    path: '/store',
    component: () => import('@/views/store/index'),
    redirect: '/store/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/store/StoreHome')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
