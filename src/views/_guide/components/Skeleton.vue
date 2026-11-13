<script setup lang="ts">
import uuSkeleton from '@/components/uu-components/UuSkeleton.vue'
import Prism  from '@/components/uu-components/Prism.vue'
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
      <!-- uuSkeleton -->
      <uu-skeleton
        width="30rem"
        height="2.4rem"
        preview
      />
      <!-- // uuSkeleton -->
      <Prism
        html
      >
        {{ `
          <!-- uuSkeleton -->
          <uu-skeleton
            width="30rem"
            height="2.4rem"
            preview
          />
          <!-- // uuSkeleton -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Shape
      </h4>
      <!-- uuSkeleton -->
      <uu-skeleton
        width="6rem"
        height="6rem"
        shape="circle"
        preview
      />
      <!-- // uuSkeleton -->
      <Prism
        html
      >
        {{ `
          <!-- uuSkeleton -->
          <uu-skeleton
            width="6rem"
            height="6rem"
            shape="circle"
            preview
          />
          <!-- // uuSkeleton -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Style
      </h4>
      <!-- uuSkeleton -->
      <uu-skeleton
        width="30rem"
        height="2.4rem"
        :style="{ marginTop: '1rem', borderRadius: '1.2rem' }"
        preview
      />
      <!-- // uuSkeleton -->
      <Prism
        html
      >
        {{ `
          <!-- uuSkeleton -->
          <uu-skeleton
            width="30rem"
            height="2.4rem"
            :style="{ marginTop: '1rem', borderRadius: '1.2rem' }"
            preview
          />
          <!-- // uuSkeleton -->
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
        import uuSkeleton from '@/components/uu-components/uuSwiper.vue'
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
        shape: {
          type: String as PropType<shapeType> | undefined,
          default: 'rectangle'
        },
        width: {
          type: String,
          default: '100%'
        },
        height: {
          type: String,
          default: '1rem'
        },
        style: {
          type: Object as PropType<CSSProperties>,
          default: null
        },
        preview: {
          type: Boolean,
          default: false
        }
      })
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
        <!-- uuSkeleton -->
        <uu-skeleton
          width="30rem"
          height="2.4rem"
        />
        <!-- // uuSkeleton -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>