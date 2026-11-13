<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="예약 유의사항 바텀시트"
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
    type="bottom"
    add-class="notice_bottom_sheet"
    hide-close-btn
  >
    <template #modal_header>
      <uuIc v-bind="{name:'exclamation',size:'48'}" />
      예약 유의사항 안내
    </template>
    <template #modal_body>
      <ul class="notice_list">
        <li>여행 상품은 <strong>비좌석</strong>으로 예약 진행됩니다.</li>
        <li>상품을 예약하기 위해서는 반드시 제3자 정보 제공 약관 동의가 필요합니다.</li>
        <li>상품 예약 후 변경은 불가능하며 취소 시 상품 판매처에서 확인 후 환불이 진행됩니다.</li>
      </ul>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        size="xl"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>