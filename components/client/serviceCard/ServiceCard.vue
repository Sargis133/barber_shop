<template>
  <NuxtLink :to="'/client/service/' + service.id" class="group flex flex-col hover:shadow-[0_0_1px_1px_white] rounded transition-all duration-500 hover:p-2">
    <img :src="service.image" alt="service-image" class="aspect-square object-cover group-hover:brightness-75">
    <p class="text-gray-200 font-teko text-2xl text-center group-hover:text-amber-700 transition-all">{{ service.name }}</p>
    <p class="service-card__description text-gray-300 text-sm group-hover:text-amber-700 transition-all">{{ service.description }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type {I_ApiServiceData} from "~/models/db/interfaces";

const props = defineProps<{
  data: I_ApiServiceData
}>()

const service = computed<I_ApiServiceData>(() => props.data)


</script>

<style scoped>
.service-card__description {
  line-height: 121%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>