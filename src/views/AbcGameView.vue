<script setup>
import { RouterView } from "vue-router";
import AbcGameKeyboard from "../components/AbcGameKeyboard.vue";
</script>

<template>
  <main>
    <AbcGameKeyboard></AbcGameKeyboard>
  </main>
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
  font-weight: bold;
  color: var(--font-color);
}
</style>
