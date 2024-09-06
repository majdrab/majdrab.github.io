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
    <nav class="navigation txt-md">
      <RouterLink to="/" target="_self"><span class="bg-underline">Home</span></RouterLink>
      <RouterLink to="#about" target="_self"><span class="bg-underline">About</span></RouterLink>
      <RouterLink to="#projects" target="_self"><span class="bg-underline">Projects</span></RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply bg-primary/80 fixed top-2 left-2 z-40 rounded;
}
.navigation {
  @apply flex flex-col gap-4 py-5 px-4 text-green-400 uppercase;
}
</style>
