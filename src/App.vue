<script setup>
import { RouterLink, RouterView } from 'vue-router'
import VHeader from './components/layout/VHeader.vue';
import VFooter from './components/layout/VFooter.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <VHeader />
  <main>
    <RouterView />
  </main>
  <VFooter />
</template>

<style scoped>

</style>
