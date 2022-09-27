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
    async correctLogin() {
      const response = await apiAuth.getLogin(this.form);

      const token = response.data.access_token;

      localStorage.setItem("token", token);

      this.$router.push("/panel");
    },
  },
};
</script>

<template>
  <div class="card d-flex">
    <ul
      class="nav nav-tabs nav-fill justify-content-around"
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
          ALUMNO
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
          PROFESOR
        </button>
      </li>
    </ul>
    <div
      class="tab-content d-flex justify-content-center align-items-center m-auto"
      id="pills-tabContent"
    >
      <div
        class="tab-pane fade show active m-auto"
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
          <button class="btn">Entrar</button>
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
            <label for="email">¿Quién eres?</label>
            <input
              id="email"
              type="text"
              name=""
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
            />
          </div>
          <div>
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name=""
              class="form-control"
              placeholder="Contraseña"
              v-model="form.password"
            />
          </div>
          <button class="btn" v-on:click="correctLogin">Entrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 812px;
  min-height: 485px;
  overflow: hidden;
}
.card,
ul,
li {
  border-radius: 2vw;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2vw;
  gap: 2vw;
}

.btn {
  background-color: var(--base-color-green);
  border-radius: 2vw;
}

label,
button,
a {
  font-weight: bold;
  font-family: var(--font-family-secondary);
}
input {
  border: 0.2vw solid var(--base-color-purple);
}
</style>
