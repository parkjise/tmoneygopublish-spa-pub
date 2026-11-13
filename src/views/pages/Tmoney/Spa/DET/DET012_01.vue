<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import roundBox from '@/components/layout/RoundBox.vue';

const tabItem = ['대중교통','고속·시외','택시','자전거','킥보드','항공','렌터카','기차']

const periodTab = ['1주일','1개월','3개월']

const onSelected = (index: number) => {
  console.log(index)
}

// 이용내역 없음 시 true 로 변경해서 확인
const noResult = false;

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
          <div class="usage_area bike">
            <div class="notice_wrap">
              <p>
                <uu-ic
                  size="16"
                  name="exclamation_gray070"
                />
                최근 3개월까지의 이력만 조회 가능합니다.
              </p>
            </div>
            
            <round-box 
              hide-title
              padding="1.6rem"
            >
              <uu-tabs
                class="segment_tab"
                @selected="onSelected"
              >
                <uu-tab
                  v-for="(el,elIndex) in periodTab"
                  :key="elIndex"
                  :title="el"
                >
                  <ul class="normal_list">
                    <li>
                      <div class="list_tit">
                        이용시간
                      </div>
                      <div class="list_txt">
                        280분
                      </div>
                    </li>
                    <li>
                      <div class="list_tit">
                        이동거리
                      </div>
                      <div class="list_txt">
                        8.01km
                      </div>
                    </li>
                    <li>
                      <div class="list_tit">
                        칼로리
                      </div>
                      <div class="list_txt">
                        300kcal
                      </div>
                    </li>
                    <li>
                      <div class="list_tit">
                        탄소절감효과
                      </div>
                      <div class="list_txt">
                        4.23kg
                      </div>
                    </li>
                  </ul>
                </uu-tab>
              </uu-tabs>
            </round-box>
            <div class="usage_list_area">
              <template v-if="!noResult">
                <div class="use_ticket_list_btn_wrap">
                  <button
                    type="button"
                    class="use_ticket_list_btn"
                  >
                    이용권 사용내역
                  </button>
                </div>
                <ul class="usage_list">
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <p class="title num">
                          <span class="ic_area">
                            <img
                              src="/src/assets/images/ic_bike.png"
                              alt="자전거 아이콘"
                            >
                          </span>
                          2021.04.01
                        </p>
                        <div class="use_time red_font">
                          15분 이용
                        </div>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            대여
                          </div>
                          <div class="list_txt">
                            <span>138. <span class="location">공덕역 2번 출구 앞</span></span>
                            <span>04.01 10:45</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            도착
                          </div>
                          <div class="list_txt">
                            <span>146. <span class="location">마포역 4번 출구 앞</span>
                            </span>
                            <span>04.01 11:00</span>
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
                      </ul>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <p class="title num">
                          <span class="ic_area">
                            <img
                              src="/src/assets/images/ic_bike.png"
                              alt="자전거 아이콘"
                            >
                          </span>
                          2021.04.01
                        </p>
                        <div class="use_time">
                          7분 이용
                        </div>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            대여
                          </div>
                          <div class="list_txt">
                            <span>138. <span class="location">공덕역 2번 출구 앞</span></span>
                            <span>04.01 10:45</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            도착
                          </div>
                          <div class="list_txt">
                            <span>146. <span class="location">마포역 4번 출구 앞</span>
                            </span>
                            <span>04.01 11:00</span>
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
                      </ul>
                    </button>
                  </li>
                </ul>
                <div class="load_more_btn_wrap">
                  <button
                    type="button"
                    class="load_more_btn"
                  >
                    <img
                      src="/src/assets/images/img_load_more.png"
                      alt="목록 더보기"
                    >
                  </button>
                </div>
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