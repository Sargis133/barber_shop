<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="typeImageInput" class="text-sm font-bold block mb-1">Cover Image Url</label>
    <UiUiInput v-model="newTypeData.image" id="typeImageInput" type="text" placeholder="Image Url" size="md"/>

    <label for="typeNameInput" class="text-sm font-bold block mt-2 mb-1">Type Name</label>
    <UiUiInput v-model="newTypeData.name" id="typeNameInput" type="text" placeholder="Name" size="md"/>

    <label for="typeDescriptionInput" class="text-sm font-bold block mt-2 mb-1">Type Description</label>
    <UiUiTextarea v-model="newTypeData.description" id="typeDescriptionInput" placeholder="Description"/>


    <div class="mt-2 flex gap-x-1">
      <UiUiButton
          @click="onSaveNewType">
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

import type {I_ChangeTypeForm, I_TypeConfigForm} from "~/components/admin/typeConfigForm/models/interfaces";

const props = defineProps<{
  item?: I_TypeConfigForm
}>()

const emits = defineEmits<{
  (e: 'newTypeCreated', value: boolean): void
}>()

const {$store} = useNuxtApp()


let isShowLoader = ref<boolean>(false)

const newTypeData = ref<I_TypeConfigForm>({
  image: "",
  name: "",
  description: ""
})

watch(() => props.item, (newItem: I_TypeConfigForm) => {
  if (newItem) {
    newTypeData.value.image = newItem.image || ""
    newTypeData.value.name = newItem.name || ""
    newTypeData.value.description = newItem.description || ""
  }
}, {immediate: true})


const onSaveNewType = (): void => {
  isShowLoader.value = true

  if (props.item) {
    const data: I_ChangeTypeForm = {
      id: props.item.id,
      data: newTypeData.value
    }
    const changedTypeData: Promise<boolean> = $store.dispatch("A_CHANGE_TYPE_DATA", data)
    changedTypeData.then(res => {
      if (res) {
        console.log('success')
        isShowLoader.value = false
      }
    })
  } else {
    const addNewType: Promise<boolean> = $store.dispatch("A_SET_NEW_TYPE", newTypeData.value)
    addNewType.then(res => {
      if (res) {
        emits("newTypeCreated", true)

        for (let key in newTypeData.value) {
          newTypeData.value[key] = ""
        }
        isShowLoader.value = false
      }
    })
  }
}

const onDeleteItem = (): void => {
  const deleteType: Promise<boolean> = $store.dispatch("A_DELETE_TYPE", props.item.id)
  deleteType.then(res => res ? navigateTo("/admin/services") : "")
}


</script>

<style scoped>

</style>