<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuCounter from '@/components/uu-components/UuCounter.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

const remainTicket = ref(10);
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="인원 선택 바텀시트"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-header
  >
    <template #modal_body>
      <div class="num_count_info">
        <div class="product_date">
          2024.04.06
        </div>
        <button
          type="button"
          class="cal_btn"
        >
          변경
        </button>
        <div
          class="ticket_remain"
          :class="{'soldout':remainTicket == 0}"
        >
          {{ remainTicket !== 0?`잔여매수 `+ remainTicket +`명`:'매진' }}
        </div>
      </div>
      <div class="num_count_area">
        <div class="age_group">
          <div class="age_assort">
            일반
          </div>
          <div class="price">
            39,700원
          </div>
          <uu-counter
            :max-count="10"
          />
        </div>
        <div class="age_group">
          <div class="age_assort">
            아동
          </div>
          <div class="price">
            20,000원
          </div>
          <uu-counter
            :max-count="10"
          />
        </div>
        <div class="total_price_wrap">
          <div class="total_price_title">
            총 결제금액 (1명)
          </div>
          <div class="price_wrap">
            <span class="price">39,700</span>원
          </div>
        </div>
      </div>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="선택완료"
        size="xl"
        disabled
        @click="btnActions.ok"
      />
      <!-- 조건에 따라 disabled 추가 / 제거 -->
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>