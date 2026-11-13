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
    label="당첨을 축하드립니다!"
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
    add-class="bef_modal"
    hide-overlay
  >
    <template #modal_header>
      당첨을 축하드립니다!
    </template>
    <template #modal_body>
      <p class="text_purple">
        하루 하루 출석 룰렛
      </p>
      <p>GO마일리지 적립 완료</p>
      <p class="point_area">
        <span class="mileage">1,000</span>
        <span>M</span>
      </p>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        size="md"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>