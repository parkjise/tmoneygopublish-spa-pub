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
          <div class="usage_area bus">
            <div class="notice_wrap fixed">
              <p>
                <uu-ic
                  size="16"
                  name="exclamation_gray070"
                />
                최근 6개월까지의 이력만 조회 가능합니다.
              </p>
            </div>
            
            <div class="usage_list_area">
              <template v-if="!noResult">
                <ul class="usage_list">
                  <li
                    v-for="(el,indexEl) in 5"
                    :key="indexEl"
                  >
                    <button
                      type="button"
                      class="usage_btn"
                    >
                      <div class="usage_info">
                        <p class="title">
                          <span class="ic_area">
                            <img
                              src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                              alt="임시 이미지"
                            >
                          </span>
                          서울경부-천안고속
                          <span class="num_area">1</span>
                        </p>
                        <p class="status">
                          예매완료
                        </p>
                      </div>
                      <ul class="normal_list">
                        <li>
                          <div class="list_tit">
                            출발일시
                          </div>
                          <div class="list_txt num">
                            2024.01.14(금) 14:40
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            결제일시
                          </div>
                          <div class="list_txt num">
                            2024.01.07(일) 12:20
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            등급
                          </div>
                          <div class="list_txt">
                            일반고속
                          </div>
                        </li>
                        <li>
                          <div class="list_tit">
                            운행회사
                          </div>
                          <div class="list_txt">
                            동양고속
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