<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home" id="home">
  <BaseContainer class="h-full" innerClass="grid place-content-center">
    <svg viewBox="0 0 700 200"  class="home__animation">
      <text x="50%" y="50%" dy="1rem" text-anchor="middle" class="home__animation-text">
        Maj Drab
      </text>
    </svg>
  </BaseContainer>
    
  </div>
</template>

<style scoped>
.home {
  @apply pt-16 pb-14 bg-transparent min-h-screen border-orange border-4;
  animation: 8s remove-animation;
  .home__animation {
    @apply w-[700px];
    .home__animation-text {
      @apply stroke-[2px] fill-secondary text-[10rem] font-bold tracking-tighter;
      animation: 5s  animate-stroke;
    }
  }
}
@keyframes remove-animation {
  0% {
    background-color: theme('colors.primary.DEFAULT');
  }
  70% {
    background-color: theme('colors.primary.DEFAULT');
  }
  100% {
    background-color: transparent;
  }
}
@keyframes animate-stroke {
  0% {
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 32%;
    fill: transparent;
    stroke: theme('colors.secondary.DEFAULT');
  }
  80% {
    fill: transparent;
  }
  90% {
    stroke-dashoffset: 0;
    stroke-dasharray: 32% 0;
    fill: theme('colors.secondary.DEFAULT');
    stroke: theme('colors.secondary.DEFAULT');
  }
  100% {
    stroke: transparent;
  }
}
</style>
