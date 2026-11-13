<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import { onMounted, ref } from 'vue';
import uuInput from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

const input01 = ref('') // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

const topAreaHei = ref()
onMounted(() => {
  window.addEventListener('resize', function() {
    topAreaHei.value = document.querySelector('.top_fixed_area')?.clientHeight;
  });
})
</script>
<template>
  <!-- header -->
  <subHeader
    title="고속버스 유실물센터 안내"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div
      class="container bg_white no_padding"
    >
      <div
        class="top_fixed_area"
      >
        <uu-input
          v-model="input01"
          placeholder="지역 및 터미널 검색"
          has-ic
          hide-label
          btn-clear
          @input="changeEvent"
        >
          <template #ic_name>
            <uu-ic
              name="search"
              size="20"
              color="primary"
            />
          </template>
        </uu-input>
        <div class="notice_wrap">
          <p>
            <uu-ic
              size="16"
              name="exclamation_gray070"
            />
            분실물/ 유실물은 고속버스 운송회사 별 각 지역센터에서 운영하고 있습니다.
          </p>
        </div>
      </div>
      <ul
        class="terminal_center_list"
        :style="{paddingTop:topAreaHei+'px'}"
      >
        <li
          v-for="(el,index) in 10"
          :key="index"
        >
          <button type="button">
            <div class="terminal_info">
              <div class="terminal_tit">
                금호고속 안산
              </div>
              <div class="split">
                <span class="address">서울시 서초구 반포동 19-3</span>
                <span class="num">031-6282-0114</span>
              </div>
            </div>
            <button type="button">
              <uu-ic
                name="phone"
                size="16"
                color="gray"
              />
            </button>
          </button>
        </li>
      </ul>
    </div>
  </main>
  <!-- // main -->
</template>