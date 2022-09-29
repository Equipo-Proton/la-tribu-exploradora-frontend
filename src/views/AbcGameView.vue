<script setup>
import { RouterView } from "vue-router";
import AbcGameKeyboard from "../components/AbcGameKeyboard.vue";
import AbcGameNumpad from "../components/AbcGameNumpad.vue";
</script>

<template>
  <main>
    <AbcGameKeyboard />
    <AbcGameNumpad />
  </main>
  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-blue);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  align-items: center;
  font-weight: bold;
  color: var(--font-color);
}
.keyboard {
  grid-column: 1 / 4;
  grid-row: 1;
}
num-pad {
  grid-column: 4 / 5;
  grid-row: 1;
}
</style>
