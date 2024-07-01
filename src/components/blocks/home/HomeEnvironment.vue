<script setup>
import Home0Grass from '../../svgs/home/Home0Grass.vue';
// import Home0Tree from '../../svgs/home/Home0Tree.svg';
// import Home1 from '../../svgs/home/Home1.svg';
// import Home2 from '../../svgs/home/Home2.svg';
// import Home3 from '../../svgs/home/Home3.svg';
// import Home4 from '../../svgs/home/Home4.svg';
// import SFooter from '../../svgs/SFooter.vue'

// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <BaseContainer isFull class="home-environment">
    <Home0Grass />
    <!-- <Home0Tree /> -->
    <!-- <Home1 /> -->
    <!-- <Home2 /> -->
    <!-- <Home3 /> -->
    <!-- <Home4 /> -->
    <!-- <SFooter /> -->
  </BaseContainer>
</template>

<style scoped>
.home-environment {
  @apply absolute inset-0 overflow-y-hidden z-[1] select-none pointer-events-none;
}
</style>
