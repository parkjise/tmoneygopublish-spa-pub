<script setup lang="ts">
import { ref, onMounted } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuTextarea from '@/components/uu-components/UuTextarea.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const input01 = ref()
const textarea01 = ref()

// scroll
const topHeight = ref<number>(0);
const bottomHeight = ref<number>(0);
const ScrollDivHeight = ref<number>(0);
const bodyHeight = ref<number>(0);

const noScrollDivTop = ref<HTMLElement | null>(null);
const noScrollDivBottom = ref<HTMLElement | null>(null);
const scrollDiv = ref<HTMLElement | null>(null);
onMounted(() => {
  if (noScrollDivTop.value && noScrollDivBottom.value && scrollDiv.value) {
    topHeight.value = noScrollDivTop.value.clientHeight
    bottomHeight.value = noScrollDivBottom.value.clientHeight
    bodyHeight.value = document.body.clientHeight;

    const width = window.innerWidth;
    if (width >= 366 && width <= 388) {
      bottomHeight.value += 20
    }

    ScrollDivHeight.value = bodyHeight.value - topHeight.value - bottomHeight.value - 96
    scrollDiv.value.style.height = ScrollDivHeight.value + `px`
  }
});
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
            <uu-input
              v-model="input01"
              label="이력 조회"
              hide-label
              placeholder="2024.01.22."
            />
            <uu-button
              label="조회"
              size="lg"
              btn-style="line"
            />
          </form>
          <p>최근 6개월까지의 이력만 조회 가능합니다.</p>
        </div>
        <div
          ref="scrollDiv"
          class="scroll_wrap"
        >
          <div class="no_data">
            <uu-ic
              size="48"
              name="exclamation"
            />
            <p>이동 내역이 존재하지 않습니다.</p>
          </div>
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