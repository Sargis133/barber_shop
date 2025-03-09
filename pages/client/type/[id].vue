<template>
  <div class="min-h-[100vh]">
    <PageTopBanner image="https://i.pinimg.com/originals/f5/95/b7/f595b7dd6e9d03f06f5397db7739b297.jpg"
                   :title="typeData.name || ''"/>

    <div class="container">
      <div
          class="mt-6 pb-4 bg-black bg-opacity-95 w-[85%] mx-auto flex items-center justify-center shadow-[0_0_4px_1px_black]">
        <div class="flex flex-col items-center w-[80%]">
          <p class="text-amber-700 font-teko text-[48px] text-center">{{ typeData.name }}</p>

          <img v-if="typeData.image" :src="typeData.image" alt="type-img" class="w-full object-cover">

          <p class="mt-4 text-gray-400 whitespace-pre-wrap">{{ typeData.description }}</p>

          <p class="mt-6 text-amber-700 font-teko text-[32px]">Categories</p>
          <div class="mt-3 grid grid-cols-3 max-sm:grid-cols-2 gap-x-8 gap-y-4">
            <div v-for="category in typeCategories" :key="category.id">
              <NuxtLink :to="'/client/category/' + category.id"
                        class="relative text-gray-200 text-xl max-sm:text-[15px] hover:text-amber-700 transition-all">
            <span class="absolute left-[-18px] rotate-90 top-[-5px]">
              <Icons icon-name="scissor" icon-styles="fill-white"/>
            </span>
                {{ category.name }}
              </NuxtLink>

              <div class="flex flex-col ml-2">
                <NuxtLink v-for="service in services[category.id]" :key="service.id" :to="'/client/service/' + service.id"
                          class="text-gray-200 hover:text-gray-400 transition-all max-sm:text-sm">
                  - {{ service.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
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

const {$store} = useNuxtApp()
const route = useRoute()
const id = computed(() => route.params.id)

let typeData = ref({})
let typeCategories = ref({})
let services = ref({})


const onGetSelectedTypeData = () => {
  const typeDataResponse = $store.dispatch("A_GET_TYPE_DATA", id.value)
  typeDataResponse.then(res => {
    if (res) typeData.value = res
  })

  const typeCategoriesResponse = $store.dispatch("A_GET_CATEGORIES_BY_TYPE", id.value)
  typeCategoriesResponse.then(res => {
    if (res) {
      typeCategories.value = res
      res.forEach(category => {
        onGetServicesData(category.id)
      })
    }
  })

}

onGetSelectedTypeData()

const onGetServicesData = (categoryId) => {
  const servicesResponse = $store.dispatch("A_GET_SERVICES_BY_CATEGORY", categoryId)
  servicesResponse.then(res => {
    if (res) {
      services.value[categoryId] = res
    }
  })
}


</script>

<style scoped>

</style>