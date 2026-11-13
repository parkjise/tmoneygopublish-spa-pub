<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="자전거 이용요금 안내" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding bg_white">
      <uu-tabs class="guide_tab">
        <uu-tab title="따릉이">
          <div class="use_money_area">
            <div class="use_money line">
              <h3>지쿠케어 보상 및 한도</h3>
              <ul class="dot_list">
                <li>이용 가능시간은 첫 회 대여시점을 기준으로 계산합니다.</li>
                <li>서울자전거 모든 대여소에서 사용이 가능합니다.</li>
                <li>취소, 환불은 서울자전거 환불규정에 따릅니다.</li>
                <li>이용권을 다른 사람에게 양도할 수 없으며, 양도로 인해 발생하는 불이익은 구매자가 책임지셔야 합니다.</li>
              </ul>
            </div>
            <div class="use_money">
              <h3>상품안내</h3>
              <table class="table_area">
                <caption>일일권 상품</caption>
                <colgroup>
                  <col width="33.333%">
                  <col width="33.333%">
                  <col width="33.333%">
                </colgroup>
                <thead>
                  <tr>
                    <th>일일권</th>
                    <th>1시간 단위 반복</th>
                    <th>2시간 단위 반복</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1,000원</td>
                    <td>2,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="use_money">
              <table class="table_area">
                <caption>정기권 상품</caption>
                <colgroup>
                  <col width="33.333%">
                  <col width="33.333%">
                  <col width="33.333%">
                </colgroup>
                <thead>
                  <tr>
                    <th>정기권</th>
                    <th>1시간 단위 반복</th>
                    <th>2시간 단위 반복</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7일</td>
                    <td>3,000원</td>
                    <td>4,000원</td>
                  </tr>
                  <tr>
                    <td>30일</td>
                    <td>5,000원</td>
                    <td>7,000원</td>
                  </tr>
                  <tr>
                    <td>180일</td>
                    <td>15,000원</td>
                    <td>20,000원</td>
                  </tr>
                  <tr>
                    <td>365일</td>
                    <td>30,000원</td>
                    <td>40,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="use_money line">
              <h4>추가 요금</h4>
              <ul class="dot_list">
                <li>
                  1시간(2시간) 단위 반복 이용권을 1시간(2시간) 이내 대여소
                  미반납시 초과 5분당 200원씩 과금
                </li>
              </ul>
            </div>
            <div class="use_money">
              <h3>환불규정</h3>
              <h4>이용권 사용 전</h4>
              <ul class="dot_list">
                <li>결제일로부터 3년 이내 전액환불</li>
              </ul>
              <table class="table_area type2">
                <caption>일일권 상품</caption>
                <thead class="sr_only">
                  <tr>
                    <th>종류</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>일일권</th>
                    <td>환불불가</td>
                  </tr>
                  <tr>
                    <th>정기권</th>
                    <td>이용권 개시일 기준 기한 내 환불 신청</td>
                  </tr>
                </tbody>
              </table>
              <table class="table_area">
                <caption class="sr_only">
                  승차권 안내
                </caption>
                <colgroup>
                  <col width="33.333%">
                  <col width="33.333%">
                  <col width="33.333%">
                </colgroup>
                <thead>
                  <tr>
                    <th>종류</th>
                    <th>7일 이내</th>
                    <th>7일 초과</th>
                  </tr>
                </thead>
                <tbody class="wide_padding">
                  <tr>
                    <td>7일권</td>
                    <td>승차</td>
                    <td>환불불가</td>
                  </tr>
                  <tr>
                    <td>30일권</td>
                    <td rowspan="3">
                      7일권 <br>
                      이용요금 <br>
                      공제
                    </td>
                    <td>환불불가</td>
                  </tr>
                  <tr>
                    <td>180일권</td>
                    <td rowspan="2">
                      환불 요청일 까지의 월별 이용요금 공제<br>
                      (사용월수 X 30일권 이용요금)
                    </td>
                  </tr>
                  <tr>
                    <td>365일권</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="use_money">
              <table class="table_area">
                <caption>환불 신청 기한</caption>
                <colgroup>
                  <col width="50%">
                  <col width="50%">
                </colgroup>
                <thead>
                  <tr>
                    <th>종류</th>
                    <th>기한</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7일권</td>
                    <td>2일이내</td>
                  </tr>
                  <tr>
                    <td>30일권</td>
                    <td>7일이내</td>
                  </tr>
                  <tr>
                    <td>180일권</td>
                    <td>60일이내</td>
                  </tr>
                  <tr>
                    <td>365일권</td>
                    <td>150일이내</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </uu-tab>
        <uu-tab title="타슈">
          <div class="use_money_area">
            <div class="use_money">
              <h3>
                기본 대여 시간을 초과하면<br>
                추가 요금이 발생할 수 있어요
              </h3>
              <p>이용 성수기인 3월부터 11월까지는 24시간 운영합니다.</p>
            </div>
            <div class="use_money">
              <round-box
                hide-title
                padding-top="1.6rem"
                padding-bottom="1.6rem"
              >
                <ul class="time_list">
                  <li>
                    <p>대여 시간</p>
                    <p class="time">
                      05시 - 24시
                    </p>
                  </li>
                  <li>
                    <p>반납 시간</p>
                    <p class="time">
                      24시간
                    </p>
                  </li>
                </ul>
              </round-box>
              <div class="rental_time">
                <round-box hide-title>
                  <div class="img_area">
                    <img
                      src="/src/assets/images/guide/ic_use_bike_01.png"
                      alt="60분"
                    >
                  </div>
                  <p class="title">
                    기본 대여 시간
                  </p>
                  <p class="num">
                    24시간
                  </p>
                </round-box>
                <round-box hide-title>
                  <div class="img_area">
                    <img
                      src="/src/assets/images/guide/ic_use_bike_02.png"
                      alt="+30분"
                    >
                  </div>
                  <p class="title">
                    기본 대여 시간 이후
                  </p>
                  <p class="num">
                    30분당 500원
                  </p>
                  <p class="desc">
                    (1일당 최대 5,000원)
                  </p>
                </round-box>
              </div>
              <div class="ticket_notice">
                <p class="title">
                  <uu-ic
                    size="16"
                    name="exclamation_gray090"
                  />
                  유의사항
                </p>
                <ul>
                  <li>기본 대여 시간 내에 반납 후 제대여 시 반복이 용이 가능합니다. (이경우 별도의 사용료는 부과하지 않습니다.)</li>
                  <li>추가 사용료의 신청에 있어 30분 미만은 30분으로 간주합니다.</li>
                  <li>이용자의 추가 사용료 결제는 해당일로 한정하며, 해당일 대여 후 24시를 초과하여 반납 시 다음날의 요금이 부과됩니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </uu-tab>
        <uu-tab title="지쿠터">
          <div class="use_money_area">
            <div class="use_money">
              <h3>1분당 요금</h3>
              <div class="one_minute">
                <round-box hide-title>
                  <p>주간/야간</p>
                  <p class="num">
                    <strong>180</strong>원
                  </p>
                </round-box>
              </div>
              <ul class="dot_list">
                <li>일부 지역은 상이한 요금이 적용됩니다. 탑승 전 앱 지도의 지쿠 아이콘을 클릭해서 모델명과 요금을 확인해주세요.</li>
              </ul>
            </div>
            <div class="use_money">
              <h3>지쿠케어</h3>
              <table class="table_area">
                <caption class="sr_only">
                  지쿠케어
                </caption>
                <colgroup>
                  <col width="*">
                  <col width="25.5%">
                  <col width="25.5%">
                  <col width="25.5%">
                </colgroup>
                <thead>
                  <tr>
                    <th />
                    <th>라이트 플랜</th>
                    <th>스탠다드 플랜</th>
                    <th>프리미엄 플랜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>주간</td>
                    <td>600원</td>
                    <td>800원</td>
                    <td>1,200원</td>
                  </tr>
                  <tr>
                    <td>심야</td>
                    <td>1,000원</td>
                    <td>1,200원</td>
                    <td>1,600원</td>
                  </tr>
                </tbody>
              </table>
              <ul class="dot_list">
                <li>이용요금 = 지쿠케어 + 1분당 요금 x 탑승시간(분)</li>
                <li>심야시간은 00시 ~ 05시 입니다.</li>
              </ul>
            </div>
            <div class="use_money">
              <h3>반납비용 안내</h3>
              <h5>서비스지역 밖(앱 지도의 어두운 영역)에서 탑승을 종료하면 반납비용이 추가됩니다.</h5>
              <ul class="dot_list">
                <li>반납비용은 서비스 지역과의 거리에 따라 2,000원~3,000원(서비스 지역에 둘러 싸인 곳은 1,000원)이 부과되며, 앱 지도의 어두운 영역을 클릭하면 해당 장소에서 발생하는 반납 비용을 사전에 확인할 수 있습니다. 서비스지역 밖에 나가더라도 종료버튼을 누르지 않으면 비용이 부과되지 않습니다.</li>
              </ul>
            </div>
            <div class="use_money">
              <h3>이용시간 안내</h3>
              <round-box
                hide-title
                padding-top="1rem"
                padding-bottom="1rem"
              >
                <div class="info_hour">
                  <uu-ic
                    size="44"
                    name="timer"
                  />
                  <p><span>24</span>시간 이용 가능</p>
                </div>
              </round-box>
            </div>
          </div>
        </uu-tab>
        <uu-tab title="킥고잉">
          <div class="use_money_area">
            <div class="use_money">
              <h3>1분당 요금</h3>
              <div class="one_minute">
                <round-box hide-title>
                  <p>주간/야간</p>
                  <p class="num">
                    <strong>100</strong>원
                  </p>
                </round-box>
              </div>
            </div>
            <div class="use_money">
              <h3>킥고잉 요금</h3>
              <table class="table_area">
                <caption class="sr_only">
                  킥고잉 요금
                </caption>
                <colgroup>
                  <col width="*">
                  <col width="76%">
                </colgroup>
                <thead>
                  <tr>
                    <th />
                    <th>잠금해제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>주간</td>
                    <td>1,000원</td>
                  </tr>
                  <tr>
                    <td>심야</td>
                    <td>1,500원</td>
                  </tr>
                </tbody>
              </table>
              <ul class="dot_list">
                <li>심야시간은 00시 ~ 04시 입니다.</li>
              </ul>
            </div>
          </div>
        </uu-tab>
      </uu-tabs>
    </div>
  </main>
  <!-- // main -->
</template>