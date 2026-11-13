<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
</script>
<template>
  <!-- header -->
  <sub-header title="GO마일리지 내역" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding">
      <div class="go_mileage">
        <round-box hide-title>
          <div class="total_mileage">
            <p class="text">
              <uu-ic
                size="20"
                name="mileage"
              />
              GO마일리지
            </p>
            <p class="mileage">
              <strong>0</strong>M
            </p>
          </div>
          <ul class="ticket_notice">
            <li>
              <uu-ic
                size="16"
                name="exclamation_gray070"
              />
              최초 적립 월로부터 12개월 뒤 소멸됩니다.
            </li>
            <li>
              <uu-ic
                size="16"
                name="exclamation_gray070"
              />
              GO마일리지는 월 최대 5,000M까지 적립 가능합니다.
            </li>
          </ul>
          <uu-button
            btn-style="line"
            class="btn_notice"
          >
            GO마일리지 적립/사용 안내
            <uu-ic
              size="20"
              name="arrow"
              direction="left"
            />
          </uu-button>
        </round-box> 
        <div class="no_data">
          <uu-ic
            size="48"
            name="exclamation"
          />
          <p>적립/사용된 GO마일리지가 없습니다.</p>
        </div>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>