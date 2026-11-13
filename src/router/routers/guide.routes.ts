const container = () => import('@/views/_guide/guide.vue')

// 규칙가이드
const ruleIntro = () => import('@/views/_guide/convention/ruleIntro.vue')
const ruleStandard = () => import('@/views/_guide/convention/ruleStandard.vue')
const ruleCode = () => import('@/views/_guide/convention/ruleCode.vue')
const ruleName = () => import('@/views/_guide/convention/ruleName.vue')
// accessibility
const waIndex = () => import('@/views/_guide/accessibility/waIndex.vue')
const waWai = () => import('@/views/_guide/accessibility/waWai.vue')
// 설계가이드
const Colors = () => import('@/views/_guide/plan/Colors.vue')
const Typography = () => import('@/views/_guide/plan/Typography.vue')
const Layout = () => import('@/views/_guide/plan/Layout.vue')

// uu-components
const Accordion = () => import('@/views/_guide/components/Accordion.vue')
const Modal = () => import('@/views/_guide/components/Modal.vue')
const Swiper = () => import('@/views/_guide/components/Swiper.vue')
const Tab = () => import('@/views/_guide/components/Tab.vue')
const Toast = () => import('@/views/_guide/components/Toast.vue')
const Tooltip = () => import('@/views/_guide/components/Tooltip.vue')
const Fieldset = () => import('@/views/_guide/components/Fieldset.vue')
const Input = () => import('@/views/_guide/components/Input.vue')
const InputRange = () => import('@/views/_guide/components/InputRange.vue')
const Textarea = () => import('@/views/_guide/components/Textarea.vue')
const Checkbox = () => import('@/views/_guide/components/Checkbox.vue')
const Radio = () => import('@/views/_guide/components/Radio.vue')
// const Select = () => import('@/views/_guide/components/Select.vue')
const Badge = () => import('@/views/_guide/components/Badge.vue')
const Button = () => import('@/views/_guide/components/Button.vue')
const ic = () => import('@/views/_guide/components/Ic.vue')
const Prism = () => import('@/views/_guide/components/Prism.vue')
const Calendar = () => import('@/views/_guide/components/Calendar.vue')
const DatePicker = () => import('@/views/_guide/components/DatePicker.vue')
const Progressbar = () => import('@/views/_guide/components/Progressbar.vue')
const Skeleton = () => import('@/views/_guide/components/Skeleton.vue')
const Floating = () => import('@/views/_guide/components/Floating.vue')
const Form = () => import('@/views/_guide/components/Form.vue')

export default {
  path: '/convention',
  redirect: '/convention/ruleIntro',
  component: container,
  children: [
    // { path: '/convention', redirect: '/convention/ruleIntro' },
    { component: ruleIntro, path: 'ruleIntro' },
    { component: ruleStandard, path: 'ruleStandard' },
    { component: ruleCode, path: 'ruleCode' },
    { component: ruleName, path: 'ruleName' },
    // accessibility
    { path: '/accessibility', redirect: '/accessibility/waIndex' },
    { component: waIndex, path: '/accessibility/waIndex' },
    { component: waWai, path: '/accessibility/waWai' },
    // 설계가이드
    { path: '/plan', redirect: '/plan/colors' },
    { component: Colors, path: '/plan/colors' },
    { component: Typography, path: '/plan/typography' },
    { component: Layout, path: '/plan/layout' },

    // components
    { path: '/components', redirect: '/components/Accordion' },
    { component: Accordion, path: '/components/Accordion' },
    { component: Modal, path: '/components/Modal' },
    { component: Swiper, path: '/components/Swiper' },
    { component: Tab, path: '/components/Tab' },
    { component: Toast, path: '/components/Toast' },
    { component: Tooltip, path: '/components/Tooltip' },
    { component: Fieldset, path: '/components/Fieldset' },
    { component: Input, path: '/components/Input' },
    { component: InputRange, path: '/components/InputRange' },
    { component: Textarea, path: '/components/Textarea' },
    { component: Checkbox, path: '/components/Checkbox' },
    { component: Radio, path: '/components/Radio' },
    { component: Button, path: '/components/Button' },
    { component: ic, path: '/components/ic' },
    { component: Prism, path: '/components/Prism' },
    { component: Calendar, path: '/components/Calendar' },
    { component: DatePicker, path: '/components/DatePicker' },
    { component: Progressbar, path: '/components/Progressbar' },
    { component: Skeleton, path: '/components/Skeleton' },
    { component: Floating, path: '/components/Floating' },
    { component: Badge, path: '/components/Badge' },
    { component: Form, path: '/components/Form' },
  ]
}
