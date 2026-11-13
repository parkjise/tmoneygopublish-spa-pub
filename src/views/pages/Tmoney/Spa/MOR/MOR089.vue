<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuBadge from '@/components/uu-components/UuBadge.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
</script>
<template>
  <!-- header -->
  <sub-header
    title="자전거 고장/장애 신고"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor tabs">
    <div class="container no_padding">
      <uu-tabs class="support_tab">
        <uu-tab
          title="신고하기"
        />
        <uu-tab
          title="신고내역 보기"
          active
        >
          <div class="bike_report_list">
            <round-box hide-title>
              <div class="text_wrap">
                <div class="title">
                  <p class="img_area">
                    <img
                      src="/src/assets/images/ic_bike.png"
                      alt="자전거 아이콘"
                    >
                  </p>
                  <p>SPB-36289</p>
                </div>
                <div class="badge_area">
                  <uu-badge
                    label="단말기"
                    size="sm"
                  />
                  <uu-badge
                    label="페달"
                    size="sm"
                  />
                  <uu-badge
                    label="체인"
                    size="sm"
                  />
                </div>
                <p class="text">
                  테스트
                </p>
                <p class="date">
                  2023.03.02 14:34
                </p>
              </div>
              <uu-button label="삭제" />
            </round-box>
            <!-- 데이터 없을 경우 -->
            <div class="no_data">
              <uu-ic
                size="48"
                name="exclamation"
              />
              <p>신고 내역이 없습니다.</p>
            </div>
          </div>
        </uu-tab>
      </uu-tabs>
    </div>
  </main>
  <!-- // main -->
</template>