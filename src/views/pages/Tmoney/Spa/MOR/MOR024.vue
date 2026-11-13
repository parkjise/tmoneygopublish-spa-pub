<script setup lang="ts">
import { ref } from 'vue'
import UuModal from '@/components/uu-components/UuModal.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuTextarea from '@/components/uu-components/UuTextarea.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const modal01 = ref(true)
const input01 = ref()
const textarea01 = ref()
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="쿠폰 선물하기"
    has-bg
    round-footer
  >
    <template #modal_body>
      <div class="coupon_gift">
        <round-box hide-title>
          <ul>
            <li>
              <p>쿠폰명</p>
              <p>요금 5,000원 할인 쿠폰</p>
            </li>
            <li>
              <p>사용조건</p>
              <p>티머니페이 결제 시 사용가능</p>
            </li>
            <li>
              <p>사용기간</p>
              <p>2021.09.20 ~ 2021.10.20</p>
            </li>
            <li>
              <p>적용 서비스</p>
              <p>택시</p>
            </li>
          </ul>
        </round-box>
        <form>
          <div class="phone">
            <uu-input
              v-model="input01"
              label="선물할 연락처"
              placeholder="-없이 입력해주세요"
            />
            <uu-button
              label="연락처"
              size="lg"
              btn-style="line"
            />
          </div>
          <uu-textarea
            v-model="textarea01"
            label="선물메시지"
            placeholder="쿠폰 선물합니다! 좋은 하루 되세요!"
          />
        </form>
        <div class="ticket_notice">
          <p class="title">
            <uu-ic
              size="16"
              name="exclamation_gray090"
            />
            꼭 읽어주세요!
          </p>
          <ul>
            <li>쿠폰 선물하기는 티머니GO 회원에게만 선물 가능합니다.</li>
            <li>
              수신자가 티머니GO 회원이 아닐 경우, 선물하기가 취소
              됩니다.
            </li>
            <li>선물받은 쿠폰은 쿠폰 사용기간의 잔여기간 동안 유효합니다.</li>
            <li>선물을 하신 시점부터 선물한 쿠폰을 이용하실 수 없습니다.</li>
          </ul>
        </div>
      </div>
    </template>
    <template #modal_footer>
      <uu-button
        btn-color="primary"
        size="xl"
        label="선물하기"
        class="coupon_gift_btn"
      />
    </template>
  </uu-modal>
</template>