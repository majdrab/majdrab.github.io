<script setup>
// import { computed, ref } from "vue";
import { ref } from "vue";
import aboutTimelineData from '@/data/aboutTimelineData.json';

defineProps({
  contactsData: {
    type: Array,
    required: true
  }
})

// DISPLAY
const timelineDisplayId = ref(0)



</script>

<template>
  <button class="flex items-center justify-center flex-none h-5 w-5 rounded-full bg-gray-100">
    <div class="h-3 w-3 rounded-full bg-primary"></div>
  </button>
</template>

<style scoped>

</style>
