<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';

const tabItem = ['전체', '고속·시외', '택시', '자전거', '킥보드', '항공', '렌터카', '기차']
</script>
<template>
  <!-- header -->
  <sub-header title="결제내역" />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container no_padding">
      <div class="pay_area">
        <uu-tabs own-size-tab>
          <uu-tab
            v-for="(tab, index) in tabItem"
            :key="index"
            :title="tab"
          >
            <p class="notice_fixed">
              <uu-ic
                size="16"
                name="exclamation_gray070"
              />
              티머니GO를 통해 이용한 정보만 제공됩니다.
            </p>
            <div class="no_data">
              <uu-ic
                size="48"
                name="exclamation"
              />
              <p>이용내역이 없습니다.</p>
            </div>
          </uu-tab>
        </uu-tabs>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>