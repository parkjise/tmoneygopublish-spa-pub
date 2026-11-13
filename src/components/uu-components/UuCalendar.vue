<script setup lang="ts">
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps({
  multiDates: {
    type: Boolean,
    default: false
  },
  highlightedDates : {
    type: Array<Date>,
    default: [new Date()]
  },
  showPrice : {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['dayChange','selectDate'])

const handleDate = (year: number, month: number) => {
  emits('dayChange',year,month)
}

const selectDate = (date: Date | Date[]) => {
  emits('selectDate', date)
}

const date = ref();

</script>

<template>
  <VueDatePicker
    v-model="date"
    class="cal"
    :locale="'ko-KR'"
    :inline="true"
    :enable-time-picker="false"
    :hide-offset-dates="true"
    :week-start="0"
    :month-change-on-scroll="false"
    :no-today="true"
    :highlight="{ dates: highlightedDates }"
    :multi-dates="props.multiDates ? props.multiDates : false"
    @internal-model-change="(date:Date) => selectDate(date)"
  >
    <template 
      #month-year="{
        month,
        year,
        handleMonthYearChange
      }"
    >
      <span 
        class="custom_ic ic_left" 
        @click="handleMonthYearChange(false)"
      >
        <i
          class="ic ic_24_arrow"
          :aria-hidden="true"
        />
      </span>
      <button
        type="button"
        class="year_month"
        @click="handleDate(year, month + 1)"
      >
        {{ year }}.{{ (month + 1) < 10 ? '0' + (month + 1) : (month + 1) }}
      </button>
      <span 
        class="custom_ic ic_right" 
        @click="handleMonthYearChange(true)"
      >
        <i
          class="ic ic_24_arrow"
          :aria-hidden="true"
        />
      </span>
    </template>
    <template #month-year-wrap />
    <template #day="{ date: day }">
      <div class="day">
        <span class="date">{{ day.getDate() }}</span>
        <span
          v-if="showPrice"
          class="price"
        >39,700원</span>
      </div>
    </template>
    <template #action-row />
  </VueDatePicker>
</template>

<style scoped>
</style>