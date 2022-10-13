<script>
import { apiUsers } from "../../services/apiUsers.js";

export default {
  name: "EditStudent",

  data() {
    return {
      studentId: this.student.id,
      form: {
        name: this.student.name,
        email: this.student.email,
        password: this.student.showPassword,
      },
      showModal: false,
    };
  },

  props: {
    student: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async editStudent() {
      await apiUsers.updateStudents(this.studentId, this.form);

      alert(`${this.student.name} has been updated`);

      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay-close" v-if="showModal" @click="showModal = false">
    <div class="modal-overlay">
      <div class="form-camp">
        <label for="name"><b>Nombre</b></label>
        <input
          type="text"
          placeholder=""
          name="name"
          id="name"
          required
          v-model="form.name"
        />
      </div>
      <div class="form-camp">
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder=""
          name="email"
          id="email"
          required
          v-model="form.email"
        />
      </div>
      <div class="form-camp">
        <label for="psw"><b>Contraseña</b></label>
        <input
          type="text"
          placeholder=""
          name="psw"
          id="psw"
          required
          v-model="form.password"
        />
      </div>
      <div class="modal-buttons">
        <button class="accept-button" v-on:click="editStudent">Aceptar</button>
        <button class="cancel-button" @click="showModal = false">
          Cancelar
        </button>
      </div>
    </div>
  </div>

  <button id="editStudent" @click="showModal = true">Editar</button>
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

#editStudent {
  background-color: var(--base-color-blue);
}

button,
.teacherName {
  border: none;
  border-radius: 2vh;
  height: 7vh;
  padding: 2vw;
  margin: 1vw auto;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2.5vh;
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
