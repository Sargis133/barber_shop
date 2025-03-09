<template>
  <div class="bg-amber-600 w-full h-full flex flex-col items-center">
    <NuxtLink to="/" class="mt-4">
      <img src="~/assets/images/icons/logo.webp" alt="logo">
    </NuxtLink>

    <div class="flex flex-col gap-y-2 font-medium text-xl text-white w-full px-5 mt-6">
      <NuxtLink to="/" class="hover:ml-1 transition-all">
        Main
      </NuxtLink>
      <NuxtLink to="/admin/services" class="hover:ml-1 transition-all">
        Services
      </NuxtLink>
      <div>
        <p @click="() => isShowPagesDropdown = !isShowPagesDropdown" class="cursor-pointer flex justify-between items-center transition-all hover:opacity-50">
          <span>Pages</span>
          <Icons icon-name="arrow-bottom" :icon-styles="`fill-white w-[20px] h-[20px] transition-all ${isShowPagesDropdown ? 'rotate-180' : ''}`"/>
        </p>
        <div :class="isShowPagesDropdown ? 'max-h-[150px] overflow-auto ml-2 mt-2' : 'max-h-0 overflow-hidden'"
             class="transition-all dropdown-scroll flex flex-col">
          <NuxtLink to="/admin/pages/about" class="hover:ml-1 transition-all text-lg">
            About Us
          </NuxtLink>
          <NuxtLink to="/admin/pages/contact" class="hover:ml-1 transition-all text-lg">
            Contact
          </NuxtLink>
          <NuxtLink to="/admin/pages/news" class="hover:ml-1 transition-all text-lg">
            News
          </NuxtLink>
          <NuxtLink to="/admin/pages/shop" class="hover:ml-1 transition-all text-lg">
            Shop
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/admin/news" class="hover:ml-1 transition-all">News</NuxtLink>
      <NuxtLink to="/admin/shop" class="hover:ml-1 transition-all">Shop</NuxtLink>

    </div>
  </div>
</template>

<script setup lang="ts">

let isShowPagesDropdown = ref<boolean>(false)



</script>

<style scoped>
.dropdown-scroll::-webkit-scrollbar {
  width: 0;
}
</style>