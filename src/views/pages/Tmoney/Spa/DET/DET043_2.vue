<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
import { type SwiperOptions } from 'swiper/types';
import uuSwiper from '@/components/uu-components/UuSwiper.vue'
import { SwiperSlide } from 'swiper/vue';

const input01 = ref('')
const radio01 = ref('모바일 티머니')
const isActive = ref(true)
const isActive2 = ref(false)
const isActive3 = ref(true)
const isActive4 = ref(false)
const options: SwiperOptions = ({
  slidesPerView: 'auto',
  spaceBetween: 8,
  pagination: {
  type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '<span class="swiper_pagination_separator">/</span>' +
              '<span class="' + totalClass + '"></span>';
    }
  },
})
</script>
<template>
  <!-- header -->
  <sub-header
    title="결제하기"
    right-content
  >
    <template #header_right>
      <uu-button
        btn-style="none"
        label="결제수단"
        class="btn_payment_method"
      />
    </template>
  </sub-header>
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container bottom_btns">
      <div class="payment_area">
        <round-box title="결제내역">
          <ul class="payment_list">
            <li>
              <p>정기-365일(1시간권)</p>
              <p class="num">
                <span>30,000</span>원
              </p>
            </li>
          </ul>
        </round-box>
        <round-box
          title="쿠폰 및 GO마일리지"
          class="coupon"
        >
          <div class="coupon_area">
            <uu-button
              btn-style="line"
              class="btn_coupon"
              disabled
            >
              <span>적용 가능한 쿠폰 1장</span>
              <uu-ic
                size="20"
                name="arrow"
                direction="left"
              />
            </uu-button>
            <form>
              <uu-input
                v-model="input01"
                label="btn-clear"
                placeholder=""
                btn-clear
                hide-label
                disabled
              />
              <uu-button
                label="모두 사용"
                btn-style="line"
                size="xl"
                class="btn_use"
                disabled
              />
            </form>
            <div class="has_mileage">
              <uu-ic
                size="20"
                name="mileage"
              />
              <p class="title">
                보유 <span>GO</span>마일리지
              </p>
              <p>6,823M</p>
            </div>
          </div>
        </round-box>
        <round-box title="결제수단">
          <div class="radio_area">
            <!-- 모바일 티머니 -->
            <div class="radio_box tmoney">
              <uu-radio
                v-model="radio01"
                :value="'모바일 티머니'"
              >
                <template #label>
                  <span class="logo_area">
                    <img
                      src="/src/assets/images/logo_mobiletmoney.png"
                      alt="Mobile Tmoney 로고"
                    >
                  </span>
                </template>
              </uu-radio>
              <div class="show_area">
                <p class="desc">
                  <span>티머니Pay&GO(신한카드)로 결제 시</span><br>
                  고속/시외,자전거,킥보드,택시 20% 결제일 <br>
                  청구 할인
                </p>
                <div class="banner">
                  <img
                    src="/src/assets/images/temp/temp_pay_banner01.png"
                    alt="임시 배너"
                  >
                </div>
              </div>
              <div
                v-if="radio01 === '모바일 티머니'"
                class="hide_area"
              >
                <uu-swiper
                  type="custom"
                  :options="options"
                >
                  <swiper-slide
                    v-for="(item, index) in 3"
                    :key="index"
                  >
                    <div class="swiper_inner">
                      <div
                        class="card"
                      >
                        <p class="title">
                          페이머니
                        </p>
                        <div class="balance_area">
                          <p class="balance_title">
                            현재잔액
                          </p>
                          <p class="balance">
                            <span>0</span>원
                          </p>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </uu-swiper>
                <form>
                  <uu-input
                    v-model="input01"
                    label="btn-clear"
                    placeholder="추가 T마일리지 사용"
                    btn-clear
                    hide-label
                    disabled
                  />
                  <uu-button
                    label="모두 사용"
                    btn-style="line"
                    size="xl"
                    disabled
                    class="btn_use"
                  />
                </form>
                <div class="has_mileage">
                  <uu-ic
                    size="20"
                    name="mileage"
                  />
                  <p class="title">
                    보유 <span>GO</span>마일리지
                  </p>
                  <p>0M</p>
                  <p class="desc">
                    (10M 단위 사용 가능)
                  </p>
                </div>
                <p class="pay_desc">
                  (페이머니와 T마일리지 결제 후 취소 시 페이머니로
                  전액 충전됩니다.)
                </p>
              </div>
            </div>
            <!-- 네이버페이 -->
            <div class="radio_box naverpay">
              <uu-radio
                v-model="radio01"
                :value="'네이버페이'"
              >
                <template #label>
                  <span class="logo_area">
                    <img
                      src="/src/assets/images/logo_naverpay.svg"
                      alt="네이버페이 로고"
                    >
                  </span>
                </template>
              </uu-radio>
              <div
                v-if="radio01 === '네이버페이'"
                class="hide_area"
              >
                <uu-button
                  btn-style="line"
                  size="xl"
                  class="btn_pay"
                  :class="[isActive ? 'active' : '']"
                  @click="isActive = true, isActive2 = false"
                >
                  <span>간편등록 결제</span>
                  <span class="card">현대(122*)</span>
                </uu-button>
                <uu-button
                  btn-style="line"
                  size="xl"
                  class="btn_pay"
                  :class="[isActive2 ? 'active' : '']"
                  @click="isActive = false, isActive2 = true"
                >
                  <span>네이버페이 결제</span>
                </uu-button>
              </div>
            </div>
            <!-- 토스페이 -->
            <div class="radio_box tosspay">
              <uu-radio
                v-model="radio01"
                :value="'토스페이'"
              >
                <template #label>
                  <span class="logo_area">
                    <img
                      src="/src/assets/images/logo_tosspay.svg"
                      alt="토스페이 로고"
                    >
                  </span>
                </template>
              </uu-radio>
              <div
                v-if="radio01 === '토스페이'"
                class="hide_area"
              >
                <p class="toss_desc">
                  토스페이 생애 첫 결제시 <span>2,000</span>원 캐시백
                </p>
                <uu-button
                  btn-style="line"
                  size="xl"
                  class="btn_pay"
                  :class="[isActive3 ? 'active' : '']"
                  @click="isActive3 = true, isActive4 = false"
                >
                  <span>간편등록 결제</span>
                  <span class="card">간편등록</span>
                </uu-button>
                <uu-button
                  btn-style="line"
                  size="xl"
                  class="btn_pay"
                  :class="[isActive4 ? 'active' : '']"
                  @click="isActive3 = false, isActive4 = true"
                >
                  <span>토스앱 결제</span>
                </uu-button>
              </div>
            </div>
            <!-- 간편결제 -->
            <div class="radio_box credit">
              <uu-radio
                v-model="radio01"
                :value="'간편결제'"
                label="신용/체크 등록 간편결제"
              />
              <div
                v-if="radio01 === '간편결제'"
                class="hide_area"
              >
                <uu-swiper
                  type="custom"
                  :options="options"
                >
                  <swiper-slide>
                    <div class="swiper_inner">
                      <div class="card credit shinhan">
                        <p class="title">
                          <span class="main_badge">
                            <img
                              src="/src/assets/images/img_badge_maincard.png"
                              alt="주카드"
                            >
                          </span>
                          <span>
                            <img
                              src="/src/assets/images/logo_shinhancard.svg"
                              alt="신한카드 로고"
                            >
                          </span>
                        </p>
                        <div class="card_info">
                          <p class="card_num">
                            <span>1234</span>
                            <span class="dot">●●●●</span>
                            <span class="dot">●●●●</span>
                            <span>5678</span>
                          </p>
                          <p class="card_category">
                            신한 급여카드
                          </p>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="swiper_inner">
                      <uu-button class="card">
                        <uu-ic
                          size="40"
                          name="plus"
                        />
                        신용/체크카드 등록
                      </uu-button>
                    </div>
                  </swiper-slide>
                </uu-swiper>
                <uu-button
                  class="btn_installment"
                  btn-style="line"
                  disabled
                >
                  일시불
                  <uu-ic
                    size="20"
                    name="arrow"
                  />
                </uu-button>
                <div class="notice">
                  <p class="badge">
                    안내
                  </p>
                  <p>
                    티머니 Pay & GO 신한카드는 티머니페이를
                    등록하여 결제 시 할인 적용됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </round-box>
        <round-box title="결제상세">
          <ul class="payment_list">
            <li>
              <p class="title">
                정기-365일(1시간권)
              </p>
              <p class="num">
                <span>30,000</span>원
              </p>
            </li>
            <li>
              <p>최종 결제금액</p>
              <p class="num">
                <span>30,000</span>원
              </p>
            </li>
          </ul>
        </round-box>
        <round-box hide-title>
          <div class="checkbox_area">
            <div class="all_checkbox">
              <uu-checkbox
                label="전체 동의"
                value="전체 동의"
              />
              <uu-button
                btn-style="none"
                label="이용약관 상세보기"
              />
            </div>
            <ul class="checkbox_list">
              <li>
                <uu-checkbox
                  label="추가요금 자동결제, 환불규정, 이용약관에 동의합니다."
                  value="unchecked"
                  checkline
                />
              </li>
              <li>
                <uu-checkbox
                  label="모바일티머니 잔액 부족 시 연결된 결제수단으로 자동충전됩니다."
                  value="unchecked"
                  checkline
                />
              </li>
              <li>
                <uu-checkbox
                  label="만 13세 미만 사용자는 사고 발생 시 보험 적용을 받을 수 없는 등의 불이익이 있습니다."
                  value="unchecked"
                  checkline
                />
              </li>
            </ul>  
          </div>
        </round-box>
        <div class="ticket_notice">
          <p class="title">
            <uu-ic
              size="16"
              name="exclamation_gray090"
            />
            이용권 사용 안내
          </p>
          <ul>
            <li>이용시간 초과시, 5분당 200원이 과금됩니다.</li>
            <li>미납금이 있을 경우, 우선적으로 미납금이 차감됩니다.</li>
          </ul>
        </div>
      </div>
      <div class="btn_area">
        <uu-button
          size="xl"
          btn-color="primary"
          label="결제하기"
        />
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>