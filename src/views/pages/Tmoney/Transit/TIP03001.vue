<script setup lang="ts">
import productDetailImage from '@/assets/images/temp/product_detail_ex.png'
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuButton from '@/components/uu-components/UuButton.vue'
import uuFloating from '@/components/uu-components/UuFloating.vue'

const scrollToDetail = () => {
  const detail = document.querySelector('.detail_content_wrap')
  setTimeout (function(){
    if (detail) {
    const rect = detail.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - 62,
      behavior: 'smooth'
    });
  }
  },100)
};

const scrollToSchedule = () => {
  const schedule = document.querySelector('.detail_content_schedule_list')
  setTimeout (function(){
    if (schedule) {
    const rect = schedule.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - 62,
      behavior: 'smooth'
    });
  }
  },100)
};

const scrollToUseList = () => {
  const useList = document.querySelector('.detail_content_information_use_list')
  setTimeout (function(){
    if (useList) {
    const rect = useList.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - 62,
      behavior: 'smooth'
    });
  }
  },100)
};
</script>
<template>
  <!-- header -->
  <subHeader 
    hide-title
    white-back
    bg-color="transparent"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main no_padding">
    <div class="container bottom_btns product_detail_page">
      <div
        class="product_detail_img"
        :style="`
        background: linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(255,255,255,.1) 27%,rgba(0,0,0,0) 50%,rgba(0, 0, 0, .5)), 
        url(${productDetailImage})
        no-repeat 
        center/cover`"
      />
      <round-box
        class="product_detail_info"
        hide-title
      >
        <div class="product_detail_badge">
          <span>당일출발</span>
          <span>일반</span>
          <span>트래킹</span>
          <span>반려동물지원</span>
          <span>지자체지원</span>
          <span>지자체지원</span>
        </div>
        <div class="product_detail_tit">
          [당일출발][특가] 2박 3일 제주 여행 특가 #봄제주 #봄 #제주여행
          <div class="product_info">
            <span>광화문역 출발</span>
            <span>3월 23일부터 사용가능</span>
          </div>
        </div>
        <div class="product_detail_price">
          <div class="detail_price_badge">
            예약중지
          </div>
          <div class="price_wrap">
            <span class="price">128,000</span>원
          </div>
        </div>
        <div class="mileage_area">
          <uuIc v-bind="{name:'mileage',size:'16'}" />
          <span>GO마일리지 5,880원 적립</span>
        </div>
        <div class="keyword_area">
          <div class="keyword_tit">
            미리보는 키워드
          </div>
          <ul class="keyword_list">
            <li>#당일여행</li>
            <li>#버스여행</li>
            <li>#사전예약</li>
            <li>#왕복교통비</li>
            <li>#인솔가이드</li>
            <li>#식사 미제공</li>
            <li>#개인비용 지참</li>
          </ul>
        </div>
        <div class="btn_wrap">
          <button
            type="button"
            class="core_info_btn"
          >
            여행상품 핵심정보
          </button>
        </div>
      </round-box>

      <round-box
        class="product_detail_content"
        hide-title
      >
        <div class="scroll_btn_wrap">
          <button
            type="button"
            class="is_active"
            @click="scrollToDetail"
          >
            상세정보
          </button>
          <button
            type="button"
            @click="scrollToSchedule"
          >
            여행일정
          </button>
          <button
            type="button"
            @click="scrollToUseList"
          >
            이용안내
          </button>
        </div>
        <div 
          class="detail_content_wrap"
        >
          <!-- 예시 이미지 -->
          <img
            src="/src/assets/images/temp/product_detail_info_ex.png"
            alt=""
          >
          <img
            src="/src/assets/images/temp/product_detail_info_ex.png"
            alt=""
          >
          <img
            src="/src/assets/images/temp/product_detail_info_ex.png"
            alt=""
          >
          <div class="detail_content_tit">
            여행일정
          </div>
          <ul class="detail_content_schedule_list">
            <li>06:50 시청역 3번출구 출발</li>
            <li>07:20 교대역 8번출구 경유 및 출발</li>
            <li>07:40 죽전간이정류장 경유 및 출발</li>
            <li>07:40~11:30 하동 쌍계사 이동 및 도착</li>
            <li>11:30~14:30 쌍계사&화개장터 자유시간 (개별중식)</li>
            <li>14:30~15:00 최참판댁 이동 및 도착</li>
            <li>15:00~16:30 최참판댁 자유시간</li>
            <li>16:30~20:30 서울 이동 및 도착</li>
          </ul>
          <div class="detail_content_tit">
            이용안내
          </div>
          <dl class="detail_content_information_use_list">
            <dt>출발확정여부</dt>
            <dd>
              출발일 3일 전 출발 확정 여부 확인 가능
              (모객미달 취소 시, 48시간 이전 개별안내 후 환불)
            </dd>
            <dt>출발안내문자</dt>
            <dd>
              기재된 연락처로 출발주 금요일 오후 3시까지 발송
              3시 이후 문자 미수신시 070-4200-6498로 연락
              (예약시 기재된 연락처를 꼭 확인하세요!)
            </dd>
            <dt>변경요청</dt>
            <dd>
              탑승지/진행인원/연락처/여행자정보 등의 변경 및
              개별 ID로 구매 후 동행인 요청은 반드시 유선상 또는 인터넷 접수
            </dd>
            <dt>좌석배정</dt>
            <dd>
              결제순, 입금순 우선배정 (셔틀은 현장도착 선착순)결제순, 입금순 우선배정 (셔틀은 현장도착 선착순)결제순, 입금순 우선배정 (셔틀은 현장도착 선착순)
            </dd>
          </dl>
        </div>
      </round-box>

      <div class="btn_area has_bg">
        <uu-button
          size="xl"
          btn-color="primary"
          label="예약하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
  <uu-floating 
    :pos="{
      right:20,
      bottom: 128}"
  />
</template>