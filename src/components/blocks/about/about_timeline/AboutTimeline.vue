<script setup>
// import { computed, ref } from "vue";
import { computed, ref, onMounted } from "vue";
import { gsap } from "gsap";
import { useResizeObserver } from "@vueuse/core";
import aboutTimelineData from '@/data/aboutTimelineData.json';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

// console.log(theme.colors.primary.DEFAULT)

const displayId = ref(0)

function onButtonClick(id) {
  setDisplayDirection(id)
  getIdDifference(id)
  displayId.value = id
  animateLine()
}

// LINE 
const lineLength = ref(2)
aboutTimelineData.forEach(el => {
  lineLength.value = lineLength.value + el.duration
});

const idDifference = ref(0)
function getIdDifference(idValue) {
  idDifference.value = Math.abs(displayId.value - idValue)
}

const button = ref(null)
const buttonInner = ref(null)
const lineGreen = ref(null)
function animateButton() {
  if(button.value && buttonInner.value) {
    gsap.to(buttonInner.value, {backgroundColor: theme.colors.primary.DEFAULT})
    gsap.to(buttonInner.value[displayId.value], {backgroundColor: theme.colors.green[300]}, "<")
  }
  
  // const tl = gsap.timeline()
  // if(button.value && buttonInner.value) {
  //   tl.to(buttonInner.value, {backgroundColor: theme.colors.primary.DEFAULT})
  //   tl.to(buttonInner.value[displayId.value], {backgroundColor: theme.colors.green[300]}, "<")
    // console.log(button.value[displayId.value])
    // console.log(buttonInner.value[displayId.value])
}
function animateLine() {
  if(lineGreen.value) {
    gsap.to(lineGreen.value[0], {width: '100%'})
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
  animateButton()
});
</script>

<template>
  <div class="about-timeline">
    <div class="about-timeline__line">
      <div class="h-[2px] bg-green-300" :style="'width: ' + 2/lineLength*100 + '%;'"></div>
      <template v-for="singleTimeline in aboutTimelineData" :key="singleTimeline.id">
        <button ref="button" @click="onButtonClick(singleTimeline.id)" class="flex items-center justify-center flex-none h-5 w-5 rounded-full bg-gray-200">
          <div ref="buttonInner" class="h-3 w-3 rounded-full bg-primary"></div>
        </button>
        <div class="h-[2px] bg-gray-200" :style="'width: ' + singleTimeline.duration/lineLength*100 + '%;'">
          <div ref="lineGreen" class="h-full w-0 bg-green-300"></div>
        </div>
      </template>
    </div>
    <div ref="displayContainer" class="about-timeline__display" :class="{'display-direction-change': displayDirectionForward }">
      <Transition mode="out-in">
        <div v-if="currentDisplay" :key="currentDisplay.id" ref="displayContent">
          <p v-for="(text, index) in currentDisplay.text" :key="index" class="pb-3">{{ text }}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.about-timeline {
  .about-timeline__line {
    @apply flex items-center relative py-6;
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
