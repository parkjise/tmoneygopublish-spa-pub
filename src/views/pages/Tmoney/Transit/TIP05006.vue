<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import UuFieldset from '@/components/uu-components/UuFieldset.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const radio01 = ref('checked') // Default checked
</script>
<template>
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-footer
  >
    <template #modal_header>
      적용 받을 대상 선택
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
            class="apply"
          >
            <template #label>
              <span class="badge">일반</span>
              <span class="option_num">
                <span>-5,000</span>원
              </span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            class="apply"
          >
            <template #label>
              <span class="badge">아동</span>
              <span class="option_num">
                <span>-5,000</span>원
              </span>
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