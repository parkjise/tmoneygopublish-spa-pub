<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="예약 취소 팝업"
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
  >
    <template #modal_header>
      예매 취소
    </template>
    <template #modal_body>
      티머니GO는 통신판매 중개자로서 통신판매 당사자가 아니며, 예매 취소 시 상품 판매처 확인 후 환불이 진행됩니다.
      <br>
      <br>
      취소 하시겠습니까?
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-style="line"
        label="아니요"
        @click="btnActions.close"
      />
      <uu-button
        btn-color="primary"
        label="네"
        @click="[modal02Ref.showModal($event), btnActions.close()]"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->

  <!-- Modal -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
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