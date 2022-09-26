<script>
import { api } from "../services/apiAuth.js";

export default {
  name: "LoginTestView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const response = await api.getLogin(this.form);
      console.log(response.data.access_token);

      localStorage.setItem("token", response.data.access_token);

      this.$router.push("/adminpanelview");
    },
  },
};
</script>

<template>
  <form @submit.prevent="login">
    <label for="email">email</label>
    <input type="email" id="email" v-model="form.email" />

    <label for="password">password</label>
    <input type="text" id="password" v-model="form.password" />

    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<style></style>
