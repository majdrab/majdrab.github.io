<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from "vue";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

import { gsap } from "gsap";

const isVisible = ref(true);

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      isVisible.value = false;
    }
  });

  // GSAP animations
  tl.to(".opening-animation__svg-text", {
      strokeDashoffset: 0,
      strokeDasharray: "32% 0",
      duration: 4,
      ease: "power2.inOut",
    })
    .to(".opening-animation__svg-text", {
      fill: theme.colors.green.DEFAULT,
      duration: 1,
      stroke: "transparent"
    }, "-=1")
    .to(".opening-animation", {
      backgroundColor: theme.colors.primary.transparent,
      duration: 1,
      ease: "power1.inOut"
    }, "=0.5")
    .to(".opening-animation", {
      transform: "translateY(-100vh)",
      duration: 0.5,
      ease: "back.in"
    });
});
</script>

<template>
  <div class="opening-animation" v-if="isVisible">
    <svg class="opening-animation__svg" viewBox="0 0 700 200">
      <text class="opening-animation__svg-text" x="50%" y="50%" dy="1rem" text-anchor="middle">
        Maj Drab
      </text>
    </svg>
  </div>
</template>

<style scoped>
.opening-animation {
  @apply fixed inset-0 grid place-content-center bg-primary z-50 overflow-hidden;
  svg {
    @apply w-[700px] max-w-[80vw];
    text {
      @apply stroke-[2px] stroke-animate stroke-green-300 fill-transparent text-[10rem] font-bold tracking-tighter;
    }
  }
}
</style>
