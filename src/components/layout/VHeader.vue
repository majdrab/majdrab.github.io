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
    <BaseContainer innerClass="ena dva tri">
      <p class="flex text-secondary">to je header</p>
      <nav class="text-orange">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header {
  @apply bg-primary;
}
</style>
