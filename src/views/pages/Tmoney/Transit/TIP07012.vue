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
    label="예매 취소 안내 팝업"
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
      예매 취소 안내
    </template>
    <template #modal_body>
      여행 상품 취소는 운영 여행사의 최종 승인 후 환불이 진행되며 업무 처리 절차에 의해 취소일로부터 영업일(주말, 공휴일 제외) 기준 3-5일 후 카드 취소 확인 가능합니다.
      <ol class="charge_notice_list">
        <li>(1) 예매 취소 일자 기준 취소 수수료 부과</li>
        <li>(2) 예매 일자와 취소 일자가 다른 경우</li>
        <li>(3) 취소 수수료가 부과되는 경우</li>
      </ol>
      예매 후 취소한 티켓의 최종 환불은 결제하신
      카드사를 통해 처리가 되므로 해당 카드사를
      통해 확인해 주시길 바라겠습니다.
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