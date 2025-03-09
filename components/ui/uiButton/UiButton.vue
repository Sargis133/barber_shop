<template>
  <button :class="buttonStyle + ' ' + buttonSize" :type="buttonType">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type {T_ButtonSize, T_ButtonStyle, T_ButtonType} from "~/components/ui/uiButton/models/types";
import {E_ButtonSize, E_ButtonStyle} from "~/components/ui/uiButton/models/enums";

const props = defineProps<{
  styles?: T_ButtonStyle,
  size?: T_ButtonSize,
  type?: T_ButtonType
}>()

const buttonStyle = computed<string>(() => E_ButtonStyle[props.styles || 'primary'])
const buttonSize = computed<string>(() => E_ButtonSize[props.size || "md"])
const buttonType = computed<T_ButtonType>(() => props.type || "button")



</script>

<style scoped>

</style>