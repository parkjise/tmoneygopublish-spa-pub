<script setup lang="ts">
import { ref, watch, reactive, type PropType, nextTick } from 'vue'
import { getRandomId } from '@/assets/script/randomString'
import { useActiveElement } from '@vueuse/core'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

type modalType = 'alert' | 'confirm' | 'bottom' | 'full' | 'notification'
const props = defineProps({
  /**
   * Modal Type<br>
   * type='alert' | 'confirm' | 'bottom' | 'full' | 'notification'
   */
  type: {
    type: String as PropType<modalType>,
    default: 'alert',
    require: true
  },
  /**
   * Modal Show, Hide <br>
   * v-model="modelName"
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * Hidden Header
   */
  hideHeader: {
    type: Boolean,
    default: false
  },
  /**
   * Hidden Footer
   */
  hideFooter: {
    type: Boolean,
    default: false
  },
  /**
   * Header Title Text
   */
  title: {
    type: String,
    default: 'Modal title',
  },
  hideOverlay: {
    type: Boolean,
    default: false
  },
  dragBar: {
    type: Boolean,
    default: false
  },
  fullContent: {
    type: Boolean,
    default: false
  },
  addClass: {
    type: String,
    default: ''
  },
  hideCloseBtn: {
    type: Boolean,
    default: false
  }, 
  hideTitle: {
    type: Boolean,
    default: false
  },
  roundFooter: {
    type: Boolean,
    default: false
  },
  hasBg: {
    type: Boolean,
    default: false
  },
  hasHeaderBg: {
    type:Boolean,
    default: false
  }
})

const emit = defineEmits([
  /**
   * Update v-model Value 
   */
  'update:modelValue',
  /**
   * Close Button Event
   */
  'close',
  /**
   * OK Button Event
   */
  'ok',
  /**
   * Open Event
   */
  'open',
])
const randomString = getRandomId()
const modalContent = ref<HTMLDivElement | undefined>()
const activator = ref<HTMLButtonElement | undefined>()
const activeElement = useActiveElement()
const activeEl = ref<HTMLElement | null | undefined>()
const modal = ref()
const state = reactive({
  transitionName: '' as string | null,
  modalcontent: false,
  overlay: !props.hideOverlay, // true
  drag: {
    isDragging: false,
    offsetY: 0,
    initY: 0
  }
})
// const arrayId = ref<string[]>([])

watch(activeElement, (el) => {
  activeEl.value = el
})

// onMounted(() => {
//   // const hasPopup = document.querySelectorAll('[aria-haspopup]')
//   // hasPopup.forEach((item) => {
//   //   item.setAttribute('aria-controls', `${modal.value?.id}`);
//   // })

//   arrayId.value.push(modal.value.id)
//   console.log(arrayId.value)
// })

