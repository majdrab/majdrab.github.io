<script setup>
import projectsData from '@/data/projectsData.json';
import SingleProject from '../components/blocks/projects/SingleProject.vue';
</script>

<template>
  <section id="projects">
    <BaseContainer>
      <h1 class="text-gray-100">Projects</h1>
      <BaseDivider />
      <!-- <p class="text-gray-200 pb-6">Nek uvodni tekst</p> -->
      <h3 class="text-gray-100 pb-3">Humanfrog</h3>
      <p class="text-gray-200 pb-4">At Humanfrog, projects were primarily built using Laravel Blades, SASS, Tailwind, and JavaScript. Some of these projects have either not yet been made public or have been taken down due to being outdated, and as a result, there are no available links to the live webpages.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 xl:gap-8">
        <SingleProject 
          v-for="project in projectsData[0].humanfrog" 
          :key="project.id"
          :name="project.name"
          :link="project.link"
          :logo="project.logo"
          :image="project.image"
        />
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
#projects {
  @apply pt-6 pb-14 relative bg-primary;
}
</style>
