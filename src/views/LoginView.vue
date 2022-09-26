<script setup>
import { RouterLink, RouterView } from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import ButtonsForm from "../components/ButtonsForm.vue";
</script>
<template>
  <main>
    <LoginForm/>
    <ButtonsForm/>
  </main>
</template>


<style scoped>
main {
  background-color: var(--background-color-blue);
  height: 100vh ;
}

</style>
