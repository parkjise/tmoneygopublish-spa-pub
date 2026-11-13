<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuButton from '@/components/uu-components/UuButton.vue';

const tabItem = [
  {
    title:'대중교통',
    txt:`대중교통 내역을 보기 위해서는
    선불/후불 교통 카드 등록이 필요합니다.`,
    btnTxt:'‘교통카드 등록/변경’ 바로 가기'
  },
  {
    title:'고속·시외',
    txt:'고속·시외 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘고속·시외’ 시작하기'
  },
  {
    title:'택시',
    txt:'택시 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘택시’ 시작하기'
  },
  {
    title:'자전거',
    txt:'자전거 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘자전거’ 시작하기'
  },
  {
    title:'킥보드',
    txt:'킥보드 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘킥보드’ 시작하기'
  },
  {
    title:'항공',
    txt:'항공 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘항공’ 시작하기'
  },
  {
    title:'렌터카',
    txt:'렌터카 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘렌터카’ 시작하기'
  },
  {
    title:'기차',
    txt:'기차 서비스를 지금 바로 이용해보세요!',
    btnTxt:'‘기차’ 시작하기'
  },
]

</script>
<template>
  <!-- header -->
  <sub-header
    title="이용내역"
    right-content
  >
    <template #header_right>
      <button 
        type="button"
        class="btn pay_history_btn"
      >
        결제내역
      </button>
    </template>
  </sub-header>
  <!-- // header -->
  <!-- main -->
  <main class="main det tabs">
    <div class="container no_padding">
      <uu-tabs own-size-tab>
        <uu-tab
          v-for="(tab, index) in tabItem"
          :key="index"
          :title="tab.title"
        >
          <div class="usage_area">
            <div class="no_service">
              <uu-ic v-bind="{name:'exclamation',size:'48'}" />
              <div
                class="no_servie_txt"
              >
                {{ tab.txt }}
              </div>
              <div class="btn_wrap">
                <uu-button
                  btn-color="primary"
                  btn-style="line"
                >
                  {{ tab.btnTxt }}
                  <uuIc
                    name="arrow2"
                    size="16"
                  />
                </uu-button>
              </div>
            </div>
          </div>
        </uu-tab>
      </uu-tabs>
    </div>
  </main>
  <!-- // main -->
</template>