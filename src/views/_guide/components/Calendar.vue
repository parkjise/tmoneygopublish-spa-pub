<script setup lang="ts">
import Prism from '@/components/uu-components/Prism.vue'
import uuCalendar from '@/components/uu-components/UuCalendar.vue'

const handleChange = (year: number, month: number) => {
  console.log(`year: ${year}년`)
  console.log(`month: ${month}월`)
}

const selectDate = (date: number | number[]) => {
  console.log(date)
}

const highlightedDates = [new Date('2024-04-04'), new Date('2024-04-11')];

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
      <!-- Calendar -->
      <uu-calendar
        :highlighted-dates="highlightedDates"
        @day-change="(year,month) => handleChange(year,month)"
        @select-date="date => selectDate(date)"
      />
      <!-- // Calendar -->
      <Prism html>
        {{ `
      <uu-calendar
        @day-change="(year,month) => handleChange(year,month)"
        @select-date="date => selectDate(date)"
      />
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Multi-Dates
      </h4>
      <!-- Calendar -->
      <uu-calendar
        :multi-dates="true"
        @day-change="(year,month) => handleChange(year,month)"
        @select-date="date => selectDate(date)"
      />
      <!-- // Calendar -->
      <Prism html>
        {{ `
      <uu-calendar
        :multi-dates="true"
        @day-change="(year,month) => handleChange(year,month)"
        @select-date="date => selectDate(date)"
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
      import uuCalendar  from '@/components/uu-components/Calendar.vue'
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
        multiDates: {
          type: Boolean,
          default: false
        }
      })
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Emits
    </h3>
    <Prism script>
      {{ `
      // uuCalendar
      const emits = defineEmits(['dayChange', 'selectDate'])
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
      <!-- Calendar -->
        <uu-calenar
          @day-change="(year, month) => handleChange(year,month)"
          @select-date="date => selectDate(date)"
        />
      <!-- // Calendar -->
      ` }}
    </Prism>
  </section>
</template>

<style scoped>
</style>