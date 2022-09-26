<script setup>
import { RouterLink, RouterView } from "vue-router";
import RegisterForm from "../components/LoginForm.vue";
import ButtonsForm from "../components/ButtonsForm.vue";
</script>
<template>
 
  <main>
    <RegisterForm/>
    <ButtonsForm/>
  </main>
</template>

<style scoped>
main {
  background-color: var(--background-color-blue);
  height: 100vh ;
}

</style>
