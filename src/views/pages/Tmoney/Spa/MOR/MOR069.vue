<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import uuTextarea from '@/components/uu-components/UuTextarea.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import uuModal  from '@/components/uu-components/UuModal.vue'

// textarea
const textarea01 = ref('테스트') // v-model

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model

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
          active
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
                      @click="modal01Ref.showModal($event)"
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
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
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
  <!-- // Modal -->
</template>