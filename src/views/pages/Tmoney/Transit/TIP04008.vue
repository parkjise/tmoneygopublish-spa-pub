<script setup lang="ts">
import { ref } from 'vue';
import subHeader from '@/components/layout/SubHeader.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuInput from '@/components/uu-components/UuInput.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuCheckbox  from '@/components/uu-components/UuCheckbox.vue'
import uuButton from '@/components/uu-components/UuButton.vue'

const input01 = ref('') // v-model
const input02 = ref('') // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

const radio01 = ref('checked') // Default checked

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model

</script>
<template>
  <!-- header -->
  <sub-header
    title="정보 입력"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container bottom_btns">
      <div class="box_top_title">
        예약자 정보
      </div>
      <round-box hide-title>
        <ul class="normal_list user_info_list">
          <li>
            <div class="list_tit">
              예약자
            </div>
            <div class="list_txt">
              티머니
            </div>
          </li>
          <li>
            <div class="list_tit">
              연락처
            </div>
            <div class="list_txt">
              010-1234-1234
            </div>
          </li>
        </ul>
        <form>
          <uu-input
            v-model="input01"
            label="이메일 (선택)"
            placeholder="이메일 주소를 입력해 주세요"
            @input="changeEvent"
          />
          <uu-input
            v-model="input02"
            label="추가 요청사항 (선택)"
            placeholder="최대 50자 이내로 입력해주세요"
            @input="changeEvent"
          />
        </form>
      </round-box>

      <div
        class="box_top_title"
      >
        이용자 정보
        <button
          type="button"
          @click="modal01Ref.showModal($event)"
        >
          <uu-ic v-bind="{name:'exclamation',size:'16'}" />
          이용자 정보 입력 안내
        </button>
      </div>
      <round-box>
        <template #title>
          <div class="user_detail">
            <uu-ic v-bind="{name:'people',size:'20'}" />
            <div class="user_detail_txt">
              일반 1
            </div>
            <uu-checkbox
              label="예약자 정보와 동일"
              value="예약자 정보와 동일"
              @change="changeEvent"
            />
          </div>
        </template>
        <form>
          <uu-input
            v-model="input02"
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
      <div class="btn_area has_bg">
        <uu-button
          size="xl"
          btn-color="primary"
          label="입력완료"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
  <!-- 이용자 정보 인력 안내 바텀시트 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    add-class="notice_bottom_sheet"
    hide-close-btn
  >
    <template #modal_header>
      <uu-ic v-bind="{name:'exclamation',size:'48'}" />
      이용자 정보 입력 안내
    </template>
    <template #modal_body>
      <ul class="notice_list">
        <li>선택한 인원수에 맞게 입력창이 자동으로 설정됩니다.</li>
        <li>이용자 정보는 <strong class="primary_color">최소 1명</strong>은 입력하셔야 합니다.</li>
        <li>만 14세 미만 여행자의 경우 약관교부 및 개인정보 이용 동의 확인을 위한 법정대리인(부모)의 연락처(핸드폰번호)를 입력해주세요.</li>
        <li>입력하신 정보는 <strong>더보기 - 이용내역</strong>에서 확인 및 변경 하실 수 있습니다.</li>
      </ul>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="확인"
        size="xl"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // 이용자 정보 인력 안내 바텀시트 -->
</template>