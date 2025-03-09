<template>
  <header class="fixed z-50 top-0 left-0 right-0 my-0 mx-auto transition-all"
          :class="{'bg-black bg-opacity-75 py-0' : isScrolled}"
  >
    <div class="grid grid-cols-[1fr_2fr] py-1 px-1 container">
      <NuxtLink to="/client"
                class="ml-4 w-[85px] h-[85px] flex items-center justify-center hover:scale-110 transition-all">
        <img src="~/assets/images/icons/logo.webp" alt="main-icon" class="w-[90%] h-[90%] object-contain">
      </NuxtLink>

      <div class="flex md:hidden justify-end items-center">
        <UiUiButton @click="isShowBurgerMenuFunc" styles="empty" class="flex flex-col gap-y-1 w-max">
          <div class="w-[20px] h-[2px] bg-white"></div>
          <div class="w-[18px] h-[2px] bg-white"></div>
          <div class="w-[15px] h-[2px] bg-white"></div>
        </UiUiButton>

        <div
            :class="!isShowBurgerMenu ? 'bg-black w-0 h-0 overflow-hidden' : 'fixed right-0 top-0 bg-black w-full min-h-[100vh] overflow-visible'">
          <UiUiButton styles="empty" @click="onHideBurgerMenuFunc" class="text-white text-start text-xl" size="sm">X
          </UiUiButton>
          <div class="mt-10 overflow-auto h-[90%] flex flex-col p-4 items-start">
            <NuxtLink to="/client/" class="text-amber-700">Home</NuxtLink>
            <NuxtLink to="/client/services" class="text-amber-700">Services</NuxtLink>
            <NuxtLink to="/client/aboutUs" class="text-amber-700">About Us</NuxtLink>
            <NuxtLink to="/client/news" class="text-amber-700">News</NuxtLink>
            <NuxtLink to="/client/shop" class="text-amber-700">Shop</NuxtLink>
            <NuxtLink to="/client/contact" class="text-amber-700">Contact</NuxtLink>
          </div>
        </div>
      </div>


      <nav class="hidden md:flex items-center gap-x-4 font-light text-md lg:text-xl text-white">
        <NuxtLink to="/client" class="p-2 hover:text-amber-700 hover:transition-all">Home</NuxtLink>
        <div class="relative header__service-block">
          <NuxtLink to="/client/services" class="header__service-link p-2 hover:text-amber-700 hover:transition-all">
            Services
          </NuxtLink>

          <div v-if="types.length > 0"
               class="header__service-link__dropdown flex flex-col absolute left-0 right-0 top-8 bg-[#141414] w-max h-0 opacity-0 overflow-hidden transition-all">
            <NuxtLink
                v-for="type in types"
                :key="type.id"
                :to="'/client/type/' + type.id"
                class="hover:opacity-50 transition-opacity flex justify-between items-center gap-x-4 hover:text-amber-700 hover:transition-all"
                @mouseover="onFilterCategoriesByType(type.id)"
            >
            <span>
              {{ type.name || "" }}
            </span>
              <Icons icon-name="arrow-right" icon-styles="fill-white"/>
            </NuxtLink>
            <div
                class="header__service-link__category-dropdown flex flex-col absolute left-[100%] transition-all top-0 bg-[#141414] h-0 opacity-0 overflow-hidden"
                v-if="filteredCategories.length"
            >
              <NuxtLink v-for="category in filteredCategories" :key="category.id"
                        :to="'/client/category/' + category.id"
                        class="text-nowrap hover:opacity-50 transition-opacity hover:text-amber-700 hover:transition-all">
                {{ category.name || "" }}
              </NuxtLink>
            </div>
          </div>

        </div>
        <NuxtLink to="/client/aboutUs" class="p-2 hover:text-amber-700 hover:transition-all">About us</NuxtLink>
        <NuxtLink to="/client/news" class="p-2 hover:text-amber-700 hover:transition-all">News</NuxtLink>
        <NuxtLink to="/client/shop" class="p-2 hover:text-amber-700 hover:transition-all">Shop</NuxtLink>
        <NuxtLink to="/client/contact" class="p-2 hover:text-amber-700 hover:transition-all">Contact</NuxtLink>
      </nav>
    </div>


  </header>
</template>

<script setup lang="ts">

import type {I_ApiCategoryData, I_ApiTypeData} from "~/models/db/interfaces";

let isScrolled = ref<boolean>(false)
let isShowBurgerMenu = ref<boolean>(false)

const {$store} = useNuxtApp()
const route = useRoute()

watch(() => route.path, () => {
  isShowBurgerMenu.value = false
})

$store.dispatch("A_SET_TYPES")
$store.dispatch("A_SET_CATEGORIES")

const types = computed<I_ApiTypeData[]>(() => $store.getters.getServicesTypes || [])
const categories = computed<I_ApiCategoryData[]>(() => $store.getters.getServicesCategories || [])
let filteredCategories = ref<I_ApiCategoryData[]>([])


const onFilterCategoriesByType = (id: string): void => {
  filteredCategories.value = id ?
      categories.value.filter(item => item.type === id) :
      filteredCategories.value = categories.value.filter(item => item.type === "0")
}

onMounted(() => {
  window.addEventListener('scroll', function () {
    isScrolled.value = window.scrollY > 50;
  })

})

const isShowBurgerMenuFunc = (): void => {
  isShowBurgerMenu.value = true
}

const onHideBurgerMenuFunc = (): void => isShowBurgerMenu.value = false

</script>

<style scoped>
.header__service-block:hover .header__service-link__dropdown,
.header__service-link__dropdown:hover {
  overflow: visible;
  opacity: 1;
  height: max-content;
  padding: 5px;
}

.header__service-link__dropdown:hover .header__service-link__category-dropdown,
.header__service-link__category-dropdown:hover {
  overflow: visible;
  opacity: 1;
  padding: 5px;
  height: max-content;
  min-height: 100%;
}

</style>