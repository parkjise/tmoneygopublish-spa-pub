<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'

</script>
<template>
  <!-- header -->
  <subHeader
    hide-title
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container bg_white">
      <h1 class="detail_page_tit">
        여행상품 핵심정보
      </h1>
      <table class="detail_page_table">
        <caption>
          <h2 class="detail_page_section_tit">
            상품안내
          </h2>
        </caption>
        <colgroup>
          <col width="24%">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th>
              상품명
            </th>
            <td>
              [당일여행][특가] 벚꽃비 맞으러 하동으로<br>
              떠나 봄 #봄꽃은 #역시 #하동
            </td>
          </tr>
          <tr>
            <th>
              여행기간
            </th>
            <td>
              2024.03.23(토) ~ 2024.04.07(일)
            </td>
          </tr>
          <tr>
            <th>
              포함
            </th>
            <td>
              왕복교통비, 인솔가이드
            </td>
          </tr>
          <tr>
            <th>
              불포함
            </th>
            <td>
              개인비용, 식사
            </td>
          </tr>
          <tr>
            <th>
              상품 종류
            </th>
            <td>
              버스여행상품
            </td>
          </tr>
          <tr>
            <th>
              여행자보험
            </th>
            <td>
              가입
            </td>
          </tr>
        </tbody>
      </table>
      <table class="detail_page_table">
        <caption>
          <h2 class="detail_page_section_tit">
            상품정보
          </h2>
        </caption>
        <colgroup>
          <col width="24%">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th>
              업체명
            </th>
            <td>
              풍경있는여행
            </td>
          </tr>
          <tr>
            <th>
              이용교통
            </th>
            <td>
              44~45인승 버스
            </td>
          </tr>
          <tr>
            <th>
              여행종류
            </th>
            <td>
              1일(당일) 여행
            </td>
          </tr>
          <tr>
            <th>
              최소출발
            </th>
            <td>
              30명
            </td>
          </tr>
          <tr>
            <th>
              담당자
            </th>
            <td>
              070-4200-6498
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="detail_page_section_tit">
        여행약관
      </h2>
      <p class="info_txt">
        상기일정은 국내 표준약관 제8조, 제12조의 규정인 아래 조건의 경우 변경 될 수 있음을 양지 하시기 바랍니다.
      </p>
      <ul class="detail_page_list">
        <li>여행자의 안전과 보호를 위하여 여행자의 요청 또는 현지 사정에 의해 부득이하다고 쌍방이 합의한 경우</li>
        <li>천재지변, 전란, 정부의 명령, 운송, 숙박기관 등의 파업, 휴업 등으로 여행의 목적을 달성할 수 없는 경우</li>
        <li>당사의 고의 또는 과실 없이, 항공기, 기차, 선박 등 교통기관의 연발착 또는 교통 체증 등으로 인하여 계획된 여행 일정 진행이 불가능한 경우</li>
      </ul>
      <table class="detail_page_table">
        <caption>
          <h2 class="detail_page_section_tit">
            환불 안내
          </h2>
        </caption>
        <colgroup>
          <col width="24%">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th>
              접수시간
            </th>
            <td>
              평일 09:00~18:00 (12:00~13:00 제외)
            </td>
          </tr>
          <tr>
            <th>
              수수료
            </th>
            <td>
              출발일 3일  : 전액 환불<br>
              출발일 2일 : 수수료 30% 공제, 70% 환불<br>
              출발일 1일 : 수수료 50% 공제, 50% 환불<br>
              출발일 당일 : 환불 불가
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="detail_page_list">
        <li>유선상 환불접수건만 수수료 규정에 따른 환불이 가능함</li>
        <li>변경 수수료는 취소 수수료와 동일함</li>
        <li>
          일요일 여행의 경우 당사 업무가 주 5일이므로 <br>
          환불 접수는 금요일 업무시간 내 접수건만 처리됨
        </li>
        <li>
          수수료 규정은 당사의 규정에 따르며 예약시 여행 약관에
          동의함을 원칙으로 함
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>