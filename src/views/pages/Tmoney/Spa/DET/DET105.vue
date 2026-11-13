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
    label="카드 정보가 유효하지 않습니다."
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
      카드 정보가 유효하지 않습니다.
    </template>
    <template #modal_body>
      <p>
        입력한 정보를 다시 확인해주세요.
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