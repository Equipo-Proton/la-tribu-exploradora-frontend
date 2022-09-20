<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
import GameList from "../components/GameList.vue";
import TeacherList from "../components/TeacherList.vue";
</script>
<template>
  <Header />
  <main>

    <GameList />
    <TeacherList />

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
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: bold;
  color: var(--font-color);
}
</style>

