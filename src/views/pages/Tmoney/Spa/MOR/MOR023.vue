<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuBadge from '@/components/uu-components/UuBadge.vue';

const tabItem = ['전체', '고속·시외', '택시', '자전거', '킥보드', '항공', '렌터카', '기차']
const input01 = ref()
</script>
<template>
  <!-- header -->
  <sub-header
    title="쿠폰"
    right-content
  >
    <template #header_right>
      <uu-button
        btn-style="none"
        label="지난 쿠폰"
        class="btn_payment_method"
      />
    </template>
  </sub-header>
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding">
      <div class="coupon">
        <form>
          <uu-input
            v-model="input01"
            label="쿠폰등록"
            placeholder="쿠폰번호 입력"
          />
          <uu-button
            size="lg"
            label="등록"
            btn-style="line"
          />
        </form>
        <uu-tabs class="depth2_tab">
          <uu-tab
            v-for="(tab, index) in tabItem"
            :key="index"
            :title="tab"
          >
            <div class="coupon_list">
              <!-- 발급받은 쿠폰 / 사용조건 1줄 -->
              <round-box hide-title>
                <div class="coupon_data">
                  <p>우리동네 여행자 등급쿠폰</p>
                  <p class="title">
                    1,000원 할인 (최소 2만원 결제)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                    <uu-Badge label="택시" />
                    <uu-Badge label="자전거" />
                    <uu-Badge label="킥보드" />
                  </div>
                </div>
              </round-box>
              <!-- 미발급 쿠폰 / 사용조건 2줄 -->
              <round-box hide-title>
                <div class="coupon_data">
                  <p>신규 노선 할인 이벤트</p>
                  <p class="title">
                    10% 할인 (최대 2,000원)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                    <p>대진교통 예매 시 사용</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                  </div>
                </div>
                <div class="coupon_status">
                  <uu-button
                    btn-style="line"
                    size="xs"
                  >
                    <uu-ic
                      size="14"
                      name="download"
                    />
                    <span>발급</span>
                  </uu-button>
                </div>
              </round-box>
              <!-- 미발급 쿠폰 / 사용조건 없음 -->
              <round-box hide-title>
                <div class="coupon_data">
                  <p>친구초대 이벤트</p>
                  <p class="title">
                    2,000원 할인
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="택시" />
                  </div>
                </div>
                <div class="coupon_status">
                  <uu-button
                    btn-style="line"
                    size="xs"
                  >
                    <uu-ic
                      size="14"
                      name="download"
                    />
                    <span>발급</span>
                  </uu-button>
                </div>
              </round-box>
              <!-- 발급받은 쿠폰 / 선물가능 -->
              <round-box hide-title>
                <div class="coupon_data">
                  <p>티머니GO 2주년 축하 쿠폰</p>
                  <p class="title">
                    20% 할인 (최대 5,000원)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                    <uu-Badge label="택시" />
                    <uu-Badge label="자전거" />
                  </div>
                </div>
                <div class="coupon_status">
                  <uu-button
                    btn-style="line"
                    size="xs"
                  >
                    <span>선물하기</span>
                  </uu-button>
                </div>
              </round-box>
              <!-- 선물받은 쿠폰 -->
              <round-box hide-title>
                <div class="coupon_data">
                  <p>티머니GO 2주년 축하 쿠폰</p>
                  <p class="title">
                    20% 할인 (최대 5,000원)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                    <uu-Badge label="택시" />
                    <uu-Badge label="자전거" />
                  </div>
                </div>
                <div class="coupon_status">
                  <div class="gift">
                    GIFT
                  </div>
                </div>
              </round-box>
              <!-- 지난 쿠폰 / 사용 -->
              <round-box
                hide-title
                class="disabled"
              >
                <div class="coupon_data">
                  <p>티머니GO 2주년 축하 쿠폰</p>
                  <p class="title">
                    20% 할인 (최대 5,000원)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                    <uu-Badge label="택시" />
                    <uu-Badge label="자전거" />
                  </div>
                </div>
                <div class="coupon_status">
                  <div class="use">
                    사용
                  </div>
                </div>
              </round-box>
              <!-- 지난 쿠폰 / 만료 -->
              <round-box
                hide-title
                class="disabled"
              >
                <div class="coupon_data">
                  <p>티머니GO 2주년 축하 쿠폰</p>
                  <p class="title">
                    20% 할인 (최대 5,000원)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                    <uu-Badge label="택시" />
                    <uu-Badge label="자전거" />
                  </div>
                </div>
                <div class="coupon_status">
                  <div class="use">
                    만료
                  </div>
                </div>
              </round-box>
              <!-- 지난 쿠폰 / 선물 -->
              <round-box
                hide-title
                class="disabled"
              >
                <div class="coupon_data">
                  <p>티머니GO 2주년 축하 쿠폰</p>
                  <p class="title">
                    20% 할인 (최대 5,000원)
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="고속·시외" />
                    <uu-Badge label="택시" />
                    <uu-Badge label="자전거" />
                  </div>
                </div>
                <div class="coupon_status">
                  <div class="use">
                    선물
                  </div>
                </div>
              </round-box>
              <!-- 미발급 쿠폰 / 시즌 이미지 -->
              <round-box hide-title>
                <div class="coupon_data">
                  <p>봄맞이 특별 쿠폰</p>
                  <p class="title">
                    1,000원 할인
                  </p>
                  <div class="desc_area">
                    <p class="date">
                      사용기간 : 2022.09.20 ~ 2022.10.20
                    </p>
                    <p>티머니페이 결제 시 사용가능</p>
                  </div>
                  <div class="badge_area">
                    <uu-Badge label="자전거" />
                  </div>
                </div>
                <div class="coupon_status">
                  <uu-button
                    btn-style="line"
                    size="xs"
                  >
                    <uu-ic
                      size="14"
                      name="download"
                    />
                    <span>발급</span>
                  </uu-button>
                </div>
                <div class="coupon_img">
                  <img
                    src="/src/assets/images/temp/temp_mor_coupon01.png"
                    alt="임시 이미지"
                  >
                </div>
              </round-box>
            </div>
            <div class="ticket_notice">
              <p class="title">
                <uu-ic
                  size="16"
                  name="exclamation_gray090"
                />
                꼭 읽어주세요!
              </p>
              <ul>
                <li>쿠폰 적용은 서비스 결제 시 적용 가능합니다.</li>
                <li>결제 및 이용이 완료된 건에는 쿠폰을 적용할 수 없습니다.</li>
                <li>
                  할인 금액보다 이용 금액이 적은 경우 차액은 환불되지
                  않습니다.
                </li>
                <li>
                  쿠폰별 사용 기간이 상이하며, 사용기간이 지난 쿠폰은
                  재발행되지 않습니다.
                </li>
              </ul>
            </div>
          </uu-tab>
        </uu-tabs>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>