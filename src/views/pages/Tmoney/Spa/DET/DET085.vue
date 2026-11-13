<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
</script>
<template>
  <!-- header -->
  <sub-header
    title="약관 동의"
    hide-title
    bg-color="#F4F4F4"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container bottom_btns pt12">
      <div class="card_agree_area">
        <h4>약관 동의</h4>
        <p class="text">
          결제 카드 등록을 위해 약관동의를 진행해 주세요
        </p>
        <form>
          <round-box hide-title>
            <uu-checkbox
              label="전체동의"
              value="전체동의"
            />
          </round-box>
          <p class="desc">
            약관 및 주요 안내, 개인정보 필수 수집, 제공 및 조회 이용약관에 
            모두 동의합니다.
          </p>
          <round-box hide-title>
            <div class="flex_area">
              <uu-checkbox
                label="전자금융거래 이용약관 동의 (필수)"
                value="전자금융거래 이용약관 동의 (필수)"
                checkline
              />
              <uu-button label="전자금융거래 이용약관">
                <uu-ic
                  size="24"
                  name="navi_right"
                />
              </uu-button>
            </div>
            <div class="flex_area">
              <uu-checkbox
                label="개인정보 수집 이용 동의 (필수)"
                value="개인정보 수집 이용 동의 (필수)"
                checkline
              />
              <uu-button label="전자금융거래 이용약관">
                <uu-ic
                  size="24"
                  name="navi_right"
                />
              </uu-button>
            </div>
          </round-box>
        </form>
      </div>
      <div class="btn_area">
        <uu-button
          size="xl"
          btn-color="primary"
          label="다음"
        />
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>