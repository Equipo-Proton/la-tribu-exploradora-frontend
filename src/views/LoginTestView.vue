<script>
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
    login() {
      let data = {
        email: this.form.email,
        password: this.form.password,
      };
      this.$http
        .post("/login", data)
        .then((response) => {
          this.$http.defaults.headers.common[
            "Authorization"
          ] = `bearer ${localStorage.setItem(
            "token",
            response.data.access_token
          )}`;
          if (
            response.data.user.isAdmin === 0 &&
            response.data.user.superAdmin === 0
          ) {
            this.$router.push("/");
          }
          if (
            response.data.user.isAdmin === 1 &&
            response.data.user.superAdmin === 0
          ) {
            this.$router.push("/adminPanelView");
          }
          console.log(response);
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
    <label for="email">email</label>
    <input type="email" id="email" v-model="form.email" />

    <label for="password">password</label>
    <input type="text" id="password" v-model="form.password" />

    <button type="button" class="btn btn-primary" v-on:click="login()">
      Login
    </button>
  </form>
</template>

<style></style>
