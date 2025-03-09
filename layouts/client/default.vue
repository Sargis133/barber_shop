<template>
  <div>
    <ClientOnly>
      <div class="fixed right-[5%] top-2 z-[100]">
        <Switch/>
      </div>
      <div class="bg-[url('/images/client-bg-cover.jpeg')] bg-[length:200px] min-h-[100vh] pb-2">
        <ClientHeader/>
        <NuxtPage/>
      </div>
      <ClientFooter/>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>

