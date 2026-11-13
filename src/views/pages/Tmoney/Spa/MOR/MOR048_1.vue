<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuIc from '@/components/uu-components/UuIc.vue';
import uuCheckbox from '@/components/uu-components/UuCheckbox.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model
</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="약관동의가 필요합니다"
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
  >
    <template #modal_header>
      약관동의가 필요합니다
    </template>
    <template #modal_body>
      <div class="event_agree">
        <uu-checkbox
          label="전체동의"
          value="전체동의"
          :model-value="false"
          class="all"
        />
        <div class="flex_area">
          <uu-checkbox
            label="전체동의"
            value="전체동의"
            :model-value="false"
            checkline
          >
            개인정보 수집 및 이용동의 <span>(필수)</span>
          </uu-checkbox>
          <uu-button>
            <uu-ic
              size="20"
              name="arrow"
              direction="left"
            />
          </uu-button>
        </div>
        <div class="flex_area">
          <uu-checkbox
            label="전체동의"
            value="전체동의"
            :model-value="false"
            checkline
          >
            개인정보 제3자 제공 동의 <span>(필수)</span>
          </uu-checkbox>
          <uu-button>
            <uu-ic
              size="20"
              name="arrow"
              direction="left"
            />
          </uu-button>
        </div>
      </div>
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