<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button class="single-project">
    <h4 class=" pb-1 text-green border-b-2 border-green">{{ name }}</h4>
    <div class="pb-3 bg-primary-100/60">
      <p>{{ description }}</p>
      <div></div>
    </div>
  </button>
</template>

<style scoped>
.single-project {
  @apply relative pt-16 text-left bg-gray-100 rounded overflow-hidden transition-all;
  > * {
    @apply px-4;
  }
  &:hover {
    @apply rounded-lg;
  }
}
</style>
