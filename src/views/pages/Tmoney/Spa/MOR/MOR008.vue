<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import roundBox from '@/components/layout/RoundBox.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="회원정보" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <round-box title="티머니GO 회원정보">
        <ul class="member_list">
          <li>
            <p class="title">
              이름
            </p>
            <div class="info_area">
              <p>임윤정</p>
              <uu-button
                btn-style="line"
                label="로그아웃"
              />
            </div>
          </li>
          <li>
            <p class="title">
              휴대전화번호
            </p>
            <div class="info_area">
              <p class="num">
                010****4421
              </p>
            </div>
          </li>
          <li class="top">
            <p class="title">
              교통카드
            </p>
            <div class="info_area">
              <p>티머니 <span class="purple">1</span>개</p>
              <p>신용/체크 <span class="gray">0</span>개</p>
            </div>
            <uu-button
              btn-style="line"
              label="변경"
            />
          </li>
        </ul>
        <uu-button
          btn-style="none"
          class="full"
        >
          <span>티머니GO 회원 탈퇴</span>
          <uu-ic
            size="24"
            name="navi_right"
          />
        </uu-button>
      </round-box>
      <round-box title="따릉이 회원정보">
        <uu-button
          btn-style="line"
          size="xl"
          label="따릉이 가입하기"
        />
      </round-box>
      <round-box title="운전면허 등록 여부">
        <ul class="member_list">
          <li>
            <p class="title">
              운전면허증
            </p>
            <div class="info_area">
              <p>미등록</p>
              <uu-button
                btn-style="line"
                label="등록"
              />
            </div>
          </li>
        </ul>
      </round-box>
    </div>
  </main>
  <!-- // main -->
</template>