<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from "vue";

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 7999);
})
</script>

<template>
  <div class="opening-animation" v-if="visible">
    <svg viewBox="0 0 700 200">
      <text x="50%" y="50%" dy="1rem" text-anchor="middle">
        Maj Drab
      </text>
      <text x="50%" y="50%" dy="1rem" text-anchor="middle">
        Maj Drab
      </text>
    </svg>
  </div>
</template>

<style scoped>
.opening-animation {
  @apply fixed inset-0 grid place-content-center bg-transparent z-50 overflow-hidden;
  animation: 8s remove-animation;

  svg {
    @apply w-[700px];
    text {
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
  95% {
    background-color: transparent;
    opacity: 1;
  }
  100% {
    opacity: 0;
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
