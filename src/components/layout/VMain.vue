<script setup>
import SHeader from '../svgs/SHeader.vue';
import SFooter from '../svgs/SFooter.vue';

// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <main class="main">
    <BaseContainer isFull class="environment top-0">
      <SHeader />
    </BaseContainer>
    <slot></slot>
    <BaseContainer isFull class="environment bottom-0">
      <SFooter />
    </BaseContainer>
  </main>
</template>

<style scoped>
.main {
  @apply flex-1 pt-16 pb-14 relative;
}
.environment {
  @apply absolute select-none pointer-events-none;
}
</style>
