<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuIc from '@/components/uu-components/UuIc.vue'
import uuInput from '@/components/uu-components/UuInput.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'
import uuCheckbox from '@/components/uu-components/UuCheckbox.vue';

const modal01 = ref(true)

const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

const modal03Ref = ref() // Ref
const modal03 = ref<boolean>(false) // v-model

const input01 = ref('') // v-model
const input02 = ref('') // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

const radio01 = ref('checked') // Default checked

</script>
<template>
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="full"
    title="이용자 정보 입력"
    full-content
    round-footer
  >
    <template #modal_body>
      <div class="bg_gray">
        <div class="content_wrap">
          <round-box>
            <template #title>
              <div class="user_detail">
                <uu-ic v-bind="{name:'people',size:'20'}" />
                <div class="user_detail_txt">
                  일반 1
                </div>
                <div class="coupon_badge">
                  쿠폰
                </div>
              </div>
            </template>
            <form>
              <uu-input
                v-model="input01"
                label="이름 (필수)"
                placeholder="한글 입력"
                @input="changeEvent"
              />
              <uu-input
                v-model="input02"
                label="연락처 (필수)"
                placeholder="-를 제외한 숫자 입력"
                @input="changeEvent"
              />
              <uu-fieldset
                legend="성별(필수)"
              >
                <uu-radio
                  v-model="radio01"
                  label="남"
                  value="남"
                  inline
                  @change="changeEvent"
                />
                <uu-radio
                  v-model="radio01"
                  label="여"
                  value="여"
                  inline
                  @change="changeEvent"
                />
              </uu-fieldset>
            </form>
          </round-box>
          <round-box>
            <template #title>
              <div class="user_detail">
                <uu-ic v-bind="{name:'people',size:'20'}" />
                <div class="user_detail_txt">
                  아동 1
                </div>
                <div class="coupon_badge">
                  쿠폰
                </div>
              </div>
              <uu-button
                class="right_btn"
                size="xs"
                btn-style="line"
                label="삭제"
              />
            </template>
            <form>
              <uu-input
                v-model="input01"
                label="이름 (필수)"
                placeholder="한글 입력"
                @input="changeEvent"
              />
              <uu-input
                v-model="input02"
                label="연락처 (필수)"
                placeholder="-를 제외한 숫자 입력"
                @input="changeEvent"
              />
              <uu-fieldset
                legend="성별(필수)"
              >
                <uu-radio
                  v-model="radio01"
                  label="남"
                  value="남"
                  inline
                  @change="changeEvent"
                />
                <uu-radio
                  v-model="radio01"
                  label="여"
                  value="여"
                  inline
                  @change="changeEvent"
                />
              </uu-fieldset>
            </form>
          </round-box>
          <div class="user_add_btn">
            <uu-button
              btn-style="line"
              size="lg"
            >
              <template #label>
                이용자 정보 추가하기
                <uu-ic v-bind="{name:'plus',size:'16'}" />
              </template>
            </uu-button>
          </div>
        </div>
      </div>
    </template>
    <template #modal_footer>
      <div class="btn_wrap">
        <uu-button
          btn-color="primary"
          size="xl"
          label="저장하기"
          @click="[modal02Ref.showModal($event)]"
        />
      </div>
    </template>
  </uu-modal>
  <!-- // Modal -->

  <!-- 이용자 정보 수정 약관 동의 바텀시트 -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="bottom"
  >
    <template #modal_header>
      이용자 정보 제공 동의가 필요합니다.
    </template>
    <template #modal_body>
      <uu-checkbox
        value="제3자 정보 제공 동의 (필수)"
        @change="changeEvent"
      >
        제3자 정보 제공 동의 (필수)
        <button
          type="button"
          class="link_btn"
        >
          <uu-ic v-bind="{name:'arrow',size:'24'}" />
        </button>
      </uu-checkbox>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        size="xl"
        label="동의하기"
        @click="[modal03Ref.showModal($event),btnActions.close()]"
      />
    </template>
  </uu-modal>
  <!-- // 이용자 정보 수정 약관 동의 바텀시트 -->

  <!-- 이용자 정보 수정 약관 동의 완료 팝업 -->
  <uu-modal
    ref="modal03Ref"
    v-model="modal03"
    type="alert"
  >
    <template #modal_header>
      알림
    </template>
    <template #modal_body>
      이용자 정보가 저장되었습니다.
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // 이용자 정보 수정 약관 동의 완료 팝업 -->
</template>