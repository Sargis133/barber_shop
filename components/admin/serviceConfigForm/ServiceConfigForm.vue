<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <p class="mt-2 text-sm font-bold">For type</p>

    <UiUiDropdown @change="onChangeType" v-model="newServiceData.type" :options="typeDropdownOptions">
      <option value="0" selected>Any</option>
    </UiUiDropdown>

    <p class="mt-2 text-sm font-bold">For category</p>

    <UiUiDropdown @change="onChangeCategory" v-model="newServiceData.category" :options="categoryDropdownOptions">
      <option value="0" selected>Any</option>
    </UiUiDropdown>

    <label for="serviceImageInput" class="text-sm font-bold block mt-2">Cover Image</label>
    <UiUiInput v-model="newServiceData.image" size="md" id="serviceImageInput" type="text" placeholder="Image Url"/>

    <label for="serviceNameInput" class="text-sm font-bold block mt-2">Name</label>
    <UiUiInput v-model="newServiceData.name" size="md" id="serviceNameInput" type="text" placeholder="Name"/>

    <label for="serviceDescriptionInput" class="text-sm font-bold block mt-2">Description</label>
    <UiUiTextarea v-model="newServiceData.description" id="serviceDescriptionInput" placeholder="Description"/>

    <label for="servicePriceInput" class="text-sm font-bold">Price</label>
    <UiUiInput v-model="newServiceData.price" size="md" id="servicePriceInput" type="text" placeholder="Price"/>

    <label for="serviceDiscountInput" class="text-sm font-bold block mt-2">Discount</label>
    <UiUiInput v-model="newServiceData.discount" size="md" id="serviceDiscountInput" type="text"
               placeholder="Discount"/>

    <div class="mt-2 flex gap-x-1">
      <UiUiButton @click="onSaveNewService">
        Save
      </UiUiButton>
      <UiUiButton v-if="props.item"
                  @click="onDeleteItem"
                  styles="error">
        Delete
      </UiUiButton>
    </div>

  </div>
</template>

<script setup lang="ts">

import {formatDropdownOptions} from "~/components/admin/categoryConfigForm/utils/formatDropdownOptions";
import type {I_ChangeServiceForm, I_ServiceConfigForm} from "~/components/admin/serviceConfigForm/models/interfaces";
import type {I_ApiCategoryData, I_ApiTypeData} from "~/models/db/interfaces";
import type {I_CategoryDropdownOptions} from "~/components/admin/categoryConfigForm/models/interfaces";

const props = defineProps<{
  item?: I_ServiceConfigForm
}>()

const emits = defineEmits<{
  (e: "newServiceCreated", value: boolean): void
}>()

const {$store} = useNuxtApp()

let isShowLoader = ref<boolean>(false)

const newServiceData = ref<I_ServiceConfigForm>({
  type: "0",
  category: "0",
  image: "",
  name: "",
  description: "",
  price: "",
  discount: "",
})

$store.dispatch("A_SET_SERVICES")
$store.dispatch("A_SET_TYPES")
$store.dispatch("A_SET_CATEGORIES")

const typesData = computed<I_ApiTypeData[]>(() => $store.getters.getServicesTypes || [])
const categoriesData = computed<I_ApiCategoryData[]>(() => $store.getters.getServicesCategories.filter(category => newServiceData.value.type === "0" ? category : category.type === newServiceData.value.type) || [])

const typeDropdownOptions = computed<I_CategoryDropdownOptions[]>(() => formatDropdownOptions(typesData.value))
const categoryDropdownOptions = computed<I_CategoryDropdownOptions[]>(() => formatDropdownOptions(categoriesData.value))

watch(() => props.item, (newItem: I_ServiceConfigForm) => {
  if (newItem) {
    newServiceData.value.type = newItem.image || ""
    newServiceData.value.type = newItem.type || "0"
    newServiceData.value.category = newItem.category || "0"
    newServiceData.value.name = newItem.name || ""
    newServiceData.value.description = newItem.description || ""
    newServiceData.value.price = newItem.price || ""
    newServiceData.value.image = newItem.image || ""
    newServiceData.value.discount = newItem.discount || ""
  }
}, {immediate: true})


const onChangeType = (e: string): void => {
  newServiceData.type = e
  $store.dispatch("A_SET_CATEGORIES")
}

const onChangeCategory = (e: string): void => newServiceData.category = e

const onSaveNewService = (): void => {
  isShowLoader.value = true

  if (props.item) {
    const data: I_ChangeServiceForm = {
      id: props.item.id,
      data: newServiceData.value
    }
    const changeServiceData: Promise<boolean> = $store.dispatch("A_CHANGE_SERVICE_DATA", data)
    changeServiceData.then(res => {
      if (res) {
        console.log('success')
        isShowLoader.value = false
      }
    })
  } else {
    const addNewService: Promise<boolean> = $store.dispatch("A_SET_NEW_SERVICE", newServiceData.value)
    addNewService.then(res => {
      if (res) {
        emits('newServiceCreated', newServiceData.value)

        for (let key in newServiceData.value) {
          newServiceData.value[key] = ''
        }

        isShowLoader.value = false
      }
    })
  }

}

const onDeleteItem = (): void => {
  const deleteService: Promise<boolean> = $store.dispatch("A_DELETE_SERVICE", props.item.id)
  deleteService.then(res => res ? navigateTo("/admin/services") : "")
}

</script>

<style scoped>

</style>