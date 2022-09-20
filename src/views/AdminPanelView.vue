<script setup>
  import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
import GameList from "../components/GameList.vue";
import TeacherList from "../components/TeacherList.vue";
</script>
<template>
  <Header />
  <main>
    <h1>HOLA</h1>
    <GameList />
    <TeacherList />
  </main>
  <RouterView />
</template>

<style scoped>
main {
  background-color: black;
}
</style>
