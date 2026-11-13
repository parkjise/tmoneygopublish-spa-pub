<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="영수증"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- 영수증 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="alert"
    add-class="receipt_modal"
  >
    <template #modal_header_top_cont>
      <div class="receipt_category">
        <img
          src="/src/assets/images/ic_journey_bus.png"
          alt=""
        >
        Tmoney 여행
      </div>
    </template>
    <template #modal_header>
      결제 영수증
    </template>
    <template #modal_body>
      <hr
        class="divider"
        style="margin-top: 0.4rem; height: 0.15rem; background-color: #111;"
      >
      <h4 class="section_tit">
        판매자 정보
      </h4>
      <ul class="normal_list">
        <li>
          <div class="list_tit">
            상호
          </div>
          <div class="list_txt">
            하나투어
          </div>
        </li>
        <li>
          <div class="list_tit">
            사업자 번호
          </div>
          <div class="list_txt">
            102-81-39440
          </div>
        </li>
      </ul>

      <hr class="divider">

      <h4 class="section_tit">
        결제 정보
      </h4>
      <ul class="normal_list regular_txt">
        <li>
          <div class="list_tit emphasize">
            총 결제금액
          </div>
          <div class="list_txt emphasize">
            51,600원
          </div>
        </li>
        <li>
          <div class="list_tit">
            카드
          </div>
          <div class="list_txt">
            45,600원
          </div>
        </li>
        <li>
          <div class="list_tit">
            쿠폰
          </div>
          <div class="list_txt">
            5,000원
          </div>
        </li>
        <li>
          <div class="list_tit">
            GO마일리지
          </div>
          <div class="list_txt">
            1,000M
          </div>
        </li>
      </ul>
      <hr
        class="divider"
        style="margin:0.8rem 0"
      >
      <ul class="normal_list">
        <li>
          <div class="list_tit">
            결제수단
          </div>
          <div class="list_txt">
            신용카드(신한카드)
          </div>
        </li>
        <li>
          <div class="list_tit">
            승인번호
          </div>
          <div class="list_txt">
            30078237
          </div>
        </li>
        <li>
          <div class="list_tit">
            승인일자
          </div>
          <div class="list_txt">
            2023.08.29
          </div>
        </li>
        <li>
          <div class="list_tit">
            승인금액
          </div>
          <div class="list_txt">
            45,600원
          </div>
        </li>
        <li>
          <div class="list_tit">
            환불금액
          </div>
          <div class="list_txt">
            0원
          </div>
        </li>
        <li>
          <div class="list_tit">
            취소수수료
          </div>
          <div class="list_txt">
            0원
          </div>
        </li>
        <li>
          <dl class="has_detail_list">
            <dt>
              <div class="list_tit">
                결제금액
              </div>
              <div class="list_txt">
                33,700원
              </div>
            </dt>
            <dd>
              <div class="list_tit">
                이용금액
              </div>
              <div class="list_txt">
                31,700원
              </div>
            </dd>
            <dd>
              <div class="list_tit">
                취소수수료
              </div>
              <div class="list_txt">
                2,000원
              </div>
            </dd>
          </dl>
        </li>
      </ul>

      <hr class="divider">

      <h4 class="section_tit">
        예약 정보
      </h4>
      <ul class="normal_list">
        <li>
          <div class="list_tit">
            예약번호
          </div>
          <div class="list_txt">
            HN2416887442
          </div>
        </li>
        <li>
          <div class="list_tit">
            여행일정
          </div>
          <div class="list_txt">
            2024.04.20(토) 09:30
          </div>
        </li>
        <li>
          <div class="list_tit">
            여행상품
          </div>
          <div class="list_txt">
            가평군 남이섬 일일투어
          </div>
        </li>
        <li>
          <div class="list_tit">
            일반매수
          </div>
          <div class="list_txt">
            일반 2명
          </div>
        </li>
        <li>
          <div class="list_tit">
            아동매수
          </div>
          <div class="list_txt">
            아동 1명
          </div>
        </li>
      </ul>
      <div class="notice_area">
        <uu-ic
          name="exclamation"
          size="16"
        />
        <span class="txt">
          영수증은 승차권이 아닙니다.<br>
          이 영수증으로 승차권을 대신하여 탑승하실 수 없습니다.
        </span>
      </div>
      <div class="receipt_save_btn_wrap">
        <uu-button
          btn-style="line"
          label="영수증 저장"
          class="receipt_save_btn"
        />
      </div>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // 영수증 -->
</template>