<script setup lang="ts">
import { ref } from 'vue'
import UuModal from '@/components/uu-components/UuModal.vue';

const modal01 = ref(true)
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="마케팅 정보 수신 동의"
    hide-title
    hide-footer
    add-class="setting_marketing"
  >
    <template #modal_body>
      <h4>마케팅 정보 수신 동의</h4>
      <p>
        예약/결제 정보 등 필수 안내사항은<br>
        마케팅 정보 수신 동의와 무관하게 제공됩니다.
      </p>
      <dl>
        <dt>목적</dt>
        <dd>앱 신규/제휴 서비스 알림</dd>
        <dd>회원별 맞춤 서비스 제공</dd>
        <dd>할인 및 프로모션 이벤트 제공</dd>
        <dd>회사가 제공하는 모든 서비스(티머니, 고속/시외버스,온다 택시, 티머니 페이 등)와 향후 추가되는 신규 서비스의 프로모션, 이벤트 등 광고성 정보의 안내</dd>
      </dl>
    </template>
  </uu-modal>
</template>