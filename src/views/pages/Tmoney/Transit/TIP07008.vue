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
    label="영수증 저장 팝업"
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
      알림
    </template>
    <template #modal_body>
      영수증을 갤러리에 저장하시겠습니까?
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
      알림
    </template>
    <template #modal_body>
      갤러리에 저장 되었습니다.
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