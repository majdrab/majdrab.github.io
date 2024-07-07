<script setup>
// import { computed, ref } from "vue";
import { computed, ref, watch, nextTick } from "vue";
import aboutTimelineData from '@/data/aboutTimelineData.json';

// DISPLAY
const timelineDisplayId = ref(0)

function setDisplayId(id) {
  setDisplayDirection(id)
  timelineDisplayId.value = id
}

const currentDisplay = computed(() => {
  return aboutTimelineData.find(display => display.id === timelineDisplayId.value);
});

// display transition
const displayDirectionForward = ref(true)

function setDisplayDirection(idValue) {
  if (timelineDisplayId.value > idValue && displayDirectionForward.value === true) {
    displayDirectionForward.value = false
  } else if (timelineDisplayId.value < idValue && displayDirectionForward.value === false) {
    displayDirectionForward.value = true
  }
}

// display height transiton
const displayContainer = ref(null);
const containerHeight = ref('auto');

const updateDisplayHeight = async () => {
  await nextTick();
  if (displayContainer.value) {
    containerHeight.value = displayContainer.value.offsetHeight + 'px';
    console.log(containerHeight.value)
  }
};
const clearDisplayHeight = () => {
  containerHeight.value = 'auto';
};

watch(() => timelineDisplayId.value, updateDisplayHeight);

</script>

<template>
  <div class="about-timeline">
    <div class="about-timeline__line">
      <div class="h-[2px] w-[30px] flex-none bg-gray-100"></div>
      <button @click="setDisplayId(0)" class="flex items-center justify-center flex-none h-5 w-5 rounded-full bg-gray-100">
        <div class="h-3 w-3 rounded-full bg-primary"></div>
      </button>
      <div class="h-[2px] flex-1 bg-gray-100"></div>
      <button @click="setDisplayId(1)" class="flex items-center justify-center flex-none h-5 w-5 rounded-full bg-gray-100">
        <div class="h-3 w-3 rounded-full bg-primary"></div>
      </button>
      <div class="h-[2px] flex-1 bg-gray-100"></div>
      <button @click="setDisplayId(2)" class="flex items-center justify-center flex-none h-5 w-5 rounded-full bg-gray-100">
        <div class="h-3 w-3 rounded-full bg-primary"></div>
      </button>
      <div class="h-[2px] flex-1 bg-gray-100"></div>
      <button @click="setDisplayId(3)" class="flex items-center justify-center flex-none h-5 w-5 rounded-full bg-gray-100">
        <div class="h-3 w-3 rounded-full bg-primary"></div>
      </button>
    </div>
    <div class="about-timeline__display" :class="{'display-direction-change': displayDirectionForward }" :style="{ height: containerHeight }">
      <Transition mode="out-in" @before-enter="clearDisplayHeight" @after-enter="updateDisplayHeight">
        <div v-if="currentDisplay" :key="currentDisplay.id" ref="displayContainer">
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
    transition: height 0.3s ease-in-out;
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    > div {
      transition: height 0.3s ease-in-out;
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
