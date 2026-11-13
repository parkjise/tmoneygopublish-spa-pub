<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import UuRadio from '@/components/uu-components/UuRadio.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const radio01 = ref('checked')

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="카테고리 선택 팝업"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- 카테고리 선택 바텀시트 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-footer
  >
    <template #modal_header>
      카테고리 선택
    </template>
    <template #modal_body>
      <form class="inquiry_type_select">
        <uu-fieldset
          legend="옵션 선택"
          hide-legend
        >
          <uu-radio
            v-model="radio01"
            value="checked"
            dropdown-radio
            label="고속·시외"
          />
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            label="택시"
          />
          <uu-radio
            v-model="radio01"
            value="option3"
            dropdown-radio
            label="자전거"
          />
          <uu-radio
            v-model="radio01"
            value="option4"
            dropdown-radio
            label="킥보드"
          />
          <uu-radio
            v-model="radio01"
            value="option5"
            dropdown-radio
            label="항공"
          />
          <uu-radio
            v-model="radio01"
            value="option6"
            dropdown-radio
            label="렌트카"
          />
          <uu-radio
            v-model="radio01"
            value="option7"
            dropdown-radio
            label="경로안내"
          />
          <uu-radio
            v-model="radio01"
            value="option8"
            dropdown-radio
            label="혜택"
          />
          <uu-radio
            v-model="radio01"
            value="option9"
            dropdown-radio
            label="회원정보"
          />
          <uu-radio
            v-model="radio01"
            value="option10"
            dropdown-radio
            label="GO마일리지"
          />
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
  <!-- // 카테고리 선택 바텀시트 -->
</template>

<style>
</style>