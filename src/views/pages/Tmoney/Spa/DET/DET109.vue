<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const radio01 = ref('checked')
</script>
<template>
  <!-- header -->
  <sub-header
    title="쿠폰 선택"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container bottom_btns">
      <div class="coupon_area has_bottom">
        <form>
          <uu-radio
            v-model="radio01"
            value="checked"
            label="선택 안함"
            class="no_select"
          />
        </form>
        <div class="no_data">
          <uu-ic
            size="48"
            name="exclamation"
          />
          <p>적용 가능한 쿠폰이 없습니다.</p>
        </div>
      </div>
      <div class="btn_area has_bg">
        <ul class="expected_amount">
          <li>
            <p>예상요금(택시) 이용권 금액(따릉이)</p>
            <p><strong>6,900</strong>원</p>
          </li>
          <li>
            <p>예상 결제금액</p>
            <p><strong>6,210</strong>원</p>
          </li>
        </ul>
        <uu-button
          size="xl"
          btn-color="primary"
          label="적용하기"
        />
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>