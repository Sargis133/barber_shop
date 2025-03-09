<template>
  <div>
    <ShopConfigForm :item="productData"/>
  </div>
</template>

<script setup lang="ts">
import ShopConfigForm from "~/components/admin/shopConfigForm/ShopConfigForm.vue";

definePageMeta({
  layout: "admin-default"
})

const { $store } = useNuxtApp()
const route = useRoute()

const id = computed<string>(() => route.params.id)

let productData = ref(null)

$store.dispatch("A_GET_PRODUCT", id.value).then(res => productData.value = res)

</script>

<style scoped>

</style>