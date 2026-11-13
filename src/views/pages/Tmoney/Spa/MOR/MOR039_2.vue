<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuDatePicker from '@/components/uu-components/UuDatePicker.vue'
import type { ChangedEvent } from '@egjs/vue3-flicking';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

const handleChange = (e: ChangedEvent, data: number) => {
  console.log(e)
  console.log(`selected: ${data}`)
}
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="조회 기준 선택"
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
  >
    <template #modal_header>
      날짜 선택
    </template>
    <template #modal_body>
      <uu-date-picker
        :data="[
          [2024,2025,2026,2027,2028,2029,2030],
          [1,2,3,4,5,6,7,8,9,10,11,12],
          [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        ]"
        :default-index="[3,2,10]"
        @date-change="(e, data) => handleChange(e, data)"
      />
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="선택"
        size="xl"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>