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
    title="결제완료"
    has-bg
    round-footer
  >
    <template #modal_body>
      <div class="payment_result success">
        <div class="result">
          <div class="img_area">
            <img
              src="/src/assets/images/img_tmoney_character_success.png"
              alt="결제완료 티머니 캐릭터"
            >
          </div>
          <p>결제가 완료되었습니다.</p>
        </div>
        <round-box hide-title>
          <p class="product_name">
            [당일여행][특가] 강원특별자치도 가평군<br>
            남이섬 일일투어 #에덴벚꽃길
          </p>
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
              <p>출발장소</p>
              <p class="num">
                광화문역
              </p>
            </li>
          </ul>
        </round-box>
        <round-box title="결제정보">
          <ul class="list pay_list">
            <li>
              <p>결제일시</p>
              <p class="num">
                2023.02.28(화) 10:00
              </p>
            </li>
            <li>
              <p>결제수단</p>
              <p class="num card">
                신용카드(신한카드)
              </p>
            </li>
            <li class="discount">
              <p>결제금액</p>
              <p class="num">
                <strong>39,700</strong>원
              </p>
              <ul>
                <li>
                  <p>쿠폰</p>
                  <p class="num">
                    <strong>-5,000</strong>원
                  </p>
                </li>
                <li>
                  <p>GO마일리지</p>
                  <p class="num">
                    <strong>-1,000</strong>M
                  </p>
                </li>
              </ul>
            </li>
            <li class="sum">
              <p>총 결제금액</p>
              <p class="num">
                <strong>33,700</strong>원
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