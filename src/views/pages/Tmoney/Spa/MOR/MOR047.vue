<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
</script>
<template>
  <!-- header -->
  <sub-header title="공지사항" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white no_padding">
      <div class="notice_area detail">
        <div class="notice_title">
          <div class="title">
            고속/시외버스 보훈권종 부분취소 불가 안내
            <span class="new" />
          </div>
          <div class="info">
            <p class="category">
              고속/시외
            </p>
            <p class="date">
              2024.01.04
            </p>
          </div>
        </div>
        <div class="notice_text">
          <div class="img_area">
            <img
              src="/src/assets/images/img_reward_01.png"
              alt="임시 이미지"
            >
          </div>
          <p>
            안녕하세요. 티머니GO입니다.<br>
            티머니GO  고속/시외버스 보훈 권종 예매 관련 아래와 같이
            안내드립니다.
          </p>
          <p>
            1. 적용사항 : 특정  보훈권종 다인 예매 시 부분취소 불가 처리
            (전체 취소만 가능)
          </p>
          <p>
            2.사유 : 보훈권종 동반 1인 할인 시, 에매 후 보훈 대상자  
            부분취소 후 동반 1인만 할인 적용 사례 방지
          </p>
          <p>3.적용 시점 : 2023년 3월 7일 부터</p>
          <p>
            보다 편리한 서비스를 제공하는 티머니GO가 되겠습니다.
            감사합니다.
          </p>
        </div>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>