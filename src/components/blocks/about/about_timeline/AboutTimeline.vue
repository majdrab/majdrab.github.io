<script setup>
import { ref, onMounted } from "vue";

import aboutTimelineData from '@/data/aboutTimelineData.json';
// import TheWelcome from '../components/TheWelcome.vue'

const timelineDisplayId = ref(0)

function setDisplayId(id) {
  timelineDisplayId.value = id
  console.log(timelineDisplayId.value)
}
onMounted(() => {
  
})

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
    <div class="">
      <div v-for="singleDisplay in aboutTimelineData" :key="singleDisplay.id" class="mb-3">
        <div v-if="singleDisplay.id === timelineDisplayId">
          <p v-for="(text, index) in singleDisplay.text" :key="index" class="pb-3">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
 
</template>

<style scoped>
.about-timeline {
  .about-timeline__line {
    @apply flex items-center relative py-6;
    [class^="about-path__"]:not(.about-path__timeline) {
      @apply relative py-2;
      /* > p {
        @apply pl-5;
      } */
    }
  }
}
</style>
