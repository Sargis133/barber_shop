<template>
  <div>
    <p class="font-medium text-xl mt-5">Products</p>

    <div class="mt-3">
      <UiUiButton
          @click="onToggleNewProductBlock"
          styles="success"
          size="sm"
      >
        +
      </UiUiButton>

      <div class="opacity-0 overflow-hidden h-[0] transition-all ml-2 flex flex-col w-[250px]"
           :class="{'h-full opacity-100 overflow-visible' : isShowProductBlock}">
        <ShopConfigForm/>
      </div>

      <div class="mt-3 ml-5 flex flex-col">
        <NuxtLink v-for="product in allProducts" :key="product.id"
                  :to="'/admin/product/' + product.id">- {{ product.title || "" }}
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import ShopConfigForm from "~/components/admin/shopConfigForm/ShopConfigForm.vue";

definePageMeta({
  layout: "admin-default"
})

let isShowProductBlock = ref(false)

const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PRODUCTS")

const allProducts = computed(() => $store.getters.getAllProducts)

const onToggleNewProductBlock = () => isShowProductBlock.value = !isShowProductBlock.value

</script>

<style scoped>

</style>