<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
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
        <h4>결제 비밀번호 다시 입력</h4>
        <div class="text">
          <p>결제 시 사용할 비밀번호를 입력해주세요</p>
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
      </div>
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>