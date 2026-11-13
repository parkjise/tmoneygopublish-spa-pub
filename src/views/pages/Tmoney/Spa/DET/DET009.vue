<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuIc from '@/components/uu-components/UuIc.vue'

const modal01 = ref(true)

</script>
<template>
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="택시 이용 상세정보"
    full-content
    add-class="taxi_detail_popup"
  >
    <template #modal_body>
      <div class="bg_gray">
        <div class="content_wrap">
          <div class="title">
            <span class="ic_area">
              <img
                src="/src/assets/images/ic_taxi.png"
                alt="택시 아이콘"
              >
            </span>
            택시
          </div>
          <round-box title="운행정보">
            <ul class="normal_list">
              <li>
                <div class="list_tit">
                  출발지
                </div>
                <div class="list_txt">
                  용산구 이태원로 287 한강진역 2번 
                  출구
                </div>
              </li>
              <li>
                <div class="list_tit">
                  도착지
                </div>
                <div class="list_txt">
                  용산구 이태원로 287 한강진역 2번 출구
                </div>
              </li>
              <li>
                <div class="list_tit">
                  출발시간
                </div>
                <div class="list_txt num">
                  2024.01.04 17:30
                </div>
              </li>
              <li>
                <div class="list_tit">
                  도착시간
                </div>
                <div class="list_txt num">
                  2024.01.04 17:30
                </div>
              </li>
            </ul>
          </round-box>

          <round-box title="택시정보">
            <ul class="normal_list">
              <li>
                <div class="list_tit">
                  유형
                </div>
                <div class="list_txt">
                  중형 이은영기사님
                </div>
              </li>
              <li>
                <div class="list_tit">
                  차량번호
                </div>
                <div class="list_txt">
                  서울 32사 9942
                </div>
              </li>
            </ul>
            <div class="taxi_notice">
              <uu-ic
                name="exclamation"
                size="16"
              />
              기사님께 연락하기는 하차 후 24시간 이내에 가능합니다.
            </div>
          </round-box>

          <round-box
            title="결제금액"
            class="payment_info"
          >
            <ul class="normal_list">
              <li>
                <div class="list_tit">
                  운행요금
                </div>
                <div class="list_txt">
                  <div class="price_wrap">
                    <span class="price">10,900</span>원
                  </div>
                </div>
              </li>
              <li>
                <div class="list_tit">
                  쿠폰할인
                </div>
                <div class="list_txt">
                  <div class="price_wrap primary">
                    <span class="price">-1,000</span>원
                  </div>
                </div>
              </li>
              <li>
                <div class="list_tit">
                  추가요금 (통행료 포함)
                </div>
                <div class="list_txt">
                  <div class="price_wrap">
                    <span class="price">1,500</span>원
                  </div>
                </div>
              </li>
              <li>
                <div class="list_tit">
                  서비스 이용료
                </div>
                <div class="list_txt">
                  <div class="price_wrap">
                    <span class="price">0</span>원
                  </div>
                </div>
              </li>
            </ul>
            <div class="total_payment_wrap">
              총 결제금액
              <div class="price_wrap">
                <span class="price">9,900</span>원
              </div>
            </div>
          </round-box>
          
          <round-box 
            class="payment_detail"
          >
            <template #title>
              결제상세
              <uu-button
                class="right_btn"
                size="xs"
                btn-style="line"
                label="영수증"
              />
            </template>
            <ul class="normal_list">
              <li>
                <div class="list_tit">
                  결제일시
                </div>
                <div class="list_txt num">
                  2021.07.01 14:05
                </div>
              </li>
              <li>
                <div class="list_tit">
                  결제수단
                </div>
                <div class="list_txt">
                  티머니페이
                  <div class="price_wrap">
                    <span class="price">11,400</span>원
                  </div>
                </div>
              </li>
            </ul>
          </round-box>
        </div>
      </div>
    </template>
    <template #modal_footer>
      <div class="btn_wrap">
        <uu-button
          btn-style="line"
          size="xl"
          label="공유하기"
        />
        <uu-button
          btn-style="line"
          size="xl"
          label="즐겨찾기 추가"
        />
      </div>
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>