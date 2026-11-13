<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuAccordion from '@/components/uu-components/UuAccordion.vue';
import UuAccordionItem from '@/components/uu-components/UuAccordionItem.vue';
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuCheckbox from '@/components/uu-components/UuCheckbox.vue';
</script>
<template>
  <!-- header -->
  <sub-header
    title="결제수단 관리"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main det">
    <div class="container">
      <div class="payment_manage_area">
        <round-box
          title="티머니"
          class="tmoney"
        >
          <p class="text">
            모바일티머니는 서비스 결제 시 등록된 수단을 선택하여
            지정할 수 있습니다.
          </p>
          <uu-accordion
            multiple
            class="tmoney"
          >
            <uu-accordion-item>
              <template #accordion_header>
                <img
                  src="/src/assets/images/logo_mobiletmoney.png"
                  alt="Mobile Tmoney 로고"
                >
              </template>
              <template #accordion_body>
                <div class="regist before">
                  <uu-button
                    label="모바일티머니란?"
                    size="xs"
                    btn-style="line"
                  />
                  <uu-button
                    label="모바일티머니 등록하기"
                    size="xs"
                    btn-style="line"
                  />
                </div>
              </template>
            </uu-accordion-item>
          </uu-accordion>
          <uu-accordion
            multiple
            class="tmoney"
          >
            <uu-accordion-item>
              <template #accordion_header>
                <img
                  src="/src/assets/images/logo_tmoneybizpay.png"
                  alt="Tmoney Biz Pay 로고"
                >
                <span class="badge">
                  <img
                    src="/src/assets/images/img_badge_notregist.png"
                    alt="미등록"
                  >
                </span>
              </template>
              <template #accordion_body>
                <div class="regist before">
                  <uu-button
                    label="티머니 비즈페이란?"
                    size="xs"
                    btn-style="line"
                  />
                  <uu-button
                    label="티머니 비즈페이 등록하기"
                    size="xs"
                    btn-style="line"
                  />
                </div>
              </template>
            </uu-accordion-item>
          </uu-accordion>
        </round-box>
        <round-box title="토스페이">
          <div class="pay toss">
            <p class="img_area">
              <img
                src="/src/assets/images/logo_tosspay.svg"
                alt="토스페이"
              >
            </p>
            <p class="card_info">
              KB국민(<span>1234</span>)
            </p>
            <uu-button
              btn-color="secondary"
              size="xs"
              label="간편등록"
              class="btn_easy_regist"
            />
          </div>
        </round-box>
        <round-box
          title="신용/체크 카드"
          class="card"
        >
          <uu-tabs class="segment_tab">
            <uu-tab
              title="고속･시외･항공"
              active
            >
              <div class="card_regist_area">
                <uu-button
                  btn-style="none"
                  class="btn_card_regist"
                >
                  <uu-ic
                    size="20"
                    name="plus"
                  />
                  <span>신용/체크 카드 등록</span>
                </uu-button>
              </div>
            </uu-tab>
            <uu-tab title="택시･자전거･킥보드･렌터카">
              <div class="card_regist_area">
                <uu-button
                  btn-style="none"
                  class="btn_card_regist"
                >
                  <uu-ic
                    size="20"
                    name="plus"
                  />
                  <span>신용/체크 카드 등록</span>
                </uu-button>
              </div>
            </uu-tab>
          </uu-tabs>
        </round-box>
        <round-box title="결제 비밀번호">
          <div class="password">
            <form>
              <uu-checkbox
                label="결제 비밀번호 사용"
                value="unchecked"
                toggle-switch
              />
            </form>
            <uu-button
              btn-style="none"
              class="btn_repassword"
            >
              <span>결제 비밀번호 재설정</span>
              <uu-ic
                size="24"
                name="arrow"
              />
            </uu-button>
          </div>
        </round-box>
      </div>
    </div> 
  </main>
  <!-- // main -->
</template>