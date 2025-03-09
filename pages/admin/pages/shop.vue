<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="shopTitleInput" class="text-sm font-bold">Title</label>
    <UiUiInput v-model="pageData.title" type="text" placeholder="Title" id="shopTitleInput"/>

    <label for="shopDescriptionInput" class="text-sm font-bold block mt-2">Description</label>
    <UiUiTextarea v-model="pageData.description" id="shopDescriptionInput" placeholder="Description"/>

    <label for="shopCoverImageInput" class="text-sm font-bold block mt-2">Cover Image</label>
    <UiUiInput v-model="pageData.coverImage" type="text" id="shopCoverImageInput" placeholder="Cover Image Url"/>

    <UiUiButton @click="onSavePageData" class="mt-3">
      Save
    </UiUiButton>
  </div>
</template>

<script setup lang="ts">
import type {I_ShopPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "admin-default"
})

let isShowLoader = ref(false)

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")

const pageApiData = computed<I_ShopPageData>(() => $store.getters.getShopPageData)

watch(pageApiData, (newV: I_ShopPageData) => {
  if(newV) {
    for(let key in newV) {
      pageData.value[key] = newV[key];
    }
  }
})

const pageData = ref<I_ShopPageData>({
  title: '',
  description: '',
  coverImage: ''
})


const onSavePageData = () => {
  isShowLoader.value = true

  const response = $store.dispatch("A_SET_SHOP_PAGE_DATA", pageData.value)
  response.then(res => res ? isShowLoader.value = false : '')
}
</script>

<style scoped>

</style>