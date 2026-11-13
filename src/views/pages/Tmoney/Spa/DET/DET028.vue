<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuButton from '@/components/uu-components/UuButton.vue';

const tabItem = ['전체', '고속·시외', '택시', '자전거', '킥보드', '항공', '렌터카', '기차']
</script>
<template>
  <!-- header -->
  <sub-header title="결제내역" />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container no_padding">
      <div class="pay_area">
        <uu-tabs own-size-tab>
          <uu-tab
            v-for="(tab, index) in tabItem"
            :key="index"
            :title="tab"
          >
            <p class="notice_fixed">
              <uu-ic
                size="16"
                name="exclamation_gray070"
              />
              티머니GO를 통해 이용한 정보만 제공됩니다.
            </p>
            <div class="pay_btn_area">
              <uu-button
                btn-style="none"
                class="btn_pay"
              >
                <div class="pay_title">
                  <p class="title">
                    <span class="ic_area">
                      <img
                        src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                        alt="임시 이미지"
                      >
                    </span>
                    서울경부-부산
                    <span class="num_area">2</span>
                  </p>
                  <p class="status">
                    결제완료
                  </p>
                </div>
                <ul class="payment_list">
                  <li>
                    <p class="sub_title">
                      결제일시
                    </p>
                    <p class="num">
                      2021.04.12 19:30
                    </p>
                  </li>
                  <li class="info_area">
                    <p class="sub_title">
                      결제수단
                    </p>
                    <ul class="info">
                      <li>
                        <p class="tool">
                          신용카드(신한카드)
                        </p>
                        <p class="num payment">
                          <span>20,200</span>원
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li class="sum_area">
                    <p class="sub_title">
                      결제금액
                    </p>
                    <p class="num payment">
                      <span>20,200</span>원
                    </p>
                  </li>
                </ul>
              </uu-button>
              <uu-button
                btn-style="none"
                class="btn_pay"
              >
                <div class="pay_title">
                  <p class="title">
                    <span class="ic_area">
                      <img
                        src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                        alt="임시 이미지"
                      >
                    </span>
                    동서울 - 강릉시외터미널
                  </p>
                  <p class="status red">
                    예매취소
                  </p>
                </div>
                <ul class="payment_list">
                  <li>
                    <p class="sub_title">
                      결제일시
                    </p>
                    <p class="num">
                      2021.04.12 19:30
                    </p>
                  </li>
                  <li class="info_area">
                    <p class="sub_title">
                      결제수단
                    </p>
                    <ul class="info">
                      <li>
                        <p class="tool">
                          신용카드(신한카드)
                        </p>
                        <p class="num payment">
                          <span>20,200</span>원
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li class="sum_area">
                    <p class="sub_title">
                      결제금액
                    </p>
                    <p class="num payment">
                      <span>20,200</span>원
                    </p>
                  </li>
                </ul>
              </uu-button>
              <uu-button
                btn-style="none"
                class="btn_pay"
              >
                <div class="pay_title">
                  <p class="title">
                    <span class="ic_area">
                      <img
                        src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                        alt="임시 이미지"
                      >
                    </span>
                    티머니onda(중형)
                  </p>
                  <p class="status">
                    결제완료
                  </p>
                </div>
                <ul class="payment_list">
                  <li>
                    <p class="sub_title">
                      결제일시
                    </p>
                    <p class="num">
                      2021.04.12 19:30
                    </p>
                  </li>
                  <li class="info_area">
                    <p class="sub_title">
                      결제수단
                    </p>
                    <ul class="info">
                      <li>
                        <p class="tool">
                          신용카드(신한카드)
                        </p>
                        <p class="num payment">
                          <span>20,200</span>원
                        </p>
                      </li>
                      <li>
                        <p class="tool">
                          GO마일리지
                        </p>
                        <p class="num payment">
                          <span>1,000</span>M
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li class="sum_area">
                    <p class="sub_title">
                      결제금액
                    </p>
                    <p class="num payment">
                      <span>20,200</span>원
                    </p>
                  </li>
                </ul>
              </uu-button>
              <uu-button
                btn-style="none"
                class="btn_pay"
              >
                <div class="pay_title">
                  <p class="title">
                    <span class="ic_area">
                      <img
                        src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                        alt="임시 이미지"
                      >
                    </span>
                    따릉이이용권결제
                  </p>
                  <p class="status">
                    결제완료
                  </p>
                </div>
                <ul class="payment_list">
                  <li>
                    <p class="sub_title">
                      결제일시
                    </p>
                    <p class="num">
                      2021.04.12 19:30
                    </p>
                  </li>
                  <li>
                    <p class="sub_title">
                      이용권
                    </p>
                    <p class="num">
                      정기-7일(1시간권)
                    </p>
                  </li>
                  <li class="info_area">
                    <p class="sub_title">
                      결제수단
                    </p>
                    <ul class="info">
                      <li>
                        <p class="tool">
                          신용카드(신한카드)
                        </p>
                        <p class="num payment">
                          <span>20,200</span>원
                        </p>
                      </li>
                      <li>
                        <p class="tool">
                          GO마일리지
                        </p>
                        <p class="num payment">
                          <span>1,000</span>M
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li class="sum_area">
                    <p class="sub_title">
                      결제금액
                    </p>
                    <p class="num payment">
                      <span>20,200</span>원
                    </p>
                  </li>
                </ul>
              </uu-button>
              <uu-button
                btn-style="none"
                class="btn_pay"
              >
                <div class="pay_title">
                  <p class="title">
                    <span class="ic_area">
                      <img
                        src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                        alt="임시 이미지"
                      >
                    </span>
                    따릉이이용권결제
                  </p>
                  <p class="status red">
                    환불예정
                  </p>
                </div>
                <ul class="payment_list">
                  <li>
                    <p class="sub_title">
                      결제일시
                    </p>
                    <p class="num">
                      2021.04.12 19:30
                    </p>
                  </li>
                  <li>
                    <p class="sub_title">
                      이용권
                    </p>
                    <p class="num">
                      정기-7일(1시간권)
                    </p>
                  </li>
                  <li class="info_area">
                    <p class="sub_title">
                      결제수단
                    </p>
                    <ul class="info">
                      <li>
                        <p class="tool">
                          신용카드(신한카드)
                        </p>
                        <p class="num payment">
                          <span>20,200</span>원
                        </p>
                      </li>
                      <li>
                        <p class="tool">
                          쿠폰
                        </p>
                        <p class="num payment">
                          <span>500</span>M
                        </p>
                      </li>
                      <li>
                        <p class="tool">
                          GO마일리지
                        </p>
                        <p class="num payment">
                          <span>1,000</span>M
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li class="sum_area">
                    <p class="sub_title">
                      결제금액
                    </p>
                    <p class="num payment">
                      <span>20,200</span>원
                    </p>
                  </li>
                </ul>
              </uu-button>
            </div>
          </uu-tab>
        </uu-tabs>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>