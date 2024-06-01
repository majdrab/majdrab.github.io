<script setup>
import { RouterLink, RouterView } from 'vue-router'

import VHeader from './components/layout/VHeader.vue';
import VFooter from './components/layout/VFooter.vue';

import contactsData from './data/contactsData.json';
</script>

<template>
  <VHeader />
  <RouterView/>
  <VFooter  :contactsData="contactsData"/>
</template>

<style scoped>
main {
  @apply flex-1 pt-6 pb-10;
}
</style>
