<script setup>
// import { ref, onMounted, onUnmounted } from "vue";
// import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <!-- <div ref="viewLoader" class="loader v-visible transition-all">
    <div class="loader__box"></div>
  </div> -->
  <div ref="pageContent" class="projects">
    <BaseContainer>
      <h1 class="">Animations Course</h1>
    </BaseContainer>
  </div>
</template>

<style scoped>
img {
  display: block;
}
.loader {
  @apply fixed inset-0 z-10 bg-primary grid place-content-center v-visible;
  .loader__box {
    border: 4px solid theme("colors.secondary.DEFAULT");
    border-left-color: transparent;
    border-right-color: transparent;
    @apply rounded-[50%] w-10 h-10;
    animation: 0.8s linear infinite breathe;
  }
}
.e4 {
  --def-transition-duration: .2s;
  @apply bg-gray-dark h-[50vh] pt-12;
  
  .e4__header {
    @apply flex justify-between items-center w-[90%] mx-auto;
  }
  nav {
    ul {
      @apply list-none flex gap-12;
      a {
        @apply text-gray-200 inline-block py-6;
        transition: color var(--def-transition-duration) ease-in-out;
        &:hover {
          @apply text-gray-100;
        }
      }
      .has-submenu {
        @apply relative flex gap-2 items-center justify-start;

        ul {
          @apply absolute top-[100%] -left-8 bg-gray rounded-lg p-2 block opacity-0 pointer-events-none invisible select-none -translate-x-4;
          transition: all var(--def-transition-duration) ease-in-out;
          a {
            @apply flex justify-between items-center p-4 min-w-[15rem] rounded-lg;
            transition: all var(--def-transition-duration) ease-in-out;
            &::after {
              content: url('../assets/animationcourse/icons/icon-arrow-right.svg');
              @apply h-[17px] opacity-0 -translate-x-8;
              transition: all var(--def-transition-duration) ease-in-out;
            }
            &:hover {
              @apply bg-gray-400 py-4 px-6;
              &::after {
                @apply opacity-100 translate-x-0;
              }
            }
          }
        }
        &::after {
          content: url('../assets/animationcourse/icons/icon-arrow-down.svg');
          @apply opacity-60 h-[25px];
          transition: opacity var(--def-transition-duration) ease-in-out;
        }
        &:hover {
          ul {
            @apply opacity-100 visible pointer-events-auto select-auto translate-x-0;
          }
          &::after {
            opacity: 1;
          }
          > a {
            @apply text-gray-100;
          }
        }
      }
    }
  }
  button {
    appearance: none;
    border: 1px solid #9E70EB;
    color: #9E70EB;
    background-color: transparent;
    border-radius: 10rem;
    padding: .75rem 1.5rem;
    cursor: pointer;
  }
}
.e7 {
  @apply flex items-center justify-center text-center;
  .menu-dice-svg {
    /* transform: rotate(-120deg); */
    animation: 5s linear infinite breathe;
    @apply w-[100px];
    /* position: absolute; */
    .menu-dice-svg__secondary {
      @apply fill-secondary opacity-80;
      transition: opacity 0.3s;
    }
    .menu-dice-svg__primary {
      @apply fill-primary opacity-0;
      transition: opacity 0.3s;
    }
  }
}
.e8 {
  @apply grid grid-cols-4 gap-6;
}
@keyframes breathe {
  100% {
    transform: rotate(360deg);
    /* transform: rotate(-120deg); */
  }
}
</style>
