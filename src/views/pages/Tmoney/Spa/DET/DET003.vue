<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';

const tabItem = ['대중교통','고속·시외','택시','자전거','킥보드','항공','렌터카','기차']

// 이용내역 없음 시 true 로 변경해서 확인
const noResult = true;

</script>
<template>
  <!-- header -->
  <sub-header
    title="이용내역"
    right-content
  >
    <template #header_right>
      <button 
        type="button"
        class="btn pay_history_btn"
      >
        결제내역
      </button>
    </template>
  </sub-header>
  <!-- // header -->
  <!-- main -->
  <main class="main det tabs">
    <div class="container no_padding">
      <uu-tabs own-size-tab>
        <uu-tab
          v-for="(item, index) in tabItem"
          :key="index"
          :title="item"
        >
          <div class="usage_area public">
            <div class="notice_wrap">
              <p>
                <uu-ic
                  size="16"
                  name="exclamation_gray070"
                />
                최근 6개월까지의 이력만 조회 가능합니다.
              </p>
              <p>
                <uu-ic
                  size="16"
                  name="exclamation_gray070"
                />
                탑승일 기준 2일 뒤 거래부터 확인 가능합니다.
              </p>
              <p>
                <uu-ic
                  size="16"
                  name="exclamation_gray070"
                />
                수도권 외 지역 대중교통은 버스와 지하철 표출만 가능합니다.
              </p>
            </div>
            
            <div class="setting_area">
              <div class="set_date">
                <button
                  type="button"
                >
                  <uu-ic
                    size="24"
                    name="arrow"
                    class="ic_left"
                  />
                </button>
                <div class="date">
                  2023.12
                </div>
                <button
                  type="button"
                >
                  <uu-ic
                    size="24"
                    name="arrow"
                    status="disabled"
                    class="ic_right"
                  />
                </button>
              </div>
              <div class="card_select_wrap">
                <button
                  type="button"
                  class="card_select_btn"
                >
                  <uu-ic
                    size="20"
                    name="card"
                  />
                  <span>전체</span>
                  <uu-ic
                    size="20"
                    name="arrow"
                  />
                </button>
                <button
                  type="button"
                  class="card_register_btn"
                >
                  교통카드 등록/변경
                </button>
              </div>
            </div>
              
            <div class="usage_list_area">
              <template v-if="!noResult">
                <ul class="usage_list">
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_gyeongbu.png"
                            alt="경부선"
                          >
                          경부선
                        </div>
                        <div class="usage_assort">
                          하차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_7.png"
                            alt="7호선"
                          >
                          7호선
                        </div>
                        <div class="usage_assort primary">
                          승차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_gyeongbu.png"
                            alt="경부선"
                          >
                          경부선
                        </div>
                        <div class="usage_assort">
                          하차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_7.png"
                            alt="7호선"
                          >
                          7호선
                        </div>
                        <div class="usage_assort primary">
                          승차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_gyeongbu.png"
                            alt="경부선"
                          >
                          경부선
                        </div>
                        <div class="usage_assort">
                          하차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_7.png"
                            alt="7호선"
                          >
                          7호선
                        </div>
                        <div class="usage_assort primary">
                          승차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_gyeongbu.png"
                            alt="경부선"
                          >
                          경부선
                        </div>
                        <div class="usage_assort">
                          하차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_7.png"
                            alt="7호선"
                          >
                          7호선
                        </div>
                        <div class="usage_assort primary">
                          승차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_gyeongbu.png"
                            alt="경부선"
                          >
                          경부선
                        </div>
                        <div class="usage_assort">
                          하차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_7.png"
                            alt="7호선"
                          >
                          7호선
                        </div>
                        <div class="usage_assort primary">
                          승차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_gyeongbu.png"
                            alt="경부선"
                          >
                          경부선
                        </div>
                        <div class="usage_assort">
                          하차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <div class="title">
                          <img
                            src="/src/assets/images/ic_subway_line_7.png"
                            alt="7호선"
                          >
                          7호선
                        </div>
                        <div class="usage_assort primary">
                          승차
                        </div>
                        <div class="date">
                          2023.12.29 23:32
                        </div>
                      </div>
                      <div class="price_wrap">
                        <span class="price">100</span>원
                      </div>
                    </button>
                  </li>
                </ul>
              </template>
              <template v-else>
                <div class="no_result">
                  <uuIc v-bind="{name:'exclamation',size:'48'}" />
                  <div class="no_result_txt">
                    이용내역이 없습니다.
                  </div>
                </div>
              </template>
            </div>
          </div>
        </uu-tab>
      </uu-tabs>
    </div>
  </main>
  <!-- // main -->
</template>