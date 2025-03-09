<template>
  <div class="container">
    <ClientOnly>
      <div class="fixed right-[5%] top-2 z-[30]">
        <Switch/>
      </div>
      <div class="flex">
        <div class="w-[300px] fixed h-[100vh] max-md:hidden">
          <AdminLeftMenu/>
        </div>
        <div class="w-[90%] ml-[300px] max-md:ml-[0] max-md:w-full flex flex-col gap-y-4">
          <div class="max-md:fixed max-md:left-0 max-md:z-50 max-md:top-0 max-md:w-full max-md:bg-white">
            <AdminHeader/>
          </div>
          <div class="p-2 max-md:mt-[70px]">
            <NuxtPage/>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

