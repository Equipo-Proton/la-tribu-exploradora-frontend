<script>
import { apiAuth } from "../services/apiAuth.js";

export default {
  name: "LoginForm",
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
      const response = await apiAuth.getLogin(this.form);
      console.log(response.data.access_token);
      console.log(response.data.user);

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);

        if (
          response.data.user.isAdmin === 1 ||
          response.data.user.superAdmin === 1
        ) {
          this.$router.push("/adminPanelView");
        }

        this.$router.push("/childs");
      }
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="card">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="form px-4 pt-5">
            <a>Quien eres?</a>
            <input
              type="email"
              name=""
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
            />
            <a>Contrasena</a>
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Contrasena"
              v-model="form.password"
            />
            <button class="btn btn-dark btn-block" v-on:click="login">
              Entrar
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="form px-4">
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Name"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Email"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Phone"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Password"
            />

            <button class="btn btn-dark btn-block">Signup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/registerFormTeachers.css";
</style>
