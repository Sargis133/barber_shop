<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" :checked="isClientLayout">
    <span class="ms-3 text-sm font-medium text-black dark:text-gray-300"
          :class="isClientLayout ? 'opacity-0' : 'opacity-100'">Admin</span>
    <div @click="onChangeLayoutState"
         class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-700 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-700"></div>
    <span class="ms-3 text-sm font-medium text-white dark:text-gray-300"
          :class="!isClientLayout ? 'opacity-0' : 'opacity-100'">Client</span>
  </label>
</template>


<script setup lang="ts">


const {$store} = useNuxtApp()

const isClientLayout = computed<boolean>(() => $store.getters.getLayoutType)

const onChangeLayoutState = (): void => {
  if (isClientLayout.value) {
    $store.dispatch("A_CHANGE_LAYOUT_STATE", false)
  } else {
    $store.dispatch("A_CHANGE_LAYOUT_STATE", true)
  }
}


</script>

<style scoped>

</style>