<script setup>
import HomeEnvironment0Grass from '../../svgs/home/HomeEnvironment0Grass.vue';
import HomeEnvironment0Tree from '../../svgs/home/HomeEnvironment0Tree.vue';
import HomeEnvironment1 from '../../svgs/home/HomeEnvironment1.vue';
import HomeEnvironment2 from '../../svgs/home/HomeEnvironment2.vue';
import HomeEnvironment3 from '../../svgs/home/HomeEnvironment3.vue';
import HomeEnvironment4 from '../../svgs/home/HomeEnvironment4.vue';

// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <BaseContainer isFull class="home-environment">
    <HomeEnvironment4 />
    <HomeEnvironment3 />
    <HomeEnvironment2 />
    <HomeEnvironment1 />
    <HomeEnvironment0Tree />
    <HomeEnvironment0Grass />
    
    
  </BaseContainer>
</template>

<style scoped>
.home-environment {
  @apply relative select-none pointer-events-none overflow-hidden;
}
</style>
