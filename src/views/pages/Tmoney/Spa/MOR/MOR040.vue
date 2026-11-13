<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
</script>
<template>
  <!-- header -->
  <sub-header title="환승리워드 안내" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white">
      <div class="transfer_reward_notice">
        <h4>리워드는 어떻게 받나요?</h4>
        <div class="step step01">
          <div class="step_text">
            Step <span>01</span>
          </div>
          <p class="desc">
            자주 쓰는 교통카드를 등록해주세요.
          </p>
          <dl>
            <dt>선불카드</dt>
            <dd>아이폰 스티커티머니, 티머니페이, 모바일티머니, 티머니카드</dd>
          </dl>
          <dl>
            <dt>후불카드</dt>
            <dd>삼성페이, 신용카드</dd>
          </dl>
          <div class="img_area">
            <img
              src="/src/assets/images/img_reward_01.png"
              alt=""
            >
          </div>
        </div>
        <div class="step step02">
          <div class="step_text">
            Step <span>02</span>
          </div>
          <p class="desc">
            대중교통 또는 자전거를 이용해 주세요.
          </p>
          <p>
            -티머니선불카드 등록 : 일 최대 <span>100M</span>, 월 최대 <span>1,500M</span> 적립
          </p>
          <p>
            -후불 교통카드 등록 : 일 최대 <span>50M</span>, 월 최대 <span>1,500M</span> 적립
          </p>
          <p>
            * 주 <span>3</span>일 이상 이용자 대상, 매주 수요일 마일리지 지급
          </p>
          <p>
            * 따릉이는 <span>3</span>분 이상 대여 시 마일리지 지급
          </p>
          <div class="img_area">
            <img
              src="/src/assets/images/img_reward_02.png"
              alt=""
            >
          </div>
          <p>대중교통과 티머니GO 모빌리티 서비스를 함께 이용해 주세요.</p>
          <p>
            (자전거 or 킥보드 or 택시 환승 : <span>30</span>분 이내 /
          </p>
          <p>
            고속·시외 환승 : <span>60</span>분 이내 / 이용 순서 무관)
          </p>
          <p>
            * <span>1</span>회당 / 일 최대 <span>200M</span> / 월 최대 <span>3,500M</span> 적립
          </p>
          <p>
            * 서비스별 적립 가능 환승 리워드는 월 최대 <span>2,000M</span>
          </p>
          <div class="img_area">
            <img
              src="/src/assets/images/img_reward_03.png"
              alt=""
            >
          </div>
        </div>
        <div class="step step03">
          <div class="step_text">
            Step <span>03</span>
          </div>
          <p class="desc">
            리워드를 적립 받으세요.
          </p>
          <p>
            GO마일리지가 자동 적립됩니다. (<span>2</span>영업일 이후)
          </p>
          <div class="img_area">
            <img
              src="/src/assets/images/img_reward_04.png"
              alt=""
            >
          </div>
        </div>
        <uu-button
          size="xl"
          btn-color="secondary"
        >
          더 알아보기
          <uu-ic
            size="16"
            name="arrow_primary"
          />
        </uu-button>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>