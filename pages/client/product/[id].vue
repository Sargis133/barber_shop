<template>
  <div>
    <PageTopBanner :title="productData.title || ''" :image="productData.image || ''"/>

    <div class="container">
      <div class="mt-6 px-6 max-md:px-0 mx-auto w-[85%] pb-6 bg-black flex flex-col items-center justify-center bg-opacity-95 shadow-[0_0_4px_1px_black]">
        <div class="w-[80%] max-md:w-[95%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ productData.title }} - {{ productData.price }}$</p>

          <img :src="productData.image" alt="prod-img" class="mx-auto">

          <p class="mt-4 text-gray-400 whitespace-pre-wrap max-sm:text-[14px]">{{ productData.description }}</p>
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
let productData = ref({})

$store.dispatch("A_GET_PRODUCT", id.value).then(res => productData.value = res)
</script>

<style scoped>

</style>