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
    label="비밀번호 입력 5회 실패"
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
    add-class="det_modal"
    hide-overlay
  >
    <template #modal_header>
      결제 비밀번호 입력을 5회<br>
      실패하였습니다.
    </template>
    <template #modal_body>
      <p>
        본인인증 후 다시 설정이 가능합니다.
      </p>
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