<script setup>
// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <header class="header">
    <BaseContainer innerClass="">
      <nav class="navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header {
  @apply bg-primary flex-none;
}
.navigation {
  @apply flex gap-2 text-secondary uppercase;
}
</style>
