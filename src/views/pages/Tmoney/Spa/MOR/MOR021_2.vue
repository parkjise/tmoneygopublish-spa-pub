<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import UuInput from '@/components/uu-components/UuInput.vue';

const input01 = ref('100M')
const input02 = ref('미조회')
const input03 = ref()
</script>
<template>
  <!-- header -->
  <sub-header title="GO마일리지 전환" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bottom_btns">
      <div class="go_mileage_transform">
        <round-box hide-title>
          <uu-input
            v-model="input01"
            label="나의 GO마일리지"
            readonly
          />
          <uu-input
            v-model="input02"
            label="나의 T마일리지"
            readonly
          />
          <div class="point_area">
            <uu-input
              v-model="input03"
              label="전환할 GO마일리지"
              placeholder="전환할 GO마일리지"
            />
            <uu-button
              label="모두전환"
              btn-style="line"
              size="lg"
            />
          </div>
        </round-box>
        <div class="ticket_notice">
          <p class="title">
            <uu-ic
              size="16"
              name="exclamation_gray090"
            />
            마일리지 전환 유의사항
          </p>
          <ul>
            <li class="red">
              T마일리지 전환 완료 후 취소 불가 합니다.
            </li>
            <li>
              GO마일리지는 10M 단위로 전환합니다.<br>
              (GO마일리지 10M → T마일리지 10M)
            </li>
            <li>전환할 GO마일리지는 보유한 GO마일리지 금액을 초과할 수 없습니다.</li>
          </ul>
        </div>
      </div>
      <div class="btn_area">
        <uu-button
          btn-color="primary"
          size="xl"
          label="전환 신청하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>