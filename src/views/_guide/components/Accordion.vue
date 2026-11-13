<script setup lang="ts">
import uuAccordion from '@/components/uu-components/UuAccordion.vue'
import uuAccordionItem from '@/components/uu-components/UuAccordionItem.vue'
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
      <!-- Accordion -->
      <uu-accordion>
        <uu-accordion-item
          active
          header="Active"
        >
          내용1
        </uu-accordion-item>
        <uu-accordion-item>
          <template #accordion-header>
            Slot
          </template>
          <template #accordion_body>
            내용2
          </template>
        </uu-accordion-item>
        <uu-accordion-item
          header="Disabled"
          disabled
        >
          내용3
        </uu-accordion-item>
      </uu-accordion>
      <!-- // Accordion -->
      <Prism html>
        {{ `
      <!-- Accordion -->
      <uu-accordion>
        <uu-accordion-item
          active
          header="Active"
        >
          내용1
        </uu-accordion-item>
        <uu-accordion-item>
          <template #accordion-header>
            Slot
          </template>
          <template #accordion_body>
            내용2
          </template>
        </uu-accordion-item>
        <uu-accordion-item
          header="Disabled"
          disabled
        >
          내용3
        </uu-accordion-item>
      </uu-accordion>
      <!-- // Accordion -->
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Multiple
      </h4>
      <!-- Accordion -->
      <uu-accordion multiple>
        <uu-accordion-item
          active
          header="Active"
        >
          내용1
        </uu-accordion-item>
        <uu-accordion-item>
          <template #accordion-header>
            Slot
          </template>
          <template #accordion_body>
            내용2
          </template>
        </uu-accordion-item>
        <uu-accordion-item
          header="Disabled"
          disabled
        >
          내용3
        </uu-accordion-item>
      </uu-accordion>
      <!-- // Accordion -->
      <Prism html>
        {{ `
        <!-- Accordion -->
        <uu-accordion multiple>
          <uu-accordion-item
            active
            header="Active"
          >
            내용1
          </uu-accordion-item>
          <uu-accordion-item>
            <template #accordion-header>
              Slot
            </template>
            <template #accordion_body>
              내용2
            </template>
          </uu-accordion-item>
          <uu-accordion-item
            header="Disabled"
            disabled
          >
            내용3
          </uu-accordion-item>
        </uu-accordion>
        <!-- // Accordion -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        arrow
      </h4>
      <!-- Accordion -->
      <uu-accordion arrow>
        <uu-accordion-item
          active
          header="Active"
        >
          내용1
        </uu-accordion-item>
        <uu-accordion-item>
          <template #accordion-header>
            Slot
          </template>
          <template #accordion_body>
            내용2
          </template>
        </uu-accordion-item>
        <uu-accordion-item
          header="Disabled"
          disabled
        >
          내용3
        </uu-accordion-item>
      </uu-accordion>
      <!-- // Accordion -->
      <Prism html>
        {{ `
      <!-- Accordion -->
      <uu-accordion arrow>
        <uu-accordion-item
          active
          header="Active"
        >
          내용1
        </uu-accordion-item>
        <uu-accordion-item>
          <template #accordion-header>
            Slot
          </template>
          <template #accordion_body>
            내용2
          </template>
        </uu-accordion-item>
        <uu-accordion-item
          header="Disabled"
          disabled
        >
          내용3
        </uu-accordion-item>
      </uu-accordion>
      <!-- // Accordion -->
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
      import uuAccordion  from '@/components/uu-components/Accordion.vue'
      import uuAccordionItem  from '@/components/uu-components/AccordionItem.vue'
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
      // uuAccordion
      const props = defineProps({
        multiple: {
          type: Boolean,
          default: false
        },
        arrow: {
          type: Boolean,
          default: false
        }
      })

      // uuAccordionItem
      const props = defineProps({
        active: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        },
        header: {
          type: String,
          default: 'Accordion Title'
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
      <!-- Accordion -->
      <uu-accordion>
        <uu-accordion-item header="타이틀1">
          내용1
        </uu-accordion-item>
        <uu-accordion-item header="타이틀2">
          내용2
        </uu-accordion-item>
        <uu-accordion-item header="타이틀3">
          내용3
        </uu-accordion-item>
      </uu-accordion>
      <!-- // Accordion -->
      ` }}
    </Prism>
  </section>
</template>