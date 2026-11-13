<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import UuInput from '@/components/uu-components/UuInput.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
const input01 = ref()
</script>
<template>
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    hide-overlay
    hide-title
    hide-footer
  >
    <template #modal_body>
      <div class="payment_password">
        <h4>결제 비밀번호 변경</h4>
        <div class="text error">
          <p>결제 비밀번호가 일치하지 않습니다. (4/5)</p>
          <p>5회 입력 실패 시 잠금처리 됩니다.</p>
        </div>
        <div class="password_mark">
          <uu-input
            v-model="input01"
            hide-label
            label="결제 비밀번호"
            type="password"
            :max-length="6"
            placeholder=""
            class="sr_only"
          />
          <div class="dots">
            <span
              v-for="num in 6"
              :key="num"
              class="dot"
            />
            <div class="dots_full">
              <span
                v-for="item in input01"
                :key="item"
                class="dot full"
              >
                <span class="sr_only">{{ item }}</span>
              </span>
            </div>
          </div>
        </div>
        <uu-button
          label="비밀번호를 잊어버리셨나요?"
          btn-style="text"
          class="btn_forget_password"
        />
      </div>
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>