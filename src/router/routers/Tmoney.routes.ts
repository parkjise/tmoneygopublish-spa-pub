const container = () => import('@/views/pages/_container.vue')

// 운송 중개
// 인트로
const TIP01001 = () => import('@/views/pages/Tmoney/Transit/TIP01001.vue')
const TIP01002 = () => import('@/views/pages/Tmoney/Transit/TIP01002.vue')
const TIP01003 = () => import('@/views/pages/Tmoney/Transit/TIP01003.vue')

// 상품 조회
const TIP02001 = () => import('@/views/pages/Tmoney/Transit/TIP02001.vue')
const TIP02001_1 = () => import('@/views/pages/Tmoney/Transit/TIP02001-1.vue')
const TIP02003 = () => import('@/views/pages/Tmoney/Transit/TIP02003.vue')
const TIP02004 = () => import('@/views/pages/Tmoney/Transit/TIP02004.vue')
const TIP02005 = () => import('@/views/pages/Tmoney/Transit/TIP02005.vue')
const TIP02006 = () => import('@/views/pages/Tmoney/Transit/TIP02006.vue')
const TIP02008 = () => import('@/views/pages/Tmoney/Transit/TIP02008.vue')

// 상품 상세
const TIP03001 = () => import('@/views/pages/Tmoney/Transit/TIP03001.vue')
const TIP03002 = () => import('@/views/pages/Tmoney/Transit/TIP03002.vue')
const TIP03003 = () => import('@/views/pages/Tmoney/Transit/TIP03003.vue')

// 예약
const TIP04001 = () => import('@/views/pages/Tmoney/Transit/TIP04001.vue')
const TIP04002 = () => import('@/views/pages/Tmoney/Transit/TIP04002.vue')
const TIP04003 = () => import('@/views/pages/Tmoney/Transit/TIP04003.vue')
const TIP04004 = () => import('@/views/pages/Tmoney/Transit/TIP04004.vue')
const TIP04006 = () => import('@/views/pages/Tmoney/Transit/TIP04006.vue')
const TIP04007 = () => import('@/views/pages/Tmoney/Transit/TIP04007.vue')
const TIP04008 = () => import('@/views/pages/Tmoney/Transit/TIP04008.vue')
const TIP04009 = () => import('@/views/pages/Tmoney/Transit/TIP04009.vue')

// 결제
const TIP05003 = () => import('@/views/pages/Tmoney/Transit/TIP05003.vue')
const TIP05005 = () => import('@/views/pages/Tmoney/Transit/TIP05005.vue')
const TIP05005_1 = () => import('@/views/pages/Tmoney/Transit/TIP05005_1.vue')
const TIP05005_2 = () => import('@/views/pages/Tmoney/Transit/TIP05005_2.vue')
const TIP05006 = () => import('@/views/pages/Tmoney/Transit/TIP05006.vue')
const TIP05007 = () => import('@/views/pages/Tmoney/Transit/TIP05007.vue')
const TIP05008 = () => import('@/views/pages/Tmoney/Transit/TIP05008.vue')
const TIP05010 = () => import('@/views/pages/Tmoney/Transit/TIP05010.vue')
const TIP05010_1 = () => import('@/views/pages/Tmoney/Transit/TIP05010_1.vue')
const TIP05010_2 = () => import('@/views/pages/Tmoney/Transit/TIP05010_2.vue')
const TIP05010_3 = () => import('@/views/pages/Tmoney/Transit/TIP05010_3.vue')
const TIP05011 = () => import('@/views/pages/Tmoney/Transit/TIP05011.vue')

// 예약 상세
const TIP07001 = () => import('@/views/pages/Tmoney/Transit/TIP07001.vue')
const TIP07002 = () => import('@/views/pages/Tmoney/Transit/TIP07002.vue')
const TIP07005 = () => import('@/views/pages/Tmoney/Transit/TIP07005.vue')
const TIP07007 = () => import('@/views/pages/Tmoney/Transit/TIP07007.vue')
const TIP07008 = () => import('@/views/pages/Tmoney/Transit/TIP07008.vue')
const TIP07009 = () => import('@/views/pages/Tmoney/Transit/TIP07009.vue')
const TIP07012 = () => import('@/views/pages/Tmoney/Transit/TIP07012.vue')
const TIP07013 = () => import('@/views/pages/Tmoney/Transit/TIP07013.vue')
const TIP07014 = () => import('@/views/pages/Tmoney/Transit/TIP07014.vue')
const TIP07015 = () => import('@/views/pages/Tmoney/Transit/TIP07015.vue')
const TIP07016 = () => import('@/views/pages/Tmoney/Transit/TIP07016.vue')

