<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
defineProps({
  isFull: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div class="single-project">
    <h1 class="text-gray-100">Projects</h1>
    <BaseDivider />
    <p class="text-gray-200 pb-6">Nek uvodni tekst</p>
    <h2 class="text-gray-100">Humanfrog</h2>
    <BaseDivider />
    <div class="grid grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8"></div>
  </div>
</template>

<style scoped>
.single-project {
  @apply pt-16 pb-14 relative bg-gray-100;
}
</style>
