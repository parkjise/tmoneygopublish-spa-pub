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
            src="/src/assets/images/ic_bike.png"
            alt="택시 아이콘"
          >
        </span>
        SPB-10914 (자전거번호)
      </div>
      <round-box title="대여정보">
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              대여장소
            </div>
            <div class="list_txt">
              138. <span class="location">공덕역 2번 출구 앞</span>
            </div>
          </li>
          <li>
            <div class="list_tit">
              대여시간
            </div>
            <div class="list_txt">
              2021.04.01 10:45
            </div>
          </li>
          <li>
            <div class="list_tit">
              반납장소
            </div>
            <div class="list_txt">
              146. <span class="location">마포역 4번 출구 뒤</span>
            </div>
          </li>
          <li>
            <div class="list_tit">
              반납시간
            </div>
            <div class="list_txt">
              2024.01.04 17:30
            </div>
          </li>
        </ul>
      </round-box>
      <round-box title="이용정보">
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              이용시간
            </div>
            <div class="list_txt">
              57분
            </div>
          </li>
          <li>
            <div class="list_tit">
              이동거리
            </div>
            <div class="list_txt">
              3.01km
            </div>
          </li>
          <li>
            <div class="list_tit">
              칼로리
            </div>
            <div class="list_txt">
              25kcal
            </div>
          </li>
          <li>
            <div class="list_tit">
              탄소절감효과
            </div>
            <div class="list_txt">
              1.02kg
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
          추가요금 발생시 이용권 구매 결제수단으로 자동 결제되며, 추가 요금이 미결제된 경우 미납요금 납부 후 재대여 가능합니다.
        </p>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>