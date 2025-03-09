<template>
  <div>
    <PageTopBanner :title="pageData.title || ''" :image="pageData.coverImage || ''"/>

    <div class="container">
      <div class="mt-6 px-6 max-md:px-0 pb-6 w-[85%] mx-auto bg-black flex flex-col items-center justify-center bg-opacity-95 shadow-[0_0_4px_1px_black]">
        <div class="w-[80%] max-md:w-[95%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ pageData.title }}</p>

          <p class="mt-4 text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ pageData.description }}</p>

          <div class="mt-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-5 w-[70%] max-md:w-[95%] mx-auto">
            <NuxtLink v-for="product in allProductsData" :to="'/client/product/' + product.id" class="flex flex-col mx-auto relative group w-[200px] border border-white p-1 rounded hover:border-0">
              <div class="absolute flex justify-center items-center right-[-5%] top-[-5%] z-10 bg-amber-600 rounded-full p-1 min-w-[30px] min-h-[30px] aspect-square group-hover:opacity-0 transition-all">
                <p class="text-red-700 font-teko text-xl">{{ product.price }}$</p>
              </div>

              <img :src="product.image" alt="news-img" class="w-[90%] mx-auto group-hover:brightness-75 transition-all ">

              <div class="flex flex-col justify-between ml-4 w-[90%] mx-auto">
                <p class="slice-title text-xl text-center text-gray-400 group-hover:text-amber-700 transition-all">
                  {{ product.title }}
                </p>

                <p class="slice-text text-gray-400 pb-1 whitespace-pre-wrap group-hover:text-amber-700 transition-all">{{ product.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import type {I_ShopPageData} from "~/models/store/pages/interfaces";
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";

definePageMeta({
  layout: "client-default"
})

const {$store} = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")
$store.dispatch("A_SET_ALL_PRODUCTS")

const pageData = computed<I_ShopPageData>(() => $store.getters.getShopPageData || {})
const allProductsData = computed(() => $store.getters.getAllProducts || {})

</script>

<style scoped>
.slice-title {
  line-height: 124%;
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