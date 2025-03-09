<template>
  <input v-model="model" :type="inputType" :class="inputStyles + ' ' + inputSize" :placeholder="inputPlaceholder">
</template>

<script setup lang="ts">
import {E_InputSize, E_InputStyle} from "~/components/ui/uiInput/models/enums";
import type {T_InputSize, T_InputStyle, T_InputType} from "~/components/ui/uiInput/models/types";

const props = defineProps<{
  styles?: T_InputStyle,
  size?: T_InputSize,
  type?: T_InputType,
  placeholder?: string
}>()

const model = defineModel<string>()


const inputStyles = computed<string>(() => E_InputStyle[props.styles || 'default'])
const inputSize = computed<string>(() => E_InputSize[props.size || 'sm'])
const inputType = computed<T_InputType>(() => props.type || 'text')
const inputPlaceholder = computed<string>(() => props.placeholder || "")

</script>

<style scoped>


</style>