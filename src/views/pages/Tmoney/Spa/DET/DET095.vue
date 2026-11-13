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
    label="법인이름확인"
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
      법인카드에 본인 이름이 있나요?
    </template>
    <template #modal_body>
      <p>
        본인 이름이 있으면 법인개별카드입니다.<br>
        본인 이름이 없으면 법인공용카드로 구분됩니다.
      </p>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
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