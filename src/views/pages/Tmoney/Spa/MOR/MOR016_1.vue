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
    hide-title
    hide-footer
    has-header-bg
    has-bg
  >
    <template #modal_body>
      <div class="go_mileage">
        <p class="desc">
          티머니GO 마일리지 적립을 위해 최초 1회의 개인정보 관련
          동의가 필요합니다.
        </p>
        <h4>개인정보 수집 및 이용 동의(필수)</h4>
      </div>
    </template>
  </uu-modal>
</template>