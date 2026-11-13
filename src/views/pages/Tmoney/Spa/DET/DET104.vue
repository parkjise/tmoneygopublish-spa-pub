<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import UuModal from '@/components/uu-components/UuModal.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuInput, {type inputType} from '@/components/uu-components/UuInput.vue';
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';

const modal01 = ref(true)
const input01 = ref('')
const input02 = ref('')
const input03 = ref('')
const input04 = ref('')
const input05 = ref('')
const input06 = ref('')
const inlineGroup = ref([
  { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  },
  { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  },
  { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  },
    { 
    modelValue: '', 
    type: 'tel' as inputType, 
    label: 'inline', 
    hideLabel: true,
    placeholder: '1234', 
    maxLength: 4,
  }
])
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="카드 등록"
    add-class="modal_card_regist update"
  >
    <template #modal_header_right>
      <uu-button
        btn-style="none"
        label="카드삭제"
        class="btn_payment_method"
      />
    </template>
    <template #modal_body>
      <p class="desc_info">
        티머니GO 서비스를 이용하시려면 이전에 등록한 카드의 추가 정보가 필요합니다.
      </p>
      <round-box hide-title>
        <uu-tabs class="segment_tab">
          <uu-tab
            title="개인카드"
            active
          >
            <form>
              <div class="card card_select">
                <p class="card_label">
                  카드 선택
                </p>
                <uu-button
                  label="우체국 카드"
                  btn-style="line"
                />
                <p class="desc">
                  고속・시외 예매 시에만 사용 가능한 카드입니다.
                </p>
              </div>
              <div class="card card_num">
                <p class="card_label">
                  카드 번호
                </p>
                <div class="inline_form_wrap">
                  <uu-input
                    v-for="(item, index) in inlineGroup"
                    :key="index"
                    v-model="input01"
                    inline
                    :placeholder="item.placeholder"
                    :hide-label="item.hideLabel"
                    :max-length="item.maxLength"
                    :type="item.type"
                  />
                </div>
              </div>
              <div class="card card_info">
                <uu-input
                  v-model="input02"
                  label="카드 유효기간 (MMYY)"
                  placeholder="MMYY"
                  :max-length="4"
                />
                <uu-input
                  v-model="input03"
                  label="CVC 번호"
                  placeholder="카드 뒤 3~4자리"
                  :max-length="4"
                />
              </div>
              <div class="card card_password">
                <uu-input
                  v-model="input03"
                  label="카드 비밀번호"
                  placeholder="앞 2자리"
                  :max-length="2"
                />
              </div>
              <div class="card card_resident_num">
                <p class="label">
                  주민등록번호 앞 7자리 (YYMMDD)
                </p>
                <div class="inline_form_wrap">
                  <uu-input
                    v-model="input04"
                    inline
                    hide-label
                    label="생년월일"
                    placeholder="생년월일"
                    :max-length="6"
                    class="first"
                  />
                  <uu-input
                    v-model="input05"
                    inline
                    hide-label
                    placeholder="0"
                    :max-length="1"
                    class="last"
                  />
                  <div class="resident_mark">
                    <p
                      v-for="item in 6"
                      :key="item"
                    >
                      <span class="sr_only">주민등록번호 {{ item + 1 }}번째 자리</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card card_nickname">
                <uu-input
                  v-model="input06"
                  label="카드 별명 (선택)"
                  placeholder="7자 이하"
                  :max-length="7"
                />
              </div>
            </form>
          </uu-tab>
          <uu-tab
            title="법인카드"
          />
        </uu-tabs>
      </round-box>
    </template>
    <template #modal_footer>
      <uu-button
        btn-color="primary"
        size="xl"
        label="등록하기"
      />
    </template>
  </uu-modal>
</template>