<template>
  <div class="flex flex-col md:flex-row  bg-black bg-opacity-95 md:h-[400px] h-auto pb-2 md:pb-0" :class="isReverse ? 'md:flex-row-reverse' : 'flex-row'">
    <img :src="type.image" alt="type-img" class="w-full md:w-[60%] object-cover brightness-75 h-[200px] md:h-auto">

    <div class="flex flex-row max-sm:flex-col md:flex-col justify-between w-full gap-x-4 md:w-[35%] px-4 pt-2 pb-1">
      <div>
        <p class="text-amber-700 md:text-[48px] text-3xl font-teko">{{ type.name }}</p>
        <p class="type-card__description pl-2 text-gray-400 text-sm md:text-[16px]">{{ type.description }}</p>
      </div>

      <div>
        <p class="md:text-[22px] text-xl text-amber-700 font-semibold font-teko mt-2">Categories</p>

        <div class="flex flex-col gap-y-1 ml-2 mt-1">
          <NuxtLink v-for="category in categories.slice(0, 3)" :to="'/client/category/' + category.id"
                    :key="category.id"
                    class="text-gray-400 hover:text-white transition-all w-max md:text-md text-sm">
            {{ category.name }}
          </NuxtLink>

          <NuxtLink :to="'/client/type/' + type.id" class="text-gray-400 hover:text-white transition-all w-max md:text-md text-sm">
            Other
          </NuxtLink>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtLink
            :to="'/client/type/' + type.id"
            class="float-right border-amber-800 border-2 w-max h-max px-4 text-amber-700 uppercase font-teko md:text-[24px] text-[18px] hover:text-gray-300 hover:bg-amber-700 transition-all duration-500">
          More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {I_ApiCategoryData, I_ApiTypeData} from "~/models/db/interfaces";

const props = defineProps<{
  typeData: I_ApiTypeData,
  reverse: boolean
}>()

const {$store} = useNuxtApp()

const type = computed<I_ApiTypeData>(() => props.typeData || {})
const isReverse = computed<boolean>(() => props.reverse)
let categories = ref<I_ApiCategoryData[]>([])


const categoriesData: Promise<I_ApiCategoryData[]> = $store.dispatch("A_GET_CATEGORIES_BY_TYPE", type.value.id)
categoriesData.then(res => {
  if (res) categories.value = res
})

</script>

<style scoped>

.type-card__description {
  line-height: 121%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
</style>