<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork%2Bround%2Bicon-157.ico" />
</template>

<style>
  .VuetifyLogo {
    height: 180px;
    width: 180px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }

  @keyframes turn {
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
