const container = () => import('@/views/pages/_container.vue')

// page > examples
const mainPage = () => import('@/views/pages/_layout/mainPage.vue')
const subPage = () => import('@/views/pages/_layout/subPage.vue')
const popup = () => import('@/views/pages/_layout/popup.vue')
const fullPopup = () => import('@/views/pages/_layout/fullPopup.vue')
const bottomSheet = () => import('@/views/pages/_layout/bottomSheet.vue')

export default {
  path: '/layout',
  redirect: '/layout/mainPage',
  component: container,
  children: [
    { component: mainPage, path: '/layout/mainPage'},
    { component: subPage, path: '/layout/subPage'},
    { component: popup, path: '/layout/popup'},
    { component: fullPopup, path: '/layout/fullPopup'},
    { component: bottomSheet, path: '/layout/bottomSheet'},
  ]
}


