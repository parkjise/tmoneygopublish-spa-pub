<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import roundBox from '@/components/layout/RoundBox.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="티머니 교통카드 등록/변경" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <round-box
        title="티머니 카드번호를 입력하세요."
        class="regist"
      >
        <div class="tmoney_regist">
          <p>(최대 5개 등록 가능)</p>
          <form>
            <label
              for="tmoney_input01"
              class="tmoney_label sr_only"
            >티머니 카드번호 1번째 4자리</label>
            <input
              id="tmoney_input01"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <label
              for="tmoney_input02"
              class="tmoney_label sr_only"
            >티머니 카드번호 2번째 4자리</label>
            <input
              id="tmoney_input02"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <label
              for="tmoney_input03"
              class="tmoney_label sr_only"
            >티머니 카드번호 3번째 4자리</label>
            <input
              id="tmoney_input03"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <label
              for="tmoney_input04"
              class="tmoney_label sr_only"
            >티머니 카드번호 4번째 4자리</label>
            <input
              id="tmoney_input04"
              class="tmoney_input"
              type="text"
              placeholder="4자리"
            >
            <uu-button
              btn-style="line"
              label="등록"
            />
          </form>
          <uu-button
            btn-style="line"
            size="xl"
            label="교통카드 불러오기"
          />
          <div class="notice">
            <p>
              <uu-ic
                size="16"
                name="exclamation_gray090"
              />
              유의사항
            </p>
            <ul>
              <li>
                ‘교통카드 불러오기’는 삼성페이/티머니페이(모바일티머니)/ 티머니홈페이지에 등록된 카드를 불러올 수 있습니다.
              </li>
              <li>
                삼성페이 교통카드 번호는 삼성페이 APP에서 메뉴 > 교통카드(티머니) 선택 시 확인 가능합니다.
              </li>
              <li>
                지하철 정기권의 경우 등록 여부와 상관 없이 혜택 지급 대상에서 제외됩니다.
              </li>
            </ul>
          </div>
        </div>
      </round-box>
      <round-box hide-title>
        <div class="tmoney_regist no_data">
          <uu-ic
            size="48"
            name="exclamation"
          />
          <span class="title">
            등록된 카드가 없습니다.
          </span>
        </div>
      </round-box>
      <uu-button
        label="완료"
        btn-color="primary"
        size="xl"
        class="primary_full"
      />
    </div>
  </main>
  <!-- // main -->
</template>