<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';

</script>
<template>
  <!-- header -->
  <sub-header
    title="혜택"
    hide-back
  />
  <!-- // header -->
  <!-- main -->
  <main class="main bef">
    <div class="container">
      <div class="bef_box">
        <uu-button
          href="#"
          class="btn_mileage"
          btn-style="none"
          label="나의 마일리지"
        >
          <uu-ic
            size="24"
            name="mileage"
          />
          <span class="my_mileage">
            <span class="title">나의 마일리지</span>
            <span class="point_area">
              <span class="mileage">6,700</span>
              <span class="point">M</span>
            </span>
          </span>
          <uu-ic
            size="24"
            name="navi_right"
          />
        </uu-button>
      </div>
      <!-- 출석현황 데이터 있는 경우 -->
      <div class="bef_box">
        <uu-button
          href="#"
          class="btn_attend"
          btn-style="none"
          label="이번 달 출석 현황"
        >
          <span class="top">
            <span class="text_area">
              <span class="title">이번 달 출석 현황</span>
              <span class="month_area">
                <span class="attend">2</span>
                <span class="month">&nbsp;/ 31</span>
              </span>
            </span>
            <!-- [240423] 이미지 수정 -->
            <span class="img_area">
              <img
                src="/src/assets/images/bef_attend.png"
                alt=""
              >
            </span>
            <!-- // [240423] 이미지 수정 -->
          </span>
          <span class="bottom">지금 바로 출석하고 마일리지 받기</span>
        </uu-button>
      </div>
      <!-- // 출석현황 데이터 있는 경우 -->
      <div class="bef_box">
        <uu-button
          href="#"
          class="btn_banner card_regist"
          btn-style="none"
          label="banner 영역"
        >
          <!-- [240423] 이미지 수정 -->
          <span class="img_area">
            <img
              src="/src/assets/images/temp/temp_bef01.png"
              alt=""
            >
          </span>
          <!-- // [240423] 이미지 수정 -->
        </uu-button>
      </div>
      <div class="bef_box">
        <uu-button
          href="#"
          class="btn_banner go_mileage"
          btn-style="none"
          label="banner 영역"
        >
          <!-- [240423] 이미지 수정 -->
          <span class="img_area">
            <img
              src="/src/assets/images/temp/temp_bef02.png"
              alt=""
            >
          </span>
          <!-- // [240423] 이미지 수정 -->
        </uu-button>
      </div>
      <!-- 이벤트 데이터 있는 경우 -->
      <div class="bef_box">
        <uu-button
          class="btn_event onda"
          btn-style="none"
          href="#"
          label="온다택시 더블혜택"
        >
          <span class="img_area" />
          <span class="title">온다택시 더블혜택</span>
          <span class="caption">첫 고객 50% 할인, 누구나 10% 적립</span>
          <span class="more">
            자세히 보기
            <uu-ic
              size="24"
              name="navi_right"
            />
          </span>
        </uu-button>
      </div>
      <!-- // 이벤트 데이터 있는 경우 -->
      <!-- [240423] 풀이미지일 경우 .full 추가 -->
      <div class="bef_box">
        <uu-button
          class="btn_event full tmoney_go"
          btn-style="none"
          href="#"
          label="티머니 GO는 우정을 타GO"
        >
          <span class="img_area">
            <img
              src="/src/assets/images/temp/temp_bef03.png"
              alt=""
            >
          </span>
        </uu-button>
      </div>
      <!-- // [240423] 풀이미지일 경우 추가 -->
      <div class="bef_box">
        <uu-button
          class="btn_event tmoney_pay"
          btn-style="none"
          href="#"
          label="티머니 Pay&GO 신한카드"
        >
          <span class="img_area" />
          <span class="title">티머니 Pay&GO 신한카드</span>
          <span class="caption">매달 고속/시외 20% 할인 받는 카드가 있다고?</span>
          <span class="more">
            자세히 보기
            <uu-ic
              size="24"
              name="navi_right"
            />
          </span>
        </uu-button>
      </div>
      <div class="bef_box">
        <uu-button
          href="#"
          class="btn_all_event"
          label="이벤트 전체보기"
        >
          <span>이벤트 전체보기</span>
          <uu-ic
            size="24"
            name="navi_right"
          />
        </uu-button>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>