<script>
export default {
  name: "TestView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    register() {
      let data = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
      };
      this.$http
        .post("teacher/register", data)
        .then((response) => {
          this.$http.defaults.headers.common[
            "Authorization"
          ] = `bearer ${localStorage.getItem("token")}`;
          console.log(response);
          console.log(response.data);
        })
        .then((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<template>
  <form action="">
    <label for="name">name</label>
    <input type="text" id="name" v-model="form.name" />

    <label for="email">email</label>
    <input type="text" id="email" v-model="form.email" />

    <label for="password">password</label>
    <input type="text" id="password" v-model="form.password" />

    <label for="confirm">confirm password</label>
    <input type="text" id="confirm" v-model="form.password_confirmation" />

    <button type="button" class="btn btn-primary" v-on:click="register()">
      Register
    </button>
  </form>
</template>

<style></style>
