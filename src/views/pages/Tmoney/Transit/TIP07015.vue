<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model
const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="예매 취소 완료 팝업"
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
      취소 완료
    </template>
    <template #modal_body>
      예매 취소가 완료되었습니다.
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

  <!-- Modal Activator -->
  <uu-button
    label="100% 예매 취소 완료 팝업"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal02"
    @click="modal02Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- Modal -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="alert"
  >
    <template #modal_header>
      취소 완료
    </template>
    <template #modal_body>
      예매 취소가 완료되었습니다. 예매 취소 후 카드 환불까지 3~5영업일 소요될 수 있습니다.
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