<script setup lang="ts">
import { reactive } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import roundBox from '@/components/layout/RoundBox.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
import uuSwiper, { type swiperType } from '@/components/uu-components/UuSwiper.vue'
import { type SwiperOptions } from 'swiper/types';
import { SwiperSlide } from 'swiper/vue';

// Event
const onSwiper = (swiper: swiperType) => {
  console.log(swiper.activeIndex)
}

// Custom Options
const options : SwiperOptions = reactive({
    pagination: {
      clickable: false
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    autoplay: {
      delay: 2500
    },
  })
</script>
<template>
  <!-- header -->
  <sub-header title="신용(체크)카드 등록/변경" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <!-- round-box컴포넌트 regist 클래스 삭제 -->
      <round-box title="신용(체크) 카드번호를 입력하세요.">
        <div class="tmoney_regist card">
          <!-- 카드 로고 -->
          <div class="card_logo">
            <img
              src="/src/assets/images/temp/temp_card_logo.png"
              alt="임시 카드 로고"
            >
            <span>비씨카드</span>
          </div>
          <!-- // 카드 로고 -->
          <form>
            <label
              for="tmoney_input01"
              class="tmoney_label sr_only"
            >티머니 카드번호 1번째 4자리</label>
            <input
              id="tmoney_input01"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <label
              for="tmoney_input02"
              class="tmoney_label sr_only"
            >티머니 카드번호 2번째 4자리</label>
            <input
              id="tmoney_input02"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <label
              for="tmoney_input03"
              class="tmoney_label sr_only"
            >티머니 카드번호 3번째 4자리</label>
            <input
              id="tmoney_input03"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <label
              for="tmoney_input04"
              class="tmoney_label sr_only"
            >티머니 카드번호 4번째 4자리</label>
            <input
              id="tmoney_input04"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
          </form>
        </div>
      </round-box>
      <round-box hide-title>
        <div class="tmoney_regist card agree">
          <uu-checkbox
            label="후불 교통카드 등록 전체 동의"
            value="unchecked"
            class="all_checkbox"
          />
          <ul class="flex_area">
            <li>
              <uu-checkbox
                label="개인정보 수집 및 이용약관 동의"
                value="checkbox01"
                checkline
              />
              <uu-button>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-checkbox
                label="타인의 카드를 도용하여 등록 시 법적 처벌을 받을 수 있습니다."
                value="checkbox02"
                checkline
              />
            </li>
            <li>
              <uu-checkbox
                label="교통카드 정보를 부정확하게 입력한 경우 등록 혜택을 받으실 수 없습니다."
                value="checkbox03"
                checkline
              />
            </li>
          </ul>
        </div>
      </round-box>
      <div class="tmoney_regist card slide">
        <uu-swiper
          type="custom"
          class="swiper_banner"
          :options="options"
          @slide-change="onSwiper"
        >
          <swiper-slide
            v-for="index in 3"
            :key="index"
          >
            <div class="swiper_inner">
              <uu-button>
                <img
                  src="/src/assets/images/temp/temp_mor_banner01.png"
                  alt="임시 배너 이미지"
                >
              </uu-button>
            </div>
          </swiper-slide>
        </uu-swiper>
      </div>
      <div class="tmoney_regist card ticket_notice">
        <p class="title">
          <uu-ic
            size="16"
            name="exclamation_gray090"
          />
          유의사항
        </p>
        <ul>
          <li>
            본인 명의의 개인 신용카드 또는 체크카드만 등록이 가능합니다.
          </li>
          <li>
            입력하신 카드번호에 따라 카드사 정보가 표출되며, 일부 카드는 카드 운영대행사가 표출될 수 있습니다.
          </li>
          <li>
            타인의 카드를 무단으로 등록하신 경우, 등록된 카드가 별도 통보 없이 삭제 처리 될 수 있습니다.
          </li>
        </ul>
      </div>
      <uu-button
        label="카드등록"
        btn-color="primary"
        size="xl"
        class="primary_full"
      />
    </div>
  </main>
  <!-- // main -->
</template>