<template>
  <div>
    <ScrollTopButton/>

    <div class="relative container">
      <video autoplay loop muted class="brightness-50 mt-[-70px] max-sm:mt-[-10px] min-h-[100vh] object-cover">
        <source src="~/assets/videos/videoplayback%20(1).mp4">
      </video>
      <p class="absolute top-[40%] max-sm:w-[90%] left-[55%] translate-x-[-55%] text-white z-10 text-xl lg:text-4xl uppercase text-center bg-black bg-opacity-55 tracking-wide">
        create your own style from professionals</p>
    </div>

    <div class="bg-black bg-opacity-95 shadow-[0_0_4px_1px_black] mx-4 container">
      <div class="mt-4 px-4 py-3">
        <p class="text-amber-700 font-teko text-[48px] text-center">{{ aboutUsData.title }}</p>

        <div class="flex flex-col md:grid md:grid-cols-2 gap-x-3 w-full h-full">
          <div class="relative w-[100%] h-[250px]">
            <img :src="aboutUsData.coverImage" alt="image" class="absolute top-0 left-0 object-cover w-full h-full">
          </div>

          <div>
            <p class="text-gray-400 whitespace-pre-wrap h-max max-h-[400px] overflow-hidden leading-[140%] mb-4">
              {{ aboutUsData.description }}</p>
            <NuxtLink to="/client/aboutUs"
                      class="text-amber-700 font-teko text-[22px] hover:text-gray-400 transition-all">More...
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>

    <div class="bg-black bg-opacity-95 shadow-[0_0_4px_1px_black] mx-4 container">
      <div class="mt-4 px-4 py-3">
        <p class="text-amber-700 font-teko text-[48px] text-center">{{ newsPageData?.title || '' }}</p>
        <p class="text-gray-400 font-teko text-[22px] px-10 text-center">{{ newsPageData?.description || '' }}</p>

        <div class="w-[70%] md:w-[50%] justify-center flex flex-wrap md:grid md:grid-cols-3 mx-auto mt-6 gap-x-4 gap-y-6">
          <NuxtLink v-for="news in allNewsData" :to="'/client/newss/' + news.id"
                    class="text-white flex flex-col hover:opacity-35 transition-all max-w-[150px]">
            <img :src="news.image" alt="news.image" class="w-full aspect-square object-cover brightness-75">
            <p class="text-gray-300 font-teko text-2xl text-center news-title">{{ news.title || '' }}</p>
          </NuxtLink>
        </div>

        <div class="flex justify-center mt-4">
          <NuxtLink to="/client/news"
                    class="border-b border-b-amber-800 text-amber-700 font-teko text-2xl hover:text-gray-300 hover:border-b-gray-300 transition-all">
            More...
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="bg-black bg-opacity-95 shadow-[0_0_4px_1px_black] mx-4 container">
      <div class="mt-4 px-4 py-3">
        <p class="text-amber-700 font-teko text-[48px] text-center">{{ shopPageData?.title || '' }}</p>
        <p class="text-gray-400 font-teko text-[22px] px-10 text-center">{{ shopPageData?.description || '' }}</p>

        <div class="w-[70%] md:w-[50%] flex justify-center flex-wrap md:grid md:grid-cols-3 mx-auto mt-6 gap-x-4 gap-y-6">
          <NuxtLink v-for="product in allProductsData" :to="'/client/product/' + product.id"
                    class="text-white flex flex-col hover:opacity-35 transition-all max-w-[150px]">
            <img :src="product.image" alt="news.image" class="w-full aspect-square object-cover brightness-75">
            <p class="text-gray-300 font-teko text-2xl text-center news-title">{{ product.title || '' }}</p>
          </NuxtLink>
        </div>

        <div class="flex justify-center mt-4">
          <NuxtLink to="/client/shop"
                    class="border-b border-b-amber-800 text-amber-700 font-teko text-2xl hover:text-gray-300 hover:border-b-gray-300 transition-all">
            More...
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {I_AboutPageData} from "~/models/store/pages/interfaces";
import ScrollTopButton from "~/components/client/scrollTopButton/ScrollTopButton.vue";

definePageMeta({
  layout: "client-default",
})

const {$store} = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")
$store.dispatch("A_SET_ALL_NEWS")
$store.dispatch("A_SET_ALL_PRODUCTS")

const aboutUsData = computed<I_AboutPageData>(() => $store.getters.getAboutPageData || {})
const newsPageData = computed(() => $store.getters.getNewsPageData)
const shopPageData = computed(() => $store.getters.getShopPageData)
const allNewsData = computed(() => $store.getters.getAllNews?.slice(0, 3))
const allProductsData = computed(() => $store.getters.getAllProducts?.slice(0, 4))


</script>

<style scoped>
.news-title {
  line-height: 121%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>