<script setup lang="ts">
import { ref } from 'vue'
import UuModal from '@/components/uu-components/UuModal.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';

const modal01 = ref(true)
const radio01 = ref('checked')
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    title="면허종류 선택"
    hide-title
    hide-footer
  >
    <template #modal_body>
      <form class="driver_select">
        <uu-fieldset
          legend="옵션 선택"
          hide-legend
        >
          <uu-radio
            v-model="radio01"
            value="checked"
            dropdown-radio
            label="1종보통"
          />
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            label="1종대형"
          />
          <uu-radio
            v-model="radio01"
            value="option3"
            dropdown-radio
            label="1종소형"
          />
          <uu-radio
            v-model="radio01"
            value="option4"
            dropdown-radio
            label="2종보통"
          />
          <uu-radio
            v-model="radio01"
            value="option5"
            dropdown-radio
            label="2종소형"
          />
          <uu-radio
            v-model="radio01"
            value="option6"
            dropdown-radio
            label="2종원자"
          />
          <uu-radio
            v-model="radio01"
            value="option7"
            dropdown-radio
            label="대형견인차(트레일러)"
          />
          <uu-radio
            v-model="radio01"
            value="option8"
            dropdown-radio
            label="소형견인차"
          />
          <uu-radio
            v-model="radio01"
            value="option9"
            dropdown-radio
            label="구난차(레커)"
          />
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
</template>