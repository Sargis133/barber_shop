<template>
  <button v-if="isShowButton" @click="onScrollToTop" class="fixed bottom-10 right-1 z-50 rounded-full p-2 bg-amber-600 text-gray-500">
    <Icons icon-name="double-arrow-top" icon-styles="w-[25px] h-[25px] fill-white"/>
  </button>
</template>

<script setup lang="ts">

let isShowButton = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isShowButton.value = window.scrollY > 300
  })
})


const onScrollToTop = (): void => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
}

</script>

<style scoped>

</style>