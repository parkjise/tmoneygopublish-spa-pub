<script setup lang="ts">
import Flicking, { type ChangedEvent } from "@egjs/vue3-flicking";
import { ref, type PropType } from "vue";

type dateType = 'year' | 'time'

const props = defineProps({
  type: {
    type: String as PropType<dateType>,
    default: 'year',
  },
  data: {
    type: Array<number[]>,
    default: []
  },
  defaultIndex: {
    type: Array<number>,
    default: [0,0,0]
  }
})

const emits = defineEmits(['dateChange'])

const handleUpdate = (e: ChangedEvent, data: number[]) => {
  emits('dateChange', e, data[e.index])
}

const isActivePanel = (idx: number, i: number) => {
  return props.defaultIndex[idx] === i;
}

const flickingRefs = ref<Array<any>>([]);

const updateTransform = (e: any) => {
  e.currentTarget.panels.forEach((panel: any) => {
    const rotateVal = -panel.progress * 20;
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 150 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px)`;

    // 패널이 가운데에 있을 때 active 클래스를 추가
    const isCenter = Math.abs(panel.progress) < 0.5;
    panel.element.classList.toggle('active', isCenter);
  });
};

const readyTransform = (idx:number) => {
  const flicking = flickingRefs.value[idx];
  const midPanel = flicking.getPanel(props.defaultIndex[idx]);
  if (midPanel) {
    flicking.moveTo(midPanel.index, 0);
    midPanel.element.classList.add('active');
  }
}
</script>

<template>
  <div
    class="date_picker"
    :class="{'time': props.type == 'time'}"
  >
    <Flicking
      v-for="(value, idx) in props.data"
      :key="idx"
      :ref="el => flickingRefs[idx] = el"
      :options="{ horizontal: false, bounce: 0, defaultIndex: props.defaultIndex[idx], circular: true }"
      @changed="e => handleUpdate(e, data[idx])"
      @ready="readyTransform(idx)"
      @move="updateTransform"
    >
      <div
        v-for="(item, i) in value"
        :key="i"
        class="date_panel"
        :class="{'active': isActivePanel(idx, i)}"
      >
        <template v-if="type=='year'">
          <template v-if="idx == 0">
            {{ item }}년
          </template>
          <template v-else-if="idx == 1">
            {{ item }}월
          </template>
          <template v-else>
            {{ item }}일
          </template>
        </template>
        <template v-else>
          {{ item }}
        </template>
      </div>
      <template #viewport>
        <div
          class="date_panel_border"
          :class="`border_${idx == 0 ? 'left' : 'right'}`"
        />
        <div class="shadow shadow_top" />
        <div class="shadow shadow_bottom" />
      </template>
    </Flicking>
  </div>
</template>

<style scoped>
</style>