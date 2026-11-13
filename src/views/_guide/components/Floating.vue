<script setup lang="ts">
import Prism from '@/components/uu-components/Prism.vue'
import uuFloating from '@/components/uu-components/UuFloating.vue';
</script>

<template>
  <div :style="{height: '200vh'}">
    <section class="section">
      <h3 class="section-title">
        Examples
      </h3>
      <article class="article">
        <h4 class="section-subtitle">
          Floating Top (Default)
        </h4>
        <!-- Floating -->
        <uu-floating />
        <!-- // Floating -->
        <Prism html>
          {{ `
          <uu-floating />
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
      import uuFloating from '@/components/uu-components/Floating.vue'
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
            pos: {
              type: Object as PropType<posOpt>,
              default: () => {
                return {
                  bottom: 11,
                  right: 13,
                  zIndex: 89
                }
              }
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
      <!-- Floating -->
        <uu-floating />
      <!-- // Floating -->
      ` }}
      </Prism>
    </section>
  </div>
</template>