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
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"> -->
      <div class="">
        <h4 class="text-gray-200">Contacts:</h4>
        <a 
          v-for="(contact, index) in contactsData" 
          :key="index" 
          :href="contact.href"
          class="text-gray-200 flex pl-2"
        >
          
          <span class="pr-2">~ </span>
          <span class="bg-underline">{{ contact.title }}</span>
        </a>
      </div>
      <div class="flex justify-center">
        <p class="text-gray-200">Copyright © 2024 Maj Drab, All Rights Reserved</p>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-primary flex-none pt-4 pb-8;
}
</style>
