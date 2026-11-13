<script setup lang="ts">
import { ref } from 'vue'
import subHeader from '@/components/layout/SubHeader.vue';
import uuFieldset  from '@/components/uu-components/UuFieldset.vue';
import uuModal  from '@/components/uu-components/UuModal.vue';
import UuRadio from '@/components/uu-components/UuRadio.vue';
import uuIc from '@/components/uu-components/UuIc.vue';
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuInput from '@/components/uu-components/UuInput.vue';
import UuAccordion from '@/components/uu-components/UuAccordion.vue';
import UuAccordionItem from '@/components/uu-components/UuAccordionItem.vue';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model
const radio01 = ref('checked')

const input01 = ref('') // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

const onSelected = (index: number) => {
  console.log(index)
}
</script>
<template>
  <!-- header -->
  <sub-header title="자주하는 질문" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container  no_padding">
      <div class="faq_detail">      
        <div class="top_fixed_area">
          <button
            type="button"
            class="faq_select_btn"
            @click="modal01Ref.showModal($event)"
          >
            고속/시외
            <uu-ic
              name="thickarrow"
              size="24"
              direction="right"
            />
          </button>
          <uu-input
            v-model="input01"
            placeholder="검색하실 키워드를 입력하세요"
            has-ic
            btn-clear
            hide-label
            @input="changeEvent"
          >
            <template #ic_name>
              <uuIc v-bind="{name:'search',size:'20',color:'primary'}" />
            </template>
          </uu-input>
        </div>
        <uu-tabs
          class="depth2_tab faq_datail_tab"
          @selected="onSelected"
        >
          <uu-tab
            title="이용안내"
          >
            <div class="selected_faq_detail">
              이용안내
            </div>
            <uu-accordion
              class="faq_list"
            >
              <uu-accordion-item>
                <template #accordion_header>
                  <p class="faq_question">
                    [고속버스] 도착시간안내 확인은 어떻게 하나요?
                  </p>
                </template>
                <template #accordion_body>
                  <p class="faq_answer_title">
                    티머니GO 앱에서 확인 가능한 승차권은 아래와 같습니다.
                  </p>
                  <ol class="faq_answer_list">
                    <li>
                      1) 티머니GO를 통해 예매한 승차권
                    </li>
                    <li>
                      2) 티머니GO 고속시외 서비스와 연계된 회원 아이디로 고속 모바일앱에서 예매한 승차권
                    </li>
                    <li>
                      3) 티머니GO 고속시외 서비스와 연계된 회원 아이디로 고속 및 시외홈페이지 예매한 모바일 승차권
                    </li>
                  </ol>
                </template>
              </uu-accordion-item>
              <uu-accordion-item>
                <template #accordion_header>
                  <p class="faq_question">
                    이용한 차량에 물건을 놓고 내렸는데요, 찾을 수 있는 방법이 있나요
                  </p>
                </template>
                <template #accordion_body>
                  <p class="faq_answer_title">
                    티머니GO 앱에서 확인 가능한 승차권은 아래와 같습니다.
                  </p>
                  <ol class="faq_answer_list">
                    <li>
                      1) 티머니GO를 통해 예매한 승차권
                    </li>
                    <li>
                      2) 티머니GO 고속시외 서비스와 연계된 회원 아이디로 고속 모바일앱에서 예매한 승차권
                    </li>
                    <li>
                      3) 티머니GO 고속시외 서비스와 연계된 회원 아이디로 고속 및 시외홈페이지 예매한 모바일 승차권
                    </li>
                  </ol>
                </template>
              </uu-accordion-item>
              <uu-accordion-item>
                <template #accordion_header>
                  <p class="faq_question">
                    [고속/시외] 예매한 승차권 시간을 변경하려고 하는데요
                  </p>
                </template>
                <template #accordion_body>
                  <p class="faq_answer_title">
                    티머니GO 앱에서 확인 가능한 승차권은 아래와 같습니다.
                  </p>
                  <ol class="faq_answer_list">
                    <li>
                      1) 티머니GO를 통해 예매한 승차권
                    </li>
                    <li>
                      2) 티머니GO 고속시외 서비스와 연계된 회원 아이디로 고속 모바일앱에서 예매한 승차권
                    </li>
                    <li>
                      3) 티머니GO 고속시외 서비스와 연계된 회원 아이디로 고속 및 시외홈페이지 예매한 모바일 승차권
                    </li>
                  </ol>
                </template>
              </uu-accordion-item>
            </uu-accordion>
          </uu-tab>
          <uu-tab
            title="요금 및 결제"
          />
        </uu-tabs>
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
      카테고리 선택
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
            label="경로안내"
          />
          <uu-radio
            v-model="radio01"
            value="option8"
            dropdown-radio
            label="혜택"
          />
          <uu-radio
            v-model="radio01"
            value="option9"
            dropdown-radio
            label="회원정보"
          />
          <uu-radio
            v-model="radio01"
            value="option10"
            dropdown-radio
            label="GO마일리지"
          />
        </uu-fieldset>
      </form>
    </template>
  </uu-modal>
  <!-- // 카테고리 선택 바텀시트 -->
</template>