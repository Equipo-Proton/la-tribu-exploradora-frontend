<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import RegisterForm from '../components/RegisterForm.vue'
</script>
<template>
  <header>
    <h1>Este es el formulario de Registro</h1>
  </header>
  <main>
    <RegisterForm/>
  </main>
</template>

<style scoped>
h1{
  padding: auto;
  

}
</style>
