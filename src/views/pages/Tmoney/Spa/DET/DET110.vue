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
      <div class="coupon_area">
        <form>
          <uu-radio
            v-model="radio01"
            value="선택 안함"
            label="선택 안함"
            class="no_select"
          />
          <uu-radio
            v-model="radio01"
            value="coupon01"
          >
            <template #label>
              <span class="discount">5,000원 할인 (사용조건 없을 때)</span>
              <span class="date">2021.09.20 ~ 2021.10.20</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="coupon02"
          >
            <template #label>
              <span class="discount">5,000원 할인 (사용조건 1줄)</span>
              <span class="case">카드 간편결제 시 사용가능</span>
              <span class="date">2021.09.20 ~ 2021.10.20</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="coupon03"
          >
            <template #label>
              <span class="discount">5,000원 할인 (사용조건 2줄)</span>
              <span class="case">카드 간편결제 시 사용가능</span>
              <span class="case">서울-대구 구간 적용</span>
              <span class="date">2021.09.20 ~ 2021.10.20</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="checked"
          >
            <template #label>
              <span class="discount">5,000원 할인 (사용조건 2줄)</span>
              <span class="case">카드 간편결제 시 사용가능</span>
              <span class="case">서울-대구 구간 적용</span>
              <span class="date">2021.09.20 ~ 2021.10.20</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            disabled
            value="coupon04"
          >
            <template #label>
              <span class="discount">5,000원 할인 (사용조건 2줄)</span>
              <span class="case">카드 간편결제 시 사용가능</span>
              <span class="case">서울-대구 구간 적용</span>
              <span class="date">2021.09.20 ~ 2021.10.20</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="coupon05"
            class="has_btn"
          >
            <template #label>
              <span class="discount">5,000원 할인</span>
              <span class="case">카드 간편결제 시 사용가능</span>
              <span class="case">서울-대구 구간 적용</span>
              <span class="date">2021.09.20 ~ 2021.10.20</span>
            </template>
            <template #button>
              <uu-button
                btn-style="line"
                size="xs"
              >
                <uu-ic
                  size="14"
                  name="download"
                />
                발급
              </uu-button>
            </template>
          </uu-radio>
        </form>
      </div>
      <div class="btn_area">
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