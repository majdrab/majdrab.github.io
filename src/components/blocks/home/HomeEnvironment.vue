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
  <BaseContainer isFull class="home-environment">
    <SHeader />
    <SHeaderLeft />
    <SHeaderRight />
    <SSideLeft />
    <SSideRight />
    <SFooter />
    <SFooterLeft />
    <SFooterRight />
  </BaseContainer>
</template>

<style scoped>
.home-environment {
  @apply absolute inset-0 overflow-y-hidden z-[1] select-none pointer-events-none;
}
</style>
