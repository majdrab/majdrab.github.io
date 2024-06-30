<script setup>
import { RouterLink, RouterView } from 'vue-router'

import OpeningAnimation from './components/OpeningAnimation.vue';
import VHeader from './components/layout/VHeader.vue';
import VFooter from './components/layout/VFooter.vue';

import contactsData from './data/contactsData.json';

</script>

<template>
  <!-- <OpeningAnimation /> -->
  <VHeader />
  <main class="main">
    <RouterView />
    <RouterView name="AboutView" />    
    <RouterView name="ProjectsView" />   
  </main>
  <VFooter :contactsData="contactsData"/>
</template>

<style scoped>
/* .main {
  @apply flex-1 items-stretch relative flex flex-col;
} */
</style>
