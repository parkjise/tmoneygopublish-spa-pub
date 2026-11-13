<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuButton from '@/components/uu-components/UuButton.vue'
import uuSwiper, { type swiperType } from '@/components/uu-components/UuSwiper.vue'
import { type SwiperOptions } from 'swiper/types';
import { SwiperSlide } from 'swiper/vue';

// Event
const onSwiper = (swiper: swiperType) => {
  console.log(swiper.activeIndex)
}

// Custom Options
const options : SwiperOptions = {
  navigation: true,
  pagination: {
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '<span class="swiper_pagination_separator">/</span>' +
              '<span class="' + totalClass + '"></span>';
    }
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
}

</script>
<template>
  <!-- header -->
  <subHeader
    title="이용 상세정보"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container bottom_btns">
      <uu-swiper
        type="custom"
        class="QR_swiper"
        :options="options"
        @slide-change="onSwiper"
      >
        <swiper-slide
          v-for="index in 3"
          :key="index"
        >
          <div class="swiper_inner">
            <div class="QR_code">
              <img
                src="/src/assets/images/QR.png"
                alt="QR코드"
              >
              <div class="QR_code_assort">
                (아동)
              </div>
              <!-- 검표 완료 -->
              <img
                class="ticket_status"
                src="/src/assets/images/ticket_done.png"
                alt=""
              >
              <!-- 취소 요청 -->
              <!-- <img
                class="ticket_status"
                src="/src/assets/images/ticket_cancel.png"
                alt=""
              > -->
              <!-- 취소 완료 -->
              <!-- <img
                class="ticket_status"
                src="/src/assets/images/ticket_cancel_done.png"
                alt=""
              > -->
            </div>
            <button
              type="button"
              class="share_btn"
            >
              예약정보 공유하기
              <uuIc v-bind="{name:'share',size:'24'}" />
            </button>
          </div>
        </swiper-slide>
      </uu-swiper>
      <round-box
        title="예약 정보"
      >
        <a
          href="#"
          class="product_link"
        >
          <div class="product_name">
            [당일여행][특가] 강원특별자치도 가평군 남이섬 일일투어 #에덴벚꽃길
          </div>
          <uuIc v-bind="{name:'arrow_right',size:'16'}" />
        </a>
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              예약번호
            </div>
            <div class="list_txt">
              HN2416887442
            </div>
          </li>
          <li>
            <div class="list_tit">
              여행일정
            </div>
            <div class="list_txt">
              2024.04.20(토) 09:30
            </div>
          </li>
          <li>
            <div class="list_tit">
              여행인원
            </div>
            <div class="list_txt">
              5명 (일반5)
            </div>
          </li>
          <li>
            <div class="list_tit">
              출발장소
            </div>
            <div class="list_txt">
              광화문역
            </div>
          </li>
        </ul>
      </round-box>
      <round-box
        title="예약자 정보"
      >
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              이름
            </div>
            <div class="list_txt">
              티머니
            </div>
          </li>
          <li>
            <div class="list_tit">
              연락처
            </div>
            <div class="list_txt num">
              01012345678
            </div>
          </li>
          <li>
            <div class="list_tit">
              이메일
            </div>
            <div class="list_txt">
              t-money@tmoney.co.kr
            </div>
          </li>
        </ul>
        <p class="paraphrase">
          *이용자 정보는 출발일 기준 24시간 이전에만 입력 가능합니다.
        </p>
        <div class="btn_area">
          <uu-button
            size="md"
            btn-style="line"
            label="이용자 정보 수정"
            class="edit_info_btn"
          />
        </div>
      </round-box>
      <round-box
        title="결제금액"
      >
        <ul class="normal_list usage_list">
          <li>
            <div class="list_tit">
              총 결제금액
            </div>
            <div class="list_txt">
              <span class="price">39,700</span>원
            </div>
          </li>
          <li>
            <div class="list_tit">
              취소 수수료
            </div>
            <div class="list_txt red_font">
              <span class="price">0</span>원
            </div>
          </li>
        </ul>
        <dl class="has_detail_list usage_list">
          <dt>
            <div class="list_tit">
              이용금액
            </div>
            <div class="list_txt">
              <span class="price">39,700</span>원
            </div>
          </dt>
          <dd>
            <div class="list_tit">
              쿠폰
            </div>
            <div class="list_txt">
              <span class="price">-5,000</span>원
            </div>
          </dd>
          <dd>
            <div class="list_tit">
              GO마일리지
            </div>
            <div class="list_txt">
              <span class="price">-1,000</span>M
            </div>
          </dd>
        </dl>
        <div class="usage_total_price">
          <div class="total_price_title">
            최종 결제 금액
          </div>
          <div class="price_wrap">
            <span class="price">33,700</span>원
          </div>
        </div>
      </round-box>
      <round-box>
        <template #title>
          결제상세
          <uu-button
            class="right_btn"
            size="xs"
            btn-style="line"
            label="영수증"
          />
        </template>
        <ul class="normal_list pay_detail_list">
          <li>
            <div class="list_tit">
              결제일시
            </div>
            <div class="list_txt num">
              2024.03.05(화) 17:30
            </div>
          </li>
          <!-- 예약취소 -->
          <li>
            <div class="list_tit">
              결제수단
            </div>
            <div class="list_txt">
              신용카드(신한카드)
            </div>
          </li>
          <!-- // 예약취소 -->
          <!-- 
            예약상세 결제금액 표기 수정
            예약, 취소요청, 검표완료
          -->
          <li class="pay_detail_item">
            <div class="list_tit">
              결제수단
            </div>
            <div class="pay_detail">
              <ul class="normal_list">
                <li>
                  <div class="list_tit">
                    신용카드(신한카드)
                  </div>
                  <div class="list_txt">
                    <div class="price_wrap">
                      <span class="price">33,700</span>원
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_tit">
                    쿠폰
                  </div>
                  <div class="list_txt">
                    <div class="price_wrap">
                      <span class="price">5,000</span>원
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_tit">
                    GO마일리지
                  </div>
                  <div class="list_txt">
                    <div class="price_wrap">
                      <span class="price primary">1,000M</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <!--
            // 예약상세 결제금액 표기 수정
            예약, 취소요청, 검표완료
          -->
        </ul>
      </round-box>
      <round-box>
        <template #title>
          여행사 정보
        </template>
        <ul class="normal_list">
          <li>
            <div class="list_tit">
              업체명
            </div>
            <div class="list_txt">
              하나투어
            </div>
          </li>
          <li>
            <div class="list_tit">
              주소
            </div>
            <div class="list_txt">
              서울특별시 종로구 인사동 5길 41
            </div>
          </li>
          <li>
            <div class="list_tit">
              연락처
            </div>
            <div class="list_txt num">
              1577-1233
            </div>
          </li>
        </ul>
      </round-box>
      <div class="btn_area">
        <uu-button
          label="예매취소"
          btn-style="line"
          size="xl"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>