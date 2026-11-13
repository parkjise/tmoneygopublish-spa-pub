<script setup lang="ts">
import { reactive, provide, onMounted, defineProps } from 'vue'
import { getRandomId } from '@/assets/script/randomString'

export interface TabInterface {
  id: string
  array: string[]
  count: number
  selected: number
  active: boolean[]
  disabled: boolean[]
}

const props = defineProps({
  ownSizeTab: {
    type: Boolean,
    default: false
  },
  linkTab: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits([
  /**
   * Update Active Index
   * @return index
   */
  'selected'
])
const randomString = getRandomId()
const state = reactive<TabInterface>({
  id: randomString,
  array: [],
  count: 0,
  selected: 0,
  active: [],
  disabled: []
})

onMounted(() => {
  state.active.map((item, i) => {
    item ? (state.selected = i) : null
  })
  emit('selected', state.selected)
})

const selectedTab = (i: number) => {
  state.selected = i
  state.active.map((item, index, arr) => {
    i === index ? (arr[index] = true) : (arr[index] = false)
  })
  emit('selected', state.selected)
}

const keyRight = (e: KeyboardEvent) => {
  const target = e.currentTarget as HTMLButtonElement
  const nextEl = target.nextElementSibling as HTMLButtonElement
  if (nextEl !== null) {
    nextEl.focus()
    nextEl.click()
  }
}

const keyLeft = (e: KeyboardEvent) => {
  const target = e.currentTarget as HTMLButtonElement
  const prevEl = target.previousElementSibling as HTMLButtonElement
  if (prevEl !== null) {
    prevEl.focus()
    prevEl.click()
  }
}

provide('tabs-state', state)
</script>

<template>
  <div class="tab">
    <!-- Tab links -->
    <div
      class="tab_link"
      :class="{ 'own_size_tab': props.ownSizeTab }"
      role="tablist"
    >
      <button
        v-for="(item, index) in state.array"
        :id="`${randomString + index}tabs`"
        :key="index"
        type="button"
        class="tab_link_btn"
        :class="[state.selected === index ? 'is_active' : '']"
        role="tab"
        :disabled="state.disabled[index]"
        :aria-controls="`${randomString + index}tab`"
        :aria-selected="state.selected === index"
        :tabindex="state.selected === index ? '0' : '-1'"
        @click="selectedTab(index)"
        @keyup.right="keyRight($event)"
        @keyup.left="keyLeft($event)"
      >
        {{ item }}
      </button>
      <slot name="tab_slot" />
    </div>
    <!-- Tab content -->
    <div
      v-show="!linkTab"
      class="tab_content"
    >
      <slot />
    </div>
  </div>
</template>

<style></style>
