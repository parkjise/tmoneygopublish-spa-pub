<script setup lang="ts">
import { ref, computed } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import UuModal from '@/components/uu-components/UuModal.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
import UuInput, {type inputType} from '@/components/uu-components/UuInput.vue';

const modal01 = ref(true)
const input01 = ref('')
const input02 = ref('')
const input03 = ref('')
const input04 = ref('')
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

// 사업자 등록 번호
const firstGroup = computed(() => {
  return input04.value.slice(0, 3);
});
const secondGroup = computed(() => {
  return input04.value.slice(3, 5);
});
const thirdGroup = computed(() => {
  return input04.value.slice(5, 10);
});
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="카드 등록"
    add-class="modal_card_regist"
  >
    <template #modal_body>
      <round-box hide-title>
        <form>
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
            <div class="flex_area">
              <uu-checkbox
                label="법인공용카드"
                value="법인공용카드"
              />
              <uu-button btn-style="none">
                <uu-ic
                  size="16"
                  name="camera"
                />
                카드스캔하기
              </uu-button>
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
          <div class="card card_company">
            <p class="label">
              사업자 등록 번호
            </p>
            <!-- 보안패드로 실제 입력 받는 input창 -->
            <uu-input
              v-model="input04"
              hide-label
              label="사업자 등록 번호"
              class="hide_input"
            />
            <!-- // 보안패드로 실제 입력 받는 input창 -->
            <!-- 사업자 등록 번호 보이는 결과값 -->
            <div class="inline_form_wrap">
              <uu-input
                v-model="firstGroup"
                inline
                hide-label
                label="사업자 등록 번호"
                placeholder="123"
              />
              <uu-input
                v-model="secondGroup"
                inline
                hide-label
                label="사업자 등록 번호"
                placeholder="123"
              />
              <uu-input
                v-model="thirdGroup"
                inline
                hide-label
                label="사업자 등록 번호"
                placeholder="123"
              />
            </div>
            <!-- // 사업자 등록 번호 보이는 결과값 -->
            <p class="desc">
              기명 법인카드의 경우 카드 종류를 개인카드로 선택해주세요.
            </p>
          </div>
          <div class="card card_nickname">
            <uu-input
              v-model="input06"
              label="카드 별명 (선택)"
              placeholder="7자 이하"
              :max-length="7"
            />
          </div>
          <div class="card_checkbox">
            <div class="flex_area">
              <uu-checkbox
                label="전자금융거래 이용약관 동의 (필수)"
                value="전자금융거래 이용약관 동의 (필수)"
                checkline
              />
              <uu-button label="전자금융거래 이용약관">
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </div>
            <div class="flex_area">
              <uu-checkbox
                label="전자금융거래 이용약관 동의 (필수)"
                value="전자금융거래 이용약관 동의 (필수)"
                checkline
              />
              <uu-button label="전자금융거래 이용약관">
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </div>
          </div>
          <div class="card_ticket_notice">
            <uu-ic
              size="16"
              name="exclamation"
            />
            <p>
              카드번호, 유효기간(MMYY), 생년월일(YYMMDD)을 확인해
              주십시오.
            </p>
          </div>
        </form>
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