const showModal = (e: Event) => {
  activator.value = e.target as HTMLButtonElement
  emit('open')
  emit('update:modelValue', true)
  document.body.classList.add('modal_open')

  if (props.type === 'bottom') {
    setModalOffsetY(0)
  }

  // a11y
  nextTick(() => {
    if (modalContent.value !== undefined) {
      modalContent.value.focus()
    }
  })
}
const closeModal = () => {
  emit('close')
  emit('update:modelValue', false)
  // modal + modal 일때 닫아도 .modal_open 넣기
  document.body.classList.remove('modal_open')
  if (document.querySelectorAll('.modal.is_open').length > 1) {
    document.body.classList.add('modal_open')
  }
  // a11y
  activator.value?.focus()
}
const okModal = () => {
  emit('ok')
  emit('update:modelValue', false)
  // modal + modal 일때 닫아도 .modal_open 넣기
  document.body.classList.remove('modal_open')
  if (document.querySelectorAll('.modal.is_open').length > 1) {
    document.body.classList.add('modal_kopen')
  }
  // a11y
  activator.value?.focus()
}
const focusLoop = (e: KeyboardEvent) => {
  // a11y
  if (modalContent.value !== undefined) {
    const focusEls = modalContent.value.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]')
    const firstEl = focusEls[0] as HTMLElement
    const lastEl = focusEls[focusEls?.length - 1] as HTMLElement
    const isTab = (e.key === 'Tab' || e.keyCode === 9);
    const isEsc = (e.key === 'Escape' || e.keyCode === 27);
    if (!isTab) {
      if (isEsc) {
        closeModal()
      }
      return;
    }
    if (e.shiftKey) { // shift + tab
      if (activeEl.value === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else { // tab
      if (activeEl.value === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  }
}

// bottomsheet close
const setModalOffsetY = (newOffsetY: number) => {
  if (modalContent.value === undefined) {
    return
  }
  state.drag.offsetY = newOffsetY
  modalContent.value.style.top = `${newOffsetY}px`
}
const onDragstart = (pageY: number) => {
  state.drag.initY = pageY
  state.drag.isDragging = true
}
const onDragmove = (pageY: number) => {
  if (state.drag.isDragging) {
    const newOffsetY = Math.max(pageY - state.drag.initY, 0)
    setModalOffsetY(newOffsetY)
  }
}
const onDragend = () => {
  state.drag.isDragging = false
  if (state.drag.offsetY > 100) {
    closeModal()
  } else {
    setModalOffsetY(0)
  }
}

defineExpose({
  showModal,
  closeModal
})

</script>
<template>
  <Teleport to="body">
    <Transition :name="`modal_${props.type}`">
      <div
        v-show="modelValue"
        :id="`${randomString}Modal`"
        ref="modal"
        class="modal"
        :class="[type, { 'is_open': modelValue }, addClass]"
        :role="props.type === 'alert' || props.type === 'notification' ? 'alertdialog' : 'dialog'"
        :aria-modal="true"
        :aria-labelledby="`${randomString}Title`"
        :aria-describedby="`${randomString}Desc`"
        :aria-hidden="!modelValue"
      >
        <div
          class="modal_dialog"
          @click.self="closeModal"
        >
          <div
            ref="modalContent"
            class="modal_content"
            :tabindex="0"
            @keydown.stop="focusLoop($event)"
          >
            <uu-button
              v-if="type === 'bottom' && dragBar"
              btn-style="none"
              size="sm"
              class="modal_close_bar"
              @touchstart.passive="onDragstart($event.touches[0].pageY)"
              @touchmove.passive="onDragmove($event.touches[0].pageY)"
              @touchend.passive="onDragend"
              @mousedown.passive="onDragstart($event.pageY)"
              @mousemove.passive="onDragmove($event.pageY)"
              @mouseup.passive="onDragend"
            >
              <span class="sr_only">닫기</span>
            </uu-button>
            <div
              class="modal_header"
              :class="[{ 'is_hide': hideHeader },{'full_popup_header':type == 'full'},{'bg_gray010':hasHeaderBg}]"
            >
              <template v-if="type == 'full' && !hideHeader && !hideCloseBtn">
                <button
                  type="button"
                  class="btn_close close_left"
                  aria-label="팝업 닫기"

                  @click="closeModal"
                >
                  <uu-ic
                    name="close"
                    size="24"
                  />
                </button>
                <h3
                  :id="`${randomString}Title`"
                  class="modal_title center_title"
                  :class="[{'is_hide': hideTitle}]"
                >
                  <slot name="modal_header">
                    {{ props.title }}
                  </slot>
                </h3>
                <slot name="modal_header_right" />
              </template>
              <template v-else>
                <slot name="modal_header_top_cont" />
                <h3
                  :id="`${randomString}Title`"
                  class="modal_title"
                >
                  <slot name="modal_header">
                    {{ props.title }}
                  </slot>
                </h3>
                <button
                  type="button"
                  class="modal_header_right_btn"
                >
                  <slot name="modal_header_right_btn" />
                </button>
                <button
                  v-if="type == 'bottom' && !hideHeader && !dragBar && !hideCloseBtn"
                  type="button"
                  class="btn_close close_right"
                  aria-label="팝업 닫기"
                  @click="closeModal"
                >
                  <uu-ic
                    name="close"
                    size="24"
                  />
                </button>
              </template>
            </div>
            <div
              :id="`${randomString}Desc`"
              class="modal_body"
              :class="{'full_content':fullContent, 'bg_gray010':hasBg}"
            >
              <slot v-if="$slots.default">
                modal-body
              </slot>
              <slot
                v-else
                name="modal_body"
              >
                modal-body
              </slot>
            </div>
            <div
              v-if="!hideFooter"
              class="modal_footer"
              :class="{'round_footer':roundFooter}"
            >
              <slot name="modal_footer_content" />
              <div class="btn_area">
                <slot
                  name="modal_footer"
                  :close="closeModal"
                  :ok="okModal"
                >
                  <uu-button
                    btn-style="line"
                    size="lg"
                    label="취소"
                    @click="closeModal"
                  />
                  <uu-button
                    btn-color="primary"
                    size="lg"
                    label="확인"
                    @click="okModal"
                  />
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style></style>