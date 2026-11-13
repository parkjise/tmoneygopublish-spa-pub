<script setup lang="ts">
import { ref } from 'vue'
import uuInputRange from '@/components/uu-components/UuInputRange.vue'
import Prism  from '@/components/uu-components/Prism.vue'

const sliderMin = ref(50);
const sliderMax = ref(80);
const sliderMin2 = ref(50);
const sliderMax2 = ref(80);
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
        <uuInputRange
          v-model:min-value="sliderMin"
          v-model:max-value="sliderMax"
          :max="100"
          :step="2"
          :unit="'mm'"
          label="double range"
        />
        <uuInputRange
          v-model:min-value="sliderMin2"
          v-model:max-value="sliderMax2"
          :max="100"
          label="hide range"
          hide-result
        />
      </form>
      <!-- // input -->
      <Prism script>
        {{ `
          const sliderMin = ref(50);
          const sliderMax = ref(80);
          const sliderMin2 = ref(50);
          const sliderMax2 = ref(80);
        ` }}
      </Prism>
      <Prism html>
        {{ `
          <!-- input -->
          <form>
            <uuInputRange
              v-model:min-value="sliderMin"
              v-model:max-value="sliderMax"
              :max="100"
              :step="2"
              label="double range"
            />
            <uuInputRange
              v-model:min-value="sliderMin2"
              v-model:max-value="sliderMax2"
              :max="100"
              label="hide range"
              hide-result
            />
          </form>
          <!-- // input -->
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
      import uuInputRange from '@/components/uu-components/UuInputRange.vue'
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
        const { min, max, step, minValue, maxValue } = defineProps({
          min: {
            type: Number,
            default: 0,
          },
          max: {
            type: Number,
            default: 1000,
          },
          step: {
            type: Number,
            default: 1,
          },
          minValue: {
            type: Number,
            default: 50,
          },
          maxValue: {
            type: Number,
            default: 80,
          },
          label: {
            type: String,
            default: 'Label',
            require: true
          },
          hideLabel: {
            type: Boolean,
            default: false
          },
          hideResult: {
            type: Boolean,
            defualt: false
          },
          unit: {
            type: String,
            default: 'inch'
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
        const emit = defineEmits(["update:minValue", "update:maxValue"])
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
        const sliderMin = ref(50);
        const sliderMax = ref(80);
        const sliderMin2 = ref(50);
        const sliderMax2 = ref(80);
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
          <uuInputRange
            v-model:min-value="sliderMin"
            v-model:max-value="sliderMax"
            :max="100"
            :step="2"
            :unit="'mm'"
            label="double range"
          />
        </form>
        <!-- // input -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>