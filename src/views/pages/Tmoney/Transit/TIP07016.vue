<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="예매취소 예상 위약금 팝업"
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
    type="confirm"
  >
    <template #modal_header>
      예매 취소
    </template>
    <template #modal_body>
      취소 완료 시간에 따라 취소 수수료가 아래와 같이 부과됩니다. 예매 취소 후 카드환불까지 3~5영업일 소요될 수 있습니다.
      <div class="charge_box">
        <div class="charge_detail">
          <div class="charge_detail_item">
            <div>총 결제금액</div>
            <div class="detail_price">
              <span class="price">39,700</span>원
            </div>
          </div>
          <div class="charge_detail_item">
            <div>취소 수수료</div>
            <div class="detail_price">
              <span class="price">1,000</span>원
            </div>
          </div>
        </div>
        <div class="charge_total">
          <uuIc v-bind="{name:'coin',size:'24'}" />
          <div class="total_txt">
            총 반환금액
          </div>
          <div class="total_price">
            <span class="price">38,700</span>원
          </div>
        </div>
      </div>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-style="line"
        label="아니요"
        @click="btnActions.close"
      />
      <uu-button
        btn-color="primary"
        label="네"
        @click="[modal02Ref.showModal($event), btnActions.close()]"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->

  <!-- Modal -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="alert"
  >
    <template #modal_header>
      취소 완료
    </template>
    <template #modal_body>
      예매 취소가 완료되었습니다.
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>