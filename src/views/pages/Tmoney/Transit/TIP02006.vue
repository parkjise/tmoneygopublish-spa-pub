<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuBadge from '@/components/uu-components/UuBadge.vue'

</script>
<template>
  <!-- header -->
  <subHeader
    title="봄바람 타고 국내여행 떠나 봄"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div
      class="container"
    >
      <div class="thumb_img">
        <img
          src="/src/assets/images/temp/exhibition_ex2.png"
          alt=""
        >
      </div>
      <ul class="product_item_list">
        <li>
          <button type="button">
            <div
              class="img_area"
            >
              <img
                src="/src/assets/images/temp/product_img_ex.png"
                alt="스누피가든"
              >
            </div>
            <uu-badge 
              badge-color="black"
              label="예약중지"
            />
            <div class="product_info">
              <div class="badge_area">
                <span class="product_badge">제주</span>
                <span class="product_badge">반려동물지원</span>
                <span class="product_badge">반려동물지원</span>
                <span class="product_badge">반려동물지원</span>
                <span class="product_badge">반려동물지원</span>
                <span class="product_badge">반려동물지원</span>
              </div>
              <div class="product_tit">
                [당일출발][특가] 2박 3일 제주 여행 특가 #봄제주 #봄 #제주여행 #가족여행 #스누피가든
              </div>
              <div class="price_list">
                <span>최저가</span>
                <div class="price_wrap">
                  <span class="price">35,000</span>원
                </div>
              </div>
              <div class="mileage_area">
                <uuIc v-bind="{name:'mileage',size:'16'}" />
                <span>GO마일리지 5,880원 적립</span>
              </div>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div
              class="img_area"
            >
              <img
                src="/src/assets/images/temp/product_img_ex.png"
                alt="스누피가든"
              >
            </div>
            <uu-badge
              badge-color="secondary"
              label="출발확정"
            />
            <div class="product_info">
              <div class="badge_area">
                <span class="product_badge">제주</span>
                <span class="product_badge">반려동물지원</span>
              </div>
              <div class="product_tit">
                스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든
              </div>
              <div class="price_list">
                <span>최저가</span>
                <div class="price_wrap">
                  <span class="price">35,000</span>원
                </div>
              </div>
              <div class="mileage_area">
                <uuIc v-bind="{name:'mileage',size:'16'}" />
                <span>GO마일리지 5,880원 적립</span>
              </div>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div
              class="img_area"
            >
              <img
                src="/src/assets/images/temp/product_img_ex.png"
                alt="스누피가든"
              >
            </div>
            <uu-badge
              badge-color="secondary"
              label="출발확정"
            />
            <div class="product_info">
              <div class="badge_area">
                <span class="product_badge">제주</span>
                <span class="product_badge">반려동물지원</span>
              </div>
              <div class="product_tit">
                스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든스누피가든
              </div>
              <div class="price_list">
                <span>최저가</span>
                <div class="price_wrap">
                  <span class="price">35,000</span>원
                </div>
              </div>
              <div class="mileage_area">
                <uuIc v-bind="{name:'mileage',size:'16'}" />
                <span>GO마일리지 5,880원 적립</span>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>