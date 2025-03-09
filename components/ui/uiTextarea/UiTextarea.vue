<template>
  <textarea v-model="textValue" :cols="textCols" :rows="textRows" :class="textStyles + ' ' + textSize"
            :placeholder="textPlaceholder"></textarea>
</template>

<script setup lang="ts">
import {E_TextareaSize, E_TextareaStyle} from "~/components/ui/uiTextarea/models/enums";
import type {T_TextareaSize, T_TextareaStyles} from "~/components/ui/uiTextarea/models/types";

const props = defineProps<{
  modelValue: string,
  size?: T_TextareaSize,
  styles?: T_TextareaStyles,
  placeholder?: string,
  cols?: string,
  rows?: string
}>()

const emits = defineEmits<{
  (e: 'update:model-value', value: string): void
}>()


const textValue = computed<string>({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:model-value', value)
  }
})

const textStyles = computed<string>(() => E_TextareaStyle[props.styles || 'default'])
const textSize = computed<string>(() => E_TextareaSize[props.size || 'sm'])
const textPlaceholder = computed<string>(() => props.placeholder || "")
const textCols = computed<string>(() => props.cols || '30')
const textRows = computed<string>(() => props.rows || '5')

</script>

<style scoped>

</style>