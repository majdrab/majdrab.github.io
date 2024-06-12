<script setup>
import SHeader from '../svgs/SHeader.vue';
import SHeaderLeft from '../svgs/SHeaderLeft.vue';
import SHeaderRight from '../svgs/SHeaderRight.vue';
import SFooter from '../svgs/SFooter.vue';
import SFooterLeft from '../svgs/SFooterLeft.vue';
import SFooterRight from '../svgs/SFooterRight.vue';
import SSideLeft from '../svgs/SSideLeft.vue';
import SSideRight from '../svgs/SSideRight.vue';

// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
</script>

<template>
  <main class="main">
    <BaseContainer isFull class="main__environment top-0 h-full overflow-y-hidden z-[1]">
      <SHeader />
      <SHeaderLeft />
      <SHeaderRight />
      <SSideLeft />
      <SSideRight />
      <SFooter />
      <SFooterLeft />
      <SFooterRight />
    </BaseContainer>
    <slot></slot>
  </main>
</template>

<style scoped>
.main {
  @apply flex-1 items-stretch relative flex;
  .main__environment {
    @apply absolute select-none pointer-events-none;
  }
}


</style>
