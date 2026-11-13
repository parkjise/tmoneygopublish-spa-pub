<script setup lang="ts">
  import { ref, reactive, type PropType } from 'vue';
  import { Swiper } from 'swiper/vue';
  import { type Swiper as SwiperType, type SwiperOptions } from 'swiper/types';
  import { Navigation, Pagination, A11y, Autoplay, Scrollbar, Thumbs, Virtual, Zoom, FreeMode } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/a11y';
  // https://swiperjs.com/

  export type swiperType = SwiperType;
  type swiperPropType = 'default' | 'navigation' | 'pagination' | 'paginationFraction' | 'custom'
  const props = defineProps({
    /**
     * type= 'default' | 'navigation' | 'pagination' | 'custom'
     */
    type: {
      type: String as PropType<swiperPropType>,
      default: 'default'
    },
    /**
     * Swiperjs Docs 참고
     */
    options: {
      type: Object as PropType<SwiperOptions>,
      default: () => {}
    },
    numPagination: {
      type: Boolean,
      default: false
    },
    naviPagination : {
      type: Boolean,
      default: false
    }
  })
  const emit = defineEmits([
    /**
     * Swiper on init event
     * @param swiper
     */
    'swiper', 
    /**
     * Swiper slide change event
     * @param swiper
     */
    'slide-change'
  ])
  
  const navigation : SwiperOptions = reactive({
    navigation: true,
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  })

  const pagination : SwiperOptions = reactive({
    pagination: {
      clickable: true
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  })
  
  const paginationFraction : SwiperOptions = reactive({
    pagination: {
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                  '<span class="swiper_pagination_separator">/</span>' +
                  '<span class="' + totalClass + '"></span>';
      }
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  })
  const swiperOptions = ref()
  props.type === 'navigation' ? swiperOptions.value = navigation : null
  props.type === 'pagination' ? swiperOptions.value = pagination : null
  props.type === 'paginationFraction' ? swiperOptions.value = paginationFraction : null
  props.type === 'custom' ? swiperOptions.value = props.options : null

  const modules = props.type === 'custom' ? [Navigation, Pagination, A11y, Autoplay, Scrollbar, Thumbs, Virtual, Zoom, FreeMode] : [Navigation, Pagination, A11y]

  const onSwiper = (swiper: SwiperType) => {
    emit('swiper', swiper)
  }
  const onChange = (swiper: SwiperType) => {
    emit('slide-change', swiper)
  }

  defineExpose({
    onSwiper,
    onChange
  })
</script>

<template>
  <div
    class="swiper_wrap"
    :class="[{'swiper_nav':props.type === 'navigation'}, {'swiper_page':props.type === 'pagination'},{'swiper_page_frac':props.type === 'paginationFraction'}, {'swiper_custom':props.type === 'custom'}]"
  >
    <swiper
      v-bind="swiperOptions"
      :modules="modules"
      @swiper="onSwiper"
      @slide-change="onChange"
    >
      <slot />
      <div
        v-if="props.type === 'custom' && naviPagination"
        class="navi_pagination_wrap"
      >
        <div class="swiper-button-prev" />
        <div class="swiper-pagination" />
        <div class="swiper-button-next" />
      </div>
    </swiper>
  </div>
</template>

<style>

</style>