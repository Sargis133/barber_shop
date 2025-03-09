<template>
  <select v-model="dropdownValue" @change="onChangeValue" :class="dropdownStyles + ' ' + dropdownSize">
    <slot/>
    <option v-if="dropdownOptions.length" v-for="option in dropdownOptions" :key="option.value" :value="option.value"
            :selected="option.selected">{{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type {T_DropdownSize, T_DropdownStyle} from "~/components/ui/uiDropdown/models/types";
import {E_DropdownSize, E_DropdownStyle} from "~/components/ui/uiDropdown/models/enums";

const props = defineProps<{
  modelValue: string,
  options?: any,
  styles?: T_DropdownStyle,
  size?: T_DropdownSize
}>()

const emits = defineEmits<{
  (e: 'update:model-value', value: string): void
  (e: 'change', value: string): void
}>()

const dropdownValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits("update:model-value", value)
  }
})

const dropdownOptions = computed(() => props.options || [])
const dropdownStyles = computed<string>(() => E_DropdownStyle[props.styles || 'default'])
const dropdownSize = computed<string>(() => E_DropdownSize[props.size || 'md'])


const onChangeValue = (e): void => {
  emits("change", e.target?.value)
}

</script>

<style scoped>

</style>