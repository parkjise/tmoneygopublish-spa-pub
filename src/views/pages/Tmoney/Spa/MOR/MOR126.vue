<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import RoundBox from '@/components/layout/RoundBox.vue';

</script>
<template>
  <!-- header -->
  <subHeader
    title="고장 신고"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div
      class="container"
    >
      <round-box
        class="center_notice_box"
        hide-title
      >
        <img
          src="/src/assets/images/ic_headset.png"
          alt=""
        >
        <p class="txt">
          전동킥보드 및 전기자전거<br>
          서비스 관련 사고/고장 신고는<br>
          서비스 운영사 고객센터로 접수 바랍니다
        </p>
      </round-box>
      <p class="info_txt">
        티머니GO는 서비스 중개 플랫폼으로서, 서비스와 관련된
        의무와 책임은 각 운영사에 있음을 알려드립니다.
      </p>
      <ul class="call_center_list">
        <li>
          <a href="tel:1670-3737">
            <img
              src="/src/assets/images/ic_ssingssing.svg"
              alt=""
            >
            <div>
              <div class="brand">
                씽씽
              </div>
              <div class="center_info">
                1670-3737
              </div>
            </div>
            <uu-ic
              name="call"
              size="24"
            />
          </a>
        </li>
        <li>
          <a href="tel:1670-3737">
            <img
              src="/src/assets/images/ic_gqoo.svg"
              alt=""
            >
            <div>
              <div class="brand">
                지쿠
              </div>
              <div class="center_info">
                1670-3737
              </div>
            </div>
            <uu-ic
              name="call"
              size="24"
            />
          </a>
        </li>
        <li>
          <button>
            <img
              src="/src/assets/images/ic_kickgoing.svg"
              alt=""
            >
            <div>
              <div class="brand">
                킥고잉
              </div>
              <div class="center_info">
                상담원 채팅 접수
              </div>
            </div>
            <uu-ic
              name="chat"
              size="24"
            />
          </button>
        </li>
      </ul>
      <div class="ticket_notice">
        <p class="title">
          <uu-ic
            size="16"
            name="exclamation_gray090"
          />
          유의사항
        </p>
        <ul>
          <li>사고 발생 시, 상황을 명확히 확인할 수 있도록 상세한 사진기록을 남겨주세요.</li>
        </ul>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>