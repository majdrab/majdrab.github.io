<script setup>
// import { computed, ref } from "vue";
import { computed, ref, onMounted } from "vue";
import { useResizeObserver } from "@vueuse/core";
import aboutTimelineData from '@/data/aboutTimelineData.json';
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

// console.log(theme.colors.primary.DEFAULT)

const displayId = ref(0)

function onButtonClick(id) {
  setDisplayDirection(id)
  displayId.value = id
  animateButton()
  getLineLeftOffset()
  animateLine()
  
}

// LINE 
const lineLength = ref(0)
aboutTimelineData.forEach(el => {
  lineLength.value = lineLength.value + el.duration
});

const button = ref(null)
const buttonInner = ref(null)
function animateButton() {
  if(button.value && buttonInner.value) {
    gsap.to(buttonInner.value, {backgroundColor: theme.colors.primary.DEFAULT})
    gsap.to(buttonInner.value[displayId.value], {backgroundColor: theme.colors.green[400]})
  }
}
const activeLine = ref(null)
const lineLeftOffset = ref(0)
function getLineLeftOffset() {
  let sumDurationBefore = 0
  aboutTimelineData.forEach(el => {
    if(el.id < displayId.value) {
      sumDurationBefore = sumDurationBefore + el.duration
    }
  });
  lineLeftOffset.value = sumDurationBefore
}
function animateLine() {
  if(activeLine.value) {
    gsap.to(activeLine.value, {
      width: currentDisplay.value.duration/lineLength.value*100 + '%', 
      left: lineLeftOffset.value/lineLength.value*100 + '%'
    })
  }
}

// DISPLAY
const currentDisplay = computed(() => {
  return aboutTimelineData.find(display => display.id === displayId.value);
});

// display transition
const displayDirectionForward = ref(true)

function setDisplayDirection(idValue) {
  if (displayId.value > idValue && displayDirectionForward.value === true) {
    displayDirectionForward.value = false
  } else if (displayId.value < idValue && displayDirectionForward.value === false) {
    displayDirectionForward.value = true
  }
}

// display transiton height
const displayContainer = ref(null);
const displayContent = ref(null);

onMounted(() => {
  // Use useResizeObserver to monitor height changes of the child element
  useResizeObserver(displayContent, (entries) => {
    // Animate the container element's height change using GSAP
    if (displayContainer.value) {
      gsap.to(displayContainer.value, {
        height: entries[0].contentRect.height,
        duration: 0.2,
      });
    }
  });
  getLineLeftOffset()
  animateButton()
  animateLine()
});
</script>

<template>
  <div class="about-timeline">
    <div class="about-timeline__line">
      <div class="relative w-full border-b-[3px] border-gray-200 h-6">
        <div class="absolute bottom-0 w-[2px] h-5 bg-gray-200"><h4 class="text-gray-200 absolute -top-7 -left-6">2022</h4></div>
        <div class="absolute bottom-0 w-[1px] h-4 bg-gray-200" :style="`left: ${6/lineLength*100}%;`"></div>
        <div class="absolute bottom-0 w-[2px] h-5 bg-gray-200" :style="`left: ${12/lineLength*100}%;`"><h4 class="text-gray-200 absolute -top-7 -left-6">2023</h4></div>
        <div class="absolute bottom-0 w-[1px] h-4 bg-gray-200" :style="`left: ${18/lineLength*100}%;`"></div>
        <div class="absolute bottom-0 w-[2px] h-5 bg-gray-200" :style="`left: ${24/lineLength*100}%;`"><h4 class="text-gray-200 absolute -top-7 -left-6">2024</h4></div>
        <div class="absolute bottom-0 w-[1px] h-4 bg-gray-200" :style="`left: ${30/lineLength*100}%;`"></div>
      </div>
      <div ref="activeLine" class="h-[9px] absolute -bottom-[3px] bg-green-400 rounded"></div>
    </div>
    <div class="about-timeline__middle">
      <template v-for="singleTimeline in aboutTimelineData" :key="singleTimeline.id">
        <div class="flex items-center justify-center" :style="'width: ' + singleTimeline.duration/lineLength*100 + '%;'">
          <button ref="button" @click="onButtonClick(singleTimeline.id)" class="flex items-center justify-center h-5 w-5 rounded-full bg-green-400 hover:bg-green-300 transition-colors">
            <div ref="buttonInner" class="h-3 w-3 rounded-full bg-primary"></div>
          </button>
        </div>
      </template>
    </div>
    <div ref="displayContainer" class="about-timeline__display" :class="{'display-direction-change': displayDirectionForward }">
      <Transition mode="out-in">
        <div v-if="currentDisplay" :key="currentDisplay.id" ref="displayContent">
          <h4 class="text-gray-100">{{ currentDisplay.title }}</h4>
          <p class="text-gray-300 pt-1 pb-3">{{ currentDisplay.time }}</p>
          <p v-for="(text, index) in currentDisplay.text" :key="index" class="pb-3 text-gray-200">{{ text }}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.about-timeline {
  .about-timeline__line {
    @apply relative mt-10 mb-6 mx-6;
  }
  .about-timeline__middle {
    @apply flex items-center my-8 mx-6;
  }
  .about-timeline__display {
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    .v-enter-from {
      transform: translateX(-30%)
    }
    .v-leave-to {
      transform: translateX(30%)
    }
    &.display-direction-change {
      .v-enter-from {
        transform: translateX(30%)
      }
      .v-leave-to {
        transform: translateX(-30%)
      }
    }
  }
}
</style>
