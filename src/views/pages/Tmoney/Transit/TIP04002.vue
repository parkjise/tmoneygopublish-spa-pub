<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuCalendar from '@/components/uu-components/UuCalendar.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

const handleChange = (year: number, month: number) => {
  console.log(`year: ${year}년`)
  console.log(`month: ${month}월`)
}

const selectDate = (date: number | number[]) => {
  console.log(date)
}

// 금액이 나올 날짜
const highlightedDates = [new Date('2024-04-04'), new Date('2024-04-11')];

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="출발지 선택 바텀시트"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-header
  >
    <template #modal_body>
      <!-- 가격 보이게 하기 위해서 showPrice 추가 -->
      <uu-calendar
        :highlighted-dates="highlightedDates"
        show-price
        @day-change="(year,month) => handleChange(year,month)"
        @select-date="date => selectDate(date)"
      />
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="선택완료"
        size="xl"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>