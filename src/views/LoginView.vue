<script setup>
import { RouterView } from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import ButtonsForm from "../components/ButtonsForm.vue";
</script>
<template>
  <TheHeader />
  <main>
    <LoginForm />
    <ButtonsForm />
  </main>

  <RouterView />
</template>

<style scoped>
main {
  background-color: var(--background-color-blue);
  height: 100vh;
}
</style>
