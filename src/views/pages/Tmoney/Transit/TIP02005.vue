<script setup lang="ts">
import { ref } from 'vue';
import exhibitionImage from '@/assets/images/temp/exhibition_ex.png'
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

let noResult = ref(false);

</script>
<template>
  <!-- header -->
  <subHeader
    title="여행 기획전"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <!-- [240426] 검색 결과 없음 수정으로 인한 class 추가 -->
    <div
      class="container no_padding"
      :class="{'no_result':noResult}"
    >
      <template v-if="!noResult">
        <ul class="exhibition_list">
          <li
            v-for="index in 4"
            :key="index"
          >
            <button
              type="button"
            >
              <div>
                <div class="exhibition_title">
                  봄바람 타고 국내여행 떠나 봄
                </div>
                <div class="exhibition_date">
                  2024.03.01 - 2024.04.30 
                </div>
              </div>
              <div 
                class="exhibition_thumb"
                :style="{backgroundImage:`url(${exhibitionImage})`}"
              />
            </button>
          </li>
        </ul>
      </template>
      <template v-else>
        <div class="no_result">
          <uu-ic v-bind="{name:'exclamation',size:'48'}" />
          <div class="no_result_txt">
            <div class="bold_txt">
              기획전 준비중
            </div>
            다양한 기획전과 더 좋은 상품을 <br>
            제공해 드리기 위해 준비중에 있습니다.
          </div>
        </div>
      </template>
    </div>
  </main>
  <!-- // main -->
</template>