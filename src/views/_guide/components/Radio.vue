<script setup lang="ts">
import { ref } from 'vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'
import Prism  from '@/components/uu-components/Prism.vue'

// radio
const radio01 = ref('checked') // Default checked
const radio02 = ref(1) // Default checked
const radioGroup = ref([
  { label: 'Radio01', modelValue: radio02},
  { label: 'Radio02', modelValue: radio02},
  { label: 'Radio03', modelValue: radio02, disabled: true },
])
function changeEvent(value : string | number){
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
      <!-- Radio -->
      <form>
        <uuFieldset hide-legend>
          <uu-radio
            v-model="radio01"
            label="unchecked"
            value="unchecked"
            @change="changeEvent"
          />
          <uu-radio
            v-model="radio01"
            label="checked"
            value="checked"
            @change="changeEvent"
          />
          <uu-radio
            v-model="radio01"
            label="disabled"
            value="disabled"
            :disabled="true"
            @change="changeEvent"
          />
        </uuFieldset>
      </form>
      <!-- // Radio -->
      <Prism script>
        {{ `
          const radio01 = ref('checked') // Default checked
          function changeEvent(value : string | number){
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- Radio -->
        <form>
          <uu-radio
            v-model="radio01"
            label="unchecked"
            value="unchecked"
            @change="changeEvent"
          />
          <uu-radio
            v-model="radio01"
            label="checked"
            value="checked"
            @change="changeEvent"
          />
          <uu-radio
            v-model="radio01"
            label="disabled"
            value="disabled"
            :disabled="true"
            @change="changeEvent"
          />
        </form>
        <!-- // Radio -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        v-for
      </h4>
      <!-- v-for Radio -->
      <form>
        <uu-fieldset hide-legend>
          <uu-radio
            v-for="(item, index) in radioGroup"
            :key="index"
            v-model="item.modelValue"
            :label="item.label"
            :value="index"
            :disabled="item.disabled"
            @change="changeEvent"
          />
        </uu-fieldset>
      </form>
      <!-- // v-for Radio -->
      <Prism script>
        {{ `
          const radio02 = ref(1) // Default checked
          const radioGroup = ref([
            { label: 'Radio01', modelValue: radio02},
            { label: 'Radio02', modelValue: radio02},
            { label: 'Radio03', modelValue: radio02, disabled: true },
          ])
          function changeEvent(value : string | number){
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- v-for Radio -->
        <form>
          <uu-fieldset hide-legend>
            <uu-radio
              v-for="(item, index) in radioGroup"
              :key="index"
              v-model="item.modelValue"
              :label="item.label"
              :value="index"
              :disabled="item.disabled"
              @change="changeEvent"
            />
          </uu-fieldset>
        </form>
        <!-- // v-for Radio -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Inline
      </h4>
      <!-- Inline Radio -->
      <form>
        <uuFieldset hide-legend>
          <uu-radio
            v-model="radio01"
            label="unchecked"
            value="unchecked"
            inline
            @change="changeEvent"
          />
          <uu-radio
            v-model="radio01"
            label="checked"
            value="checked"
            inline
            @change="changeEvent"
          />
          <uu-radio
            v-model="radio01"
            label="disabled"
            value="disabled"
            inline
            :disabled="true"
            @change="changeEvent"
          />
        </uuFieldset>
      </form>
      <!-- // Inline Radio -->
      <Prism html>
        {{ `
        <!-- Inline Radio -->
        <form>
          <uuFieldset hide-legend>
            <uu-radio
              v-model="radio01"
              label="unchecked"
              value="unchecked"
              inline
              @change="changeEvent"
            />
            <uu-radio
              v-model="radio01"
              label="checked"
              value="checked"
              inline
              @change="changeEvent"
            />
            <uu-radio
              v-model="radio01"
              label="disabled"
              value="disabled"
              inline
              :disabled="true"
              @change="changeEvent"
            />
          </uuFieldset>
        </form>
        <!-- // Inline Radio -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Button
      </h4>
      <!-- Button Radio -->
      <form>
        <uu-fieldset
          legend="회원 유형 선택"
          hide-legend
          class="form_radio_btn_wrap"
        >
          <uu-radio
            v-model="radio01"
            value="general"
            @change="changeEvent"
          >
            <strong class="label">옵션 1</strong>
            <span class="text">옵션 1 내용</span>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="expert"
            @change="changeEvent"
          >
            <strong class="label">옵션 2</strong>
            <span class="text">옵션 2 내용</span>
          </uu-radio>
        </uu-fieldset>
      </form>
      <!-- // Button Radio -->
      <Prism html>
        {{ `
        <!-- Button Radio -->
        <form>
          <uu-fieldset
            legend="회원 유형 선택"
            hide-legend
            class="form-radio-btn-wrap"
          >
            <uu-radio
              v-model="radio01"
              value="general"
              @change="changeEvent"
            >
              <strong class="label">일반 회원</strong>
              <span class="text">도움이 필요해요!</span>
            </uu-radio>
            <uu-radio
              v-model="radio01"
              value="expert"
              @change="changeEvent"
            >
              <strong class="label">전문가</strong>
              <span class="text">일하고 싶어요!</span>
            </uu-radio>
          </uu-fieldset>
        </form>
        <!-- // Button Radio -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        dropdown
      </h4>
      <!-- Button Radio -->
      <form>
        <uu-fieldset
          legend="옵션 선택"
          hide-legend
        >
          <uu-radio
            v-model="radio01"
            value="general"
            dropdown-radio
            @change="changeEvent"
          >
            <strong class="label">옵션 1</strong>
            <span class="text">옵션 1 내용옵션 1 내용옵션 1 내용옵션 1 내용옵션 1 내용</span>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="expert"
            dropdown-radio
            @change="changeEvent"
          >
            <strong class="label">옵션 2</strong>
            <span class="text">옵션 2 내용</span>
          </uu-radio>
        </uu-fieldset>
      </form>
      <!-- // Button Radio -->
      <Prism html>
        {{ `
        <!-- Button Radio -->
        <form>
          <uu-fieldset
            legend="회원 유형 선택"
            hide-legend
            class="form-radio-btn-wrap"
          >
            <uu-radio
              v-model="radio01"
              value="general"
              @change="changeEvent"
            >
              <strong class="label">일반 회원</strong>
              <span class="text">도움이 필요해요!</span>
            </uu-radio>
            <uu-radio
              v-model="radio01"
              value="expert"
              @change="changeEvent"
            >
              <strong class="label">전문가</strong>
              <span class="text">일하고 싶어요!</span>
            </uu-radio>
          </uu-fieldset>
        </form>
        <!-- // Button Radio -->
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
      import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
      import uuRadio  from '@/components/uu-components/UuRadio.vue'
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
            type: [String, Number],
            default: ''
          },
          label: {
            type: String,
            default: 'Label'
          },
          name: {
            type: String,
            default: 'Name'
          },
          disabled: {
            type: Boolean,
            default: false
          },
          hideLabel: {
            type: Boolean,
            default: false
          },
          inline: {
            type: Boolean,
            default: false
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
        const emit = defineEmits(['update:modelValue', 'change'])
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
        // Radio Default Value
        const radio01 = ref('valueName')

        // Radio Change Value
        function changeEvent(value : string | number){
          console.log(value)
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
        <!-- Radio -->
        <form>
          <uu-fieldset legend="라디오">
            <uu-radio
              v-model="modelName"
              label="label"
              value="radio01"
              @change="changeEvent"
            />
            <uu-radio
              v-model="modelName"
              value="radio02"
              @change="changeEvent"
            >
              label
            </uu-radio>
          </uu-fieldset>
        </form>
        <!-- // Radio -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>