<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="newsTitleInput" class="font-bold text-sm">Title</label>
    <UiUiInput v-model="newsData.title" id="newsTitleInput" type="text" placeholder="Title" size="md"/>

    <label for="newsDescriptionInput" class="font-bold text-sm">Description</label>
    <UiUiTextarea v-model="newsData.description" id="newsDescriptionInput" type="text" placeholder="Description"/>

    <label for="newsImageInput" class="font-bold text-sm">Image</label>
    <UiUiInput v-model="newsData.image" id="newsImageInput" type="text" placeholder="Image" size="md"/>

    <label for="newsDateInput" class="font-bold text-sm">Date(mm/dd/yyyy)</label>
    <UiUiInput v-model="newsData.date" id="newsDateInput" type="date" size="md"/>

    <label for="newsTimeInput" class="font-bold text-sm">Time</label>
    <UiUiInput v-model="newsData.time" id="newsTimeInput" type="time" size="md"/>

    <div class="flex gap-x-1 mt-1">
      <UiUiButton @click="onSaveNewNews">
        Save
      </UiUiButton>

      <UiUiButton v-if="props.item"
                  @click="onDeleteNews" styles="error">
        Delete
      </UiUiButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import onFormatDateToday from "~/components/admin/newsConfigForm/utils/onFormatDateToday";
import onFormatFirstTime from "~/components/admin/newsConfigForm/utils/onFormatFirstTime";
import type {I_ChangedNewsConfigForm, I_NewsConfigForm} from "~/components/admin/newsConfigForm/models/interfaces";

const { $store } = useNuxtApp()

const props = defineProps<{
  item?: I_NewsConfigForm
}>()

const emits = defineEmits<{
  (e: 'newItemCreated', value: boolean): void
}>()

let isShowLoader = ref<boolean>(false)

const newsData = ref<I_NewsConfigForm>({
  title: "",
  description: "",
  image: "",
  date: onFormatDateToday(new Date()),
  time: onFormatFirstTime()
})


watch(() => props.item, (newV: I_NewsConfigForm) => {
  if(newV) {
    for(let key in newV) {
      newsData.value[key] = newV[key]
    }
  }
})


const onSaveNewNews = (): void => {
  if(props.item) {
    const data: I_ChangedNewsConfigForm = {
      id: props.item.id,
      data: newsData.value,
    }
    const changeNewsData: Promise<boolean> = $store.dispatch("A_CHANGE_NEWS_DATA", data)
    changeNewsData.then(res => {
      if (res) {
        console.log('success')
        isShowLoader.value = false
      }
    })
  } else {
    const addNews: Promise<boolean> = $store.dispatch("A_SET_NEW_NEWS", newsData.value)
    addNews.then(res => {
      if (res) {
        emits('newItemCreated', true)

        for (let key in newsData.value) {
          newsData.value[key] = ""
        }

        isShowLoader.value = false
      }
    })
  }
}

const onDeleteNews = (): void => {
  const deleteNews: Promise<boolean> = $store.dispatch("A_DELETE_NEWS", props.item.id)
  deleteNews.then(res => res ? navigateTo("/admin/news") : "")
}

</script>

<style scoped>

</style>