<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
</script>
<template>
  <!-- header -->
  <sub-header
    title="1:1 문의"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div
      class="container"
    >
      <ul class="inquiry_list">
        <li>
          <button type="button">
            <div class="inquiry_title_wrap">
              <div class="inquiry_title">
                GO마일리지 사용/내역조회
              </div>
            </div>
            <div class="inquiry_txt">
              테스트
            </div>
            <div class="split">
              <span class="date">2023.03.02 14:34</span>
              <span class="status">답변대기</span>
            </div>
            <button
              type="button"
              class="go_detail_btn"
            >
              <uu-ic
                name="arrow_right"
                size="16"
                color="gray"
              />
            </button>
          </button>
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>