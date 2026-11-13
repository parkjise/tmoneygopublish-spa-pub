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
      <div class="card_catalog">
        <h4>
          대중교통에 이용하시는<br>
          선/후불 카드를 등록하세요.
        </h4>
        <p class="desc">
          티머니/신용카드 각각 최대 5개까지 등록 가능합니다.
        </p>
        <round-box title="티머니/삼성페이">
          <p class="box_desc">
            티머니카드, 티머니페이, 모바일티머니
          </p>
          <div class="img_area">
            <img
              src="/src/assets/images/img_imoney_card.png"
              alt="티머니/삼성페이 카드"
            >
          </div>
          <div class="flex_area">
            <p>등록된 카드가 없습니다.</p>
            <uu-button
              label="등록/변경"
              btn-style="line"
            />
          </div>
        </round-box>
        <round-box title="신용/체크 카드 (후불교통카드)">
          <div class="img_area">
            <img
              src="/src/assets/images/img_imoney_card_credit.png"
              alt="신용/체크 카드 (후불교통카드)"
            >
          </div>
          <div class="flex_area">
            <p><span>1</span>개의 카드가 등록되어 있습니다.</p>
            <uu-button
              label="등록/변경"
              btn-style="line"
            />
          </div>
        </round-box>
        <div class="ticket_notice">
          <p class="title">
            <uu-ic
              size="16"
              name="exclamation_gray090"
            />
            유의사항
          </p>
          <ul>
            <li>본인 명의의 개인 신용카드 또는 체크카드만 등록이 가능합니다.</li>
            <li>
              아래에 해당하는 카드는 사용이 불가합니다.<br>
              (카카오뱅크, 케이뱅크, 토스뱅크 발급 체크카드, 법인카드, 가족카드, 선불카드)
            </li>
            <li>
              비씨로고가 있는 카드는 비씨카드를 선택하여 등록하시기 바랍니다.<br>
              은행사 발급 카드인 경우 비씨 로고가 있는지 확인 필요
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>