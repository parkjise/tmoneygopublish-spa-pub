<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';
import UuTooltip from '@/components/uu-components/UuTooltip.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
</script>
<template>
  <!-- header -->
  <sub-header title="GO마일리지 내역" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding">
      <div class="go_mileage">
        <round-box hide-title>
          <div class="total_mileage">
            <p class="text">
              <uu-ic
                size="20"
                name="mileage"
              />
              GO마일리지
            </p>
            <p class="mileage">
              <strong>5,722</strong>M
            </p>
          </div>
          <ul class="flex_area">
            <li class="this_month">
              <p><span>1</span>월 소멸예정</p>
              <p>0M</p>
            </li>
            <li>
              <p><span>2</span>월 소멸예정</p>
              <p>0M</p>
            </li>
            <li>
              <p><span>3</span>월 소멸예정</p>
              <p>0M</p>
            </li>
          </ul>
          <div class="use_mileage">
            <div class="item">
              <p class="text">
                적립예정
                <uu-tooltip>
                  <template #content>
                    마일리지는 교통수단 결제 후 익일에 적립됩니다.<br>
                    적립 한도에 따라 예정 마일리지는 변동될 수있습니다.
                  </template>
                </uu-tooltip>
              </p>
              <p class="mileage">
                <strong>0</strong>M
              </p>
            </div>
            <div class="item">
              <p class="text">
                이번 달 사용
              </p>
              <p class="mileage orange">
                <strong>6,800</strong>M
              </p>
            </div>
          </div>
        </round-box>
        <div class="sticky_area">
          <div class="sticky">
            <div class="date">
              <uu-button>
                <uu-ic
                  size="24"
                  name="navi_right"
                  direction="down"
                />
              </uu-button>
              <span>2023.11.29(수)</span>
              <uu-button disabled>
                <uu-ic
                  size="24"
                  name="navi_right"
                />
              </uu-button>
            </div>
            <div class="division">
              <uu-button>
                전체
                <uu-ic
                  size="20"
                  name="arrow_gray"
                />
              </uu-button>
            </div>
          </div>
          <div class="no_data">
            <uu-ic
              size="48"
              name="exclamation"
            />
            <p>적립/사용된 GO마일리지가 없습니다.</p>
          </div>
        </div>
        <div class="btn_area">
          <uu-button>
            <img
              src="/src/assets/images/temp/temp_btn_event.png"
              alt="임시 이미지"
            >
          </uu-button>
        </div>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>