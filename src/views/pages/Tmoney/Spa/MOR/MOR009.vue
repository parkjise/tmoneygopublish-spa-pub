<script setup lang="ts">
import { ref } from 'vue'
// import uuButton from '@/components/uu-components/UuButton.vue';
import UuModal from '@/components/uu-components/UuModal.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import uuIc from '@/components/uu-components/UuIc.vue'

const modal01 = ref(true)
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="티머니 GO 회원등급"
    hide-title
    hide-footer
    add-class="member_grade"
  >
    <template #modal_body>
      <h4>티머니 GO 회원등급</h4>
      <p class="my_grade grade grade2">
        티머니님은<br>
        <span>우리동네 여행자</span> 등급입니다.
      </p>
      <round-box hide-title>
        <ul class="grade_list">
          <li>
            <p class="title">
              등급 적용일
            </p>
            <p class="result num">
              2021.10.01
            </p>
          </li>
          <li>
            <p class="title">
              선정 기간
            </p>
            <p class="result num">
              2021.10.01 ~ 2021.10.31
            </p>
          </li>
          <li>
            <p class="title">
              이용 건수
            </p>
            <p class="result">
              <span class="num">30</span>건
            </p>
          </li>
          <li>
            <p class="title">
              등급 혜택
            </p>
            <p class="result">
              <uu-ic
                size="20"
                name="coupon"
              />
              <span>서비스 쿠폰 북 제공</span>
            </p>
          </li>
        </ul>
      </round-box>
      <round-box title="등급 산정 기준">
        <p>대중교통 및 각 교통수단 이용 건수를 점수화하여 계산</p>
        <ul class="grade_list standard">
          <li>
            <p class="grade grade1">
              이불속 여행자
            </p>
            <p class="result">
              <span class="num">0</span>점
            </p>
          </li>
          <li>
            <p class="grade grade2">
              우리동네 여행자
            </p>
            <p class="result">
              <span class="num">50</span>점
            </p>
          </li>
          <li>
            <p class="grade grade3">
              지구별 여행자
            </p>
            <p class="result">
              <span class="num">100</span>점
            </p>
          </li>
          <li>
            <p class="grade grade4">
              은하수 여행자
            </p>
            <p class="result">
              <span class="num">200</span>점
            </p>
          </li>
        </ul>
        <p class="apply">
          적용시점
        </p>
        <p>1개월간 누적 점수를 계산하여 익월 1일 반영</p>
      </round-box>
      <p class="desc">
        필요한 유의사항 내용을 적습니다.
      </p>
      <p class="desc">
        필요한 유의사항 내용을 적습니다.
      </p>
    </template>
  </uu-modal>
</template>