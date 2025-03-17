<template>
  <div class="min-h-[100vh]">
    <PageTopBanner image="https://avatars.mds.yandex.net/i?id=704bc1a51c94ccb219ec6e317f2affd41203e1cb38e4a022-4140047-images-thumbs&n=13" :title="serviceData.name || ''"/>

    <div class="container">
      <div
          class="mt-6 pb-4 bg-black bg-opacity-95 w-[85%] mx-auto flex items-center justify-center shadow-[0_0_4px_1px_black]">
        <div class="flex flex-col items-center w-[80%]">
          <p class="text-amber-700 font-teko text-[48px] text-center relative">
            {{ serviceData.name }}
            <span class="absolute bottom-[-15px] left-[50%] translate-x-[-50%] w-max">
            <Icons icon-name="mustache" icon-styles="fill-amber-700 w-[50px] h-[50px]"/>
          </span>
          </p>

          <div class="relative mt-4">
            <img v-if="serviceData.image" :src="serviceData.image" alt="type-img" class="w-full object-cover">
            <div v-if="serviceData.price" class="absolute flex flex-col px-2 py-1 bg-black top-0 left-0 text-gray-100 font-teko rounded-br-[25px]">
              <p class="text-3xl relative text-amber-700">
                {{ serviceData.price }}
                <span class="text-xl align-top">$</span>
                <span v-if="serviceData.discount" class="absolute w-[110%] h-[4px] bg-red-600 top-[35%] left-[-5%]"></span>
              </p>
              <p v-if="serviceData.discount">
                <span class="text-4xl text-red-600">{{ serviceData.discount }}</span>
                <span class="text-xl text-red-600 align-top">$</span>
              </p>
            </div>
          </div>

          <p class="mt-4 text-gray-400 whitespace-pre-wrap">{{ serviceData.description }}</p>

          <p class="text-[32px] text-amber-700 mt-6 font-teko">Similar Services</p>

          <div class="mt-4">
            <SimilarServicesSection/>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";
import SimilarServicesSection from "~/components/client/similarServicesSection/SimilarServicesSection.vue";

definePageMeta({
  layout: "client-default"
})

const { $store } = useNuxtApp()
const route = useRoute()
const id = computed(() => route.params.id)
const serviceData = ref({})

$store.dispatch("A_GET_SERVICE_BY_ID", id.value).then(res => serviceData.value = res)

</script>

<style scoped>

</style>