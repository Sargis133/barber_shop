<template>
  <div class="min-h-[100vh]">
    <PageTopBanner image="https://i5.photo.2gis.com/images/branch/0/30258560050895658_3cbf.jpg"
                   :title="categoryData.name || ''"/>

    <div class="container">
      <div
          class="mt-6 pb-4 bg-black bg-opacity-95 w-[85%] mx-auto flex items-center justify-center shadow-[0_0_4px_1px_black]">
        <div class="flex flex-col items-center w-[80%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ categoryData.name }}</p>

          <img v-if="categoryData.image" :src="categoryData.image" alt="type-img" class="w-full object-cover">

          <p class="mt-4 text-gray-400 whitespace-pre-wrap">{{ categoryData.description }}</p>

          <p class="mt-6 text-amber-700 font-teko text-[32px]">Service Charges</p>

          <div class="flex flex-col w-[70%] max-sm:w-[90%] items-center">
            <div v-for="service in services" :key="service.id"
                 class="text-white grid grid-cols-[max-content_15fr_1fr] gap-x-3 items-center justify-center">
              <NuxtLink :to="'/client/service/' + service.id" class="text-gray-200 hover:text-amber-700 transition-all">
                {{ service.name }}
              </NuxtLink>
              <span class="border-t border-dashed border-gray-100 w-full"></span>
              <p class="text-nowrap">
                {{ service.price }}
                <span class="text-sm align-text-top">$</span>
              </p>
            </div>
          </div>

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

const {$store} = useNuxtApp()
const route = useRoute()
const id = computed(() => route.params.id)

let categoryData = ref({})
let services = ref([])

const onGetCategoryData = () => {
  const categoryDataResponse = $store.dispatch("A_GET_CATEGORY_DATA", id.value)
  categoryDataResponse.then(res => {
    if (res) {
      categoryData.value = res

      onGetServicesData(res.id)
    }
  })
}

onGetCategoryData()

const onGetServicesData = (categoryId) => {
  const servicesResponse = $store.dispatch("A_GET_SERVICES_BY_CATEGORY", categoryId)
  servicesResponse.then(res => {
    if (res) {
      services.value = res
    }
  })
}

</script>

<style scoped>

</style>