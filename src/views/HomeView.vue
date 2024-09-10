<script setup>
import HomeEnvironment from '../components/blocks/home/HomeEnvironment.vue'

import { onMounted } from "vue";

import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline({});

  // GSAP animations
  tl.to(".home-animation__name", {
    transform: "translateY(-50px)",
      duration: 0.5,
      ease: "back.out"
    }, "6.5");
});
</script>

<template>
  <section id="home">
    <HomeEnvironment />
    <div class="home-animation">
      <h1 class="home-animation__name">Maj Drab</h1>
    </div>
  </section>
</template>

<style scoped>
#home {
  @apply flex relative min-h-screen;
  .home-animation {
    @apply absolute inset-0 grid place-content-center z-10;
    .home-animation__name {
      @apply text-green -translate-y-[100vh] text-[50px];
    }
  }
}
</style>
