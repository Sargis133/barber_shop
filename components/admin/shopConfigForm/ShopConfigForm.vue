<template>
  <div>
    <Loader v-if="isShowLoader"/>

    <label for="shopTitleInput" class="font-bold text-sm">Title</label>
    <UiUiInput v-model="productData.title" id="shopTitleInput" type="text" placeholder="Title" size="md"/>

    <label for="shopDescriptionInput" class="font-bold text-sm">Description</label>
    <UiUiTextarea v-model="productData.description" id="shopDescriptionInput" type="text" placeholder="Description"/>

    <label for="shopImageInput" class="font-bold text-sm">Image</label>
    <UiUiInput v-model="productData.image" id="shopImageInput" type="text" placeholder="Image" size="md"/>

    <label for="shopPriceInput" class="font-bold text-sm">Price</label>
    <UiUiInput v-model="productData.price" id="shopPriceInput" type="text" placeholder="Price" size="md"/>

    <div class="flex gap-x-1 mt-1">
      <UiUiButton @click="onSaveNewProduct">
        Save
      </UiUiButton>

      <UiUiButton v-if="props.item"
                  @click="onDeleteProduct" styles="error">
        Delete
      </UiUiButton>
    </div>
  </div>
</template>

<script setup lang="ts">


import type {I_ChangeShopForm, I_ShopConfigForm} from "~/components/admin/shopConfigForm/models/interfaces";

const { $store } = useNuxtApp()

const props = defineProps<{
  item?: I_ShopConfigForm
}>()

const emits = defineEmits<{
  (e: 'newItemCreated', value: boolean): void
}>()

let isShowLoader = ref<boolean>(false)

const productData = ref<I_ShopConfigForm>({
  title: "",
  description: "",
  image: "",
  price: ""
})

watch(() => props.item, (newV: I_ShopConfigForm) => {
  if(newV) {
    for(let key in newV) {
      productData.value[key] = newV[key]
    }
  }
})


const onSaveNewProduct = (): void => {
  if(props.item) {
    const data: I_ChangeShopForm = {
      id: props.item.id,
      data: productData.value
    }
    const changeProductData: Promise<boolean> = $store.dispatch("A_CHANGE_PRODUCT_DATA", data)
    changeProductData.then(res => {
      if (res) {
        console.log('success')
        isShowLoader.value = false
      }
    })
  } else {
    const addProduct: Promise<boolean> = $store.dispatch("A_SET_NEW_PRODUCT", productData.value)
    addProduct.then(res => {
      if (res) {
        emits('newItemCreated', true)

        for (let key in productData.value) {
          productData.value[key] = ""
        }

        isShowLoader.value = false
      }
    })
  }
}

const onDeleteProduct = (): void => {
  const deleteProduct: Promise<boolean> = $store.dispatch("A_DELETE_PRODUCT", props.item.id)
  deleteProduct.then(res => res ? navigateTo("/admin/shop") : "")
}

</script>

<style scoped>

</style>