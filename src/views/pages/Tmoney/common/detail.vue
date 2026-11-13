<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuIc from '@/components/uu-components/UuIc.vue';

const title = "이벤트 타이틀"
</script>
<template>
  <!-- header -->
  <subHeader
    :title="title"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container no_padding">
      <div class="ticket_notice">
        <p class="title">
          <uu-ic
            size="16"
            name="exclamation"
          />
          유의사항
        </p>
        <p class="desc">
          서비스 이용 문의 : (주)티머니 고객센터 <a href="tel:1644-9255">1644-9255</a>
        </p>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>
<style scoped lang="scss">
.ticket_notice {
  padding: 2rem;
  .desc {
    a {
      color: #555555;
    }
  }
}
</style>