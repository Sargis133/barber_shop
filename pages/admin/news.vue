<template>
  <div>
    <p class="font-medium text-xl mt-5">News</p>

    <div class="mt-3">
      <UiUiButton
          @click="onToggleNewNewsBlock"
          styles="success"
          size="sm"
      >
        +
      </UiUiButton>

      <div class="opacity-0 overflow-hidden h-[0] transition-all ml-2 flex flex-col w-[250px]"
           :class="{'h-full opacity-100 overflow-visible' : isShowNewsBlock}">
        <NewsConfigForm/>
      </div>

      <div class="mt-3 ml-5 flex flex-col">
        <NuxtLink v-for="news in allNews" :key="news.id"
                  :to="'/admin/newss/' + news.id">- {{ news.title || "" }}
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import NewsConfigForm from "~/components/admin/newsConfigForm/NewsConfigForm.vue";

definePageMeta({
  layout: "admin-default"
})

let isShowNewsBlock = ref(false)

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_NEWS")

const allNews = computed(() => $store.getters.getAllNews)

const onToggleNewNewsBlock = () => isShowNewsBlock.value = !isShowNewsBlock.value


</script>

<style scoped>

</style>