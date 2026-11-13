<script setup lang="ts">
import { ref, onMounted } from 'vue';
import uuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const props = defineProps({
  /**
   * member name
   */
  memberName: {
    type: String,
    default: '티머니',
  },
  hideIcon: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits([
  /**
   * Logo Click Event
   */
  'click',
  /**
   * window.scrollY > 10 <br>
   * Scrolling Event
   */
  'scroll'
])
const isScroll = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  window.scrollY > 10 ? (isScroll.value = true) : (isScroll.value = false)
  emit('scroll', isScroll.value)
}

defineExpose({
  handleScroll
})

</script>
<template>
  <header
    class="header main_header"
    :class="{'is_scroll':isScroll}"
  >
    <div class="header_left">
      <uu-button
        btn-style="none"
        aria-label="회원정보 페이지로 이동"
        class="header_member"
        @click="$emit('click', $event)"
      >
        <h1>{{ props.memberName }}님</h1>
        <template v-if="!hideIcon">
          <uu-ic
            size="24"
            name="navi_right"
          />
        </template>
      </uu-button>
    </div>
    <div class="header_right">
      <slot name="header_right">
        <uu-button
          btn-style="none"
          aria-label="메뉴"
        >
          <uu-ic
            name="setting"
            size="24"
          />
        </uu-button>
      </slot>
    </div>
  </header>
</template>
<style scoped lang="scss">

</style>