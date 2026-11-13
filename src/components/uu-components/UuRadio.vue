<script setup lang="ts">
  import { computed } from 'vue'
  import { getRandomId } from '@/assets/script/randomString'

  const props = defineProps({
    /**
     * v-model: Value
     */
    modelValue: {
      type: [String, Number],
      default: ''
    },
    /**
     * Radio String or Index Value
     */
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: 'Name',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Hidden Label
     */
    hideLabel: {
      type: Boolean,
      default: false
    },
    /**
     * inline Style
     */
    inline: {
      type: Boolean,
      default: false
    },
    dropdownRadio: {
      type: Boolean,
      default: false
    }
  })
  const emit = defineEmits(['update:modelValue', 'change'])
  const randomString = getRandomId()
  const isChecked = computed({
    get(){
      return props.modelValue === props.value
    },
    set(newValue){
      return newValue
    }
  })
  function updateInput (e: Event) {
    if (typeof props.value === 'number') {
      emit('update:modelValue', props.value)
      emit('change', props.value)
    } else {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
      emit('change', (e.target as HTMLInputElement).value)
    }
  }

</script>
<template>
  <div
    class="form_radio"
    :class="[{'form_inline':props.inline},{'form_dropdown':props.dropdownRadio}]"
  >
    <input
      :id="`${randomString}radio`"
      class="form_radio_input"
      type="radio"
      :value="props.value"
      :checked="isChecked"
      :disabled="disabled"
      @change="$event => updateInput($event)"
    >
    <label
      :for="`${randomString}radio`"
      class="form_radio_label"
    >
      <slot v-if="label">{{ props.label }}</slot>
      <slot name="label" />
    </label>
    <slot name="button" />
  </div>
</template>