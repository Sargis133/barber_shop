<template>
  <div>
    <p class="font-medium text-xl mt-5">Types</p>

    <div class="mt-3">
      <UiUiButton
          @click="onToggleNewTypeBlock"
          styles="success"
          size="sm"
      >
        +
      </UiUiButton>

      <div class="opacity-0 overflow-hidden h-[0] transition-all ml-2 flex flex-col w-[250px]"
           :class="{'h-full opacity-100 overflow-visible' : isShowNewTypeBlock}">
        <TypeConfigForm @newTypeCreated="onSaveNewType"/>
      </div>

      <div class="mt-3 ml-5 flex flex-col">
        <NuxtLink v-for="type in types" :key="type.id" :to="'/admin/service/' + type.id + '?t=types'">-
          {{ type.name || "" }}
        </NuxtLink>
      </div>
    </div>

    <p class="font-medium text-xl">Categories</p>

    <div class="mt-3">
      <UiUiButton
          @click="onToggleNewCategoryBlock"
          styles="success"
          size="sm"
      >
        +
      </UiUiButton>

      <div class="opacity-0 overflow-hidden h-[0] transition-all ml-2 flex flex-col w-[250px]"
           :class="{'h-full opacity-100 overflow-visible' : isShowNewCategoryBlock}">
        <CategoryConfigForm @newCategoryCreated="onSaveNewCategory"/>
      </div>

      <div class="mt-3 ml-5 flex flex-col">
        <NuxtLink v-for="category in categories" :key="category.id"
                  :to="'/admin/service/' + category.id + '?t=categories'">- {{ category.name || "" }}
        </NuxtLink>
      </div>
    </div>

    <p class="font-medium text-xl mt-5">Services</p>

    <div class="mt-3">
      <UiUiButton
          @click="onToggleNewServiceBlock"
          styles="success"
          size="sm"
      >
        +
      </UiUiButton>

      <div class="opacity-0 overflow-hidden h-[0] transition-all ml-2 flex flex-col w-[250px]"
           :class="{'h-full opacity-100 overflow-visible' : isShowNewServiceBlock}">
        <ServiceConfigForm :types="types" :categories="categories" @newServiceCreated="onSaveNewService"/>
      </div>

      <div class="mt-3 ml-5 flex flex-col">
        <NuxtLink v-for="service in services" :key="service.id" :to="'/admin/service/' + service.id + '?t=services'">-
          {{ service.name || "" }}
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CategoryConfigForm from "~/components/admin/categoryConfigForm/CategoryConfigForm.vue";
import TypeConfigForm from "~/components/admin/typeConfigForm/TypeConfigForm.vue";
import ServiceConfigForm from "~/components/admin/serviceConfigForm/ServiceConfigForm.vue";

definePageMeta({
  layout: "admin-default"
})

const {$store} = useNuxtApp()

$store.dispatch("A_SET_TYPES")
$store.dispatch("A_SET_CATEGORIES")
$store.dispatch("A_SET_SERVICES")

let types = computed(() => $store.getters.getServicesTypes)
let categories = computed(() => $store.getters.getServicesCategories)
let services = computed(() => $store.getters.getServicesData)

let isShowNewServiceBlock = ref<boolean>(false)
let isShowNewCategoryBlock = ref<boolean>(false)
let isShowNewTypeBlock = ref<boolean>(false)


const onToggleNewTypeBlock = () => isShowNewTypeBlock.value = !isShowNewTypeBlock.value
const onToggleNewCategoryBlock = () => isShowNewCategoryBlock.value = !isShowNewCategoryBlock.value
const onToggleNewServiceBlock = () => isShowNewServiceBlock.value = !isShowNewServiceBlock.value


const onSaveNewType = (res: boolean): void => {
  if (res) {
    isShowNewTypeBlock.value = false
    onSetTypesData()
  }
}

const onSaveNewCategory = (res: boolean): void => {
  if (res) {
    isShowNewCategoryBlock.value = false
    onSetCategoriesData()
  }
}

const onSaveNewService = (res: boolean): void => {
  if (res) {
    isShowNewServiceBlock.value = false
    onSetServicesData()
  }
}


</script>

<style scoped>

</style>