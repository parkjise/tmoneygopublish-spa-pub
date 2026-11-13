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
    label="참여 완료"
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
      참여 완료
    </template>
    <template #modal_body>
      <p class="text_purple">
        하루 하루 출석 룰렛
      </p>
      <p>
        오늘 참여 기회는 끝~! <br>
        내일 다시 참여바랍니다
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