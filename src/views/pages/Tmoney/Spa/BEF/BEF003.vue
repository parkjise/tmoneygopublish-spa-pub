<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuIc from '@/components/uu-components/UuIc.vue';
import uuCheckbox from '@/components/uu-components/UuCheckbox.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

function changeEvent(value : string | boolean | []){
  console.log(value)
}
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="마일리지 적립 개인정보 동의"
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
    add-class="bef_modal"
    hide-overlay
  >
    <template #modal_header>
      마일리지 적립을 위해 동의가 필요합니다.
    </template>
    <template #modal_body>
      <uu-checkbox
        label="개인정보 수집 이용 동의 (필수)"
        value="개인정보 수집 이용 동의 (필수)"
        :model-value="false"
        @change="changeEvent"
      >
        <span>개인정보 수집 이용 동의 (필수)</span>
        <uu-button btn-style="none">
          <uu-ic
            size="24"
            name="navi_right"
          />
        </uu-button>
      </uu-checkbox>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="동의"
        size="xl"
        disabled
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>