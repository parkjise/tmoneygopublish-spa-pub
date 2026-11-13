<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuButton from '@/components/uu-components/UuButton.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="설정" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <round-box title="마케팅 정보 알림">
        <div class="setting">
          <div class="toggle">
            <uu-checkbox
              label="마케팅 정보 수신 동의 (PUSH, SMS)"
              value="unchecked"
              toggle-switch
              disabled
            />
          </div>
          <div class="terms">
            <p class="disabled">
              다양한 이벤트 및 쿠폰 혜택 정보를 받을 수 있도록 허용
            </p>
            <uu-button
              label="약관보기"
              btn-style="line"
              size="xs"
              disabled
            />
          </div>
          <ul class="flex_area">
            <li>
              <uu-button>
                약관 및 정책
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                개인정보 처리방침
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                오픈소스 라이선스
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                법적 공지/정보 제공처
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                사업자 정보
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <p>버전 정보</p>
              <p>Ver. 2.3.9/1134</p>
            </li>
          </ul>
        </div>
      </round-box>
    </div>
  </main>
  <!-- // main -->
</template>