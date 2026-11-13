<script setup lang="ts">
import uuBadge from '@/components/uu-components/UuBadge.vue'
import Prism from '@/components/uu-components/Prism.vue'

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
      <!-- Badge -->
      <uu-badge
        label="badge"
      />
      <!-- // Badge -->
      <Prism html>
        {{ `
        <!-- Badge -->
        <uu-Badge
          label="Badge"
          btn-color="primary"
          @click="console.log('click')"
        />
        <!-- // Badge -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Badge Color ( 'primary' | 'secondary' | 'white' | 'grey')
      </h4>
      <!-- Badge primary -->
      <uu-badge
        label="badge"
        badge-color="primary"
        size="sm"
      />
      <uu-badge
        label="badge"
        badge-color="primary"
      />
      <!-- // Badge primary -->
      <!-- Badge gray -->
      <uu-badge
        label="Badge"
        badge-color="gray"
        size="sm"
      />
      <uu-badge
        label="Badge"
        badge-color="gray"
      />
      <!-- // Badge gray -->
      <Prism html />
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
      import uuBadge from '@/components/uu-components/UuBadge.vue'
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
          label: {
            type: String,
            default: ''
          },
          /**
           * color = 'primary' | 'secondary' | 'white'
           */
          badgeColor: {
            type: String as PropType<BadgeColorType>,
            default: 'primary'
          },
          size: {
            type: String as PropType<BadgeSizeType>,
            default: 'md'
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
      <!-- Badge -->
      <uu-Badge label="Badge" />
      <!-- // Badge -->
      ` }}
    </Prism>
  </section>
</template>
<style lang="scss" scoped>
.badge {
  ~ .badge {
    margin-left: 0.8rem;
  }
}
</style>