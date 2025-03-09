<template>
  <div class="pb-4">
    <PageTopBanner image="https://burobiz-a.akamaihd.net/uploads/images/168533/large_17d7306e264ac2fed78642a2784e73f4.jpg"
                  title="our services"/>

    <div class="container">
      <div class="mt-6 flex flex-col gap-y-6 md:px-14 px-4 justify-between">
        <div v-for="(type,index) in types" :key="type.id" class="shadow" >
          <TypeSection :type-data="type" :reverse="!!(index % 2)"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";
import TypeSection from "~/components/client/typeSection/TypeSection.vue";

definePageMeta({
  layout: "client-default"
})

const { $store } = useNuxtApp()


$store.dispatch("A_SET_TYPES")

const types = computed(() => $store.getters.getServicesTypes || [])




</script>

<style scoped>

</style>