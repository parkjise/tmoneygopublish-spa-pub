<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'

// radio
const radio01 = ref('option1') // Default checked

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

function changeEvent(value : string | number){
  console.log(value)
}

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="교통카드 선택 바텀시트"
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
    title="교통카드 선택"
    hide-footer
    add-class="card_select_bottom_sheet"
  >
    <template #modal_body>
      <form>
        <uu-fieldset
          legend="전체"
        >
          <uu-radio
            v-model="radio01"
            value="option1"
            dropdown-radio
            @change="changeEvent"
          >
            <template #label>
              <strong class="option_tit">티머니카드</strong>
              <span class="option_txt num">1234-****-****-5678</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            @change="changeEvent"
          >
            <template #label>
              <strong class="option_tit">티머니카드</strong>
              <span class="option_txt num">1234-****-****-5678</span>
            </template>
          </uu-radio>
          <uu-radio
            v-model="radio01"
            value="option3"
            dropdown-radio
            @change="changeEvent"
          >
            <template #label>
              <strong class="option_tit">국민카드</strong>
              <span class="option_txt num">****7005</span>
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