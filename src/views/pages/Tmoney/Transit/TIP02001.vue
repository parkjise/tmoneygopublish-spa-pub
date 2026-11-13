<script setup lang="ts">
import { ref } from 'vue';
import uuInput from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuSwiper from '@/components/uu-components/UuSwiper.vue'
import { SwiperSlide } from 'swiper/vue';

const input01 = ref('') // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

// Custom Options
const options = {
  slidesPerView: 1,
  spaceBetween: 12
}

</script>
<template>
  <!-- searchBar -->
  <uu-input
    v-model="input01"
    class="search_bar_input"
    placeholder="여행 상품, 테마, 지역 검색"
    has-ic
    hide-label
    btn-clear
    @input="changeEvent"
  >
    <template #ic_name>
      <uuIc v-bind="{name:'back',size:'24'}" />
    </template>
  </uu-input>
  <!--// searchBar -->
  <!-- main -->
  <main class="main">
    <div class="container pt12 bg_white">
      <div>
        <h2 class="section_tit">
          최근 검색
        </h2>
        <ul class="recent_search_list">
          <li
            v-for="index in 4"
            :key="index"
          >
            <button
              type="button"
            >
              <span>해운대관광열차</span>
              <uuIc
                v-bind="{name:'close',size:'16'}
                "
              />
            </button>
          </li>
        </ul>
      </div>

      <h2 class="section_tit">
        인기 검색어
      </h2>
      <ul class="popular_search_list">
        <li
          v-for="index in 10"
          :key="index"
        >
          <button
            type="button"
          >
            <span>해운대관광열차</span>
          </button>
        </li>
      </ul>

      <h2 class="section_tit">
        이달의 추천 기획전
        <button
          type="button"
          class="side_txt_btn"
        >
          전체 기획전 보기
        </button>
      </h2>
      <ul class="recommend_exhibition_list">
        <li
          v-for="index in 4"
          :key="index"
        >
          <button
            type="button"
          >
            <span>봄바람 타고 국내여행 떠나 봄</span>
          </button>
        </li>
      </ul>
      
      <div class="bottom_fixed_area">
        <!-- 영역 표시 용 style 적용 -->
        <uu-swiper
          type="custom"
          :options="options"
          class="bottom_event_banner_swiper"
        >
          <swiper-slide
            v-for="(item, index) in 3"
            :key="index"
          >
            <div class="swiper_inner">
              <button 
                type="button"
              >
                <img
                  src="/src/assets/images/temp/bottom_event_banner_ex.png"
                  alt=""
                >
              </button>
            </div>
          </swiper-slide>
        </uu-swiper>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>