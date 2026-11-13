<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="결제 상세정보" />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container pt12"> 
      <div class="pay_detail_area">
        <div class="pay_title">
          <p class="title">
            <span class="ic_area">
              <img
                src="/src/assets/images/temp/ic_vehicle_xtz.svg"
                alt="임시 이미지"
              >
            </span>
            따릉이 이용권 결제
          </p>
          <p class="status">
            결제완료
          </p>
        </div>
        <round-box title="구매정보">
          <ul class="detail_list">
            <li>
              <p class="title">
                결제일
              </p>
              <p class="num">
                2021.04.12
              </p>
            </li>
            <li>
              <p class="title">
                이용권
              </p>
              <p class="num">
                정기-7일(1시간권)
              </p>
            </li>
          </ul>
        </round-box>
        <round-box hide-title>
          <div class="box_title">
            결제금액
            <uu-button
              btn-style="line"
              label="환불신청"
              class="btn_payment"
            />
          </div>
          <ul class="detail_list payment">
            <li>
              <p class="title">
                이용권요금
              </p>
              <p class="num">
                <span>3,000</span>원
              </p>
            </li>
            <li class="sum_area">
              <p class="title">
                총 결제금액
              </p>
              <p class="num">
                <span>3,000</span>원
              </p>
            </li>
          </ul>
        </round-box>
        <round-box title="결제상세">
          <ul class="detail_list">
            <li>
              <p class="title">
                결제일시
              </p>
              <p class="num">
                2021.04.12 09:38
              </p>
            </li>
            <li>
              <p class="title">
                결제수단
              </p>
              <ul class="info">
                <li>
                  <p class="tool">
                    신용카드(국민카드)
                  </p>
                  <p class="num">
                    <span>3,000</span>원
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </round-box>
        <div class="ticket_notice">
          <p class="title">
            <uu-ic
              size="16"
              name="exclamation_gray090"
            />
            이용권 사용 안내
          </p>
          <p class="desc">
            이용시간 초과시, 5분당 200원이 과금됩니다.<br>
            미납금이 있을 경우, 우선적으로 미납금이 차감됩니다.
          </p>
        </div>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>