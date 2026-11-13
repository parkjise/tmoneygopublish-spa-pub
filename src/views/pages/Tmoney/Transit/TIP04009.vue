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
    label="이용자 정보 입력 안내 바텀시트"
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
      이용자 정보 입력 안내
    </template>
    <template #modal_body>
      <ul class="notice_list">
        <li>선택한 인원수에 맞게 입력창이 자동으로 설정됩니다.</li>
        <li>이용자 정보는 <strong class="primary_color">최소 1명</strong>은 입력하셔야 합니다.</li>
        <li>만 14세 미만 여행자의 경우 약관교부 및 개인정보 이용 동의 확인을 위한 법정대리인(부모)의 연락처(핸드폰번호)를 입력해주세요.</li>
        <li>입력하신 정보는 <strong>더보기 - 이용내역</strong>에서 확인 및 변경 하실 수 있습니다.</li>
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