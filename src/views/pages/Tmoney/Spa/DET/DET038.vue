<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';

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
          <ul class="detail_list payment">
            <li>
              <p class="title">
                이용권 종류
              </p>
              <p class="num">
                정기 - 7일(1시간권)
              </p>
            </li>
            <li>
              <p class="title">
                이용권 시작일
              </p>
              <p class="num">
                2021.05.13 13:19:12
              </p>
            </li>
            <li>
              <p class="title">
                환불요청일
              </p>
              <p class="num">
                2021.05.13 13:28:03
              </p>
            </li>
            <li class="sum_area">
              <p class="title">
                환불가능금액
              </p>
              <p class="num">
                <span>2,000</span>원
              </p>
            </li>
          </ul>
        </round-box>
        <div class="ticket_notice">
          <p class="title">
            <span class="ic_area">
              <uu-ic
                size="16"
                name="exclamation_gray090"
              />
            </span>
            위 환불 가능 금액은 
            <span class="num">2021-05-15 13:19:12</span>
            까지 유효합니다.
          </p>
        </div>
        <uu-button
          btn-style="none"
          class="btn_refund_detail"
        >
          환불약관 상세보기
          <img
            src="/src/assets/images/ic/ic_btn_arrow.svg"
            alt="아이콘"
          >
        </uu-button>
      </div>
      <div class="btn_area">
        <uu-button
          size="xl"
          btn-color="primary"
          label="환불 요청하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>