<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import UuInput from '@/components/uu-components/UuInput.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const input01 = ref('')
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="카드 별명"
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
    hide-overlay
    hide-footer
  >
    <template #modal_header>
      카드 별명
    </template>
    <template #modal_body>
      <div class="nickname_input">
        <form>
          <uu-input
            v-model="input01"
            label="btn-clear"
            placeholder="텍스트를 입력해주세요."
            btn-clear
            hide-label
          />
          <uu-button
            label="저장"
            btn-style="line"
            size="lg"
          />
        </form>
        <p>
          <uu-ic
            size="16"
            name="exclamation_gray070"
          />
          최대 7자까지 입력 가능합니다.
        </p>
      </div>
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>