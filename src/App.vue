<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="bg-primary">
    <BaseContainer isFull>
      <p class="flex text-secondary">to je header</p>
      <nav class="text-orange">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </BaseContainer>
  </header>
  <main>
    <RouterView />
  </main>

  <footer class="bg-primary">
    <BaseContainer>
      <p class="flex text-secondary">to je footer</p>
      <!-- <nav class="text-orange">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </BaseContainer>
  </footer>
</template>

<style scoped>

</style>
