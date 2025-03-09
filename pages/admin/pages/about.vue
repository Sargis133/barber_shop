<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="aboutTitleInput" class="text-sm font-bold">Title</label>
    <UiUiInput v-model="pageData.title" type="text" placeholder="Title" id="aboutTitleInput" />

    <label for="aboutDescriptionInput" class="text-sm font-bold block mt-2">Description</label>
    <UiUiTextarea v-model="pageData.description" id="aboutDescriptionInput" placeholder="Description"/>

    <label for="aboutCoverImageInput" class="text-sm font-bold block mt-2">Cover Image</label>
    <UiUiInput v-model="pageData.coverImage" type="text" id="aboutCoverImageInput" placeholder="Cover Image Url"/>

    <label for="aboutFirstSectionTextInput" class="text-sm font-bold block mt-2">First Section Text</label>
    <UiUiInput v-model="pageData.firstText" type="text" id="aboutFirstSectionTextInput" placeholder="Text"/>

    <label for="aboutFirstSectionImageInput" class="text-sm font-bold block mt-2">First Section Image</label>
    <UiUiInput v-model="pageData.firstImage" type="text" id="aboutFirstSectionImageInput" placeholder="Image Url"/>

    <label for="aboutFirstSectionTextInput" class="text-sm font-bold block mt-2">Second Section Text</label>
    <UiUiInput v-model="pageData.secondText" type="text" id="aboutFirstSectionTextInput" placeholder="Text"/>

    <label for="aboutFirstSectionImageInput" class="text-sm font-bold block mt-2">Second Section Image</label>
    <UiUiInput v-model="pageData.secondImage" type="text" id="aboutFirstSectionImageInput" placeholder="Image Url"/>


    <UiUiButton @click="onSavePageData" class="mt-3">
      Save
    </UiUiButton>
  </div>
</template>

<script setup lang="ts">
import type {I_AboutPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "admin-default"
})

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")

let isShowLoader = ref<boolean>(false)

const pageData = ref<I_AboutPageData>({
  title: "",
  description: "",
  coverImage: "",
  firstText: "",
  firstImage: "",
  secondText: "",
  secondImage: ""
})

const pageApiData = computed<I_AboutPageData>(() => $store.getters.getAboutPageData)

watch(pageApiData, (newV: I_AboutPageData) => {
  if(newV) {
    for(let key in newV) {
      pageData.value[key] = newV[key];
    }
  }
})

const onSavePageData = () => {
  isShowLoader.value = true

  const response = $store.dispatch("A_SET_ABOUT_PAGE_DATA", pageData.value)
  response.then(res => res ? isShowLoader.value = false : '')
}
</script>

<style scoped>

</style>