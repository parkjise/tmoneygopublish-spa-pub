<script setup lang="ts">
import { reactive, ref } from 'vue'
import uuProgressbar  from '@/components/uu-components/UuProgressbar.vue'
import Prism  from '@/components/uu-components/Prism.vue'

interface wholeStepInterface {
  order:Number;
  done: boolean;
  active: boolean;
}
const wholeStep:wholeStepInterface[] = [
  {order:1,done:false,active:true},
  {order:2,done:false,active:false},
  {order:3,done:false,active:false},
  {order:4,done:false,active:false},
  {order:5,done:false,active:false},
]

const wholeStepClone:wholeStepInterface[] = reactive(JSON.parse(JSON.stringify(wholeStep)));

// progressbar 증감 예시 버튼
const value = ref(40);
const plusValue = () => {
  if (value.value >= 100) return false;
  value.value += 10;
}
const minusValue = () => {
  if (value.value <= 0) return false;
  value.value -= 10;
}

// step 예시 버튼
const activeStep = ref(0);
const nextStep = () => {
  if(activeStep.value >= wholeStepClone.length-1) return false;
  activeStep.value += 1;
  wholeStepClone.forEach(el => {
    el.active = false;
  });
  wholeStepClone[activeStep.value-1].done = true;
  wholeStepClone[activeStep.value].active = true;
}
const prevStep = () => {
  if(activeStep.value <= 0) return false;
  activeStep.value -= 1;
  wholeStepClone.forEach(el => {
    el.active = false;
  });
  wholeStepClone[activeStep.value].done = false;
  wholeStepClone[activeStep.value].active = true;
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
      <!-- Progressbar -->
      <uuProgressbar :value="value" />
      <button
        class="ex-btn"
        type="button"
        @click="minusValue"
      >
        - 10
      </button>
      <button
        class="ex-btn"
        type="button"
        @click="plusValue"
      >
        + 10
      </button>
      <!-- // Progressbar -->
      <Prism
        html
      >
        {{ `
          <uuProgressbar :value="value"></uuProgressbar>
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        step
      </h4>
      <!-- Progressbar -->
      <uuProgressbar 
        type="step"
        :whole-step="wholeStepClone"
      />
      <button
        class="ex-btn"
        type="button"
        @click="prevStep"
      >
        prev step
      </button>
      <button
        class="ex-btn"
        type="button"
        @click="nextStep"
      >
        next step
      </button>
      <!-- // Progressbar -->
      <Prism
        html
      >
        {{ `
          <uuProgressbar 
            type="step"
            :whole-step="wholeStepClone"
          />
          </uuProgressbar>
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
        import uuProgressbar  from '@/components/uu-components/uuProgressbar.vue'
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
          type : {
            type: String as PropType<progressType>,
            default : "progressbar",
          },
          value : {
            type: Number,
            default: 50
          },
          wholeStep : {
            type: Array as PropType<Array<wholeStepType>>,
            default: () => []
          }
        })
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
        <uuProgressbar :value="값"></uuProgressbar>
      ` }}
    </Prism>
  </section>
</template>

<style scoped lang="scss">
.ex-btn {
  padding: 0.2rem 0.4rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.6rem;
  & ~ .ex-btn {
    margin-left: 0.4rem;
  }
}
</style>