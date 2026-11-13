<script setup lang="ts">
import { ref } from 'vue'
import uuTooltip  from '@/components/uu-components/UuTooltip.vue'
import uuButton  from '@/components/uu-components/UuButton.vue'
import Prism  from '@/components/uu-components/Prism.vue'
const tooltipModel = ref(true)

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
      <!-- Tooltip -->
      <uu-tooltip
        content="기본 툴팁 입니다."
        @open="console.log('open')"
        @close="console.log('close')"
      />
      <!-- // Tooltip -->
      <Prism
        html
      >
        {{ `
          <!-- Tooltip -->
          <uu-tooltip
            content="기본 툴팁 입니다."
            @open="console.log('open')"
            @close="console.log('close')"
          />
          <!-- // Tooltip -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Slots
      </h4>
      <!-- Tooltip Slots -->
      <uu-tooltip>
        <template #target>
          Slots 툴팁
        </template>
        <p>Slots 툴팁 입니다.</p>
      </uu-tooltip>
      <!-- // Tooltip Slots -->
      <Prism
        html
      >
        {{ `
          <!-- Tooltip Slots -->
          <uu-tooltip>
            <template #target>
              Slots 툴팁
            </template>
            <p>Slots 툴팁 입니다.</p>
          </uu-tooltip>
          <!-- // Tooltip Slots -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Position (x: 'left' | 'center' | 'right', y: 'top' | 'bottom')
      </h4>
      <!-- Tooltip Left -->
      <uu-tooltip
        content="왼쪽 아래 툴팁 입니다."
        :position="{x: 'left', y: 'bottom'}"
      />
      <!-- // Tooltip Left -->
      <!-- Tooltip Center -->
      <uu-tooltip
        content="가운데 아래 툴팁 입니다."
        :position="{x: 'center', y: 'bottom'}"
      />
      <!-- // Tooltip Center -->
      <!-- Tooltip Right -->
      <uu-tooltip
        content="오른쪽 아래 툴팁 입니다."
        :position="{x: 'right', y: 'bottom'}"
      />
      <!-- // Tooltip Right -->
      <!-- Tooltip Left -->
      <uu-tooltip
        content="왼쪽 위 툴팁 입니다."
        :position="{x: 'left', y: 'top'}"
      />
      <!-- // Tooltip Left -->
      <!-- Tooltip Center -->
      <uu-tooltip
        content="가운데 위 툴팁 입니다."
        :position="{x: 'center', y: 'top'}"
      />
      <!-- // Tooltip Center -->
      <!-- Tooltip Right -->
      <uu-tooltip
        content="오른쪽 위 툴팁 입니다."
        :position="{x: 'right', y: 'top'}"
      />
      <!-- // Tooltip Right -->
      <Prism
        html
      >
        {{ `
          <!-- Tooltip Left -->
          <uu-tooltip
            content="왼쪽 아래 툴팁 입니다."
            :position="{x: 'left', y: 'bottom'}"
          />
          <!-- // Tooltip Left -->
          <!-- Tooltip Center -->
          <uu-tooltip
            content="가운데 아래 툴팁 입니다."
            :position="{x: 'center', y: 'bottom'}"
          />
          <!-- // Tooltip Center -->
          <!-- Tooltip Right -->
          <uu-tooltip
            content="오른쪽 아래 툴팁 입니다."
            :position="{x: 'right', y: 'bottom'}"
          />
          <!-- // Tooltip Right -->
          <!-- Tooltip Left -->
          <uu-tooltip
            content="왼쪽 위 툴팁 입니다."
            :position="{x: 'left', y: 'top'}"
          />
          <!-- // Tooltip Left -->
          <!-- Tooltip Center -->
          <uu-tooltip
            content="가운데 위 툴팁 입니다."
            :position="{x: 'center', y: 'top'}"
          />
          <!-- // Tooltip Center -->
          <!-- Tooltip Right -->
          <uu-tooltip
            content="오른쪽 위 툴팁 입니다."
            :position="{x: 'right', y: 'top'}"
          />
          <!-- // Tooltip Right -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Type ('primary' | 'white' | 'dark' | 'line')
      </h4>
      <!-- Tooltip primary -->
      <uu-tooltip
        content="primary 툴팁 입니다."
        type="primary"
      />
      <!-- // Tooltip primary -->
      <!-- Tooltip white -->
      <uu-tooltip
        content="white 툴팁 입니다."
        type="white"
      />
      <!-- // Tooltip white -->
      <!-- Tooltip dark -->
      <uu-tooltip
        content="dark 툴팁 입니다."
        type="dark"
      />
      <!-- // Tooltip dark -->
      <!-- Tooltip line -->
      <uu-tooltip
        content="line 툴팁 입니다."
        type="line"
      />
      <!-- // Tooltip line -->
      <Prism
        html
      >
        {{ `
          <!-- Tooltip -->
          <uu-tooltip
            content="기본 툴팁 입니다."
            @open="console.log('open')"
            @close="console.log('close')"
          />
          <!-- // Tooltip -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        v-model (boolean) & hideTarget
      </h4>
      <uu-button
        btn-color="secondary"
        btn-style="line"
        size="xs"
        :label="String(tooltipModel)"
        @click.stop="tooltipModel = !tooltipModel"
      />
      <!-- Tooltip v-model -->
      <uu-tooltip
        v-model="tooltipModel"
        hide-target
        content="v-model 툴팁 입니다."
      />
      <!-- // Tooltip v-model -->
      <Prism
        script
      >
        {{ `
          const tooltipModel = ref(true)
        ` }}
      </Prism>
      <Prism
        html
      >
        {{ `
          <!-- Tooltip v-model -->
          <uu-tooltip
            v-model="tooltipModel"
            hide-target
            content="v-model 툴팁 입니다."
          />
          <!-- // Tooltip v-model -->
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
      import uuTooltip  from '@/components/uu-components/Tooltip.vue'
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
          /**
           * 툴팁 내용
           */
          content: {
            type: String,
            default: '내용'
          },
          /**
          * 툴팁 위치 <br>
          * :position={ x: 'left', y: 'bottom' }<br>
          * x: 'left' | 'center' | 'right';<br>
          * y: 'top' | 'bottom';
          */
          position: {
            type: Object as PropType<positionType>,
            default: () => {
              return {
                x: 'left',
                y: 'bottom'
              }
            }
          },
          /**
           * tooltipType: 'primary' | 'white' | 'dark' | 'line'
           */
          type: {
            type: String as PropType<tooltipType>,
            default: 'primary'
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
        const emit = defineEmits([
          /**
           * 툴팁 열림 상태
           */
          'open',
          /**
           * 툴팁 닫힘 상태
           */
          'close'
        ])
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
        <uu-tooltip content="기본 툴팁 입니다." />
      ` }}
    </Prism>
  </section>
</template>
<style lang="scss" scoped>
.btn {
  ~ .btn {
    margin-left: 0.8rem;
  }
}
.btn_tooltip {
  margin-left: 0.4rem;
}
</style>