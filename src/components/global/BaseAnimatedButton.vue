<script setup>
import { ref, onMounted } from "vue";

const baseAnimatedButton = ref(null)
const animatedEllipse = ref(null)

const animateEnter = (e) => {
  if(animatedEllipse.value) {
    animatedEllipse.value.style.left = `${e.offsetX}px`
    animatedEllipse.value.style.top = `${e.offsetY}px`
    if( animatedEllipse.value.classList.contains( 'deplode' ))
      animatedEllipse.value.classList.remove( 'deplode' )
    animatedEllipse.value.classList.add( 'explode' )
  }
}
const animateLeave = (e) => {
  if(animatedEllipse.value) {
    animatedEllipse.value.style.left = `${e.offsetX}px`
    animatedEllipse.value.style.top = `${e.offsetY}px`
    if( animatedEllipse.value.classList.contains( 'explode' ))
      animatedEllipse.value.classList.remove( 'explode' )
    animatedEllipse.value.classList.add( 'deplode' )
  }
}

onMounted(() => {
  if(!baseAnimatedButton.value) console.log('there is no baseAnimatedButton')
})
// Compiler macros, such as defineExpose, don't need to be imported
defineExpose({
  baseAnimatedButton,
})
</script>

<template>
  <button 
    ref="baseAnimatedButton" 
    class="btn-animated" 
    @mouseenter="animateEnter" 
    @mouseleave="animateLeave"
  >
    <div>
      <div ref="animatedEllipse" class="animated-ellipse bg-green-400/70">
        <div class="bg-green-400"></div>
      </div>
      <span class="relative text-gray-200"><slot></slot></span>
    </div>
  </button>
</template>

<style scoped>
.btn-animated {
  @apply btn relative bg-green;
}
.animated-ellipse {
  position: absolute;
  width: 0%;
  height: 0%;
  padding-bottom: 0%;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 85%;
    border-radius: 50%;
  }

  &.explode {
    animation: explode 0.5s ease-in-out forwards;
  }

  &.deplode {
    animation: deplode 0.5s ease-in-out forwards;
  }
}
@keyframes explode {
  0% {
    width: 0%;
    padding-bottom: 0%;
  }
  100% {
    width: 250%;
    padding-bottom: 250%;
  }
}
@keyframes deplode {
  0% {
    width: 250%;
    padding-bottom: 250%;
  }
  100% {
    width: 0%;
    padding-bottom: 0%;
  }
}
</style>
