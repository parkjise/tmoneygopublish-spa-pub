<script setup lang="ts">
import mainHeader from '@/components/layout/MainHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';

interface naviBtnType {
  label: string
  icName: string
  url: string
}
interface listGroupType {
  title: string
  item: Array<{
    [key: string] : string
  }>
}

const naviBtn: naviBtnType[] = [
  { label: '알림', icName: 'alarm', url: '#' },
  { label: '공지사항', icName: 'notice', url: '#' },
  { label: '이벤트', icName: 'event', url: '#' },
  { label: '고객지원', icName: 'support', url: '#' },
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
  <main-header />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white pt12">
      <div class="navi_area">
        <uu-button
          v-for="(navi, index) in naviBtn"
          :key="index"
          btn-style="none"
          :label="navi.label"
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