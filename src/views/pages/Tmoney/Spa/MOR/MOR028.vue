<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const tabItem = ['전체', '고속·시외', '택시', '자전거', '킥보드', '항공', '렌터카', '기차']
const input01 = ref()
</script>
<template>
  <!-- header -->
  <sub-header
    title="쿠폰"
    right-content
  >
    <template #header_right>
      <uu-button
        btn-style="none"
        label="지난 쿠폰"
        class="btn_payment_method"
      />
    </template>
  </sub-header>
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding">
      <div class="coupon">
        <form>
          <uu-input
            v-model="input01"
            label="쿠폰등록"
            placeholder="쿠폰번호 입력"
          />
          <uu-button
            size="lg"
            label="등록"
            btn-style="line"
          />
        </form>
        <uu-tabs class="depth2_tab">
          <uu-tab
            v-for="(tab, index) in tabItem"
            :key="index"
            :title="tab"
          >
            <div class="no_data">
              <uu-ic
                size="48"
                name="exclamation"
              />
              <p>발급/사용 가능한 쿠폰이 없습니다.</p>
            </div>
          </uu-tab>
        </uu-tabs>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>