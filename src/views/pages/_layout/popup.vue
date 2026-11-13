<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'

const modal01 = ref(true)

</script>
<template>
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="alert"
    title="Header"
  >
    <template #modal-body>
      Slot Modal Body
    </template>
    <template #modal-footer="btnActions">
      <uu-button
        btn-style="line"
        size="lg"
        label="취소"
        @click="btnActions.close"
      />
      <uu-button
        btn-color="primary"
        size="lg"
        label="확인"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>