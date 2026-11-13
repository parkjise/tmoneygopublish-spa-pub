<script setup lang="ts">
import { ref } from 'vue';
import uuInput from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

const input01 = ref('제주') // v-model
let noResult = ref(false);

const changeEvent = (value: string) => {
  console.log(value);
}

</script>
<template>
  <!-- searchBar -->
  <uu-input
    v-model="input01"
    class="search_bar_input"
    placeholder="여행 상품, 테마, 지역 검색"
    has-ic
    hide-label
    btn-clear
    @input="changeEvent"
  >
    <template #ic_name>
      <uuIc v-bind="{name:'back',size:'24'}" />
    </template>
  </uu-input>
  <!--// searchBar -->
  <!-- main -->
  <main class="main">
    <!-- [240426] 검색 결과 없음 수정으로 인한 class 추가 -->
    <div
      class="container no_padding"
      :class="{'no_result':noResult}"
    >
      <template v-if="!noResult">
        <ul class="search_result_list">
          <!-- 결과가 지역의 경우 -->
          <li>
            <uuIc v-bind="{name:'location',size:'20'}" />
            <div class="search_item">
              <span class="search_txt">제주</span>
              <div class="whole_item">
                상품 전체 보기
              </div>
            </div>
          </li>
          <!-- 결과가 검색어의 경우 -->
          <li>
            <uuIc v-bind="{name:'search',size:'24'}" />
            <div class="search_item">
              <span class="search_txt">제주</span>가족여행
            </div>
          </li>
          <!-- 결과가 상품의 경우 -->
          <li>
            <uuIc v-bind="{name:'suitcase',size:'20'}" />
            <div class="search_item">
              [<span class="search_txt">제주</span>] 제주가족여행
            </div>
          </li>
        </ul>
      </template>
      <!-- 상품 검색 결과가 없을 경우 -->
      <template v-else>
        <div class="no_result">
          <uuIc v-bind="{name:'exclamation',size:'48'}" />
          <div class="no_result_txt">
            조회 상품이 없습니다.
          </div>
        </div>
      </template>
      <!-- // 상품 검색 결과가 없을 경우 -->
    </div>
  </main>
  <!-- // main -->
</template>