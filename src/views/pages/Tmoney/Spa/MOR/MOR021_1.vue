<script setup lang="ts">
import { ref, onMounted } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';

const input01 = ref('100M')
const input02 = ref('미조회')
const checkbox01 = ref()

const noScrollDivHeight = ref<number>(0);
const ScrollDivHeight = ref<number>(0);
const bodyHeight = ref<number>(0);

const noScrollDiv = ref<HTMLElement | null>(null);
const scrollDiv = ref<HTMLElement | null>(null);
// 상세페이지 이미지 높이 구하기
onMounted(() => {
  if (noScrollDiv.value) {
    noScrollDivHeight.value = noScrollDiv.value.clientHeight;
    bodyHeight.value = document.body.clientHeight;
  }
  if (scrollDiv.value) {
    // [240509] 값 수정 
    ScrollDivHeight.value = bodyHeight.value - noScrollDivHeight.value - 56
    scrollDiv.value.style.height = ScrollDivHeight.value+`px`
  }
});
</script>
<template>
  <!-- header -->
  <sub-header title="GO마일리지 전환" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding">
      <div class="go_mileage_transform">
        <div
          ref="scrollDiv"
          class="scroll_wrap"
        >
          <img
            src="/src/assets/images/temp/product_detail_info_ex.png"
            alt="상세페이지 이미지"
          >
        </div>
        <div
          ref="noScrollDiv"
          class="no_scroll"
        >
          <round-box hide-title>
            <uu-input
              v-model="input01"
              label="나의 GO마일리지"
              readonly
            />
            <uu-input
              v-model="input02"
              label="나의 T마일리지"
              readonly
            />
            <div class="flex_area">
              <uu-checkbox
                v-model="checkbox01"
                label="개인정보 수집 동의(필수)"
                value="check01"
                checkline
              />
              <uu-button>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </div>
          </round-box>
          <div class="ticket_notice">
            <p class="title">
              <uu-ic
                size="16"
                name="exclamation_gray090"
              />
              정보 제공 동의
            </p>
            <ul>
              <li>마일리지를 조회하기 위해 최소 1회 동의가 필요합니다.</li>
              <li>개인정보 수집/이용 미동의 시 GO마일리지 전환 서비스 이용이 어렵습니다.</li>
            </ul>
          </div>
          <div class="btn_area">
            <uu-button
              btn-color="primary"
              size="xl"
              label="T마일리지 조회하기"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>