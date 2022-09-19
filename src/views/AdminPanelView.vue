<script setup>
import Header from "../components/Header.vue";
import GameList from "../components/GameList.vue";
import TeacherList from "../components/TeacherList.vue";
</script>
<template>
  <main>
    <Header />
    <GameList />
    <TeacherList />
  </main>
</template>

<style scoped>
main {
  background-color: var(--background-color-blue);
}
</style>
