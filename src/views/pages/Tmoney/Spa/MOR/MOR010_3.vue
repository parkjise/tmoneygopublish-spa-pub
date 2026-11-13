<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import roundBox from '@/components/layout/RoundBox.vue';
</script>
<template>
  <!-- header -->
  <sub-header title="신용(체크)카드 등록/변경" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <round-box
        title="등록카드"
        class="regist"
      >
        <div class="tmoney_regist card">
          <p class="desc">
            (최대 5개 등록 가능)
          </p>
          <ul class="card_list">
            <li class="card bc">
              <p class="img_area">
                <img
                  src="/src/assets/images/logo_bccard.svg"
                  alt="비씨카드 로고"
                >
              </p>
              <p class="card_num">
                ***1234
              </p>
              <uu-button
                label="삭제"
                btn-style="line"
                size="xs"
              />
            </li>
            <li class="card hyundai">
              <p class="img_area">
                <img
                  src="/src/assets/images/logo_hyundaicard.svg"
                  alt="현대카드 로고"
                >
              </p>
              <p class="card_num">
                ***1234
              </p>
              <uu-button
                label="삭제"
                btn-style="line"
                size="xs"
              />
            </li>
          </ul>
          <uu-button class="btn_card_regist">
            <uu-ic
              size="20"
              name="plus"
            />
            신용/체크 카드 등록
          </uu-button>
        </div>
      </round-box>
    </div>
  </main>
  <!-- // main -->
</template>