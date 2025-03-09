<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <p class="font-bold text-sm">For type</p>

    <UiUiDropdown @change="onChangeType" v-model="newCategoryData.type" :options="typeDropdownOptions">
      <option value="0" selected>Any</option>
    </UiUiDropdown>

    <label for="categoryImageInput" class="text-sm font-bold">Cover Image</label>
    <UiUiInput v-model="newCategoryData.image" id="categoryImageInput" type="text" placeholder="Image Url" size="md"/>

    <label for="categoryNameInput" class="text-sm font-bold">Name</label>
    <UiUiInput v-model="newCategoryData.name" id="categoryNameInput" type="text" placeholder="Name" size="md"/>

    <label for="categoryDescriptionInput" class="text-sm font-bold">Description</label>
    <UiUiTextarea v-model="newCategoryData.description" id="categoryDescriptionInput" placeholder="Description"/>

    <div class="flex gap-x-1 mt-1">
      <UiUiButton @click="onSaveNewCategory">
        Save
      </UiUiButton>

      <UiUiButton v-if="props.item"
                  @click="onDeleteItem" styles="error">
        Delete
      </UiUiButton>
    </div>

  </div>
</template>

<script setup lang="ts">
import {formatDropdownOptions} from "~/components/admin/categoryConfigForm/utils/formatDropdownOptions";
import type {
  I_CategoryConfigForm,
  I_CategoryDropdownOptions,
  I_ChangeCategoryForm
} from "~/components/admin/categoryConfigForm/models/interfaces";
import type {I_ApiTypeData} from "~/models/db/interfaces";

const props = defineProps<{
  item?: I_CategoryConfigForm
}>()

const emits = defineEmits<{
  (e: 'newCategoryCreated', value: boolean): void
}>()

let isShowLoader = ref<boolean>(false)

const { $store } = useNuxtApp()

const newCategoryData = ref<I_CategoryConfigForm>({
  image: "",
  type: "0",
  name: "",
  description: ""
})

$store.dispatch("A_SET_TYPES")

const typesData = computed<I_ApiTypeData[]>(() => $store.getters.getServicesTypes || [])

const typeDropdownOptions = computed<I_CategoryDropdownOptions[]>(() => formatDropdownOptions(typesData.value))

watch(() => props.item, (newItem: I_CategoryConfigForm) => {
  if (newItem) {
    newCategoryData.value.image = newItem.image || ""
    newCategoryData.value.type = newItem.type || 0
    newCategoryData.value.name = newItem.name || ""
    newCategoryData.value.description = newItem.description || ""
  }
})


const onChangeType = (e: string): void => newCategoryData.type = e

const onSaveNewCategory = (): void => {
  isShowLoader.value = true

  if (props.item) {
    const data: I_ChangeCategoryForm = {
      id: props.item.id,
      data: newCategoryData.value
    }
    const changeCategoryData: Promise<boolean> = $store.dispatch("A_CHANGE_CATEGORY_DATA", data)
    changeCategoryData.then(res => {
      if (res) {
        console.log('success')
        isShowLoader.value = false
      }
    })
  } else {
    const addNewCategory: Promise<boolean> = $store.dispatch("A_SET_NEW_CATEGORY", newCategoryData.value)
    addNewCategory.then(res => {
      if (res) {
        emits('newCategoryCreated', true)

        for (let key in newCategoryData.value) {
          newCategoryData.value[key] = ""
        }

        isShowLoader.value = false
      }
    })
  }
}

const onDeleteItem = (): void => {
  const deleteCategory: Promise<boolean> = $store.dispatch("A_DELETE_CATEGORY", props.item.id)
  deleteCategory.then(res => res ? navigateTo("/admin/services") : "")

}

</script>

<style scoped>

</style>