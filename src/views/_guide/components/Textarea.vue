<script setup lang="ts">
import { ref } from 'vue'
import uuTextarea from '@/components/uu-components/UuTextarea.vue'
import Prism  from '@/components/uu-components/Prism.vue'

// textarea
const textarea01 = ref('') // v-model
const changeEvent = (value: string) => {
  console.log(value)
}

</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        Default
      </h4>
      <!-- textarea -->
      <form>
        <uuTextarea
          v-model="textarea01"
          label="basic"
          placeholder="텍스트를 입력해주세요."
          @input="changeEvent"
        />
      </form>
      <!-- // textarea -->
      <Prism script>
        {{ `
          const textarea01 = ref('') // v-model
          const changeEvent = (value: string) => {
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
          <!-- textarea -->
          <form>
            <uuTextarea
              v-model="textarea01"
              label="basic"
              placeholder="텍스트를 입력해주세요."
              @input="changeEvent"
            />
          </form>
          <!-- // textarea -->
      ` }}
      </Prism>
    </article>
  </section>
  <section class="section">
    <h3 class="section-title">
      Components
    </h3>
    <Prism
      script
      show
    >
      {{ `
        import uuTextarea from '@/components/uu-components/uuTextarea.vue'
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
        const props = defineProps({
          /**
           * Input Value
           */
          modelValue: {
            type: String,
            default: '',
          },
          value: {
            type: String,
            default: ''
          },
          /**
           * Input Label
           */
          label: {
            type: String,
            default: 'Label',
            require: true
          },
          /**
           * Hidden Label
           */
          hideLabel: {
            type: Boolean,
            default: false
          },
          /**
           * Input Disabled
           */
          disabled: {
            type: Boolean,
            default: false
          },
          /**
           * Input Readonly
           */
          readonly: {
            type: Boolean,
            default: false
          },
          /**
           * Input Placeholder
           */
          placeholder: {
            type: String,
            default: '텍스트를 입력해주세요.',
            require: true
          },
          /**
           * Input number type 에서의 min 값
           */
          min: {
            type: Number,
            default: 0
          },
          /**
           * Input number type 에서의 max 값
           */
          max: {
            type: Number,
            default: 10000
          },
          /**
           * Input의 최소 글자 수
           */
          minLength: {
            type: Number,
            default: 1
          },
          /**
           * Input의 최대 글자 수
           */
          maxLength: {
            type: Number,
            default: 10000
          },
          /**
           * Input의 최소 글자 수 유무
           */
          hasMinLength: {
            type: Boolean,
            default: false
          },
          /**
           * Input의 자동완성 유무
           */
          autocomplete: {
            type: Boolean,
            default: false
          },
          /**
           * Input Focus
           */
          autofocus: {
            type: Boolean,
            default: false
          },
          required: {
            type: Boolean,
            default: false
          },

          /**
           * Input Clear Button
           */
          btnClear: {
            type: Boolean,
            default: false
          },
          /**
           * Button의 유무
           */
          hasBtn: {
            type: Boolean,
            default: false
          },
          /**
           * countDown의 유무
           */
          countDown: {
            type: Boolean,
            default: false
          },
        })
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Emit
    </h3>
    <Prism script>
      {{ `
        const emit = defineEmits(['update:modelValue', 'update:error', 'input', 'change', 'blur', 'keyup', 'keydown', 'keypress', 'focus', 'valid'])
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>