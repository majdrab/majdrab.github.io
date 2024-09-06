<script setup>
import AboutTimeline from '../components/blocks/about/AboutTimeline.vue';

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section id="about">
    <BaseContainer class="about-intro">
      <h1 class="text-gray-100">About Me</h1>
      <BaseDivider />
      <div class="grid grid-cols-6 gap-4 pt-2">
        <div class="bg-green px-5 py-5 rounded row-start-1 col-start-1 col-span-6 lg:col-span-4">
          <p class="">I'm Maj Drab, a 29-year-old Junior Front-end Developer from Slovenia, currently focused on expanding my programming knowledge through online courses.</p>
        </div>
        <div class="bg-green px-5 py-5 rounded rounded-tr-3xl row-start-1 col-start-6 col-span-1 max-lg:hidden"></div>
        <div class="bg-green-400 px-5 py-5 rounded row-start-2 col-start-1 col-span-6 lg:col-start-3 lg:col-span-4">
          <p class="">I have a passion for solving design challenges, crafting intuitive user interfaces, and creating engaging interactions to develop rich web experiences and applications.</p>
        </div>
        <div class="bg-green-400 px-5 py-5 rounded row-start-2 col-start-1 col-span-1 max-lg:hidden"></div>
        <!-- <div class="bg-green-300 px-5 py-5 rounded rounded-bl-3xl row-start-2 row-span-2 col-start-1 col-span-1 max-lg:hidden"></div> -->
        <div class="bg-green-300 px-5 py-5 rounded row-start-3 col-start-1 col-span-6 lg:col-start-2 lg:col-span-4">
          <p class="">Outside of coding, I love playing D&D, video and board games, attending music festivals, or simply taking a walk in the woods.</p>
        </div>
      </div>
    </BaseContainer>
    <BaseContainer isFull class="about-cta">
      <BaseContainer innerClass="flex flex-col items-center justfy-center">
      <h2 class="pb-2 text-gray-100">I'm actively seeking new opportunities as a Front-end Developer</h2>
      <h4 class="pb-3">Check out my CV to learn more about my skills and experience.</h4>
      <div class="flex gap-10">
        <a href="/cv/DrabMajCV_2024_eng.pdf" target="_blank" >
          <BaseAnimatedButton class="px-[18px] py-[9px] rounded-[46px]">
            <span class="">ENG</span>
          </BaseAnimatedButton>
        </a>
        <a href="/cv/DrabMajCV_2024_slo.pdf" target="_blank" >
          <BaseAnimatedButton class="px-[18px] py-[9px] rounded-[46px]">
            <span class="">SLO</span>
          </BaseAnimatedButton>
        </a>
      </div>
    </BaseContainer>
    </BaseContainer>
    <BaseContainer class="about-path">
      <h3 class="text-gray-100">My Programming Path</h3>
      <AboutTimeline />
    </BaseContainer>
  </section>
</template>

<style scoped>
#about {
  @apply pt-10 pb-6 relative bg-primary overflow-hidden;
}
.about-intro, 
.about-cta,
.about-path {
  @apply text-gray-200;
}
/* .about-intro {
  @apply pb-4;
} */
.about-cta {
  @apply bg-gradient-primary py-6 my-6;
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
