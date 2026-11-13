<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="마일리지 전환 완료"
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
    type="confirm"
    hide-overlay
  >
    <template #modal_header>
      마일리지 전환 완료
    </template>
    <template #modal_body>
      <ul class="mileage_complete">
        <li>
          <p>전환 일시</p>
          <p><span>2024.04.30 10:30</span></p>
        </li>
        <li>
          <p>전환 GO마일리지</p>
          <p><strong>10,000</strong>M</p>
        </li>
        <li>
          <p>잔여 GO마일리지</p>
          <p><strong>1,311</strong>M</p>
        </li>
        <li>
          <p>잔여 T마일리지</p>
          <p><strong>10,100</strong>M</p>
        </li>
      </ul>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>