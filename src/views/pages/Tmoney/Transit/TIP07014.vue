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
    label="예약 취소 완료 팝업"
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
    type="alert"
  >
    <template #modal_header>
      취소 접수 완료
    </template>
    <template #modal_body>
      취소 접수가 완료되었습니다. 본 상품은 판매처에서 확인 후 취소 및 환불이 진행될 예정입니다.
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>