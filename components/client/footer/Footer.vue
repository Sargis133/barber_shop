<template>
  <footer class="bg-black pt-4 pb-4 px-6 ">
    <div class="flex justify-between items-center container">
      <NuxtLink to="/client" class="group">
        <img src="/assets/images/icons/logo.webp" alt="logo" class="w-[50px] group-hover:scale-110 transition-all">
      </NuxtLink>

      <nav class="grid grid-cols-2 sm:grid-cols-3 text-amber-700 [&>a]:text-[14px] [&>a]:transition-all [&>a:hover]:text-gray-400 gap-x-10 gap-y-4">
        <NuxtLink to="/client">Home</NuxtLink>
        <NuxtLink to="/client/services">Services</NuxtLink>
        <NuxtLink to="/client/aboutUs">About Us</NuxtLink>
        <NuxtLink to="/client/news">News</NuxtLink>
        <NuxtLink to="/client/shop">Shop</NuxtLink>
        <NuxtLink to="/client">Terms of Use</NuxtLink>
      </nav>

      <div></div>

    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>