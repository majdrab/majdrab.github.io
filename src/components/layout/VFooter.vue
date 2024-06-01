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
      <p class="text-gray-200">Copyright © 2024 Maj Drab, All Rights Reserved</p>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-primary flex-none;
}
</style>
