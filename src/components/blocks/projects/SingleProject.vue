<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ""
  },
  logo: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <component :is="link ? 'a' : 'div'" :href="link" target="_blank" :class="['single-project', {'single-project--link' : link}]" :title="name">
    <img :src="image" alt="project thumbnail photo" class="absolute inset-0 object-cover h-full w-full opacity-20 pointer-events-none v-transition">
    <div class="flex items-center justify-center relative w-full h-full">
      <img :src="logo" alt="logo" class="w-[70%] v-transition">
    </div>
    <div class="single-project__bottom-line absolute bottom-0 left-0 bg-green-200 h-1 w-0 v-transition"></div>
  </component>
</template>

<style scoped>
.single-project {
  @apply relative bg-gray-100 overflow-hidden transition-all aspect-[3/2];
  &.single-project--link:hover {
    > img {
      @apply scale-110 opacity-80;
    }
    > div > img {
      @apply scale-75 opacity-0 -translate-y-4;
    }
    .single-project__bottom-line {
      @apply w-full;
    }
  }
}
</style>
