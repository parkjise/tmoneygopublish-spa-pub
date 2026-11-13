<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuSwiper, { type swiperType } from '@/components/uu-components/UuSwiper.vue'
import { SwiperSlide } from 'swiper/vue';
import { type SwiperOptions } from 'swiper/types';

// Event
const onSwiper = (swiper: swiperType) => {
  console.log(swiper.activeIndex)
}

// Custom Options
const options : SwiperOptions = {
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return  '<span class="' + currentClass + '"></span>' +
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
    title="여행상품 통합예매"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container">
      <button
        type="button"
        class="searchbar"
      >
        <span class="placeholder">여행 상품 / 테마 / 지역 검색</span>
        <uu-ic
          name="search"
          size="20"
          color="primary"
        />
      </button>
      <div class="recent_product">
        <div class="badge">
          최근 조회 상품
        </div>
        <div class="product_name">
          가평군남이섬일일투어
        </div>
      </div>

      <div class="category_area">
        <ul class="category_list">
          <li
            v-for="index in 5"
            :key="index"
          >
            <button
              type="button"
              class="category_btn"
            >
              <span class="category_img">
                <img
                  src="/src/assets/images/temp/category_ex.png"
                  alt="카테고리 이미지"
                >
              </span>
              <span class="category_name">당일여행</span>
            </button>
          </li>
        </ul>
      </div>
      <round-box
        padding-bottom="1.2rem"
      >
        <template #title>
          예약 티켓
          <uu-ic
            name="reload"
            size="16"
          />
        </template>
        <div class="reservation_ticket">
          <uu-swiper
            type="paginationFraction"
          >
            <swiper-slide
              v-for="index in 3"
              :key="index"
            >
              <div class="swiper_inner">
                <div class="ticket">
                  <!-- [240503] 기획 변경으로 인한 변경 -->
                  <div class="ticket_header">
                    당일여행
                  </div>
                  <!-- // [240503] 기획 변경으로 인한 변경 -->
                  <ul class="ticket_info">
                    <li>
                      <uu-ic
                        name="ticket"
                        size="16"
                      />
                      가평군 남이섬 일일투어
                    </li>
                    <li>
                      <uu-ic
                        name="calender"
                        size="16"
                      />
                      <div class="split">
                        <span>2024.04.20(토)</span>
                        <span>09:30~</span>
                      </div>
                    </li>
                    <li>
                      <uu-ic
                        name="person"
                        size="16"
                      />
                      <div class="split">
                        <span>1명</span>
                        <span>일반1</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </swiper-slide>
          </uu-swiper>
        </div>
      </round-box>

      <round-box
        title="인기 여행지"
      >
        <ul class="xscroll_list travel_list">
          <li
            v-for="index in 10"
            :key="index"
          >
            <button
              type="button"
            >
              <img
                src="/src/assets/images/temp/travel_ex.png"
                alt=""
              >
              <div class="txt">
                제주도
              </div>
            </button>
          </li>
        </ul>
      </round-box>

      <round-box
        title="이시각 베스트 상품"
      >
        <ul class="best_product_list">
          <li
            v-for="index in 6"
            :key="index"
          >
            <button
              type="button"
            >
              <img
                src="/src/assets/images/temp/best_ex.png"
                alt=""
              >
              <div class="product_name">
                [당일여행] 서울남산타워 혼자가고 둘이가는 패키지 함께해서울남산타워 혼자가고 둘이가는 패키지 함께해서울남산타워 혼자가고 둘이가는 패키지 함께해서울남산타워 혼자가고 둘이가는 패키지 함께해
              </div>
              <div class="price_wrap">
                <span class="price">5,000</span>원~
              </div>
            </button>
          </li>
        </ul>
      </round-box>

      <uu-swiper
        type="custom"
        :options="options"
        navi-pagination
        class="event_banner_swiper"
        @slide-change="onSwiper"
      >
        <swiper-slide
          v-for="index in 3"
          :key="index"
        >
          <div class="swiper_inner">
            <button type="button">
              <img
                src="/src/assets/images/temp/event_banner_ex.png"
                alt=""
              >
            </button>
          </div>
        </swiper-slide>
      </uu-swiper>

      <ul class="xscroll_list banner_list">
        <li
          v-for="index in 6"
          :key="index"
        >
          <button>
            <img
              src="/src/assets/images/temp/banner_ex.png"
              alt="배너1"
            >
          </button>
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>