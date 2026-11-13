<script setup lang="ts">
import mainHeader from '@/components/layout/MainHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';

interface naviBtnType {
  label: string
  icName: string
  url: string
  disabled: boolean
}
interface listGroupType {
  title: string
  item: Array<{
    [key: string] : string
  }>
}

const naviBtn: naviBtnType[] = [
  { label: '알림', icName: 'alarm', url: '#', disabled: true },
  { label: '공지사항', icName: 'notice', url: '#', disabled: false },
  { label: '이벤트', icName: 'event', url: '#', disabled: false },
  { label: '고객지원', icName: 'support', url: '#', disabled: false },
]

const listGroup: listGroupType[] = [
  {
    title: '결제',
    item: [
      { name: '결제 수단 관리', url: '#' },
      { name: '결제 내역', url: '#' },
    ]
  },
  {
    title: 'GO마일리지',
    item: [
      { name: 'GO마일리지 내역 조회', url: '#' },
      { name: 'GO마일리지 전환', url: '#' },
      { name: 'GO마일리지 적립 및 사용안내', url: '#' },
    ]
  }
]
</script>
<template>
  <!-- header -->
  <main-header
    member-name="회원가입 / 로그인"
    hide-icon
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white pt12">
      <div class="app_bar">
        <div class="top">
          <ul class="my_mileage">
            <li>
              <p class="sort">
                GO마일리지
              </p>
              <uu-button
                class="btn_point"
                disabled
              >
                0M
              </uu-button>
            </li>
            <li>
              <p class="sort">
                쿠폰
              </p>
              <uu-button
                class="btn_point"
                disabled
              >
                0
              </uu-button>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <uu-button
            btn-style="none"
            label="교통카드 등록 혜택"
            disabled
          />
          <uu-button
            btn-style="none"
            label="친구 초대하기"
            disabled
          />
        </div>
      </div>
      <div class="navi_area">
        <uu-button
          v-for="(navi, index) in naviBtn"
          :key="index"
          btn-style="none"
          :label="navi.label"
          :disabled="navi.disabled"
          @click="$router.push(navi.url)"
        >
          <uu-ic
            size="32"
            :name="navi.icName"
          />
          <span>{{ navi.label }}</span>
        </uu-button>
      </div>
      <hr class="line">
      <div
        v-for="list in listGroup"
        :key="list.title"
        class="menu_area"
      >
        <h3 class="sub_title">
          {{ list.title }}
        </h3>
        <ul class="list_wrap">
          <li
            v-for="btn in list.item"
            :key="btn.name"
          >
            <uu-button
              btn-style="none"
              disabled
              @click="$router.push(btn.url)"
            >
              <span>{{ btn.name }}</span>
              <uu-ic
                size="24"
                name="navi_right"
              />
            </uu-button>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>