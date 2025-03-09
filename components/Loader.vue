<template>
  <div class="fixed left-[50%] top-0 translate-x-[-50%] z-50 flex items-center justify-center w-full h-[100vh] bg-gray-700/50">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #e1ce00;
  animation: l15 1s infinite linear;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}
.loader::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l15{
  100%{transform: rotate(1turn)}
}
</style>