<script setup>
import { ref } from "vue";
// defineProps({
//   isFull: {
//     type: Boolean,
//     required: false
//   }
// })
const buttonMenu = ref(null)
// onMounted(() => {
//   buttonMenu.value.
// })
const buttonMenuToggle = () => {
  if (buttonMenu.value) {
    buttonMenu.value.classList.toggle('active')
  }
}

</script>

<template>
  <header class="header">
    <BaseContainer innerClass="flex items-center justify-between">
      <nav class="navigation">
        <RouterLink to="/" target="_self">Home</RouterLink>
        <RouterLink to="#about" target="_self">About</RouterLink>
        <RouterLink to="#projects" target="_self">Projects</RouterLink>
        <!-- <RouterLink to="/animations">Animations</RouterLink> -->
      </nav>
      <div class="">
        <button ref="buttonMenu" class="button-menu" @click="buttonMenuToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header {
  @apply bg-primary flex-none;
}
.navigation {
  @apply flex items-center gap-2 text-secondary uppercase h-[68px];
}
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
