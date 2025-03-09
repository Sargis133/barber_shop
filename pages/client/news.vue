<template>
  <div class="min-h-[100vh]">
    <PageTopBanner :title="pageData.title || ''" :image="pageData.coverImage || ''"/>

    <div class="container">
      <div class="mt-6 px-6 max-md:px-0 pb-6 w-[85%] mx-auto bg-black flex flex-col items-center justify-center bg-opacity-95 shadow-[0_0_4px_1px_black]">
        <div class="w-[80%] max-md:w-[95%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ pageData.title }}</p>

          <p class="mt-4 text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ pageData.description }}</p>

          <div class="mt-6 flex flex-col gap-y-5 w-[70%] max-md:w-[90%] mx-auto">
            <NuxtLink v-for="news in allNewsData" :to="'/client/newss/' + news.id" class="flex group">
              <img :src="news.image" alt="news-img" class="max-w-[200px] max-sm:w-[120px] group-hover:brightness-75 transition-all">

              <div class="flex flex-col justify-between ml-4">
                <p class="slice-title text-xl text-gray-400 group-hover:text-amber-700 transition-all max-sm:text-[16px]">{{ news.title }}</p>
                <p class="slice-text text-gray-400 pb-1 whitespace-pre-wrap group-hover:text-amber-700 transition-all max-sm:text-[14px]">{{ news.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";
import type {I_NewsPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "client-default"
})

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")
$store.dispatch("A_SET_ALL_NEWS")

const pageData = computed<I_NewsPageData>(() => $store.getters.getNewsPageData || {})
const allNewsData = computed(() => $store.getters.getAllNews)

</script>

<style scoped>
.slice-title {
  line-height: 121%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.slice-text {
  line-height: 121%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>