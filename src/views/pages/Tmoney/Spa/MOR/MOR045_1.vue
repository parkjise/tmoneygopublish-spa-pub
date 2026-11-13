<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="알림" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <div class="alarm">
        <uu-button>
          <span class="text_wrap">
            <span class="title">티머니GO</span>
            <span class="desc">쿠폰 선물합니다! 좋은 하루 되세요!</span>
            <span class="info">
              <span class="category">티머니GO</span>
              <span class="date">2021.06.14 10:32</span>
            </span>
          </span>
          <uu-ic
            size="16"
            name="arrow_right_gray"
          />
        </uu-button>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>