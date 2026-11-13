<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import roundBox from '@/components/layout/RoundBox.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuCheckbox  from '@/components/uu-components/UuCheckbox.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

function changeEvent(value : string | boolean | []){
  console.log(value)
}

</script>
<template>
  <!-- header -->
  <subHeader
    title="예매 취소"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container bottom_btns">
      <round-box
        hide-title
        class="ticket_info"
      >
        <div class="ticket_date">
          2024.04.20(토) 09:30
        </div>
        <div class="ticket_name">
          [당일여행][특가] 강원특별자치도 가평군 
          남이섬 일일투어 #에덴벚꽃길
        </div>
        <dl class="has_detail_list">
          <dt>
            <div class="list_tit">
              <uu-ic
                name="fare"
                size="16"
              />
              금액
              <span>5명</span>
            </div>
            <div class="list_txt">
              <span class="price">39,700</span>원
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
        </dl>
      </round-box>
      <round-box
        hide-title
      >
        <div class="ticket_select_wrap">
          <div class="info_txt">
            취소할 티켓을 선택해 주세요.
          </div>
          <uu-checkbox
            label="전체"
            value="전체"
            @change="changeEvent"
          />
        </div>
        <form>
          <uu-fieldset
            hide-legend
            class="select_ticket"
          >
            <uu-checkbox
              value="일반 (미입력)"
              right-btn
              @change="changeEvent"
            >
              일반 (미입력)
              <div class="ticket_badge">
                쿠폰
              </div>
            </uu-checkbox>
            <uu-checkbox
              value="일반 (티머니)"
              right-btn
              @change="changeEvent"
            >
              일반 (티머니)
            </uu-checkbox>
            <uu-checkbox
              value="일반 (티머니)"
              right-btn
              @change="changeEvent"
            >
              일반 (타보니)
            </uu-checkbox>
            <uu-checkbox
              value="아동 (꽃놀이)"
              right-btn
              @change="changeEvent"
            >
              아동 (꽃놀이)
            </uu-checkbox>
            <uu-checkbox
              value="아동 (방울)"
              right-btn
              @change="changeEvent"
            >
              아동 (방울)
            </uu-checkbox>
          </uu-fieldset>
        </form>
        <!-- 일부 티켓 취소 요청 및 검표 완료 시 표시 -->
        <!-- <div class="notice_txt">
          * 검표완료 및 취소요청이 완료된 티켓은 표시되지 않습니다.
        </div> -->
      </round-box>
      <round-box
        class="payment_info_wrap"
        hide-title
      >
        <div class="payment_info_tit">
          결제 정보
        </div>
        <ul class="normal_list">
          <li>
            <dl class="has_detail_list">
              <dt>
                <div class="list_tit">
                  총 결제금액
                </div>
                <div class="list_txt">
                  <span class="price">39,700</span>원
                </div>
              </dt>
              <!-- 쿠폰 마일리지 사용의 경우 내역 표시 -->
              <dd>
                <div class="list_tit">
                  쿠폰
                </div>
                <div class="list_txt">
                  <span class="price">-5,000</span>원
                </div>
              </dd>
              <dd>
                <div class="list_tit">
                  GO마일리지
                </div>
                <div class="list_txt">
                  <span class="price">-1,000</span>M
                </div>
              </dd>
              <!-- // 쿠폰 마일리지 사용의 경우 내역 표시 -->
            </dl>
          </li>
          <li>
            <div class="list_tit">
              결제일시
            </div>
            <div class="list_txt num">
              2024.03.05(화) 09:30
            </div>
          </li>
          <li>
            <div class="list_tit">
              결제수단
            </div>
            <div class="list_txt">
              신용카드(신한카드)
            </div>
          </li>
        </ul>
        <div class="sum">          
          <div class="sum_tit">
            취소 수수료
            <uu-ic
              name="exclamation"
              size="20"
            />
          </div>
          <div class="price_wrap">
            <span class="price">0</span>원
          </div>
        </div>
      </round-box>
      <round-box
        class="refund_wrap"
        hide-title
      >
        <div>
          <div class="refund_tit">
            총 반환금액
          </div>
          <div class="price_wrap">
            <span class="price">17,700</span>원
          </div>
        </div>
      </round-box>
      <div class="ticket_notice">
        <p class="title">
          <uu-ic
            size="16"
            name="exclamation_gray090"
          />
          <button
            type="button"
          >
            예매 취소 전 꼭 확인해 주세요.
            <uu-ic
              size="12"
              name="arrow"
            />
          </button>
        </p>
        <p class="desc">
          유효기간이 지난 쿠폰과 마일리지는 재 발행되지 않습니다.
        </p>
      </div>
      <div class="btn_area">
        <uu-button
          label="예매취소"
          btn-color="primary"
          size="xl"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>