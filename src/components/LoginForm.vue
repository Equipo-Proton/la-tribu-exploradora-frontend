<script>
import { apiAuth } from "../services/apiAuth.js";

export default {
  name: "LoginForm",

  data() {
    return {
      incorrect: false,
      noRegister: false,
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    clearStorage() {
      localStorage.clear();
    },

    async correctLogin() {
      const response = await apiAuth.login(this.form);

      // bad response cases
      if (response === undefined) {
        this.noRegister = true;

        return;
      }

      if (response === "Incorrect password") {
        this.incorrect = true;

        return;
      }

      if (response === "User no registered") {
        this.noRegister = true;

        return;
      }

      // good response cases
      // teacher cases
      if (
        response.data.data.isAdmin != undefined &&
        response.data.data.superAdmin != undefined
      ) {
        const token = response.data.access_token;
        const name = response.data.data.name;
        const isAdmin = response.data.data.isAdmin;
        const superAdmin = response.data.data.superAdmin;

        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("isAdmin", isAdmin);
        localStorage.setItem("superAdmin", superAdmin);

        this.$router.push("/panel");

        return;
      }

      // student cases
      const token = response.data.access_token;
      const isAdmin = response.data.data.isAdmin;
      const superAdmin = response.data.data.superAdmin;

      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", isAdmin);
      localStorage.setItem("superAdmin", superAdmin);

      this.$router.push("/waiting");

      return;
    },

    clearOnFocus() {
      this.incorrect = false;
      this.noRegister = false;
    },
  },

  created() {
    this.clearStorage();
  },
};
</script>

<template>
  <div class="card d-flex">
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
            <label for="email">¿Quién eres?</label>
            <input
              id="email"
              type="text"
              name=""
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
              v-on:focus="clearOnFocus"
            />
            <p v-if="this.noRegister">Usuario no registrado</p>
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
              v-on:focus="clearOnFocus"
            />
            <p v-if="this.incorrect">Contraseña incorrecta</p>
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

p {
  color: rgba(255, 0, 0, 0.817);
}
</style>
