<template>
  <div>
    <TypeConfigForm v-if="type === 'types'" :item="serviceData"/>
    <CategoryConfigForm v-if="type === 'categories'" :item="serviceData"/>
    <ServiceConfigForm v-if="type === 'services'" :item="serviceData"/>
  </div>
</template>

<script setup lang="ts">
import CategoryConfigForm from "~/components/admin/categoryConfigForm/CategoryConfigForm.vue";
import TypeConfigForm from "~/components/admin/typeConfigForm/TypeConfigForm.vue";
import ServiceConfigForm from "~/components/admin/serviceConfigForm/ServiceConfigForm.vue";

definePageMeta({
  layout: "admin-default"
})

const route = useRoute()

const { $store } = useNuxtApp()
const id = computed<string>(() => route.params.id)
const type = computed<string>(() => route.query.t)

let serviceData = ref({})

$store.dispatch("A_GET_SERVICE_BY_ID", id.value).then(res => serviceData.value = res)



</script>

<style scoped>

</style>