<script setup>
import { RouterView } from "vue-router";
import RegisterForm from "../components/RegisterForm.vue";
import ButtonsForm from "../components/ButtonsForm.vue";
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
      <TheHeader />
  <main>
    <RegisterForm />
    <ButtonsForm/>
  </main>

  <RouterView />
</template>

<style scoped>
main {
  background-color: var(--background-color-blue);
  height: 100vh ;
}

</style>
