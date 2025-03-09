<template>
  <div>
    <PageTopBanner :title="newsData.title || ''" :image="newsData.image || ''"/>

    <div class="container">
      <div class="mt-6 px-6 w-[85%] mx-auto max-sm:px-0 pb-6 bg-black flex flex-col items-center justify-center bg-opacity-95 shadow-[0_0_4px_1px_black]">
        <div class="w-[80%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ newsData.title }}</p>

          <img :src="newsData.image" alt="newsImage" class="mx-auto">

          <p class="mt-4 text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ newsData.description }}</p>
          <p class="mt-1 text-gray-400 text-md font-teko text-center">{{ newsData.date }} {{ newsData.time }}</p>

        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";

definePageMeta({
  layout: "client-default"
})

const { $store } = useNuxtApp()
const route = useRoute()

const id = computed(() => route.params.id)
let newsData = ref({})

$store.dispatch("A_GET_NEWS", id.value).then(res => newsData.value = res)

</script>

<style scoped>

</style>