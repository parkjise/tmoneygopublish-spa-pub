<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuSwiper from '@/components/uu-components/UuSwiper.vue'
import { SwiperSlide } from 'swiper/vue';
import { type SwiperOptions } from 'swiper/types';

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(true) // v-model

// Custom Options
const options : SwiperOptions = {
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return  '<span class="' + currentClass + '"></span>' +
              '<span class="swiper_pagination_separator">/</span>' +
              '<span class="' + totalClass + '"></span>';
    }
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
}

</script>
<template>
  <!-- Modal Activator -->
  <uu-button
    label="이벤트 팝업"
    btn-color="primary"
    :aria-haspopup="true"
    aria-controls="modal01"
    @click="modal01Ref.showModal($event)"
  />
  <!-- // Modal Activator -->
  <!-- Modal -->
  <uu-modal
    ref="modal01Ref"
    v-model="modal01"
    type="confirm"
    hide-header
    full-content
  >
    <template #modal_body>
      <uu-swiper
        type="custom"
        :options="options"
        class="event_slide"
        navi-pagination
      >
        <swiper-slide
          v-for="index in 4"
          :key="index"
        >
          <div class="swiper_inner">
            <a href="#">
              <img
                src="/src/assets/images/temp/event_silde_ex.png"
                alt="이벤트 배너"
              >
            </a>
          </div>
        </swiper-slide>
      </uu-swiper>
    </template>
    <template #modal_footer="btnActions">
      <uu-button
        btn-color="primary"
        btn-style="line"
        label="오늘 그만보기"
        @click="btnActions.ok"
      />
      <uu-button
        btn-color="primary"
        label="닫기"
        @click="btnActions.close"
      />
    </template>
  </uu-modal>
  <!-- // Modal -->
</template>

<style>
</style>