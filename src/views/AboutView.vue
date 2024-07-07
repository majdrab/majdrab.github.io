<script setup>
import AboutTimeline from '../components/blocks/about/about_timeline/AboutTimeline.vue';

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="about">
    <BaseContainer class="about-intro">
      <h1 class="text-gray-100">About Me</h1>
      <div class="h-[1px] w-[200px] bg-green-400 my-2"></div>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 lg:col-span-2">
          <p class="pb-2">I'm Maj Drab, a 29-year-old Slovenian junior Front-end developer. Currently in the process of gaining more programming knowledge and doing all kinds of projects.</p>
          <p class="pb-2">I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.</p>
          <p class="pb-2">When not working or futzing around with code, I love to play D&D, video and board games, go to music festivals or simply enjoy a walk in the woods.</p>
        </div>
        <div class="max-lg:hidden">
          <p>I'm actively looking for a job.</p>
          <a class="bg-underline text-green-400"
              target="_blank"
              href=""
            >
            Check out my CV
          </a>
        </div>
      </div>
      <div class="lg:hidden">
        <p>I'm actively looking for a job.</p>
        <p>
          <a class="bg-underline text-spot"
            target="_blank"
            href=""
          >
          Check out my CV
          </a>
        </p>
      </div>
    </BaseContainer>
    <BaseContainer class="about-path">
      <h3 class="text-gray-100">My Programming Path</h3>
      <div class="h-[1px] w-[200px] bg-green-400 my-2"></div>
      <AboutTimeline />
    </BaseContainer>
  </div>
</template>

<style scoped>
#about {
  @apply pt-10 pb-14 relative bg-primary;
}
.about-intro, 
.about-path {
  @apply text-gray-300;
}
.about-intro {
  @apply pb-4;
}
.about-path {
  .about-path__timeline {
    @apply flex items-center relative py-6;
  }
  [class^="about-path__"]:not(.about-path__timeline) {
    @apply relative py-2;
    /* > p {
      @apply pl-5;
    } */
  }
}
</style>
