<script setup>
import { RouterLink, RouterView } from "vue-router";
import RegisterForm from "../components/RegisterForm.vue";
</script>

<template>
  <main>
    <RegisterForm />
  </main>

  <RouterView />
</template>

<style scoped>
main {
  background-color: var(--background-color-blue);
}
</style>
