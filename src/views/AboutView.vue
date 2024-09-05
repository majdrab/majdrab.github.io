<script setup>
import AboutTimeline from '../components/blocks/about/AboutTimeline.vue';

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section id="about">
    <BaseContainer class="about-intro">
      <h1 class="text-gray-100">About Me</h1>
      <BaseDivider />
      <div class="grid grid-cols-4 gap-4">
        <div class="col-start-1 col-span-4 lg:col-start-2 lg:col-span-3">
          <p class="pb-2">I'm Maj Drab, a 29-year-old Slovenian junior Front-end developer. Currently in the process of gaining more programming knowledge with online courses and working on this webpage.</p>
          <p class="pb-2">I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.</p>
          <p class="pb-2">When not working or futzing around with code, I love to play D&D, video and board games, go to music festivals or simply enjoy a walk in the woods.</p>
        </div>
        <!-- <div class="max-lg:hidden aspect-square">
          <img src="/img/Maj.png" alt="portrait image" class="object-cover h-full w-full">
        </div> -->
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
    <BaseContainer isFull class="about-cta">
      <BaseContainer innerClass="flex flex-col items-center justfy-center">
      <h2 class="pb-2 text-gray-100">I'm actively looking for a job.</h2>
      <h4 class="pb-3">Check out my CV</h4>
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
.about-intro {
  @apply pb-4;
}
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
