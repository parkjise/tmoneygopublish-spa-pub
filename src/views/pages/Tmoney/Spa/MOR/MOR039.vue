<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuTextarea from '@/components/uu-components/UuTextarea.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const textarea01 = ref()

// scroll
const topHeight = ref<number>(0);
const bottomHeight = ref<number>(0);
const scrollDivHeight = ref<number>(0);
const bodyHeight = ref<number>(0);

const noScrollDivTop = ref<HTMLElement | null>(null);
const noScrollDivBottom = ref<HTMLElement | null>(null);
const scrollDiv = ref<HTMLElement | null>(null);
// onMounted(() => {
//   if (noScrollDivTop.value && noScrollDivBottom.value && scrollDiv.value) {
//     topHeight.value = noScrollDivTop.value.clientHeight
//     bottomHeight.value = noScrollDivBottom.value.clientHeight
//     bodyHeight.value = document.body.clientHeight;

//     const width = window.innerWidth;
//     if (width >= 366 && width <= 388) {
//       bottomHeight.value += 20
//     }
    
//     scrollDivHeight.value = bodyHeight.value - topHeight.value - bottomHeight.value - 96
//     scrollDiv.value.style.height = scrollDivHeight.value + `px`
//   }
// });

const check = () => {
  if (noScrollDivTop.value && noScrollDivBottom.value && scrollDiv.value) {
    calculateHeights()
  }
}

const calculateHeights = () => {
  if (noScrollDivTop.value && noScrollDivBottom.value && scrollDiv.value) {
    topHeight.value = noScrollDivTop.value.clientHeight
    bottomHeight.value = noScrollDivBottom.value.clientHeight
    bodyHeight.value = document.body.clientHeight;
  
    scrollDivHeight.value = bodyHeight.value - topHeight.value - bottomHeight.value - 96
    scrollDiv.value.style.height = scrollDivHeight.value + `px`
  }
}
</script>
<template>
  <!-- header -->
  <sub-header title="환승 내역 문의" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white no_padding">
      <div class="transfer_reward_inquiry">
        <div
          ref="noScrollDivTop"
          class="no_scroll top"
        >
          <form>
            <!-- [240516] uu-input > uu-button으로 수정 -->
            <uu-button
              size="lg"
              class="btn_date"
            >
              <!-- 날짜 선택 전 -->
              <span>날짜를 선택해주세요</span>
              <!-- 날짜 선택시 date 클래스 추가 -->
              <!-- <span class="date">2024.01.22</span> -->
            </uu-button>
            <!-- // [240516] uu-input > uu-button으로 수정 -->
            <uu-button
              label="조회"
              size="lg"
              btn-style="line"
              @click="check"
            />
          </form>
          <p>최근 6개월까지의 이력만 조회 가능합니다.</p>
        </div>
        <div
          ref="scrollDiv"
          class="scroll_wrap"
        >
          <table>
            <colgroup>
              <col width="33.333%">
              <col width="33.333%">
              <col width="33.333%">
            </colgroup>
            <thead>
              <tr class="th_wrap">
                <th>교통수단</th>
                <th>승/하차</th>
                <th>이용시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대중교통</td>
                <td>승차</td>
                <td class="date">
                  16:01:24
                </td>
              </tr>
              <tr>
                <td>대중교통</td>
                <td>하차</td>
                <td class="date">
                  16:27:50
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>대여</td>
                <td class="date">
                  16:42:08
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
              <tr>
                <td>따릉이</td>
                <td>반납</td>
                <td class="date">
                  16:58:34
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          ref="noScrollDivBottom"
          class="no_scroll bottom"
        >
          <form>
            <uu-textarea
              v-model="textarea01"
              label="문의 내용"
              placeholder="문의하실 내용을 작성해 주세요."
            />
          </form>
          <div class="ticket_notice">
            <p class="title">
              <uu-ic
                size="16"
                name="exclamation"
              />
              문의하신 내역은 메뉴>고객지원>1:1문의에서 확인 가능
              합니다.
            </p>
          </div>
          <div class="btn_area">
            <uu-button
              btn-color="primary"
              size="xl"
              label="문의 접수하기"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>