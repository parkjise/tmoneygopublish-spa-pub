<script lang="ts" setup>
import { computed, type PropType } from 'vue';

export type BadgeColorType = 'primary' | 'secondary' | 'white' | 'black';
export type BadgeSizeType = 'sm' | 'md' | 'lg';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  /**
   * color = 'primary' | 'secondary' | 'white' | 'black'
   */
  badgeColor: {
    type: String as PropType<BadgeColorType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<BadgeSizeType>,
    default: 'md'
  }
})

const colorClasses = computed(() => ({
  'badge_primary': props.badgeColor === 'primary',
  'badge_secondary': props.badgeColor === 'secondary',
  'badge_white': props.badgeColor === 'white',
  'badge_black': props.badgeColor === 'black'
}));
</script>
<template>
  <div
    class="badge"
    type="button"
    :class="[ colorClasses, 'badge_'+props.size]"
  >
    <slot>{{ props.label }}</slot>
  </div>
</template>