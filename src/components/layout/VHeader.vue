<script setup>
// import { ref } from "vue";
// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <header class="header">
    <nav class="navigation">
      <RouterLink to="/" target="_self">Home</RouterLink>
      <RouterLink to="#about" target="_self">About</RouterLink>
      <RouterLink to="#projects" target="_self">Projects</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply bg-primary fixed top-0 left-0 z-50;
}
.navigation {
  @apply flex items-center gap-2 text-secondary uppercase h-[68px];
}
</style>
