<script setup>
import { RouterView } from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import TheHeader from "../components/TheHeader.vue";
</script>
<template>
  <TheHeader></TheHeader>
  <main>
    <LoginForm />
  </main>
  <RouterView />
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color-blue);
  height: 100vh;
}
</style>
