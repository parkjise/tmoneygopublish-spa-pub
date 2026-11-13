<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="킥보드 보험 안내" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding bg_white">
      <uu-tabs class="guide_tab">
        <uu-tab title="씽씽">
          <div class="use_money_area">
            <div class="use_money">
              <ul class="dot_list">
                <li>
                  씽씽 라이딩 보험은 이용자가 전동킥보드를 대여하여 
                  사용하는 중 발생하는 사고에 대비하여 씽씽에서 무료로 
                  제공하는 보험입니다.
                </li>
                <li>
                  씽씽 라이딩 보험은 전동킥보드 대여 시 자동으로 가입됩니다.
                </li>
              </ul>
            </div>
            <div class="use_money">
              <table class="table_area">
                <caption class="sr_only">
                  보험 보장내용
                </caption>
                <colgroup>
                  <col width="33.3333%">
                  <col width="33.3333%">
                  <col width="33.3333%">
                </colgroup>
                <thead class="font14">
                  <tr>
                    <th>담보명</th>
                    <th>지급사유</th>
                    <th>지급금액</th>
                  </tr>
                </thead>
                <tbody class="font_noto">
                  <tr>
                    <td>
                      전동킥보드
                      결함사고 <br>
                      배상
                    </td>
                    <td>
                      보험기간 (대여
                      운행 중) 내 차체
                      결함(관리 상 하자포함)으로 인하여 대여 이용자 및
                      제 3자의 신체에 상해를 입히거나 재물을 망가뜨려 손해를 입힌 경우 그 손해를 가입
                      한도내에서 보상합니다.
                    </td>
                    <td>
                      1인당 최대
                      3,000만원한도
                      (자기 부담금
                      50만원)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      전동킥보드
                      사고의료비
                    </td>
                    <td>
                      보험기간 (대여
                      운행 중) 내 발생한 사고로 인하여
                      대여 이용자의
                      신체에 손해가
                      발생한 경우 그
                      치료비를 가입한 도내에서 실비로 보상합니다.
                    </td>
                    <td>
                      50만원한도
                      (실비)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="use_money">
              <h3>가입대상</h3>
              <ul class="dot_list">
                <li>보험의 보상대상은 ㈜피유엠피(씽씽)의 소유로  유지, 보수, 관리되며 사전에 보험사에 등록되어 일정 조건에 맞는 회원에게 대여되는 해당 전동킥보드를 말합니다.</li>
              </ul>
            </div>
            <div class="use_money">
              <h3>보험기간</h3>
              <ul class="dot_list">
                <li>대여절차가 끝난 시점부터 반납하는 절차가 시작되는 시점까지 전동킥보드를 이용하는 동안 보장 받을 수 있습니다.</li>
              </ul>
              <p>
                ※ ‘이용’이란 운행 및 주·정차하는 행위 등을 말하며, 운행하는 행위 및 주·정차하는 행위 등을 제외한 그 외의 기타 관련이 없는 행위는 ‘이용’으로 보지 않습니다.
              </p>
            </div>
            <div class="use_money">
              <h3>보험금 청구안내</h3>
              <ul class="dot_list">
                <li>보험 일반 및 청구문의 : KP보험서비스 1644-9381</li>
                <li>
                  고객센터 운영 시간 : 평일 09:00 ~ 18:00<br>
                  (점심 12:00 ~ 13:00 / 휴무 토, 일, 공휴일)
                </li>
              </ul>
            </div>
            <div class="use_money">
              <h3>청구서류</h3>
              <ul class="dot_list">
                <li>보험금 청구시(보험사 양식)</li>
                <li>사고증명서(진료비계산서, 사망진단서, 징해진단서, 입원치료 확인서, 의사처방전(처방조제비)등)</li>
                <li>사고증명서는 외국법 제3조(의료기관)에서 규정한 국내의 병원이나 의원 또는 국외의 의료관련법에서 정한 의료기관에서 발급한 것이어야 합니다.</li>
                <li>신분증(주민등록증이나 운전면허증 등 사진이 붙은 정부기관 발행 신분증, 본인이 아닌 경우에는 본인의 인감증명서 또는 본인서명사실확인서 포함)</li>
                <li>기타 보험금 등의 수령에 필요하여 제출하는 서류(사망보험금 지급시 피보험자의 법정상속인이 아닌자가 청구하는 경우 법 정상속인의 확인서)</li>
              </ul>
              <p>※ 필요 시 추가서류 요청이 있을 수 있습니다.</p>
            </div>
          </div>
        </uu-tab>
        <uu-tab title="지쿠">
          <div class="use_money_area">
            <div class="use_money">
              <h3>지쿠케어 보상 및 한도</h3>
              <table class="table_area">
                <caption class="sr_only">
                  지쿠케어 보상 및 한도
                </caption>
                <colgroup>
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                </colgroup>
                <thead class="font14">
                  <tr>
                    <th>적용 범위</th>
                    <th>보상한도 <br>기기결함</th>
                    <th>보상한도 <br>이용자 <br>과실</th>
                    <th>이용자 <br>부담금</th>
                  </tr>
                </thead>
                <tbody class="small_padding">
                  <tr>
                    <td>대인 <br>사고 상대방의 인명피해</td>
                    <td>1.5 억원</td>
                    <td>5 천만원</td>
                    <td>최대 <br>50만원</td>
                  </tr>
                  <tr>
                    <td>대인 <br>사고 상대방의 물적피해</td>
                    <td>1 천만원</td>
                    <td>5 백만원</td>
                    <td>최대 <br>50만원</td>
                  </tr>
                  <tr>
                    <td>대인 <br>사고 상대방의 인명피해</td>
                    <td>1.5 억원</td>
                    <td>1 백만원</td>
                    <td>최대 <br>20만원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="use_money">
              <h3>보험 신청 전 확인사항</h3>
              <ul class="dot_list mb0">
                <li>
                  자손 보상은 건강보험 적용 후의 ‘본인 부담 실비’를 한도로 
                  합니다.
                </li>
                <li>대인/ 대물/ 자손 보험은 ‘자기부담금 최대 20-100만원(선택한 지쿠케어 플랜에 따라 결정)’이 부과됩니다.</li>
                <li>
                  무면허운전, 음주운전, 2인 이상 탑승, 신호위반, 횡단보도
                  주행 등 도로교통법 위반 시 보험혜택이 적용되지 않습니다.
                  (인도주행 금지만 위반한 경우, 탑승 중 인도 주행이 불가피
                  했다면 혜택 적용됨)
                </li>
                <li>보상 범위는 상단의 표를 확인해 주세요.</li>
                <li>비용을 지출한 경우 증빙을 위해 영수증을 챙겨주세요.</li>
                <li>쓰러진 기기에 의한 대물 접수의 경우, 기기가 스스로 쓰러졌음을 확인할 수 있는 블랙박스 영상 등을 확보해 주세요.</li>
              </ul>
            </div>
          </div>
        </uu-tab>
        <uu-tab title="킥고잉" />
      </uu-tabs>
    </div>
  </main>
  <!-- // main -->
</template>