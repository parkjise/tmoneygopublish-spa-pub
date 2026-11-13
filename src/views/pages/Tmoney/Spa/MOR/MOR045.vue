<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
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
        <div class="no_data">
          <uu-ic
            size="48"
            name="exclamation"
          />
          <p>알림 내역이 없습니다.</p>
        </div>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>