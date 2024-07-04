<script setup>
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
      <h2 class="text-gray-100">My Programming Path</h2>
      <div class="h-[1px] w-[200px] bg-green-400 my-2"></div>
      <div class="about-path--before">
        <p class="">My programming path has begun with the beginning of the year 2022. Being unsatisfied with my pervious career choices made me tackle a new, undiscovered area of web development. Taking a leap of faith, I quit the previous job and started learning.</p>
        <div class="absolute left-0 bottom-0 w-[2px] h-[calc(100%-12px)] bg-gray-100"></div>
      </div>
      <div class="about-path--beginning">
        <p class="">The beginning of this journey was hard, but exciting. Taking multiple classes about html, css, js and git on the learning platform Udemy worked wonders. With dedication and eagerness of obtaining more programming experience I managed to get an internship at the beginning of the summer that same year, in the company called Hudlajf.</p>
        <div class="absolute left-0 bottom-0 w-[2px] h-full bg-gray-400"></div>
      </div>
      <div class="about-path--hudlajf">
        <p class="">Working in the Hudlajf team was an awesome experience, and under the tutorship of a menthor my understanding of code has greatly improved. During my time there I got to work with sass and my first js framework, vue, and with it the knowledge of code reusability, components, recursive components and overall organizing my code and the folder structure in applications. In november 2022, after several months our cooperation has sadly ended, because of the company's financial situation.</p>
      </div>
      <div class="about-path--jobhunt">
        <p class="">Through the next three months I have searched for my first proper job as a junior web developer. During that time I have been doing all kinds of smaller projects and improving my vue and js skills. In the beginning of february 2023 an opportunity showed itself and I got the role of junior web developer in the company Humanfrog.</p>
      </div>
      <div class="about-path--humanfrog">
        <p class="">Getting my first developer job was (both hard and exciting at the same time -- not good). When the job interview for a place in Humanfrog team took place I was promised to be able to work with vue, with which I was familiar, but almost all of the work turned out to be in laravel blades and php. While being a bit dissapointed, I was lukcy to get a great menthor and with her help I've learned to work with the given technologies. Working on big, real projects pushed my knowledge to new level and i learned to collaborate with designers and backend developers. But the longer I worked in Humanfrog, the more pressure and negativity </p>
      </div>
      <div class="about-path--present">
        <p class="">Text about after humanfrog - present coming soon!</p>
      </div>
    </BaseContainer>
  </div>
</template>

<style scoped>
#about {
  @apply pt-10 pb-14 relative min-h-screen bg-primary;
}
.about-intro, 
.about-path {
  @apply text-gray-300;
  [class^="about-path--"] {
    @apply relative py-2;
    > p {
      @apply pl-5;

    }
  }
}
</style>
