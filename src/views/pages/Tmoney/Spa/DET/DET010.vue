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
    label="즐겨찾기 추가 팝업"
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
      즐겨찾기 추가
    </template>
    <template #modal_body>
      이 경로를 즐겨찾는 택시 탭에 추가<br>
      하시겠습니까? 이용하신 택시 유형 및 <br>
      결제수단까지 함께 저장됩니다.
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
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>