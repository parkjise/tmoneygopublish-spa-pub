<script setup lang="ts">
  import { computed, inject, onMounted, reactive } from 'vue'
  import type { AccordionInterface } from './UuAccordion.vue'
  
  const props = defineProps({
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 아코디언 타이틀
     */
    header: {
      type: String,
      default: 'Accordion Title'
    }
  })
  const parent = inject<AccordionInterface>('accordion', {
    id: '',
    count: 0,
    active: null,
    multiple: false,
    arrow: false
  })
  const state = reactive({
    index: parent.count++,
    multiVisible: false,
    multiple: parent.multiple,
    arrow: parent.arrow
  })
  const visible = computed(() => {
    return state.index === parent.active
  })
  const activeStatus = computed(() => {
    if (!state.multiple) {
      return visible.value // false
    } else {
      return state.multiVisible // true
    }
  })
  const btnA11y = computed(() => {
    return state.arrow ? (activeStatus.value ? "open" : "close") : props.header
  })
  onMounted(() => {
    if (props.active) {
      parent.active = state.index
      if (state.multiple) {
        state.multiVisible = true
      }
    }
  })
  const open = () => {
    if (!state.multiple) {
      if (visible.value) {
        parent.active = null
      } else {
        parent.active = state.index
      }
    } else {
      state.multiVisible = !state.multiVisible
    }
  }
  const startTransition = (el: Element) => {
    (el as HTMLDivElement).style.height = el.scrollHeight + 'px'
  }
  const endTransition = (el: Element) => {
    (el as HTMLDivElement).style.height = ''
  }

</script>
<template>
  <div
    class="accordion_item"
    :class="activeStatus? 'is_active':''"
  >
    <div class="accordion_header">
      <template v-if="state.arrow">
        <span
          class="accordion_title"
          :class="{'is_disabled':props.disabled}"
        >
          <slot name="accordion_header">{{ props.header }}</slot>
        </span>
      </template>
      <button
        :id="`${parent.id+state.index}btn`"
        class="accordion_btn"
        type="button"
        :disabled="props.disabled"
        :aria-expanded="activeStatus"
        :aria-controls="`${parent.id+state.index}panel`"
        :aria-label="btnA11y"
        @click="open"
      >
        <span
          v-if="!state.arrow"
          class="accordion_title"
        ><slot name="accordion_header">{{ props.header }}</slot></span>
        <i
          class="ic"
          :class="props.disabled? 'ic_16_arrow_disabled':'ic ic_20_arrow'"
          :aria-hidden="true"
        />
      </button>
    </div>
    <transition
      name="accordion_body"
      mode="out-in"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-show="activeStatus"
        :id="`${parent.id+state.index}panel`"
        class="accordion_body"
        role="region"
        :aria-labelledby="`${parent.id+state.index}btn`"
      >
        <div class="accordion_content">
          <slot>
            <slot name="accordion_body" />
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>

</style>