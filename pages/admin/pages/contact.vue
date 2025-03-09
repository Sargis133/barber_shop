<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="contactTitleInput" class="text-sm font-bold">Title</label>
    <UiUiInput v-model="pageData.title" type="text" placeholder="Title" id="contactTitleInput" />

    <label for="contactDescriptionInput" class="text-sm font-bold block mt-2">Description</label>
    <UiUiTextarea v-model="pageData.description" id="contactDescriptionInput" placeholder="Description"/>

    <label for="contactCoverImageInput" class="text-sm font-bold block mt-2">Cover Image</label>
    <UiUiInput v-model="pageData.coverImage" type="text" id="contactCoverImageInput" placeholder="Cover Image Url"/>

    <UiUiButton @click="onSavePageData" class="mt-3">
      Save
    </UiUiButton>
  </div>
</template>

<script setup lang="ts">
import type {I_ContactPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "admin-default"
})


let isShowLoader = ref(false)

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")

const pageApiData = computed<I_ContactPageData>(() => $store.getters.getContactPageData)

watch(pageApiData, (newV: I_ContactPageData) => {
  if(newV) {
    for(let key in newV) {
      pageData.value[key] = newV[key];
    }
  }
})

const pageData = ref<I_ContactPageData>({
  title: '',
  description: '',
  coverImage: ''
})


const onSavePageData = () => {
  isShowLoader.value = true

  const response = $store.dispatch("A_SET_CONTACT_PAGE_DATA", pageData.value)
  response.then(res => res ? isShowLoader.value = false : '')
}
</script>

<style scoped>

</style>