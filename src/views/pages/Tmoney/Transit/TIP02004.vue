<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import { ref } from 'vue';
import uuInput from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuTabs from '@/components/uu-components/UuTabs.vue'
import uuTab from '@/components/uu-components/UuTab.vue'
import uuFloating from '@/components/uu-components/UuFloating.vue'
import UuBadge from '@/components/uu-components/UuBadge.vue'

const input01 = ref('') // v-model
let noResult = ref(false);

const changeEvent = (value: string) => {
  console.log(value)
}


const tabItem = ['전체','당일여행','숙박여행','래저/체험','시티투어','셔틀버스']
</script>
<template>
  <!-- header -->
  <subHeader
    title="상품 조회"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main tabs">
    <!-- [240426] 검색 결과 없음 수정으로 인한 class 추가 -->
    <div
      class="container search_page"
      :class="{'no_result':noResult}"
    >
      <!-- tab -->
      <uu-tabs
        own-size-tab
        class="search_category_tab"
      >
        <uu-tab
          v-for="(tab, index) in tabItem"
          :key="index"
          :title="tab"
        >
          <div class="top_fixed_area">
            <uu-input
              v-model="input01"
              placeholder="제주"
              has-ic
              hide-label
              btn-clear
              size="sm"
              @input="changeEvent"
            >
              <template #ic_name>
                <uuIc v-bind="{name:'search',size:'20'}" />
              </template>
            </uu-input>
            <div class="filter_area">
              <div class="filter_condition">
                최저가 순
              </div>
              <div class="filter_btn">
                <uuIc v-bind="{name:'filter',size:'20'}" />
              </div>
            </div>
          </div>
          <template v-if="!noResult">
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
          </template>
          <!-- 상품 검색 결과가 없을 경우 -->
          <template v-else>
            <div class="no_result">
              <uuIc v-bind="{name:'exclamation',size:'48'}" />
              <div class="no_result_txt">
                조회 상품이 없습니다.
              </div>
            </div>
          </template>
          <!-- // 상품 검색 결과가 없을 경우 -->
        </uu-tab>
      </uu-tabs>
      <!-- // tab -->
    </div>
  </main>
  <!-- // main -->
  <uu-floating v-if="!noResult" />
</template>