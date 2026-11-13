<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import uuTextarea from '@/components/uu-components/UuTextarea.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import uuModal  from '@/components/uu-components/UuModal.vue'
import UuRadio from '@/components/uu-components/UuRadio.vue';
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'

// textarea
const textarea01 = ref('테스트') // v-model

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model
const radio01 = ref('checked')

const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

const modal03Ref = ref() // Ref
const modal03 = ref<boolean>(false) // v-model

// 문의내역 없음 시 true 로 변경해서 확인
const noResult = ref(false);

// 문의하기 버튼 여부
const showBtn = ref(false);

const onSelected = (index: number) => {
  (index == 0)?showBtn.value = true: showBtn.value = false;
}

</script>
<template>
  <!-- header -->
  <sub-header
    title="1:1 문의"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div
      class="container no_padding"
      :class="{'bottom_btns':showBtn}"
    >
      <uu-tabs
        class="support_tab"
        @selected="onSelected"
      >
        <uu-tab
          title="문의하기"
        >
          <button
            type="button"
            class="select_btn"
            @click="modal01Ref.showModal($event)"
          >
            <!-- <span class="placeholder">문의 유형을 선택하세요</span> -->
            <div class="value">
              <span>GO마일리지</span>
              <uu-ic
                name="arrow"
                size="16"
                color="primary"
              />
              <span>GO마일리지 사용/내역조회</span>
            </div>
            <uu-ic
              name="arrow"
              size="20"
            />
          </button>
          <form>
            <uuTextarea
              v-model="textarea01"
              placeholder="문의하실 내용을 작성해 주세요."
              hide-label
            />
          </form>
          <p class="support_info">
            <uu-ic
              name="exclamation"
              size="16"
            />
            주말, 공휴일을 제외하고 3일 이내에 답변드릴 예정입니다.
          </p>
          <a
            href="tel:1644-9255"
            class="call_center_btn"
          >
            <uu-ic
              name="phone"
              size="12"
            />
            고객센터 1644-9255
          </a>
        </uu-tab>
        <uu-tab
          title="문의내역 보기"
        >
          <template v-if="!noResult">
            <ul class="inquiry_list">
              <li>
                <button type="button">
                  <div class="inquiry_title_wrap">
                    <div class="inquiry_title">
                      GO마일리지 - GO마일리지 사용/내역조회
                    </div>
                    <button
                      type="button"
                      class="del_btn"
                      :aria-haspopup="true"
                      aria-controls="modal01"
                      @click="modal03Ref.showModal($event)"
                    >
                      삭제
                    </button>
                  </div>
                  <div class="inquiry_txt">
                    테스트
                  </div>
                  <div class="split">
                    <span class="date">2023.03.02 14:34</span>
                    <span class="status">답변대기</span>
                  </div>
                </button>
              </li>
            </ul>
          </template>
          <template v-else>
            <div class="no_result">
              <uuIc v-bind="{name:'exclamation',size:'48'}" />
              <div class="no_result_txt">
                내역이 없습니다.
              </div>
            </div>
          </template>
        </uu-tab>
      </uu-tabs>
      <div
        v-if="showBtn"
        class="btn_area"
      >
        <uu-button
          size="xl"
          btn-color="primary"
          label="문의하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
  <!-- 문의 유형 선택 바텀시트 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-footer
  >
    <template #modal_header>
      문의 유형 선택
    </template>
    <template #modal_body>
      <form class="inquiry_type_select">
        <uu-fieldset
          legend="옵션 선택"
          hide-legend
        >
          <uu-radio
            v-model="radio01"
            value="checked"
            dropdown-radio
            label="고속·시외"
            @click="[modal02Ref.showModal($event),modal01Ref.closeModal()]"
          />
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            label="택시"
          />
          <uu-radio
            v-model="radio01"
            value="option3"
            dropdown-radio
            label="자전거"
          />
          <uu-radio
            v-model="radio01"
            value="option4"
            dropdown-radio
            label="킥보드"
          />
          <uu-radio
            v-model="radio01"
            value="option5"
            dropdown-radio
            label="항공"
          />
          <uu-radio
            v-model="radio01"
            value="option6"
            dropdown-radio
            label="렌트카"
          />
          <uu-radio
            v-model="radio01"
            value="option7"
            dropdown-radio
            label="SRT"
          />
          <uu-radio
            v-model="radio01"
            value="option8"
            dropdown-radio
            label="경로안내"
          />
          <uu-radio
            v-model="radio01"
            value="option9"
            dropdown-radio
            label="교통정보"
          />
          <uu-radio
            v-model="radio01"
            value="option10"
            dropdown-radio
            label="앱 이용"
          />
          <uu-radio
            v-model="radio01"
            value="option11"
            dropdown-radio
            label="회원정보"
          />
          <uu-radio
            v-model="radio01"
            value="option12"
            dropdown-radio
            label="결제"
          />
          <uu-radio
            v-model="radio01"
            value="option13"
            dropdown-radio
            label="GO마일리지"
          />
          <uu-radio
            v-model="radio01"
            value="option14"
            dropdown-radio
            label="이벤트"
          />
          <uu-radio
            v-model="radio01"
            value="option15"
            dropdown-radio
            label="기타"
          />
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
  <!-- // 문의 유형 선택 바텀시트 -->

  <!-- 문의 유형 - 고속시외 선택 바텀시트 -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="bottom"
    hide-footer
    add-class="inquiry_type_detail"
  >
    <template #modal_header_top_cont>
      <button 
        type="button"
        class="btn_back"
        @click="[modal01Ref.showModal($event),modal02Ref.closeModal()]"
      >
        <uu-ic 
          name="back"
          size="24"
        />
      </button>
    </template>
    <template #modal_header>
      고속·시외
    </template>
    <template #modal_body>
      <form class="inquiry_type_select">
        <uu-fieldset
          legend="옵션 선택"
          hide-legend
        >
          <uu-radio
            v-model="radio01"
            value="checked"
            dropdown-radio
            label="노선 조회 및 선택"
          />
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            label="승차권 취소/환불"
          />
          <uu-radio
            v-model="radio01"
            value="option3"
            dropdown-radio
            label="승차권 조회/변경"
          />
          <uu-radio
            v-model="radio01"
            value="option4"
            dropdown-radio
            label="할인요금 적용"
          />
          <uu-radio
            v-model="radio01"
            value="option5"
            dropdown-radio
            label="승차권 선물/사용(타인사용)"
          />
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
  <!-- // 문의 유형 선택 바텀시트 -->

  <!-- 문의내역 삭제 팝업 -->
  <uu-modal
    ref="modal03Ref"
    v-model="modal03"
    type="confirm"
  >
    <template #modal_header>
      문의내역을 삭제하시겠습니까?
    </template>
    <template #modal_body>
      삭제된 내역은 복구되지 않습니다.
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-style="line"
        label="아니요"
        @click="btnActions.close"
      />
      <uu-button
        btn-color="primary"
        label="네"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // 문의내역 삭제 팝업 -->
</template>