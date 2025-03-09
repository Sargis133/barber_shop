<template>
  <div class="min-h-[100vh]">
    <PageTopBanner :title="pageData.title || ''" :image="pageData.coverImage || ''"/>

    <div class="container">
      <div class="mt-6 pb-6 px-6 flex flex-col items-center justify-center bg-black mx-auto bg-opacity-95 w-[85%] shadow-[0_0_4px_1px_black]">
        <div class="w-[80%] max-lg:w-[95%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ pageData.title }}</p>

          <p class="mt-4 text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ pageData.description }}</p>

          <div class="mt-5 grid grid-cols-2 gap-x-6 max-sm:grid-cols-1">
            <img :src="pageData.firstImage" alt="image" class="h-full object-cover brightness-75"/>

            <p class="about-section-text text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ pageData.firstText }}</p>
          </div>

          <div class="mt-5 grid grid-cols-2 gap-x-6 max-sm:grid-cols-1">
            <p class="about-section-text text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ pageData.secondText }}</p>

            <img :src="pageData.secondImage" alt="image" class="h-full object-cover brightness-75"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";
import type {I_AboutPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "client-default"
})

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")

const pageData = computed<I_AboutPageData>(() => $store.getters.getAboutPageData || {})

</script>

<style scoped>
.about-section-text::first-letter {
  font-size: 35px;
  color: rgb(180,83,9);
}
</style>