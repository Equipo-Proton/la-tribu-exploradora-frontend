<script setup>
import { RouterLink, RouterView } from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import ButtonsForm from "../components/ButtonsForm.vue";
</script>
<template>
  <header>
    <h1>Este es el lugar del Formulario de login</h1>
  </header>
  <main>
    <LoginForm/>
    <ButtonsForm/>
  </main>
</template>

<style></style>
