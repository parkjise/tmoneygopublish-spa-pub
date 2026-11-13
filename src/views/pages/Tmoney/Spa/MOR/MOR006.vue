<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import uuButton from '@/components/uu-components/UuButton.vue';
import uuCheckbox from '@/components/uu-components/UuCheckbox.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="탈퇴하기" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container pt16 bottom_btns">
      <div class="withdraw">
        <p class="notice">
          티머니GO 회원 탈퇴 시, <br>
          <span>GO마일리지 및 이용기록이 삭제</span>되며 복구되지 
          않습니다.
        </p>
        <p>(재 가입 시 신규가입 혜택을 받을 수 없습니다.)</p>
        <h4 class="sub_title">
          연계서비스
        </h4>
        <p>
          티머니GO에서 이용하시던 서비스 중 함께 탈퇴하고자하는
          서비스를 선택해주세요.
        </p>
        <p class="info info_desc">
          <uu-ic
            size="16"
            name="exclamation"
          />
          <span>
            티머니GO를 탈퇴하더라도 고속·시외버스 티머니 및 티머니 onda앱에서 계속 이용이 가능합니다.
          </span>
        </p>
        <form>
          <uu-checkbox
            label="고속·시외버스"
            value="unchecked"
          />
        </form>
        <p class="info">
          <uu-ic
            size="16"
            name="exclamation_gray070"
          />
          <span>
            따릉이 회원 탈퇴는 따릉이 앱 또는 홈페이지에서 가능합니다.
          </span>
        </p>
        <p class="info">
          <uu-ic
            size="16"
            name="exclamation_gray070"
          />
          <span>
            기타 연동된 서비스 계정은 모두 탈퇴됩니다.
          </span>
        </p>
      </div>
      <div class="btn_area">
        <uu-button
          size="xl"
          btn-color="primary"
          label="탈퇴하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>