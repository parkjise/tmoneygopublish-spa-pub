<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';
import UuInput from '@/components/uu-components/UuInput.vue';

const input01 = ref('')
</script>
<template>
  <!-- header -->
  <sub-header title="따릉이 이용권 환불" />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container bottom_btns"> 
      <div class="pay_detail_area refund">
        <round-box hide-title>
          <div class="input_area">
            <form>
              <p class="title">
                은행 선택
              </p>
              <uu-button
                btn-style="line"
                class="btn_bank"
              >
                <span>카드사를 선택해주세요</span>
                <uu-ic
                  size="20"
                  name="arrow"
                />
              </uu-button>
              <uu-input
                v-model="input01"
                label="계좌번호 입력"
                placeholder="본인 명의의 계좌번호를 입력해주세요"
              />
              <uu-input
                v-model="input01"
                label="예금주"
                placeholder="예금주명을 입력해주세요"
              />
            </form>
          </div>
        </round-box>
        <round-box hide-title>
          <div class="refund_area">
            <p class="title">
              환불가능금액
            </p>
            <p class="refund">
              <span>2,000</span>원
            </p>
          </div>
          <div class="ticket_notice">
            <p class="title">
              <uu-ic
                size="16"
                name="exclamation_gray090"
              />
              이용권 환불 안내
            </p>
            <ul>
              <li>
                신청일로부터 2~3영업일 후 지급됩니다.
              </li>
              <li>
                입금은 환불 신청하신 날짜 기준으로 2~3주가량 소요될 수 있으나 사정에 따라 지연될 수 있습니다.
              </li>
              <li>
                환불관련 문의는 따릉이고객센터(1599-0120)로 연락바랍니다.
              </li>
            </ul>
          </div>
        </round-box>
      </div>
      <div class="btn_area">
        <!-- input 값 입력 시 disabled 제거 -->
        <uu-button
          size="xl"
          btn-color="primary"
          label="확인"
          disabled
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>