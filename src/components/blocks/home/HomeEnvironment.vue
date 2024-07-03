<script setup>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import HomeEnvironment0Grass from '../../svgs/home/HomeEnvironment0Grass.vue';
import HomeEnvironment0Tree from '../../svgs/home/HomeEnvironment0Tree.vue';
import HomeEnvironment1 from '../../svgs/home/HomeEnvironment1.vue';
import HomeEnvironment2 from '../../svgs/home/HomeEnvironment2.vue';
import HomeEnvironment3 from '../../svgs/home/HomeEnvironment3.vue';
import HomeEnvironment4 from '../../svgs/home/HomeEnvironment4.vue';

const homeEnvironment = ref(null)
const homeEnv0Grass = ref(null)
const homeEnv0Tree = ref(null)
const homeEnv1 = ref(null)
const homeEnv2 = ref(null)
const homeEnv4 = ref(null)
const homeEnv3 = ref(null)



onMounted(() => {
  const hEnvironment = homeEnvironment.value.baseContainer
  const hEnv0Grass = homeEnv0Grass.value.homeSvg0Grass
  const hEnv0Tree = homeEnv0Tree.value.homeSvg0Tree
  const hEnv1 = homeEnv1.value.homeSvg1
  const hEnv2 = homeEnv2.value.homeSvg2
  const hEnv3 = homeEnv3.value.homeSvg3
  const hEnv4 = homeEnv4.value.homeSvg4
  const hEnvArray = [hEnv0Grass, hEnv0Tree, hEnv1, hEnv2, hEnv3, hEnv4]

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hEnvironment,
      start: 'top top',
      scrub: true
    }
  })

  hEnvArray.forEach(svg => {
    const svgSpeed = svg.getAttribute('data-speed')

    tl.to(svg, {
      y: 20 * svgSpeed,
      duration: 2
    }, 0)
  })
  // gsap.set (homeEnv1, {
  //   scale: 0.5
  // })
  // if(homeEnvironment.value) {
    // console.log(homeEnvironment.value)
    // homeEnvironment.value.classList.add('haha')
    // console.log(homeEnvironment.value)
  // }
  
})
</script>

<template>
  <BaseContainer isFull ref="homeEnvironment" class="home-environment">
    <HomeEnvironment4 ref="homeEnv4" data-speed="15" />
    <HomeEnvironment3 ref="homeEnv3" data-speed="10" />
    <HomeEnvironment2 ref="homeEnv2" data-speed="8" />
    <HomeEnvironment1 ref="homeEnv1" data-speed="5" />
    <HomeEnvironment0Tree ref="homeEnv0Tree" data-speed="0.2" />
    <HomeEnvironment0Grass ref="homeEnv0Grass" data-speed="0.2" />
  </BaseContainer>
</template>

<style scoped>
.home-environment {
  @apply relative select-none pointer-events-none overflow-hidden;
}
</style>