export default {
  path: '/Tmoney',
  redirect: '/Tmoney',
  component: container,
  children: [
    { component: TIP01001, path: '/tmoney/Transit/TIP01001' },
    { component: TIP01002, path: '/tmoney/Transit/TIP01002' },
    { component: TIP01003, path: '/tmoney/Transit/TIP01003' },
    { component: TIP02001, path: '/tmoney/Transit/TIP02001' },
    { component: TIP02001_1, path: '/tmoney/Transit/TIP02001-1' },
    { component: TIP02003, path: '/tmoney/Transit/TIP02003' },
    { component: TIP02004, path: '/tmoney/Transit/TIP02004' },
    { component: TIP02005, path: '/tmoney/Transit/TIP02005' },
    { component: TIP02006, path: '/tmoney/Transit/TIP02006' },
    { component: TIP02008, path: '/tmoney/Transit/TIP02008' },
    { component: TIP03001, path: '/tmoney/Transit/TIP03001' },
    { component: TIP03002, path: '/tmoney/Transit/TIP03002' },
    { component: TIP03003, path: '/tmoney/Transit/TIP03003' },
    { component: TIP04001, path: '/tmoney/Transit/TIP04001' },
    { component: TIP04002, path: '/tmoney/Transit/TIP04002' },
    { component: TIP04003, path: '/tmoney/Transit/TIP04003' },
    { component: TIP04004, path: '/tmoney/Transit/TIP04004' },
    { component: TIP04006, path: '/tmoney/Transit/TIP04006' },
    { component: TIP04007, path: '/tmoney/Transit/TIP04007' },
    { component: TIP04008, path: '/tmoney/Transit/TIP04008' },
    { component: TIP04009, path: '/tmoney/Transit/TIP04009' },
    { component: TIP05003, path: '/tmoney/Transit/TIP05003' },
    { component: TIP05005, path: '/tmoney/Transit/TIP05005' },
    { component: TIP05005_1, path: '/tmoney/Transit/TIP05005_1' },
    { component: TIP05005_2, path: '/tmoney/Transit/TIP05005_2' },
    { component: TIP05006, path: '/tmoney/Transit/TIP05006' },
    { component: TIP05007, path: '/tmoney/Transit/TIP05007' },
    { component: TIP05008, path: '/tmoney/Transit/TIP05008' },
    { component: TIP05010, path: '/tmoney/Transit/TIP05010' },
    { component: TIP05010_1, path: '/tmoney/Transit/TIP05010_1' },
    { component: TIP05010_2, path: '/tmoney/Transit/TIP05010_2' },
    { component: TIP05010_3, path: '/tmoney/Transit/TIP05010_3' },
    { component: TIP05011, path: '/tmoney/Transit/TIP05011' },
    { component: TIP07001, path: '/tmoney/Transit/TIP07001' },
    { component: TIP07002, path: '/tmoney/Transit/TIP07002' },
    { component: TIP07005, path: '/tmoney/Transit/TIP07005' },
    { component: TIP07007, path: '/tmoney/Transit/TIP07007' },
    { component: TIP07008, path: '/tmoney/Transit/TIP07008' },
    { component: TIP07009, path: '/tmoney/Transit/TIP07009' },
    { component: TIP07012, path: '/tmoney/Transit/TIP07012' },
    { component: TIP07013, path: '/tmoney/Transit/TIP07013' },
    { component: TIP07014, path: '/tmoney/Transit/TIP07014' },
    { component: TIP07015, path: '/tmoney/Transit/TIP07015' },
    { component: TIP07016, path: '/tmoney/Transit/TIP07016' },
  ]
}
