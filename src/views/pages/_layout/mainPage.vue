<script setup lang="ts">
import mainHeader from '@/components/layout/MainHeader.vue'

</script>
<template>
  <!-- header -->
  <mainHeader />
  <!-- // header -->
  <!-- main: 각 카테고리명 class 추가 후 사용 -->
  <main class="main">
    <!-- 중첩 클래스 유형
      .container: 기본 좌우 패딩 2rem
      .bottom_nav: bottom_nav 높이만큼 하단 여백 추가
      .bottom_btns: btn-area 높이만큼 하단 여백 추가 (fixed일때 사용)
      .no_padding: padding 0 
      .pt12: 상단 패딩 1.2rem
      .pt16: 상단 패딩 1.6rem
      .bg_white: 배경색상 #FFFFFF
    -->
    <div class="container no_padding">
      Main
    </div>
    <!-- bottom nav: client or artist -->
    <!-- // bottom nav -->
  </main>
  <!-- // main -->
  <!-- footer -->
  <!-- // footer -->
</template>