<template>
  <p>Admin Page</p>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin-default",
  middleware: "admin-auth"
})

</script>

<style scoped>

</style>