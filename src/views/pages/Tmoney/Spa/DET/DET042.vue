<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const bankList = [
  { bank: '우리은행', imgSrc: '/src/assets/images/bank_logo/logo_woori.svg' },
  { bank: '국민은행', imgSrc: '/src/assets/images/bank_logo/logo_kb.svg' },
  { bank: '농협중앙회', imgSrc: '/src/assets/images/bank_logo/logo_nh.svg' },
  { bank: '신한은행', imgSrc: '/src/assets/images/bank_logo/logo_shinhan.svg' },
  { bank: '하나은행', imgSrc: '/src/assets/images/bank_logo/logo_hana.svg' },
  { bank: '기업은행', imgSrc: '/src/assets/images/bank_logo/logo_ibk.svg' },
  { bank: '외환은행', imgSrc: '/src/assets/images/bank_logo/logo_hana.svg' },
  { bank: '단위농협', imgSrc: '/src/assets/images/bank_logo/logo_nh.svg' },
  { bank: '카카오뱅크', imgSrc: '/src/assets/images/bank_logo/logo_kakao.svg' },
  { bank: '대구은행', imgSrc: '/src/assets/images/bank_logo/logo_dgegu.svg' },
  { bank: '부산은행', imgSrc: '/src/assets/images/bank_logo/logo_busan.svg' },
  { bank: '삼림조합', imgSrc: '/src/assets/images/bank_logo/logo_forestry.svg' },
  { bank: '산업은행', imgSrc: '/src/assets/images/bank_logo/logo_kdb.svg' },
  { bank: '상호저축', imgSrc: '/src/assets/images/bank_logo/logo_savings.svg' },
  { bank: '새마을금고', imgSrc: '/src/assets/images/bank_logo/logo_mg.svg' },
  { bank: '수협중앙회', imgSrc: '/src/assets/images/bank_logo/logo_suhyup.svg' },
  { bank: '신용협동조합', imgSrc: '/src/assets/images/bank_logo/logo_shinhyup.svg' },
  { bank: '케이뱅크', imgSrc: '/src/assets/images/bank_logo/logo_kbank.svg' },
  { bank: 'HSBC', imgSrc: '/src/assets/images/bank_logo/logo_hsbc.svg' },
  { bank: 'KB증권', imgSrc: '/src/assets/images/bank_logo/logo_kb.svg' },
  { bank: 'NH투자증권', imgSrc: '/src/assets/images/bank_logo/logo_nh.svg' },
  { bank: '우체국', imgSrc: '/src/assets/images/bank_logo/logo_post.svg' },
  { bank: '유안타증권', imgSrc: '/src/assets/images/bank_logo/logo_yuanta.svg' },
  { bank: '전북은행', imgSrc: '/src/assets/images/bank_logo/logo_jeonbuk.svg' },
  { bank: '제주은행', imgSrc: '/src/assets/images/bank_logo/logo_shinhan.svg' },
  { bank: '한국씨티은행', imgSrc: '/src/assets/images/bank_logo/logo_citi.svg' },
]
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="은행을 선택하세요"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    add-class="det_modal"
    hide-overlay
    hide-footer
  >
    <template #modal_header>
      은행을 선택하세요
    </template>
    <template #modal_body>
      <div class="bank_list">
        <uu-button
          v-for="item in bankList"
          :key="item.bank"
          btn-style="none"
          class="btn_bank"
        >
          <span class="img_area">
            <img
              :src="item.imgSrc"
              :alt="item.bank"
            >
          </span>
          <span class="bank">{{ item.bank }}</span>
        </uu-button>
      </div>
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>