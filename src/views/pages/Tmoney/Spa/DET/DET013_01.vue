<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'

</script>
<template>
  <!-- header -->
  <sub-header
    title="이용권 사용내역"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main det usage_detail_page">
    <div class="container no_padding">
      <ul class="ticket_list">
        <li>
          <div class="ticket_title">
            정기권(7일/1시간권)
            <div class="status primary">
              미사용
            </div>
          </div>
          <ul class="normal_list">
            <li>
              <div class="list_tit">
                결제일
              </div>
              <div class="list_txt">
                2021.04.01
              </div>
            </li>
            <li>
              <div class="list_tit">
                사용기간
              </div>
              <div class="list_txt">
                -
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="ticket_title">
            일일 회원(1시간권)
            <div class="status red">
              환불완료
            </div>
          </div>
          <ul class="normal_list">
            <li>
              <div class="list_tit">
                결제일
              </div>
              <div class="list_txt">
                2021.04.01
              </div>
            </li>
            <li>
              <div class="list_tit">
                사용기간
              </div>
              <div class="list_txt">
                -
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="ticket_title">
            일일 회원(1시간권)
            <div class="status">
              사용
            </div>
          </div>
          <ul class="normal_list">
            <li>
              <div class="list_tit">
                결제일
              </div>
              <div class="list_txt">
                2021.04.01
              </div>
            </li>
            <li>
              <div class="list_tit">
                사용기간
              </div>
              <div class="list_txt">
                -
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>