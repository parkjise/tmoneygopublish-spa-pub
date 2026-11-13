<script setup lang="ts">
import { ref } from 'vue'
// import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
// import uuButton from '@/components/uu-components/UuButton.vue'
import uuInput, {type inputType} from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import Prism  from '@/components/uu-components/Prism.vue'

// input
const input01 = ref('') // v-model
const input02 = ref('10,000')
// const inputGroup = ref([
//   { 
//     modelValue: '', 
//     type: 'text' as inputType, 
//     label: 'ID', 
//     placeholder: '아이디는 6자 이상 입력',
//     minLength: 6,
//     maxLength: 50,
//     pattern: '^([a-z0-9_]){6,50}$',
//     required: true,
//     error: false, 
//     errorMessage: '아이디를 영문소문자, 영문+숫자로 6자이상 입력해주세요.'
//   },
//   { 
//     modelValue: '', 
//     type: 'password' as inputType, 
//     label: 'Password', 
//     placeholder: '비밀번호 입력',
//     minLength: 8,
//     // pattern: '^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$',
//     validation: 'password' as validType,
//     error: false, 
//     errorMessage: '비밀번호는 영문+숫자+특수기호 8자리 이상 입력해주세요.'
//   },
//   { 
//     modelValue: '010', 
//     type: 'tel' as inputType, 
//     label: '휴대폰번호', 
//     placeholder: '휴대폰번호 입력', 
//     // pattern: '[0-9]{11}',
//     validation: 'phoneNumber' as validType,
//     maxLength: 11,
//     error: false, 
//     errorMessage: '휴대폰번호를 올바르게 입력해주세요.' 
//   }
// ])
const inlineGroup = ref([
  { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  },
  { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  },
  { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  },
    { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  }
])
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
      <!-- input -->
      <form>
        <uu-input
          v-model="input01"
          label="basic"
          placeholder="텍스트를 입력해주세요."
          @input="changeEvent"
        />
        <uu-input
          v-model="input01"
          label="ic"
          placeholder="텍스트를 입력해주세요."
          has-ic
          @input="changeEvent"
        >
          <template #ic_name>
            <uuIc v-bind="{name:'location',size:'20'}" />
          </template>
        </uu-input>
        <uu-input
          v-model="input01"
          label="btn-clear"
          placeholder="텍스트를 입력해주세요."
          btn-clear
          @input="changeEvent"
        />
        <uu-input
          v-model="input01"
          label="disabled"
          placeholder="텍스트를 입력해주세요."
          disabled
          @input="changeEvent"
        />
        <uu-input
          v-model="input01"
          label="readonly"
          placeholder="텍스트를 입력해주세요."
          readonly
          @input="changeEvent"
        />
        <uu-input
          v-model="input01"
          label="command"
          placeholder="텍스트를 입력해주세요."
          command
          command-message="안내문구영역입니다."
          @input="changeEvent"
        />
        <uu-input
          v-model="input01"
          label="error"
          placeholder="텍스트를 입력해주세요."
          error
          error-message="에러 문구 영역입니다."
          @input="changeEvent"
        />
        <uu-input
          v-model="input02"
          class="price"
          label="금액 노출"
          @input="changeEvent"
        />
      </form>
      <!-- // input -->
      <Prism script>
        {{ `
          const input01 = ref('')
          function changeEvent(value: string){
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- input -->
        <form>
          <uu-input
            v-model="input01"
            label="basic"
            placeholder="텍스트를 입력해주세요."
            @input="changeEvent"
          />
          <uu-input
            v-model="input01"
            label="btn-clear"
            placeholder="텍스트를 입력해주세요."
            btn-clear
            @input="changeEvent"
          />
          <uu-input
            v-model="input01"
            label="disabled"
            placeholder="텍스트를 입력해주세요."
            disabled
            @input="changeEvent"
          />
          <uu-input
            v-model="input01"
            label="readonly"
            placeholder="텍스트를 입력해주세요."
            readonly
            @input="changeEvent"
          />
          <uu-input
            v-model="input01"
            label="command"
            placeholder="텍스트를 입력해주세요."
            command
            command-message="안내문구영역입니다."
            @input="changeEvent"
          />
          <uu-input
            v-model="input01"
            label="error"
            placeholder="텍스트를 입력해주세요."
            error
            error-message="에러 문구 영역입니다."
            @input="changeEvent"
          />
          <uu-input
            v-model="input02"
            class="price"
            label="금액 노출"
            @input="changeEvent"
          />
        </form>
        <!-- // input -->
      ` }}
      </Prism>
    </article>
    <article>
      <h4 class="section-subtitle">
        Inline
      </h4>
      <!-- input -->
      <form class="inline_form_wrap">
        <uu-input
          v-for="(item, index) in inlineGroup"
          :key="index"
          v-model="input01"
          inline
          :placeholder="item.placeholder"
          :hide-label="item.hideLabel"
          :max-length="item.maxLength"
          :type="item.type"
          @input="changeEvent"
        />
      </form>
      <!-- // input -->
    </article>

    <!-- <article class="article">
      <h4 class="section-subtitle">
        input validation
      </h4>
      <form>
        <uu-fieldset
          legend="input validation"
          hide-legend
        >
          <uu-input
            v-for="(item, index) in inputGroup"
            :key="index"
            v-model="item.modelValue"
            v-model:error="item.error"
            :type="item.type"
            :label="item.label"
            :placeholder="item.placeholder"
            :error-message="item.errorMessage"
            :max-length="item.maxLength"
            :pattern="item.pattern"
            :validation="item.validation"
            @input="changeEvent"
          />
        </uu-fieldset>
      </form>
    </article> -->
    <!-- <Prism script>
      {{ `
      const inputGroup = ref([
        { 
          modelValue: '', 
          type: 'text' as inputType, 
          label: 'ID', 
          placeholder: '아이디는 6자 이상 입력',
          minLength: 6,
          maxLength: 50,
          pattern: '^([a-z0-9_]){6,50}$',
          required: true,
          error: false, 
          errorMessage: '아이디를 영문소문자, 영문+숫자로 6자이상 입력해주세요.'
        },
        { 
          modelValue: '', 
          type: 'password' as inputType, 
          label: 'Password', 
          placeholder: '비밀번호 입력',
          minLength: 8,
          // pattern: '^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$',
          validation: 'password' as validType,
          error: false, 
          errorMessage: '비밀번호는 영문+숫자+특수기호 8자리 이상 입력해주세요.'
        },
        { 
          modelValue: '010', 
          type: 'tel' as inputType, 
          label: '휴대폰번호', 
          placeholder: '휴대폰번호 입력', 
          // pattern: '[0-9]{11}',
          validation: 'phoneNumber' as validType,
          maxLength: 11,
          error: false, 
          errorMessage: '휴대폰번호를 올바르게 입력해주세요.' 
        }
      ])
      const changeEvent = (value: string) => {
        console.log(value)
      }
      ` }}
    </Prism>
    <Prism html>
      {{ `
        <form>
          <uu-fieldset
            legend="input validation"
            hide-legend
          >
            <uu-input
              v-for="(item, index) in inputGroup"
              :key="index"
              v-model="item.modelValue"
              v-model:error="item.error"
              :type="item.type"
              :label="item.label"
              :placeholder="item.placeholder"
              :error-message="item.errorMessage"
              :max-length="item.maxLength"
              :pattern="item.pattern"
              :validation="item.validation"
              @input="changeEvent"
            />
          </uu-fieldset>
        </form>
      ` }}
    </Prism> -->
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
      import uuinput  from '@/components/uu-components/input.vue'
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
          modelValue: {
            type: [String, Number],
            default: ''
          },
          value: {
            type: String,
            default: ''
          },
          type: {
            type: String,
            default: ''
          },
          label: {
            type: String,
            default: ''
          },
          hideLabel: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          },
          readonly: {
            type: Boolean,
            default: false
          },
          placeholder: {
            type: String,
            default: '텍스트를 입력해주세요.'
          },
          error : {
            type: Boolean,
            default: false
          },
          errorMessage: {
            type: String,
            default: '필수 입력 항목입니다.'
          },
          inline: {
            type: Boolean,
            default: false
          },
          min: {
            type: Number,
            default: 0
          },
          max: {
            type: Number,
            default: 1000
          },
          minLength: {
            type: Number,
            default: 0
          },
          maxLength: {
            type: Number,
            default: 1000
          },
          autocomplete: {
            type: Boolean,
            default: false
          },
          autofocus: {
            type: Boolean,
            default: false
          },
          required: {
            type: Boolean,
            default: false
          },
          pattern: {
            type: String,
            default: ''
          },
          size: {
            type: String as PropType<sizeType>,
            default: 'md'
          },
          btnClear: {
            type: Boolean,
            default: false
          },
          hasBtn: {
            type: Boolean,
            default: false
          },
          validation: {
            type: String as PropType<validType>,
            default: ''
          }
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
  <section class="section">
    <h3 class="section-title">
      Script
    </h3>
    <Prism
      script
      show
    >
      {{ `
        // input Name
        const inputName = ref('')

        // input Change Value
        function changeEvent(value: string){
          console.log(value)
        }
        // input Event
        function inputEvent(e: Event){
          console.log(e)
        }
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Basic Markup
    </h3>
    <Prism
      html
      show
    >
      {{ `
        <!-- input -->
        <form>
          <uu-input
            v-model="inputName"
            label="LabelText"
            placeholder="텍스트를 입력해주세요."
            @input="changeEvent"
          />
        </form>
        <!-- // input -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>