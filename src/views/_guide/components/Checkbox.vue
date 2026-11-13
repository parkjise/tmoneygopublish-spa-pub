<script setup lang="ts">
import { ref } from 'vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuCheckbox  from '@/components/uu-components/UuCheckbox.vue'
import Prism  from '@/components/uu-components/Prism.vue'

// checkbox
const checkbox01 = ref(['check02']) // Array Default Value
const checkbox02 = ref([0]) // v-for Array Default Value
const checkboxGroup = ref([ // v-for
  { label: 'v-for Checkbox01', value: 0 },
  { label: 'v-for Checkbox02', value: 1, modelValue: true}, // v-for Boolean Default Value
  { label: 'v-for Checkbox03', value: 2, disabled: true},
])
const btncheckGroup = ref([
  { label: '전체', value: 0 },
  { label: '결혼식 사회자', value: 1 },
  { label: '아나운서', value: 2, modelValue: true },
  { label: '강사&강연', value: 3 },
  { label: '개그맨', value: 4, modelValue: true },
])
function changeEvent(value : string | boolean | []){
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
        Boolean
      </h4>
      <!-- Checkbox -->
      <form>
        <uu-checkbox
          label="unchecked"
          value="unchecked"
          @change="changeEvent"
        />
        <uu-checkbox
          label="checked"
          value="checked"
          :model-value="true"
          @change="changeEvent"
        />
        <uu-checkbox
          label="disabled"
          value="disabled"
          :disabled="true"
          @change="changeEvent"
        />
      </form>
      <!-- // Checkbox -->
      <Prism script>
        {{ `
          function changeEvent(value : string | boolean | []){
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- Checkbox -->
        <form>
          <uu-checkbox
            label="unchecked"
            value="unchecked"
            @change="changeEvent"
          />
          <uu-checkbox
            label="checked"
            value="checked"
            :model-value="true"
            @change="changeEvent"
          />
          <uu-checkbox
            label="disabled"
            value="disabled"
            :disabled="true"
            @change="changeEvent"
          />
        </form>
        <!-- // Checkbox -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Array
      </h4>
      <!-- Array Checkbox -->
      <form>
        <uu-fieldset hide-legend>
          <uu-checkbox
            v-model="checkbox01"
            label="Array Checkbox01"
            value="check01"
            @change="changeEvent"
          />
          <uu-checkbox
            v-model="checkbox01"
            label="Array Checkbox02"
            value="check02"
            @change="changeEvent"
          />
          <uu-checkbox
            v-model="checkbox01"
            label="Array Checkbox03"
            value="check03"
            @change="changeEvent"
          />
        </uu-fieldset>
      </form>
      <!-- // Array Checkbox -->
      <Prism script>
        {{ `
          const checkbox01 = ref(['check02']) // Array Default Value
          function changeEvent(value : string | boolean | []){
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- Array Checkbox -->
        <form>
          <uu-fieldset hide-legend>
            <uu-checkbox
              v-model="checkbox01"
              label="check01"
              value="check01"
              @change="changeEvent"
            />
            <uu-checkbox
              v-model="checkbox01"
              label="check02"
              value="check02"
              @change="changeEvent"
            />
            <uu-checkbox
              v-model="checkbox01"
              label="check03"
              value="check03"
              @change="changeEvent"
            />
          </uu-fieldset>
        </form>
        <!-- // Array Checkbox -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        v-for
      </h4>
      <!-- v-for Checkbox -->
      <form>
        <uu-fieldset legend="Boolean">
          <uu-checkbox
            v-for="(item, index) in checkboxGroup"
            :key="index"
            v-model="item.modelValue"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            @change="changeEvent"
          />
        </uu-fieldset>
        <br>
        <uu-fieldset legend="Array">
          <uu-checkbox
            v-for="(item, index) in checkboxGroup"
            :key="index"
            v-model="checkbox02"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
            @change="changeEvent"
          />
        </uu-fieldset>
      </form>
      <!-- // v-for Checkbox -->
      <Prism script>
        {{ `
          const checkbox02 = ref([0]) // v-for Array Default Value
          const checkboxGroup = ref([ // v-for
            { label: 'v-for Checkbox01', value: 0 },
            { label: 'v-for Checkbox02', value: 1, modelValue: true}, // v-for Boolean Default Value
            { label: 'v-for Checkbox03', value: 2, disabled: true},
          ])
          function changeEvent(value : string | boolean | []){
            console.log(value)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- v-for Checkbox -->
        <form>
          <uu-fieldset legend="Boolean">
            <uu-checkbox
              v-for="(item, index) in checkboxGroup"
              :key="index"
              v-model="item.modelValue"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
              @change="changeEvent"
            />
          </uu-fieldset>
          <uu-fieldset legend="Array">
            <uu-checkbox
              v-for="(item, index) in checkboxGroup"
              :key="index"
              v-model="checkbox02"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
              @change="changeEvent"
            />
          </uu-fieldset>
        </form>
        <!-- // v-for Checkbox -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Inline
      </h4>
      <!-- Inline Checkbox -->
      <form>
        <uu-fieldset hide-legend>
          <uu-checkbox
            v-model="checkbox01"
            label="Array Checkbox01"
            value="check01"
            inline
            @change="changeEvent"
          />
          <uu-checkbox
            v-model="checkbox01"
            label="Array Checkbox02"
            value="check02"
            inline
            @change="changeEvent"
          />
          <uu-checkbox
            v-model="checkbox01"
            label="Array Checkbox03"
            value="check03"
            inline
            @change="changeEvent"
          />
        </uu-fieldset>
      </form>
      <!-- // Inline Checkbox -->
      <Prism html>
        {{ `
        <!-- Inline Checkbox -->
        <form>
          <uu-fieldset hide-legend>
            <uu-checkbox
              v-model="checkbox01"
              label="Array Checkbox01"
              value="check01"
              inline
              @change="changeEvent"
            />
            <uu-checkbox
              v-model="checkbox01"
              label="Array Checkbox02"
              value="check02"
              inline
              @change="changeEvent"
            />
            <uu-checkbox
              v-model="checkbox01"
              label="Array Checkbox03"
              value="check03"
              inline
              @change="changeEvent"
            />
          </uu-fieldset>
        </form>
        <!-- // Inline Checkbox -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        CheckLine
      </h4>
      <form>
        <uu-checkbox
          label="unchecked"
          value="unchecked"
          checkline
          @change="changeEvent"
        />
        <uu-checkbox
          label="checked"
          value="checked"
          checkline
          :model-value="true"
          @change="changeEvent"
        />
      </form>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Toggle
      </h4>
      <form>
        <uu-checkbox
          label="Toggle"
          value="unchecked"
          toggle-switch
          @change="changeEvent"
        />
      </form>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        button
      </h4>
      <form class="form_check_btn_wrap">
        <uu-checkbox
          v-for="(item, index) in btncheckGroup"
          :key="index"
          v-model="item.modelValue"
          :label="item.label"
          :value="item.value"
          check-btn
          @change="changeEvent"
        />
      </form>
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
      import uuCheckbox  from '@/components/uu-components/UuCheckbox.vue'
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
            type: [Boolean, String, Number, Array as () => Array<string | number>],
            default: false
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
        // Checkbox Default Value
        const checkbox01 = ref(['valueName'])

        // Checkbox Change Value
        function changeEvent(value : string | boolean | []){
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
        <!-- Checkbox -->
        <form>
          <uu-fieldset legend="체크박스">
            <uu-checkbox
              v-model="modelName"
              label="label"
              value="check01"
              @change="changeEvent"
            />
            <uu-checkbox
              v-model="modelName"
              value="check02"
              @change="changeEvent"
            >
              label
            </uu-checkbox>
          </uu-fieldset>
        </form>
        <!-- // Checkbox -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>