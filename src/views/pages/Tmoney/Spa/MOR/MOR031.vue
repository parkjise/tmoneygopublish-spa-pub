<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const tabItem = ['전체', '사용', '만료', '선물']
</script>
<template>
  <!-- header -->
  <sub-header title="지난 쿠폰" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding">
      <div class="coupon last_coupon">
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
              <p>지난 쿠폰이 없습니다.</p>
            </div>
          </uu-tab>
        </uu-tabs>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>