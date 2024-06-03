<script setup>
import { RouterLink, RouterView } from 'vue-router'

import VHeader from './components/layout/VHeader.vue';
import VMain from './components/layout/VMain.vue';
import VFooter from './components/layout/VFooter.vue';

import contactsData from './data/contactsData.json';
</script>

<template>
  <VHeader />
  <VMain>
    <RouterView/>
  </VMain>
  <VFooter  :contactsData="contactsData"/>
</template>

<style scoped>

</style>
