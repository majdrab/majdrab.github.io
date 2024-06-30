<script setup>
import HomeEnvironment from '../components/blocks/home/HomeEnvironment.vue'
</script>

<template>
  <section id="home">
    <HomeEnvironment />
    <BaseContainer class="" innerClass="">
      <h1 class="text-primary">I'm a junior front-end web developer and designer. Welcome to my portfolio website!</h1>
    </BaseContainer>
  </section>
</template>

<style scoped>
#home {
  @apply pt-16 pb-14 relative min-h-screen border-orange border-4;
}
</style>
