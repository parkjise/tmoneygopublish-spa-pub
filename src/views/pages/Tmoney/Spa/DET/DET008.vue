<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import uuButton from '@/components/uu-components/UuButton.vue'

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
          <div class="usage_area taxi">
            <div class="notice_wrap fixed">
              <p>
                <uu-ic
                  size="16"
                  name="exclamation_gray070"
                />
                최근 3개월까지의 이력만 조회 가능합니다.
              </p>
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
                        <p class="title num">
                          <span class="ic_area">
                            <img
                              src="/src/assets/images/ic_taxi.png"
                              alt="택시 아이콘"
                            >
                          </span>
                          2021.07.01
                        </p>
                        <button
                          type="button"
                        >
                          <uu-ic
                            name="bookmark"
                            size="20"
                          />
                        </button>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            출발
                          </div>
                          <div class="list_txt">
                            운수사
                            <address>
                              서울 종로구 구가동 비봉2길 304
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            도착
                          </div>
                          <div class="list_txt">
                            LG서울역빌딩
                            <address>
                              서울 중구 남대문로5가 후암로 88
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            택시정보
                          </div>
                          <div class="list_txt split">
                            <span>모범</span>
                            <span class="taxi_info">
                              서울 33아 3648
                              <uu-ic
                                name="phone"
                                size="16"
                              />
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            결제정보
                          </div>
                          <div class="list_txt">
                            티머니페이 자동결제
                          </div>
                        </li>
                      </ul>
                      <div class="btn_area">
                        <uu-button 
                          label="평가하기"
                          btn-style="line"
                          size="lg"
                        />
                      </div>
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
                              src="/src/assets/images/ic_taxi.png"
                              alt="택시 아이콘"
                            >
                          </span>
                          2021.06.30
                        </p>
                        <button
                          type="button"
                        >
                          <uu-ic
                            name="bookmark"
                            size="20"
                            status="active"
                          />
                        </button>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            출발
                          </div>
                          <div class="list_txt">
                            <address>
                              서울 종로구 구가동 비봉2길 304
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            도착
                          </div>
                          <div class="list_txt">
                            <address>
                              서울 중구 남대문로5가 후암로 88
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            택시정보
                          </div>
                          <div class="list_txt">
                            중형
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            결제정보
                          </div>
                          <div class="list_txt">
                            현장결제
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
                              src="/src/assets/images/ic_taxi.png"
                              alt="택시 아이콘"
                            >
                          </span>
                          2021.07.01
                        </p>
                        <button
                          type="button"
                        >
                          <uu-ic
                            name="bookmark"
                            size="20"
                          />
                        </button>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            출발
                          </div>
                          <div class="list_txt">
                            운수사
                            <address>
                              서울 종로구 구가동 비봉2길 304
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            도착
                          </div>
                          <div class="list_txt">
                            LG서울역빌딩
                            <address>
                              서울 중구 남대문로5가 후암로 88
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            택시정보
                          </div>
                          <div class="list_txt split">
                            <span>모범</span>
                            <span class="taxi_info">
                              서울 33아 3648
                              <uu-ic
                                name="phone"
                                size="16"
                              />
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            결제정보
                          </div>
                          <div class="list_txt">
                            티머니페이 자동결제
                          </div>
                        </li>
                      </ul>
                      <div class="btn_area">
                        <uu-button 
                          label="평가하기"
                          btn-style="line"
                          size="lg"
                        />
                      </div>
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
                              src="/src/assets/images/ic_taxi.png"
                              alt="택시 아이콘"
                            >
                          </span>
                          2021.06.30
                        </p>
                        <button
                          type="button"
                        >
                          <uu-ic
                            name="bookmark"
                            size="20"
                            status="active"
                          />
                        </button>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            출발
                          </div>
                          <div class="list_txt">
                            <address>
                              서울 종로구 구가동 비봉2길 304
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            도착
                          </div>
                          <div class="list_txt">
                            <address>
                              서울 중구 남대문로5가 후암로 88
                            </address>
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            택시정보
                          </div>
                          <div class="list_txt">
                            중형
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            결제정보
                          </div>
                          <div class="list_txt">
                            현장결제
                          </div>
                        </li>
                      </ul>
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