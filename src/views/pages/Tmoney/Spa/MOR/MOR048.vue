<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="이벤트" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white no_padding">
      <div class="notice_area event">
        <uu-button>
          <span class="text_wrap">
            <span class="title">[안내] 교통카드 등록하면 GO마일리지 자동 적립</span>
            <span class="date">
              2024.01.04 - 2024.01.04 
            </span>
          </span>
          <span class="img_wrap">
            <img
              src="/src/assets/images/temp/temp_mor_event.png"
              alt="임시 썸네일"
            >
          </span>
        </uu-button>
        <uu-button>
          <span class="text_wrap">
            <span class="title">[이벤트][온다택시] 서울 택시비 30% SAVE 온다!</span>
            <span class="date">
              2024.01.04 - 2024.01.04 
            </span>
          </span>
          <span class="img_wrap">
            <img
              src="/src/assets/images/temp/temp_mor_event.png"
              alt="임시 썸네일"
            >
          </span>
        </uu-button>
        <uu-button>
          <span class="text_wrap">
            <span class="title">[안내] GO마일리지 사용 가이드 
              총 정리</span>
            <span class="date">
              2024.01.04 - 2024.01.04 
            </span>
          </span>
          <span class="img_wrap">
            <img
              src="/src/assets/images/temp/temp_mor_event.png"
              alt="임시 썸네일"
            >
          </span>
        </uu-button>
        <uu-button>
          <span class="text_wrap">
            <span class="title">[이벤트] [고속/시외] 매달 고속/시외 20% 할인받는 카드가 있다고?</span>
            <span class="date">
              2024.01.04 - 2024.01.04 
            </span>
          </span>
          <span class="img_wrap">
            <img
              src="/src/assets/images/temp/temp_mor_event.png"
              alt="임시 썸네일"
            >
          </span>
        </uu-button>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>