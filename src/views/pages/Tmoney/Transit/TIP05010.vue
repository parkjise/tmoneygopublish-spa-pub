<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import UuModal from '@/components/uu-components/UuModal.vue';
import RoundBox from '@/components/layout/RoundBox.vue';

const modal01 = ref(true)
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="결제실패"
    has-bg
    round-footer
  >
    <template #modal_body>
      <div class="payment_result">
        <div class="result">
          <div class="img_area">
            <img
              src="/src/assets/images/img_tmoney_character_fail.png"
              alt="결제실패 티머니 캐릭터"
            >
          </div>
          <p>결제에 실패했습니다.</p>
        </div>
        <round-box hide-title>
          <p class="product_name">
            [당일여행][특가] 강원특별자치도 가평군<br>
            남이섬 일일투어 #에덴벚꽃길
          </p>
          <div class="fail_desc">
            <p>예매가 불가능하여 결제되지 않았습니다.</p>
            <p class="error">
              신한카드, 비밀번호 오류[7131]
            </p>
          </div>
          <ul class="list">
            <li>
              <p>예약일시</p>
              <p class="num">
                2024.04.20(토) 09:30
              </p>
            </li>
            <li>
              <p>예약인원</p>
              <p class="num">
                1명 (일반1)
              </p>
            </li>
            <li>
              <p>결제금액</p>
              <p class="num">
                39,700원
              </p>
            </li>
          </ul>
        </round-box>
      </div>
    </template>
    <template #modal_footer>     
      <!-- [240516] .btn_wrap인 div 삭제 -->
      <uu-button
        btn-color="primary"
        size="xl"
        label="확인"
      />
      <!-- // [240516] .btn_wrap인 div 삭제 -->
    </template>
  </uu-modal>
</template>