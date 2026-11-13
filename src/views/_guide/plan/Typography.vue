<script setup lang="ts">
import { onMounted } from 'vue'
import Prism from 'prismjs'
onMounted(() => {
  Prism.highlightAll()
})
</script>
<template>
  <div class="content-body">
    <section class="section">
      <h3 class="section-subtitle">
        Font Family
      </h3>
      <div class="font-exam">
        <div class="font-area">
          <h5 class="font-area-title">
            Noto Sans Korean
          </h5>
          <div class="font-box">
            <span class="font-light">노토 산스 코리안</span>
            <span class="font-light">NotoSansKorean</span>
            <span class="font-light">DemiLight</span>
          </div>
          <div class="font-box">
            <span class="font-regular">노토 산스 코리안</span>
            <span class="font-regular">NotoSansKorean</span>
            <span class="font-regular">Regular</span>
          </div>
          <div class="font-box">
            <span class="font-medium">노토 산스 코리안</span>
            <span class="font-medium">NotoSansKorean</span>
            <span class="font-medium">Medium</span>
          </div>
          <div class="font-box">
            <span class="font-bold">노토 산스 코리안</span>
            <span class="font-bold">NotoSansKorean</span>
            <span class="font-bold">Bold</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Font Weight
      </h3>
      <div class="font-exam">
        <div class="font-area">
          <div class="font-box">
            <span class="font-light">$fontLight</span>
            <span class="font-light">300</span>
          </div>
          <div class="font-box">
            <span class="font-regular">$fontRegular</span>
            <span class="font-regular">400</span>
          </div>
          <div class="font-box">
            <span class="font-medium">$fontMedium</span>
            <span class="font-medium">500</span>
          </div>
          <div class="font-box">
            <span class="font-bold">$fontBold</span>
            <span class="font-bold">700</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Font Size
      </h3>
      <div class="font-exam">
        <div class="font-area">
          <div class="font-box">
            <span class="h1">h1</span>
            <span class="h1">3.2rem</span>
          </div>
          <div class="font-box">
            <span class="h2">h2</span>
            <span class="h2">2.6rem</span>
          </div>
          <div class="font-box">
            <span class="h3">h3</span>
            <span class="h3">2rem</span>
          </div>
          <div class="font-box">
            <span class="h4">h4</span>
            <span class="h4">1.8rem</span>
          </div>
          <div class="font-box">
            <span class="h5">h5</span>
            <span class="h5">1.6rem</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>
