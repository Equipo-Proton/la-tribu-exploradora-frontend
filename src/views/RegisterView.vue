<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import RegisterForm from '../components/RegisterForm.vue'
  import ButtonsForm from '../components/ButtonsForm.vue';
</script>
<template>
  <header>
    <h1>Este es el formulario de Registro</h1>
  </header>
  <main>
    <RegisterForm/>
    <ButtonsForm/>
  </main>
</template>

<style scoped>
h1 {
  padding: auto;
}
</style>
