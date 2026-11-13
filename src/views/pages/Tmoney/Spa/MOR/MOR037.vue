<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuButton from '@/components/uu-components/UuButton.vue';
import RoundBox from '@/components/layout/RoundBox.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
</script>
<template>
  <!-- header -->
  <sub-header
    title="환승리워드 내역"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bottom_btns">
      <div class="transfer_reward">
        <round-box hide-title>
          <ul>
            <li>
              <p class="category">
                이용날짜
              </p>
              <p class="num">
                2024.01.12
              </p>
            </li>
            <li>
              <p class="category">
                리워드
              </p>
              <p class="num">
                100<span>M</span>
              </p>
            </li>
          </ul>
          <p class="status">
            적립
          </p>
        </round-box>
        <round-box hide-title>
          <ul>
            <li>
              <p class="category">
                이용날짜
              </p>
              <p class="num">
                2024.01.12
              </p>
            </li>
            <li>
              <p class="category">
                리워드
              </p>
              <p class="num">
                100<span>M</span>
              </p>
            </li>
          </ul>
          <p class="status">
            적립
          </p>
        </round-box>
        
        <!-- 환승 내역이 없을 경우 -->
        <div class="no_data">
          <uu-ic
            size="48"
            name="exclamation"
          />
          <p>환승 내역이 존재하지 않습니다.</p>
        </div>
        <!-- // 환승 내역이 없을 경우 -->
      </div>
      <div class="btn_area has_info">
        <p class="info">
          <uu-ic
            size="16"
            name="exclamation"
          />
          교통수단 이용 후 2일 뒤에 마일리지로 지급됩니다.
        </p>
        <uu-button
          size="xl"
          btn-color="primary"
          label="문의하기"
        />
      </div>
    </div>
  </main>
  <!-- // main -->
</template>