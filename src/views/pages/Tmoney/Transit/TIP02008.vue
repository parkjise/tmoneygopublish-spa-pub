<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuCheckbox  from '@/components/uu-components/UuCheckbox.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'
import uuInput from '@/components/uu-components/UuInput.vue'
import uuIc from '@/components/uu-components/UuIc.vue'

// radio
const radio01 = ref('checked') // Default checked

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

const input01 = ref() // v-model
const input02 = ref() // v-model

const changeEvent = (value: string) => {
  console.log(value)
}

const btnLocationGroup = ref([
  { label: '전체', value: '전체'},
  { label: '서울', value: '서울', modelValue: true },
  { label: '경기', value: '경기'},
  { label: '인천', value: '인천'},
  { label: '강원', value: '강원'},
  { label: '충청', value: '충청'},
  { label: '전라', value: '전라'},
  { label: '경상', value: '경상'},
  { label: '부산', value: '부산'},
  { label: '제주', value: '제주'},
])

const btnThemeGroup = ref([
  { label: '전체', value: '전체'},
  { label: '일반', value: '일반', modelValue: true },
  { label: '트래킹', value: '트래킹'},
  { label: '지자체지원', value: '지자체지원'},
  { label: '반려동물지원', value: '반려동물지원'},
])

const sortOption = ['최신순', '추천순','최저가순','최고가순']



</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="검색 필터 바텀시트"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- 검색 필터 바텀시트 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    add-class="filter_modal"
    hide-close-btn
  >
    <template #modal_header>
      필터
    </template>
    <template #modal_header_right_btn>
      <uu-ic v-bind="{name:'reload',size:'16'}" />
      <span class="btn_txt">초기화</span>
    </template>
    <template #modal_body>
      <form>
        <uu-fieldset
          legend="정렬"
          class="form_radio_btn_wrap"
        >
          <uu-radio
            v-for="(item,index) in sortOption"
            :key="index"
            v-model="radio01"
            :value="item"
            @change="changeEvent"
          >
            <template #label>
              {{ item }}
            </template>
          </uu-radio>
        </uu-fieldset>
        <uu-fieldset
          legend="금액"
          class="form_inline_input_wrap"
        >
          <uu-input
            v-model="input01"
            type="number"
            placeholder="최저가 입력"
            label="basic"
            size="xs"
            hide-label
            @input="changeEvent"
          />
          <span>~</span>
          <uu-input
            v-model="input02"
            type="number"
            placeholder="최고가 입력"
            label="basic"
            size="xs"
            hide-label
            @input="changeEvent"
          />
        </uu-fieldset>
        <uu-fieldset
          legend="지역"
          class="form_check_btn_wrap"
        >
          <uu-checkbox
            v-for="(item, index) in btnLocationGroup"
            :key="index"
            v-model="item.modelValue"
            :label="item.label"
            :value="item.value"
            check-btn
            @change="changeEvent"
          />
        </uu-fieldset>
        <uu-fieldset
          legend="테마"
          class="form_check_btn_wrap"
        >
          <uu-checkbox
            v-for="(item, index) in btnThemeGroup"
            :key="index"
            v-model="item.modelValue"
            :label="item.label"
            :value="item.value"
            check-btn
            @change="changeEvent"
          />
        </uu-fieldset>
      </form>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        size="xl"
        label="적용하기"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // 검색 필터 바텀시트 -->
</template>