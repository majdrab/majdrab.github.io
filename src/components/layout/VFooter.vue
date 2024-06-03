<script setup>
defineProps({
  contactsData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer__grid">
        <div>
          <h4 class="text-gray-200 pb-2">Logo at some point</h4>
        </div>
        <div class="">
          <h4 class="text-gray-200 pb-2">Contacts</h4>
          <a 
            v-for="(contact, index) in contactsData" 
            :key="index" 
            :href="contact.href"
            target=”_blank”
            class="text-gray-200 flex"
          >
            <span :class="[`icon-${contact.icon}`, 'pr-1']"></span>
            <span class="bg-underline">{{ contact.title }}</span>
          </a>
        </div>
        <div>
          <p class="text-gray-200">Copyright © 2024 Maj Drab</p>
          <p class="text-gray-200">All Rights Reserved</p>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-primary flex-none pt-6 pb-12;

  .footer__grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-4;
    /* [&>*]:border-t */
    > * {
      @apply border-t border-gray-200 border-solid;
    }
  }
}
</style>
