<template>
  <div class="grid gap-x-4 justify-between grid-cols-4 max-md:grid-cols-2 gap-y-4 max-sm:grid-cols-1" :class="`grid-cols-${itemTotal}`">
    <div v-for="(service,index) in services" :key="service.id + index">
      <ServiceCard :data="service" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "~/components/client/serviceCard/ServiceCard.vue";
import type {I_ApiServiceData} from "~/models/db/interfaces";

const props = defineProps<{
  itemsCount?: number
}>()

const { $store } = useNuxtApp()
const itemTotal = computed<number>(() => +props.itemsCount || 4)

$store.dispatch("A_SET_SERVICES")

const services = computed<I_ApiServiceData[]>(() => {
  let result = new Set()
  let servicesData: I_ApiServiceData[] = $store.getters.getServicesData

  if(servicesData.length > 0 && itemTotal.value < servicesData.length+1) {
    while (result.size < itemTotal.value) {
      let random: number = Math.floor(Math.random() * servicesData.length)
      if (servicesData[random]) result.add(servicesData[random])
    }
  }

  return Array.from(result)
})



</script>

<style scoped>

</style>