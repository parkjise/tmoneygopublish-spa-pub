<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'

</script>
<template>
  <!-- header -->
  <sub-header
    title="자주하는 질문"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div
      class="container"
    >
      <ul class="faq_category_list">
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_bus.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              고속·시외
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_taxi.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              택시
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_bike.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              자전거
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_kick.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              킥보드
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_airport.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              항공
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_rentcar.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              렌터카
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap">
              <img
                src="/src/assets/images/ic_faq_spotpath.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              경로안내
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap2">
              <img
                src="/src/assets/images/ic_faq_benefit.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              혜택
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap2">
              <img
                src="/src/assets/images/ic_faq_people.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              회원정보
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div class="img_wrap3">
              <img
                src="/src/assets/images/ic_faq_mileage.png"
                alt=""
              >
            </div>
            <div class="category_txt">
              GO마일리지
            </div>
          </button>
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>