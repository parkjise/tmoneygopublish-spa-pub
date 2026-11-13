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
    label="출석체크 혜택 유의사항"
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
      출석체크 혜택 유의사항
    </template>
    <template #modal_body>
      <ul>
        <li>
          누적 출석 체크 혜택은 출석일 달성 시 자동
          응모됩니다.
        </li>
        <li>
          GO마일리지 혜택 당첨 안내는 다음달 2일에
          진행됩니다.
        </li>
        <li>
          혜택 당첨 시, LMS 및 푸시 안내가 진행됩니다.
          (마케팅정보 미수신자의 경우 당첨자 선정에서
          제외됩니다.)
        </li>
        <li>
          지급된 혜택 마일리지는 발급일로부터 유효기간 1년입니다.
        </li>
      </ul>
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