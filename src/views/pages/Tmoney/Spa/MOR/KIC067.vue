<script setup lang="ts">
import { ref } from 'vue'
import UuModal from '@/components/uu-components/UuModal.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';

const modal01 = ref(true)
const input01 = ref('')
const radio01 = ref('checked')
</script>
<template>
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="운전면허 등록"
    hide-title
    add-class="driver_regist"
  >
    <template #modal_body>
      <h4>운전면허 등록</h4>
      <p class="desc">
        운전면허증을 등록해 주세요
      </p>
      <round-box hide-title>
        <form>
          <uu-input
            v-model="input01"
            label="이름"
            placeholder="홍길동"
          />
          <uu-input
            v-model="input01"
            label="생년월일"
            placeholder="19771122"
          />
          <div class="radio_area">
            <p>성별</p>
            <uu-radio
              v-model="radio01"
              label="남"
              value="checked"
              inline
            />
            <uu-radio
              v-model="radio01"
              label="여"
              value="unchecked"
              inline
            />
          </div>
          <div class="driver_case">
            <p>면허종류</p>
            <uu-button btn-style="line">
              <span />
              <uu-ic
                size="20"
                name="arrow"
              />
            </uu-button>
          </div>
          <div class="driver_num">
            <p>운전면허번호</p>
            <div class="inline_form_wrap">
              <uu-input
                v-model="input01"
                inline
                placeholder="지역or코드"
                hide-label
              />
              <uu-input
                v-model="input01"
                inline
                placeholder="00"
                hide-label
              />
              <uu-input
                v-model="input01"
                inline
                placeholder="000000"
                hide-label
              />
              <uu-input
                v-model="input01"
                inline
                placeholder="00"
                hide-label
              />
            </div>
          </div>
          <div class="img_area">
            <img
              src="/src/assets/images/img_driver.png"
              alt="자동차운전면허증 예시"
            >
          </div>
          <div class="checkbox_area">
            <div class="flex_area">
              <uu-checkbox
                label="개인정보 수집 동의(필수)"
                checkline
              />
              <uu-button>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </div>
            <div class="flex_area">
              <uu-checkbox
                label="개인정보의 제 3자 제공 동의(필수)"
                checkline
              />
              <uu-button>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </div>
            <div class="flex_area">
              <uu-checkbox
                label="타인의 운전면허증 도용 시 법적 처벌을 받을 수 있습니다.(필수)"
                checkline
              />
            </div>
            <div class="flex_area">
              <uu-checkbox
                label="본인의 정보를 부정확하게 입력 시, 킥보드 보험 혜택을 받을 수 없습니다.(필수)"
                checkline
              />
            </div>
          </div>
        </form>
      </round-box>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        size="xl"
        label="완료"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
</template>