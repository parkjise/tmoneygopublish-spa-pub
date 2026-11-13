<script setup lang="ts">
import { ref } from 'vue'
import uuToast from '@/components/uu-components/UuToast.vue'
import Prism  from '@/components/uu-components/Prism.vue'

// Toast
const toast01Ref = ref<InstanceType<typeof uuToast> | null>(null) // Ref
const toast01 = ref(false) // v-model
</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <!-- Toast Activator -->
    <button
      type="button"
      class="btn btn_primary"
      @click="toast01Ref?.showToast"
    >
      Show Toast
    </button>
    <!-- // Toast Activator -->
    <!-- Toast -->
    <uu-toast
      ref="toast01Ref"
      v-model="toast01"
      message="토스트 팝업"
    />
    <!-- // Toast -->
    <Prism
      script
    >
      {{ `
      // Toast
      const toast01Ref = ref<InstanceType<typeof uuToast> | null>(null) // Ref
      const toast01 = ref(false) // v-model
      ` }}
    </Prism>
    <Prism
      html
    >
      {{ `
        <!-- Toast Activator -->
        <button
          type="button"
          class="btn btn-primary"
          @click="toast01Ref?.showToast"
        >
          Show Toast
        </button>
        <!-- // Toast Activator -->
        <!-- Toast -->
        <uu-toast
          ref="toast01Ref"
          v-model="toast01"
          message="토스트 팝업 텍스트 
          토스트 팝업 텍스트 토스트 팝업 텍스트 "
        />
        <!-- // Toast -->
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Components
    </h3>
    <Prism
      script
      show
    >
      {{ `
      import uuToast from '@/components/uu-components/Toast.vue'
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
        const props = defineProps({
          message: {
            type: String,
            default: 'Toast'
          },
          delay: {
            type: Number,
            default: 2000
          },
          btnClose: {
            type: Boolean,
            default: false
          },
          modelValue: {
            type: Boolean,
            default: false
          }
        })
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Script
    </h3>
    <Prism
      script
      show
    >
      {{ `
        const refName = ref<InstanceType<typeof uuToast> | null>(null) // Ref
        const modelName = ref(false) // v-model
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Basic Markup
    </h3>
    <Prism
      html
      show
    >
      {{ `
        <!-- Toast Activator -->
        <button
          type="button"
          class="btn btn-primary"
          @click="toast01Ref?.showToast"
        >
          Show Toast
        </button>
        <!-- // Toast Activator -->

        <!-- Toast -->
        <uu-toast
          ref="toast01Ref"
          v-model="toast01"
          message="Toast Message 입니다."
        />
        <!-- // Toast -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>