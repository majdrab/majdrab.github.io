<script setup>
defineProps({
  isFull: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div class="base-container">
    <div :class="isFull ? 'full' : 'content'">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.base-container {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    [outer-start]
    var(--padding-px)
    [content-start]
    minmax(0, var(--container-max-width))
    [content-end]
    var(--padding-px)
    [outer-end]
    minmax(0, 1fr);
  grid-auto-rows: auto;
  width: 100%;

  --container-max-width: 1400px;
  --padding-px: 20px;

  @each $key, $value in (theme('screens.xs'), theme('screens.sm'), theme('screens.md'), theme('screens.lg'), theme('screens.xl')), (28px, 40px, 60px, 80px, 100px)
  {
    @media (min-width: $(key)) {
      --padding-px: $(value);
    }
  }
}

.full {
  grid-column: 1 / -1;
}
.content {
  grid-column: content;
}
</style>
