<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="공지사항" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white no_padding">
      <div class="notice_area">
        <uu-button>
          <span class="text_wrap">
            <span class="title">&lt;탈 때마다 10%적립&gt; 이벤트 변경 안내</span>
            <span class="info">
              <span class="category">온다택시</span>
              <span class="date">2024.01.04</span>
            </span>
          </span>
          <uu-ic
            size="24"
            name="arrow"
          />
        </uu-button>
        <uu-button>
          <span class="text_wrap">
            <span class="title">2024년 설 연휴 고속버스 특별예매 안내
              <span class="new" />
            </span>
            <span class="info">
              <span class="category tmoney">티머니GO</span>
              <span class="date">2024.01.04</span>
            </span>
          </span>
          <uu-ic
            size="24"
            name="arrow"
          />
        </uu-button>
        <uu-button>
          <span class="text_wrap">
            <span class="title">개인(신용)정보 수집, 이용 동의 약관 변경 안내(11/28)</span>
            <span class="info">
              <span class="category tmoney">티머니GO</span>
              <span class="date">2024.01.04</span>
            </span>
          </span>
          <uu-ic
            size="24"
            name="arrow"
          />
        </uu-button>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>