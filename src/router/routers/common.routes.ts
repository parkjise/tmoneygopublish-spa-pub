const container = () => import('@/views/pages/_container.vue')

// 공통
const detail = () => import('@/views/pages/Tmoney/common/detail.vue')

export default {
  path: '/common',
  redirect: '/',
  component: container,
  children: [
    { component: detail, path: '/tmoney/detail' },

  ]
}
