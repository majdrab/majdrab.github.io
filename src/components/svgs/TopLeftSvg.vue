<template>
    <svg class="top-left-svg" viewBox="0 0 210 400" xmlns="http://www.w3.org/2000/svg">
        <path class="top-left-svg__1" d="M0,400s64.74-39.61,72.33-53.83S86.51,307.07,87,299.45s5.06-30,6.07-35.54,2.83-12,4-17.78,5.57-20.31,9.62-31.48,14.68-16.76,16.2-25.9S129,170,130.54,163.36s.5-11.68,0-20.31,5.06-21.33,6.58-23.36,2.53-8.64,3-12.19,10.13-17.27,12.83-22S168.33,59.59,172,53.84s10.63-13.63,15.18-20.74,11.39-10.91,11.9-16.5S210,0,210,0H137.37s-15.18,16.35-18,18.88S108,27.77,107,28.53s-4.8,6.35-5.82,9.65-5.56,7.62-5.56,8.89-6.34,15.64-6.43,17.22S81.7,78,78.41,82.62,45.85,124.76,39.1,131.87,0,155.57,0,155.57Z"/>
    </svg>
</template>

<script>
export default {
  name: "TopLeftSvg"
}
</script>

<style lang="scss">
.top-left-svg {
  position: absolute;
  top: 70px;
  left: 0; 
  width: 210px;
  z-index: 1;

  &__1 {
    fill: $primary;
  }
  @media screen and ($mediaM) {
    left: -80px;
  }
  @media screen and ($mediaS) {
    display: none;
  }
}
</style>
