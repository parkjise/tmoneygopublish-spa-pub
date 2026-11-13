<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import roundBox from '@/components/layout/RoundBox.vue';

</script>
<template>
  <!-- header -->
  <sub-header
    title="자전거 이용 상세정보"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main det usage_detail_page">
    <div class="container">
      <div class="title">
        <span class="ic_area">
          <img
            src="/src/assets/images/ic_kickboard.png"
            alt="킥보드 아이콘"
          >
        </span>
        N123DF (킥보드번호)
      </div>
      <round-box title="대여정보">
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              대여시간
            </div>
            <div class="list_txt">
              2024.01.04 10:45:00
            </div>
          </li>
          <li>
            <div class="list_tit">
              반납시간
            </div>
            <div class="list_txt">
              2024.01.04 11:01:34
            </div>
          </li>
        </ul>
      </round-box>

      <round-box title="이용정보">
        <dl class="has_detail_list">
          <dt>
            <div class="list_tit">
              이용시간
            </div>
            <div class="list_txt">
              16분 34초
            </div>
          </dt>
          <dd>
            <div class="list_tit">
              이동시간
            </div>
            <div class="list_txt">
              15분 34초
            </div>
          </dd>
          <dd>
            <div class="list_tit">
              일시잠금
            </div>
            <div class="list_txt">
              01분 00초
            </div>
          </dd>
          <dt>
            <div class="list_tit">
              이동거리
            </div>
            <div class="list_txt">
              1,732m
            </div>
          </dt>
        </dl>
      </round-box>

      <round-box
        title="결제금액"
        class="payment_info"
      >
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              이용금액
            </div>
            <div class="list_txt">
              <div class="price_wrap">
                <span class="price">2,700</span>원
              </div>
            </div>
          </li>
          <li>
            <div class="list_tit">
              반납추가금액
            </div>
            <div class="list_txt">
              <div class="price_wrap red">
                <span class="price">+600</span>원
              </div>
            </div>
          </li>
          <li>
            <div class="list_tit">
              쿠폰할인
            </div>
            <div class="list_txt">
              <div class="price_wrap primary">
                <span class="price">-1,000</span>원
              </div>
            </div>
          </li>
          <li>
            <div class="list_tit">
              GO마일리지
            </div>
            <div class="list_txt">
              <div class="price_wrap primary">
                <span class="price">-1,000</span>원
              </div>
            </div>
          </li>
        </ul>
        <div class="total_payment_wrap">
          총 결제금액
          <div class="price_wrap">
            <span class="price">1,300</span>원
          </div>
        </div>
      </round-box>
          
      <round-box 
        title="결제상세"
        class="payment_detail"
      >
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              결제일시
            </div>
            <div class="list_txt num">
              2024.01.04(월)
            </div>
          </li>
          <li>
            <div class="list_tit">
              결제수단
            </div>
            <div class="list_txt">
              티머니페이
              <div class="price_wrap">
                <span class="price">1,300</span>원
              </div>
            </div>
          </li>
        </ul>
      </round-box>
      <div class="ticket_notice">
        <p class="title">
          <uu-ic
            size="16"
            name="exclamation_gray090"
          />
          꼭 읽어주세요!
        </p>
        <p class="desc">
          요금이 미결제된 경우 미납요금 납부 후 재대여 가능합니다.
        </p>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>