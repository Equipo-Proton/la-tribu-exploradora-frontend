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
  <div class="card">
    <ul
      class="nav nav-pills justify-content-around"
      id="pills-tab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-user-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-user"
          type="button"
          role="tab"
          aria-controls="pills-user"
          aria-selected="true"
        >
          Alumno
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-teacher-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-teacher"
          type="button"
          role="tab"
          aria-controls="pills-teacher"
          aria-selected="false"
        >
          Profesor
        </button>
      </li>
    </ul>
    <div class="tab-content align-self-center" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-user"
        role="tabpanel"
        aria-labelledby="pills-user-tab"
      >
        <div class="form">
          <div>
            <a>¿Quién eres?</a>
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <button class="btn btn-dark btn-block">Entrar</button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-teacher"
        role="tabpanel"
        aria-labelledby="pills-teacher-tab"
      >
        <div class="form">
          <div>
            <a>Quien eres?</a>
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div>
            <a>Contraseña</a>
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Contraseña"
            />
          </div>
          <button class="btn btn-dark btn-block">Entrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 812px;
  min-height: 485px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vw;
  gap: 1vw;
}
</style>
