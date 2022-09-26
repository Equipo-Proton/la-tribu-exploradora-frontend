<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main></main>
  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-blue);
  display: flex;
  justify-content: space-around;
  padding: 4vh;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bold;
  color: var(--font-color);
}
</style>
