<script setup>
import { ref } from "vue";

const buttonMenu = ref(null)
const buttonMenuToggle = () => {
  if (buttonMenu.value) {
    buttonMenu.value.classList.toggle('active')
  }
}

</script>

<template>
<button ref="buttonMenu" class="button-menu" @click="buttonMenuToggle">
  <span></span>
  <span></span>
  <span></span>
</button>
</template>

<style scoped>
.button-menu {
  @apply flex flex-col items-center justify-center gap-[5px] w-10 h-10;
  > span {
    @apply w-[25px] h-[2px] bg-secondary rounded-sm ;
    transition: all 0.3s ease-in-out;
  }
  &:not(.active):hover {
    > span {
      @apply bg-gray-100;
    }
    > span:nth-of-type(2) {
      @apply w-5;
    }
  }
  &.active {
    > span:nth-of-type(1) {
      transform: translateY(7px) rotate(45deg);
    }
    > span:nth-of-type(2) {
      opacity: 0;
    }
    > span:nth-of-type(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
    &:hover {
      > span {
        @apply bg-gray-100;
      }
    }
  }
}
</style>
