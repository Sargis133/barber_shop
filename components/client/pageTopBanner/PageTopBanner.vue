<template>
  <div class="flex-col w-full min-h-[400px] bg-cover bg-no-repeat bg-center flex items-center justify-center drop-shadow-[0_4px_4px_white]"
       :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${bannerImage})` }"
  >
    <p class="max-sm:text-3xl text-[4rem] text-[#e1e1e1] font-teko uppercase">{{ bannerTitle ?? "" }}</p>

    <div class="flex items-center text-[#e1e1e1] text-[18px] ">
      <span class="bg-[#e1e1e1] w-[40px] h-[2px] mr-4"></span>
      <NuxtLink to="/client" class="tracking-wide hover:text-amber-700 transition-all max-sm:text-sm">Home</NuxtLink>
      <span class="ml-4 mr-4">:</span>
      <p class="capitalize -tracking-wide max-sm:text-sm">{{ bannerTitle }}</p>
      <span class="bg-[#e1e1e1] w-[40px] h-[2px] ml-4"></span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  image: string,
  title: string
}>()

const bannerTitle = computed<string>(() => props.title)
const bannerImage = computed<string>(() => props.image)

</script>

<style scoped>

</style>