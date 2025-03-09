<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="newsTitleInput" class="text-sm font-bold">Title</label>
    <UiUiInput v-model="pageData.title" type="text" placeholder="Title" id="newsTitleInput" />

    <label for="newsDescriptionInput" class="text-sm font-bold block mt-2">Description</label>
    <UiUiTextarea v-model="pageData.description" id="newsDescriptionInput" placeholder="Description"/>

    <label for="newsCoverImageInput" class="text-sm font-bold block mt-2">Cover Image</label>
    <UiUiInput v-model="pageData.coverImage" type="text" id="newsCoverImageInput" placeholder="Cover Image Url"/>

    <UiUiButton @click="onSavePageData" class="mt-3">
      Save
    </UiUiButton>

  </div>
</template>

<script setup lang="ts">

import type {I_NewsPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "admin-default"
})


let isShowLoader = ref(false)

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")

const pageApiData = computed<I_NewsPageData>(() => $store.getters.getNewsPageData)

watch(pageApiData, (newV: I_NewsPageData) => {
  if(newV) {
    for(let key in newV) {
      pageData.value[key] = newV[key];
    }
  }
})

const pageData = ref<I_NewsPageData>({
  title: '',
  description: '',
  coverImage: ''
})


const onSavePageData = () => {
  isShowLoader.value = true

  const response = $store.dispatch("A_SET_NEWS_PAGE_DATA", pageData.value)
  response.then(res => res ? isShowLoader.value = false : '')
}


</script>

<style scoped>

</style>