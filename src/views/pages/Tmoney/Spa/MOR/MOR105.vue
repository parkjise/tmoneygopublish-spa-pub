<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
import UuTextarea from '@/components/uu-components/UuTextarea.vue';
import UuModal from '@/components/uu-components/UuModal.vue';
import UuFieldset from '@/components/uu-components/UuFieldset.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';

const input01 = ref()
const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model
const radio01 = ref('checked')

// 신고하기 버튼 여부
const showBtn = ref(false);
const onSelected = (index: number) => {
  (index == 0)?showBtn.value = true: showBtn.value = false;
}
</script>
<template>
  <!-- header -->
  <sub-header
    title="자전거 고장/장애 신고"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor tabs">
    <div
      class="container no_padding"
      :class="{'bottom_btns':showBtn}"
    >
      <uu-tabs
        class="support_tab"
        @selected="onSelected"
      >
        <uu-tab
          title="신고하기"
          active
        >
          <div class="bike_report">
            <form>
              <div class="input_area">
                <uu-button
                  class="btn_category"
                  @click="modal01Ref.showModal($event)"
                >
                  따릉이
                  <uu-ic
                    size="20"
                    name="arrow"
                  />
                </uu-button>
                <uu-input
                  v-model="input01"
                  label="QR코드 및 자전거 번호 입력"
                  placeholder="QR코드 및 자전거 번호 입력"
                  hide-label
                />
                <uu-button class="btn_qr">
                  <uu-ic
                    size="24"
                    name="qr"
                  />
                </uu-button>
              </div>
              <div class="recent_history">
                <uu-button>
                  <uu-ic
                    size="16"
                    name="recent"
                  />
                  <span>최근 이용 내역</span>
                </uu-button>
              </div> 
              <div class="breakdown_check">
                <div class="top">
                  <uu-checkbox
                    label="단말기"
                    checkline
                  />
                  <uu-checkbox
                    label="안장"
                    checkline
                  />
                </div>
                <div class="img_area">
                  <img
                    src="/src/assets/images/ic_seoulbike.png"
                    alt="따릉이"
                  >
                </div>
                <div class="bottom">
                  <uu-checkbox
                    label="타이어"
                    checkline
                  />
                  <uu-checkbox
                    label="페달"
                    checkline
                  />
                  <uu-checkbox
                    label="체인"
                    checkline
                  />
                  <uu-checkbox
                    label="기타"
                    checkline
                  />
                </div>
              </div>
              <div class="textarea_area">
                <div class="picture_area">
                  <div class="picture">
                    <img
                      src="/src/assets/images/temp/temp_bike_report.png"
                      alt="임시 이미지"
                    >
                    <uu-button>
                      <span class="sr_only">사진 취소</span>
                    </uu-button>
                  </div>
                </div>
                <div class="flex_area">
                  <p>신고 내용</p>
                </div>
                <uu-textarea
                  label="신고 내용"
                  hide-label
                />
              </div>
            </form>
          </div>
        </uu-tab>
        <uu-tab
          title="신고내역 보기"
        />
      </uu-tabs>
      <div
        v-if="showBtn"
        class="btn_area"
      >
        <uu-button
          size="xl"
          btn-color="primary"
          label="신고하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
  <!-- 카테고리 선택 바텀시트 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-footer
  >
    <template #modal_header>
      공공자전거 유형 선택
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
            label="따릉이"
          />
          <uu-radio
            v-model="radio01"
            value="option2"
            dropdown-radio
            label="타슈"
          />
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
  <!-- // 카테고리 선택 바텀시트 -->
</template>