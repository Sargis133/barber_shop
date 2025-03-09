<template>
  <div>
    <NewsConfigForm :item="newsData"/>
  </div>
</template>

<script setup lang="ts">
import NewsConfigForm from "~/components/admin/newsConfigForm/NewsConfigForm.vue";

definePageMeta({
  layout: "admin-default"
})

const { $store } = useNuxtApp()
const route = useRoute()

const id = computed<string>(() => route.params.id)

let newsData = ref(null)

$store.dispatch("A_GET_NEWS", id.value).then(res => newsData.value = res)

</script>

<style scoped>

</style>