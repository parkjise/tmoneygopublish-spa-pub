<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuCheckbox from '@/components/uu-components/UuCheckbox.vue';

const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

const modal03Ref = ref() // Ref
const modal03 = ref<boolean>(false) // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="이용자 정보 수정 약관 동의 바텀시트"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal02Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- 이용자 정보 수정 약관 동의 바텀시트 -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="bottom"
  >
    <template #modal_header>
      이용자 정보 제공 동의가 필요합니다.
    </template>
    <template #modal_body>
      <uu-checkbox
        value="제3자 정보 제공 동의 (필수)"
        @change="changeEvent"
      >
        제3자 정보 제공 동의 (필수)
        <button
          type="button"
          class="link_btn"
        >
          <uu-ic v-bind="{name:'arrow',size:'24'}" />
        </button>
      </uu-checkbox>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        size="xl"
        label="동의하기"
        @click="[modal03Ref.showModal($event),btnActions.close()]"
      />
    </template>
  </uu-modal>
  <!-- // 이용자 정보 수정 약관 동의 바텀시트 -->

  <!-- 이용자 정보 수정 약관 동의 완료 팝업 -->
  <uu-modal
    ref="modal03Ref"
    v-model="modal03"
    type="alert"
  >
    <template #modal_header>
      알림
    </template>
    <template #modal_body>
      이용자 정보가 저장되었습니다.
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // 이용자 정보 수정 약관 동의 완료 팝업 -->
</template>