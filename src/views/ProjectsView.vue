<script setup>
import projectsData from '@/data/projectsData.json';
import SingleProject from '../components/blocks/projects/SingleProject.vue';
</script>

<template>
  <div id="projects">
    <BaseContainer>
      <h1 class="text-gray-100">Projects</h1>
      <BaseDivider />
      <p class="text-gray-200 pb-6">Nek uvodni tekst</p>
      <h2 class="text-gray-100">Humanfrog</h2>
      <BaseDivider />
      <div class="grid grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
        <SingleProject 
          v-for="project in projectsData[0].humanfrog" 
          :key="project.id"
          :name="project.name"
          :description="project.description"
        />
      </div>
    </BaseContainer>
  </div>
</template>

<style scoped>
#projects {
  @apply pt-16 pb-14 relative bg-primary;
}
</style>
