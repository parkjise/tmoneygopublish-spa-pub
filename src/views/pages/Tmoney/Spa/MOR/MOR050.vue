<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuIc from '@/components/uu-components/UuIc.vue';
import uuFloating from '@/components/uu-components/UuFloating.vue';

</script>
<template>
  <!-- header -->
  <sub-header
    title="고객지원"
  />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container bg_white">
      <div>
        <button
          type="button"
          class="guide_banner_btn"
        >
          <img
            src="/src/assets/images/guide_banner.png"
            alt="티머니GO 이용가이드"
          >
        </button>
      </div>
      <ul class="guide_list">
        <li>
          <button 
            type="button"
          >
            1:1문의
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            자주하는 질문
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
      </ul>
      <h3 class="category_tit">
        고속·시외
      </h3>
      <ul class="guide_list">
        <li>
          <button
            type="button"
          >
            고속·시외 터미널 안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            고속·시외 운수회사 안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            고속 유실물센터 안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
      </ul>
      <h3 class="category_tit">
        자전거
      </h3>
      <ul class="guide_list">
        <li>
          <button
            type="button"
          >
            자전거 고장/장애 신고
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            자전거 이용방법 안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            자전거 이용요금 안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            자전거 보험안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
      </ul>
      <h3 class="category_tit">
        킥보드
      </h3>
      <ul class="guide_list">
        <li>
          <button
            type="button"
          >
            킥보드 이용안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            킥보드 고장신고
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            킥보드 보험안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
      </ul>
      <h3 class="category_tit">
        렌터카
      </h3>
      <ul class="guide_list">
        <li>
          <button
            type="button"
          >
            렌터카 이용안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
          >
            렌터카 보험안내
            <uu-ic
              name="arrow"
              size="24"
            />
          </button>
        </li>
      </ul>
    </div> 
  </main>
  <!-- // main -->
  <uu-floating
    always
    :pos="{ right:20, bottom: 20 }"
  >
    <template #ic>
      <uu-ic
        name="chat"
        size="20"
      />
    </template>
  </uu-floating>
</template>