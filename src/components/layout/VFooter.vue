<script setup>
// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <footer class="footer">
    <BaseContainer innerClass="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <p class="flex text-secondary">to je footer</p>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-primary;
}
</style>
