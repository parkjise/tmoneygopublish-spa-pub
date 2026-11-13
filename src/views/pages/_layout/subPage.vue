<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

const onSubHeader = (value: string) => {
  console.log(value)
}
</script>
<template>
  <!-- header -->
  <subHeader
    title="Sub Page"
    @click="onSubHeader"
  />
  <!-- // header -->
  <!-- main: 각 카테고리명 class 추가 후 사용 -->
  <main class="main">
    <!-- 중첩 클래스 유형
      .container: 기본 좌우 패딩 2rem
      .bottom_nav: bottom_nav 높이만큼 하단 여백 추가
      .bottom_btns: btn-area 높이만큼 하단 여백 추가 (fixed일때 사용)
      .no_padding: padding 0 
    -->
    <div class="container bottom_btns">
      <div>
        SubPage
      </div>
      <div class="btn_area btn_bottom btn_fixed">
        <uu-button
          btn-style="line"
          size="lg"
          label="취소"
        />
        <uu-button
          btn-color="primary"
          size="lg"
          label="결제"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>