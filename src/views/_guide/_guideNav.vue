<script lang="ts">
export default function guideNav() {
  const navs = [
    {
      title: 'Rule',
      nav: [
        { name: '기본정책', url: `/convention/ruleIntro` },
        { name: '표준규칙', url: `/convention/ruleStandard` },
        { name: '코드규칙', url: `/convention/ruleCode` },
        { name: '네임규칙', url: `/convention/ruleName` },
      ],
    },
    {
      title: 'Accessibility',
      nav: [
        { name: '접근성 개요', url: `/accessibility/waIndex` },
        { name: 'WAI-ARIA', url: `/accessibility/waWai` },
      ],
    },
    {
      title: 'General',
      nav: [
        { name: 'Colors', url: `/plan/colors` },
        { name: 'Typography', url: `/plan/typography` },
        { name: 'Layout', url: `/plan/layout` },
      ],
    },
    {
      title: 'Components',
      nav: [
        { name: 'Accordion', url: `/components/Accordion` },
        { name: 'Button', url: `/components/Button` },
        { name: 'Calendar', url: `/components/Calendar` },
        { name: 'Checkbox', url: `/components/Checkbox` },
        { name: 'DatePicker', url: `/components/DatePicker` },
        { name: 'Fieldset', url: `/components/Fieldset` },
        { name: 'Floating', url: `/components/Floating` },
        { name: 'ic', url: `/components/ic` },
        { name: 'Input', url: `/components/Input` },
        { name: 'InputRange', url: `/components/InputRange` },
        { name: 'Modal', url: `/components/Modal` },
        { name: 'Progressbar', url: `/components/Progressbar` },
        { name: 'Radio', url: `/components/Radio` },
        { name: 'Skeleton', url: `/components/Skeleton` },
        { name: 'Swiper', url: `/components/Swiper` },
        { name: 'Tab', url: `/components/Tab` },
        { name: 'Textarea', url: `/components/Textarea` },
        { name: 'Toast', url: `/components/Toast` },
        { name: 'Tooltip', url: `/components/Tooltip` },
        { name: 'Badge', url: `/components/Badge` },
        { name: 'Prism', url: `/components/Prism` },
        { name: 'Form', url: `/components/Form` },
      ],
    },
  ];
  return navs;
}
</script>