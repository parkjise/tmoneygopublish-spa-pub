<script setup lang="ts">
import Prism from '@/components/uu-components/Prism.vue'
import uuDatePicker from '@/components/uu-components/UuDatePicker.vue'
import type { ChangedEvent } from '@egjs/vue3-flicking';

const handleChange = (e: ChangedEvent, data: number) => {
  console.log(e)
  console.log(`selected: ${data}`)
}
</script>

<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        DatePicker (Year-Month)
      </h4>
      <!-- DatePicker -->
      <uu-date-picker
        :data="[
          [2024,2025,2026,2027,2028,2029,2030],
          [1,2,3,4,5,6,7,8,9,10,11,12],
          [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        ]"
        @date-change="(e, data) => handleChange(e, data)"
      />
      <!-- // Calendar -->
      <Prism html>
        {{ `
      <uu-date-picker
        :data="[
          [2024,2025,2026,2027,2028,2029,2030],
          [1,2,3,4,5,6,7,8,9,10,11,12]
        ]"
        @date-change="(e, data) => handleChange(e, data)"
      />
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        TimePicker (Hour-Minute)
      </h4>
      <!-- DatePicker -->
      <uu-date-picker
        :data="[
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
          [0,10,20,30,40,50]
        ]"
        :type="'time'"
        @date-change="(e, data) => handleChange(e, data)"
      />
      <!-- // Calendar -->
      <Prism html>
        {{ `
      <uu-date-picker
        :data="[
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
          [0,10,20,30,40,50]
        ]"
        :type="'time'"
        @date-change="(e, data) => handleChange(e, data)"
      />
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
      import uuDatePicker  from '@/components/uu-components/DatePicker.vue'
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
      // uuCalendar
      const props = defineProps({
        type: {
          type: String as PropType<dateType>,
          default: 'year',
        },
        data: {
          type: Array<number[]>,
          default: []
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
      <!-- DatePicker -->
        <uu-date-picker
          :data="[
            [2024,2025,2026,2027,2028,2029,2030],
            [1,2,3,4,5,6,7,8,9,10,11,12]
          ]"
          @date-change="(e, data) => handleChange(e, data)"
        />
      <!-- // DatePicker -->
      ` }}
    </Prism>
  </section>
</template>

<style scoped>
</style>