<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import roundBox from '@/components/layout/RoundBox.vue';
</script>
<template>
  <!-- header -->
  <sub-header title="신용(체크)카드 등록/변경" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <round-box
        title="등록카드"
        class="regist"
      >
        <div class="tmoney_regist card">
          <p class="desc">
            (최대 5개 등록 가능)
          </p>
          <uu-button class="btn_card_regist">
            <uu-ic
              size="20"
              name="plus"
            />
            신용/체크 카드 등록
          </uu-button>
        </div>
      </round-box>
      <div class="tmoney_regist no_data card">
        <uu-ic
          size="48"
          name="exclamation"
        />
        <p class="title">
          등록된 카드가 없습니다.
        </p>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>