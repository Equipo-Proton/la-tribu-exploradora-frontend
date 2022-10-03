<script setup>
import { RouterView } from "vue-router";
import AbcGameKeyboard from "../components/AbcGameKeyboard.vue";
import AbcGameNumpad from "../components/AbcGameNumpad.vue";
import TryAgain from "../components/animations/TryAgain.vue";
</script>

<template>
  <main>
    <AbcGameKeyboard />
    <AbcGameNumpad />
    <TryAgain></TryAgain>
  </main>
  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-blue);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 2vw;
  align-items: center;
  font-weight: bold;
  color: var(--font-color);
}
.keyboard {
  grid-column: 2 / 10;
  grid-row: 1;
}
.num-pad {
  grid-column: 11 / 12;
  grid-row: 1;
}
</style>
