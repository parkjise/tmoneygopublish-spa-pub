import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import routerGuide from '@/router/routers/guide.routes'
import routerLayout from '@/router/routers/layout.routes'
import routerCommon from '@/router/routers/common.routes'
import routerClient from '@/router/routers/Tmoney.routes'
import routerClientSpa from '@/router/routers/TmoneySpa.routes'
import listIA from '@/views/_guide/listIA.vue'

const routes: Array<RouteRecordRaw> = [
  routerGuide,
  routerLayout,
  routerCommon,
  routerClient,
  routerClientSpa,
  {
    path: '/',
    name: 'IA',
    component: listIA
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
