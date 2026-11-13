<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import UuRadio from '@/components/uu-components/UuRadio.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const radio01 = ref('checked') // Default checked
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="조회 기준 선택"
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
    hide-footer
  >
    <template #modal_header>
      조회 기준 선택
    </template>
    <template #modal_body>
      <form>
        <uu-fieldset
          legend="옵션 선택"
          hide-legend
        >
          <uu-radio
            v-model="radio01"
            value="option1"
            dropdown-radio
          >
            <template #label>
              <strong class="option_txt">전체</strong>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
          >
            <template #label>
              <span class="option_txt">적립</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="option3"
            dropdown-radio
          >
            <template #label>
              <strong class="option_txt">사용</strong>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="option4"
            dropdown-radio
          >
            <template #label>
              <strong class="option_txt">취소</strong>
            </template>
          </uu-radio>
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>