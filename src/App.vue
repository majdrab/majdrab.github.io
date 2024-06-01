<script setup>
import { RouterLink, RouterView } from 'vue-router'

import VHeader from './components/layout/VHeader.vue';
import VFooter from './components/layout/VFooter.vue';
</script>

<template>
  <VHeader />
  <RouterView />
  <VFooter />
</template>

<style scoped>
main {
  @apply flex-1 pt-6 pb-10;
}
</style>
