<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import { ref } from 'vue';
import uuInput from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuTabs from '@/components/uu-components/UuTabs.vue'
import uuTab from '@/components/uu-components/UuTab.vue'

const input01 = ref('') // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

const tabItem = ['고속버스', '시외버스'];
</script>
<template>
  <!-- header -->
  <subHeader
    title="고속·시외 운수회사 안내"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor tabs">
    <div
      class="container bg_white no_padding"
    >
      <!-- tab -->
      <uu-tabs
        class="terminal_tab"
      >
        <uu-tab
          v-for="(item,index) in tabItem"
          :key="index"
          :title="item"
        >
          <div class="top_fixed_area">
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
          </div>
          <ul class="terminal_list">
            <li>
              <button type="button">
                <div class="terminal_info">
                  <div class="terminal_tit">
                    경기고속
                    <div class="terminal_logo">
                      <img
                        src="/src/assets/images/logo_exp_gyeonggi.svg"
                        alt=""
                      >
                    </div>
                  </div>
                  <div class="split">
                    <span class="address">서울시 서초구 반포동 19-4</span>
                    <span class="num">1688-4700</span>
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
            <li>
              <button type="button">
                <div class="terminal_info">
                  <div class="terminal_tit">
                    경남고속
                    <div class="terminal_logo">
                      <img
                        src="/src/assets/images/logo_exp_kyungnam.svg"
                        alt=""
                      >
                    </div>
                  </div>
                  <div class="split">
                    <span class="address">서울시 서초구 반포동 19-4</span>
                    <span class="num">1688-4700</span>
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
            <li>
              <button type="button">
                <div class="terminal_info">
                  <div class="terminal_tit">
                    경북고속
                    <div class="terminal_logo">
                      <img
                        src="/src/assets/images/logo_exp_kyongbuk.svg"
                        alt=""
                      >
                    </div>
                  </div>
                  <div class="split">
                    <span class="address">서울시 서초구 반포동 19-4</span>
                    <span class="num">1688-4700</span>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button type="button">
                <div class="terminal_info">
                  <div class="terminal_tit">
                    고려고속
                    <div class="terminal_logo">
                      <img
                        src="/src/assets/images/logo_exp_chunyeo.svg"
                        alt=""
                      >
                    </div>
                  </div>
                  <div class="split">
                    <span class="address">서울시 서초구 반포동 19-4</span>
                    <span class="num">1688-4700</span>
                  </div>
                  <a
                    href="https://kallimousine.com"
                    class="terminal_link"
                  >
                    https://kallimousine.com
                  </a>
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
        </uu-tab>
      </uu-tabs>
      <!-- // tab -->
    </div>
  </main>
  <!-- // main -->
</template>