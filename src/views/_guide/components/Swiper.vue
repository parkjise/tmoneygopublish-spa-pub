<script setup lang="ts">
import uuSwiper, { type swiperType } from '@/components/uu-components/UuSwiper.vue'
import { SwiperSlide } from 'swiper/vue';
import Prism  from '@/components/uu-components/Prism.vue'

// Custom Options
const options = {
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 2.4,
  spaceBetween: 12
}
// Event
const onSwiper = (swiper: swiperType) => {
  console.log(swiper.activeIndex)
}

</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        Default
      </h4>
      <!-- Swiper -->
      <uu-swiper
        type="default"
        @swiper="onSwiper"
      >
        <swiper-slide
          v-for="(item, index) in 3"
          :key="index"
        >
          <div class="swiper_inner">
            {{ index + 1 }}
          </div>
        </swiper-slide>
      </uu-swiper>
      <!-- // Swiper -->
      <Prism
        script
      >
        {{ `
          const onSwiper = (swiper: swiper) => {
            console.log(swiper.activeIndex)
          }
        ` }}
      </Prism>
      <Prism
        html
      >
        {{ `
          <!-- Swiper -->
          <uu-swiper
            type="default"
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="swiper_inner">
                { index + 1 }
              </div>
            </swiper-slide>
          </uu-swiper>
          <!-- // Swiper -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Navigation
      </h4>
      <!-- Swiper Navigation -->
      <uu-swiper
        type="navigation"
        @slide-change="onSwiper"
      >
        <swiper-slide
          v-for="(item, index) in 3"
          :key="index"
        >
          <div class="swiper_inner">
            {{ index + 1 }}
          </div>
        </swiper-slide>
      </uu-swiper>
      <!-- // Swiper Navigation -->
      <Prism
        script
      >
        {{ `
          const onSwiper = (swiper: swiper) => {
            console.log(swiper.activeIndex)
          }
        ` }}
      </Prism>
      <Prism
        html
      >
        {{ `
          <!-- Swiper Navigation -->
          <uu-swiper
            type="navigation"
            @slide-change="onSwiper"
          >
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="swiper_inner">
                { index + 1 }
              </div>
            </swiper-slide>
          </uu-swiper>
          <!-- // Swiper Navigation -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Pagination
      </h4>
      <!-- Swiper Pagination -->
      <uu-swiper
        type="pagination"
        @slide-change="onSwiper"
      >
        <swiper-slide
          v-for="(item, index) in 3"
          :key="index"
        >
          <div class="swiper_inner">
            {{ index + 1 }}
          </div>
        </swiper-slide>
      </uu-swiper>
      <!-- // Swiper Pagination -->
      <Prism
        script
      >
        {{ `
          const onSwiper = (swiper: swiper) => {
            console.log(swiper.activeIndex)
          }
        ` }}
      </Prism>
      <Prism
        html
      >
        {{ `
          <!-- Swiper Pagination -->
          <uu-swiper
            type="pagination"
            @slide-change="onSwiper"
          >
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="swiper_inner">
                { index + 1 }
              </div>
            </swiper-slide>
          </uu-swiper>
          <!-- // Swiper Pagination -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Pagination - Fraction
      </h4>
      <!-- Swiper PaginationFraction -->
      <uu-swiper
        type="paginationFraction"
        @slide-change="onSwiper"
      >
        <swiper-slide
          v-for="(item, index) in 10"
          :key="index"
        >
          <div class="swiper_inner">
            {{ index + 1 }}
          </div>
        </swiper-slide>
      </uu-swiper>
      <!-- // Swiper PaginationFraction -->
      <Prism
        script
      >
        {{ `
          const onSwiper = (swiper: swiper) => {
            console.log(swiper.activeIndex)
          }
        ` }}
      </Prism>
      <Prism
        html
      >
        {{ `
          <!-- Swiper paginationFraction -->
          <uu-swiper
            type="paginationFraction"
            @slide-change="onSwiper"
          >
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="swiper_inner">
                { index + 1 }
              </div>
            </swiper-slide>
          </uu-swiper>
          <!-- // Swiper paginationFraction -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Custom
      </h4>
      <!-- Swiper Custom -->
      <uu-swiper
        type="custom"
        :options="options"
      >
        <swiper-slide
          v-for="(item, index) in 3"
          :key="index"
        >
          <div class="swiper_inner">
            {{ index + 1 }}
          </div>
        </swiper-slide>
      </uu-swiper>
      <!-- // Swiper Custom -->
      <Prism
        script
      >
        {{ `
          const options = {
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          }
        ` }}
      </Prism>
      <Prism
        html
      >
        {{ `
          <!-- Swiper Custom -->
          <uu-swiper
            type="custom"
            :options="options"
          >
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="swiper_inner">
                { index + 1 }
              </div>
            </swiper-slide>
          </uu-swiper>
          <!-- // Swiper Custom -->
        ` }}
      </Prism>
    </article>
  </section>
  <section class="section">
    <h3 class="section-title">
      Components
    </h3>
    <Prism
      script
      show
    >
      {{ `
        import uuSwiper, { type swiper } from '@/components/uu-components/uuSwiper.vue'
        import { SwiperSlide } from 'swiper/vue';
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
      const props = defineProps({
        type: {
          type: String as PropType<'default' | 'navigation' | 'pagination' | 'custom'>,
          default: 'default'
        },
        options: {
          type: Object as PropType<SwiperOptions>,
          default: () => {}
        }
      })
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Emit
    </h3>
    <Prism script>
      {{ `
        const emit = defineEmits(['swiper', 'slide-change'])
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Script
    </h3>
    <Prism
      script
      show
    >
      {{ `
        // Custom Options
        const options = {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        }
        // Event
        const onSwiper = (swiper: swiper) => {
          console.log(swiper)
        }
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Basic Markup
    </h3>
    <Prism
      html
      show
    >
      {{ `
        <!-- Swiper -->
        <uu-swiper type="default">
          <swiper-slide>1</swiper-slide>
        </uu-swiper>
        <!-- // Swiper -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>