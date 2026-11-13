<script setup lang="ts">
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import Prism  from '@/components/uu-components/Prism.vue'

</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <!-- Fieldset -->
    <form>
      <uu-fieldset
        legend="LegendName"
      >
        input..
      </uu-fieldset>
    </form>
    <!-- // Fieldset -->
    <Prism html>
      {{ `
        <!-- Fieldset -->
        <form>
          <uu-fieldset
            legend="LegendName"
          >
            input..
          </uu-fieldset>
        </form>
        <!-- // Fieldset -->
      ` }}
    </Prism>
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
      import uuFieldset  from '@/components/uu-components/Fieldset.vue'
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
          legend: {
            type: String,
            default: 'Legend'
          },
          hideLegend: {
            type: Boolean,
            default: false
          },
          allCheckbox: {
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
        <!-- Fieldset -->
        <form>
          <uu-fieldset
            legend="fieldsetName"
            hide-legend
          >
            input..
          </uu-fieldset>
        </form>
        <!-- // Fieldset -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>