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

      const token = response.data.access_token;

      localStorage.setItem("token", token);

      this.$router.push("/panel");
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="card">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Tab 1" active>
            <b-card-text>Tab contents 1</b-card-text>
          </b-tab>
          <b-tab title="Tab 2">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <div class="card">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="form px-4 pt-5">
            <label for="email">Quien eres?</label>
            <input
              id="email"
              type="email"
              name=""
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
            />
            <label for="password">Quien eres?</label>
            <input
              id="password"
              type="text"
              name=""
              class="form-control"
              placeholder="Contrasena"
              v-model="form.password"
            />
            <button
              class="btn btn-dark btn-block"
              type="submit"
              v-on:click="login"
            >
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
