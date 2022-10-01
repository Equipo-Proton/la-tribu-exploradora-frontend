<script></script>

<template>
  <div>
    <img src="../assets/img/landinglogo.svg" alt="Landing Page Image Logo" />
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  background-color: #f1fcff;
  display: flex;
  align-items: center;
  width: 33%;
  animation-name: move;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
}

@keyframes move {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}
</style>
