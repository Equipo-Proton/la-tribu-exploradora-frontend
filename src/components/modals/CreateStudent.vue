<script>
import { apiUsers } from "../../services/apiUsers.js";

export default {
  name: "CreateStudent",

  data() {
    return {
      showModal: false,

      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },

  methods: {
    async register() {
      await apiUsers.registerStudents(this.form);

      alert("Creado con éxito");

      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay-close" v-if="showModal">
    <div class="modal-overlay" v-if="showModal">
      <div class="form-camp">
        <label for="name"><b>Nombre</b></label>
        <input
          type="text"
          placeholder="Enter user name"
          name=""
          id="name"
          required
          v-model="form.name"
        />
      </div>
      <div class="form-camp">
        <label for="email"><b>Email</b></label>
        <input
          type="email"
          placeholder="Enter Email"
          name=""
          id="email"
          required
          v-model="form.email"
        />
      </div>
      <div class="form-camp">
        <label for="psw"><b>Contraseña</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name=""
          id="psw"
          required
          v-model="form.password"
        />
      </div>
      <div class="form-camp">
        <label for="psw-repeat"><b>Repetir contraseña</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name=""
          id="psw-repeat"
          required
          v-model="form.password_confirmation"
        />
      </div>

      <div class="modal-buttons">
        <button
          type="submit"
          v-on:click="register"
          class="accept-button"
          @click="showModal = false"
        >
          Aceptar
        </button>
        <button class="cancel-button" @click="showModal = false">
          Cancelar
        </button>
      </div>
    </div>
  </div>
  <button id="newStudent" @click="showModal = true">Añadir Alumno</button>
</template>

<style scoped>
.modal-overlay-close {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  row-gap: 2vw;
  position: fixed;
  top: 50%;
  left: 50%;
  bottom: 0;
  right: 10%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.188);
  padding: 5vh;
  z-index: 100;
}
.modal-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2vw;
  position: fixed;
  top: 50%;
  left: 50%;
  bottom: 0;
  right: 10%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
  padding: 5vh;
  z-index: 100;
}

.form-camp {
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 4vh;
}

input,
label {
  font-size: 1vw;
}

#newStudent {
  background-color: var(--base-color-green);
  color: var(--font-color);
  margin: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

button,
.StudentName {
  border: none;
  border-radius: 2vh;
  height: 7vh;
  padding: 2vw;
  margin: 1vw auto;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2vh;
}

.cancel-button {
  background-color: var(--base-color-orange);
}

.accept-button {
  background-color: var(--base-color-blue);
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
