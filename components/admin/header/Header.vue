<template>
  <header class="flex justify-between items-center shadow px-6 pt-4 max-md:pt-7">
    <div class="bg-amber-600 fixed left-0 top-0 z-50"
         :class="isShowMenu ? 'overflow-auto w-full h-[100vh] p-4' : 'overflow-hidden w-0 h-0'">
      <UiUiButton styles="empty" class="text-white text-xl float-right" @click="onHideMenuFunc">X</UiUiButton>
      <NuxtLink to="/admin/">
        <img src="/assets/images/icons/logo.webp" alt="logo">
      </NuxtLink>
      <div class="mt-4 ml-4 flex flex-col gap-y-1 text-[17px] text-white">
        <NuxtLink to="/admin/">Main</NuxtLink>
        <NuxtLink to="/admin/services">Services</NuxtLink>
        <NuxtLink @click="onTogglePagesMenu">Pages</NuxtLink>
        <div :class="isShowPagesDropdown ? 'max-h-[150px] overflow-auto ml-2 mt-2' : 'max-h-0 overflow-hidden'"
             class="transition-all dropdown-scroll flex flex-col">
          <NuxtLink to="/admin/pages/about">About Us</NuxtLink>
          <NuxtLink to="/admin/pages/contact">Contact</NuxtLink>
          <NuxtLink to="/admin/pages/news">News</NuxtLink>
          <NuxtLink to="/admin/pages/shop">Shop</NuxtLink>
        </div>
        <NuxtLink to="/admin/news">News</NuxtLink>
        <NuxtLink to="/admin/shop">Shop</NuxtLink>
      </div>
    </div>

    <div class="flex items-center">
      <UiUiButton styles="empty" class="flex-col gap-y-1 hidden max-md:flex" @click="onShowMenuFunc">
        <p class="w-[12px] h-[2px] bg-black"></p>
        <p class="w-[12px] h-[2px] bg-black"></p>
        <p class="w-[12px] h-[2px] bg-black"></p>
      </UiUiButton>
      <img src="~/assets/images/icons/x1873132-1972677953.png" alt="user-icon" class="w-[50px] rounded-full">
      <p class="ml-2 2xl:text-2xl">{{ adminData.name }}</p>
    </div>

    <UiUiButton styles="empty" @click="adminLogout">
      <Icons icon-name="logout" icon-styles="w-[1.5rem] h-[1.5rem]"/>
    </UiUiButton>
  </header>
</template>

<script setup lang="ts">

const {$store} = useNuxtApp()
const route = useRoute()

let isShowMenu = ref<boolean>(false)
let isShowPagesDropdown = ref<boolean>(false)

const adminCookie = useCookie("admin")
const adminData = ref(adminCookie.value)

const adminLogout = (): void => {
  $store.dispatch("A_ADMIN_LOGOUT")
  navigateTo("/admin/login")
}

watch(() => route.path, () => {
  isShowMenu.value = false
})

const onShowMenuFunc = (): void => isShowMenu.value = true
const onTogglePagesMenu = (): void => isShowPagesDropdown.value = !isShowPagesDropdown.value
const onHideMenuFunc = (): void => isShowMenu.value = false

</script>

<style scoped>

</style>