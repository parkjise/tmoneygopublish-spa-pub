<script setup lang="ts">
import { ref } from 'vue';
import subHeader from '@/components/layout/SubHeader.vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuCalendar from '@/components/uu-components/UuCalendar.vue'
import uuCounter from '@/components/uu-components/UuCounter.vue';
import uuFloating from '@/components/uu-components/UuFloating.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model
const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model

const handleChange = (year: number, month: number) => {
  console.log(`year: ${year}년`)
  console.log(`month: ${month}월`)
}

const selectDate = (date: number | number[]) => {
  console.log(date)
}

// 금액이 나올 날짜
const highlightedDates = [new Date('2024-04-04'), new Date('2024-04-11')];

const radio01 = ref('checked') // Default checked

function changeEvent(value : string | number){
  console.log(value)
}

const radioGroup = ref([
  { modelValue: radio01, time: '06:30', station: '서울역', price: '35,000', remain: 0 },
  { modelValue: radio01, time: '08:45', station: '청량리역', price: '28,000', remain: 8 },
  { modelValue: radio01, time: '09:30', station: '광화문역', price: '39,700', remain: 4 },
])

</script>
<template>
  <!-- header -->
  <subHeader
    title="출발지 선택"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main">
    <div class="container no_padding">
      <div class="selected_product">
        <div class="date">
          2024.04.20(토)
        </div>
        <div class="product_name">
          [당일여행][특가] 강원특별자치도 가평군 남이섬 일일투어 #에덴벚꽃길
        </div>
      </div>
      <div class="select_option_wrap">
        <div class="select_date">
          <button
            type="button"
            @click="modal01Ref.showModal($event)"
          >
            <uu-ic
              size="20"
              name="calender"
              class="ic_left"
            />
            2024.04.20(토)
            <uu-ic
              size="24"
              name="arrow"
              status="down"
              class="ic_right"
            />
          </button>
        </div>
        <div class="select_option">
          <form>
            <uu-fieldset
              legend="출발지 선택"
              hide-legend
              class="form_radio_btn_wrap"
            >
              <uu-radio
                v-for="(item, index) in radioGroup"
                :key="index"
                v-model="item.modelValue"
                :value="item.station"
                :disabled="item.remain == 0"
                @change="changeEvent"
              >
                <template #label>
                  <button
                    type="button"
                    @click="modal02Ref.showModal($event)"
                  >
                    <div class="depart_time">
                      {{ item.time }}
                    </div>
                    <div class="info">
                      <div class="station">
                        {{ item.station }}
                      </div>
                      <div class="price_wrap">
                        <span class="price">{{ item.price }}</span>원
                      </div>
                    </div>
                    <div
                      class="remain"
                      :class="{'sold_out':item.remain == 0}"
                    >
                      <template v-if="item.remain > 0">
                        잔여좌석<br>
                        <span class="remain_num">04</span>명
                      </template>
                      <template v-else>
                        매진
                      </template>
                    </div>
                  </button>
                </template>
              </uu-radio>
            </uu-fieldset>
          </form>
        </div>
      </div>
    </div>
    <uu-floating
      always 
    >
      <template #ic>
        <uu-ic
          size="20"
          name="reload"
        />
      </template>
    </uu-floating>
  </main>
  <!-- // main -->
  <!-- 날짜 선택 바텀시트 -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="bottom"
    hide-header
  >
    <template #modal_body>
      <!-- 가격 보이게 하기 위해서 showPrice 추가 -->
      <uu-calendar
        :highlighted-dates="highlightedDates"
        show-price
        @day-change="(year,month) => handleChange(year,month)"
        @select-date="date => selectDate(date)"
      />
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="선택완료"
        size="xl"
        @click="btnActions.ok"
      />
    </template>
  </uu-modal>
  <!-- // 날짜 선택 바텀시트 -->
  <!-- 인원 선택 바텀시트 -->
  <uu-modal
    ref="modal02Ref"
    v-model="modal02"
    type="bottom"
    hide-header
  >
    <template #modal_body>
      <div class="num_count_area">
        <div class="age_group">
          <div class="age_assort">
            일반
          </div>
          <div class="price">
            39,700원
          </div>
          <uu-counter
            :max-count="10"
          />
        </div>
        <div class="age_group">
          <div class="age_assort">
            아동
          </div>
          <div class="price">
            20,000원
          </div>
          <uu-counter
            :max-count="10"
          />
        </div>
        <div class="total_price_wrap">
          <div class="total_price_title">
            총 결제금액 (1명)
          </div>
          <div class="price_wrap">
            <span class="price">39,700</span>원
          </div>
        </div>
      </div>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        label="선택완료"
        size="xl"
        disabled
        @click="btnActions.ok"
      />
      <!-- 조건에 따라 disabled 추가 / 제거 -->
    </template>
  </uu-modal>
  <!-- // 인원 선택 바텀시트 -->
</template>