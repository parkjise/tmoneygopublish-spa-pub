<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuIc from '@/components/uu-components/UuIc.vue'

const modal01 = ref(true)

const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

</script>
<template>
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="예약하기"
    full-content
  >
    <template #modal_body>
      <div class="bg_gray">
        <div class="content_wrap has_btm_content">
          <div class="btn_wrap">
            <button
              type="button"
              class="btn_cancel"
              @click="modal02Ref.showModal($event)"
            >
              취소
            </button>
          </div>
          <round-box>
            <div class="product">
              <div class="date">
                2024.04.20(토) 09:30
              </div>
              <div class="product_name">
                [당일여행][특가] 강원특별자치도 가평군 남이섬 일일투어 #에덴벚꽃길
              </div>
            </div>
            <ul class="ticket_info_list">
              <li>
                <div class="ticket_title">
                  <uuIc v-bind="{name:'location',size:'16'}" />
                  출발
                </div>
                <div class="ticket_content">
                  광화문역
                </div>
              </li>
              <li>
                <div class="ticket_title">
                  <uuIc v-bind="{name:'fare',size:'16'}" />
                  금액
                </div>
                <dl class="ticket_content has_detail_list">
                  <dt>
                    <div class="list_tit">
                      2명
                    </div>
                    <div class="list_txt">
                      <span class="price">49,700</span>원
                    </div>
                  </dt>
                  <dd>
                    <div class="list_tit">
                      일반 1명
                    </div>
                    <div class="list_txt">
                      <span class="price">39,700</span>원
                    </div>
                  </dd>
                  <dd>
                    <div class="list_tit">
                      아동 1명
                    </div>
                    <div class="list_txt">
                      <span class="price">10,000</span>원
                    </div>
                  </dd>
                </dl>
              </li>
            </ul>
          </round-box>
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
        size="xl"
        label="결제하기"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->

  <!-- 상품 삭제 팝업 -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="confirm"
  >
    <template #modal_header>
      알림
    </template>
    <template #modal_body>
      현재 추가된 상품이 있습니다.<br>
      상품을 취소하시겠습니까?
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
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // 상품 삭제 팝업 -->
</template>