<script>
import { apiUsers } from "../../services/apiUsers";

export default {
  name: "ConfirmDeleteStudent",

  data() {
    return {
      studentId: this.student.id,
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
    async deleteStudent() {
      await apiUsers.deleteStudents(this.studentId);

      alert(`${this.student.name} ya no está en la lista`);

      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="logo">
      <img src="../../assets/logo.svg" />
    </div>
    <h3>¿Seguro que quieres eliminar a este estudiante?</h3>
    <div class="modal-buttons">
      <button
        v-on:click="deleteStudent"
        class="accept-button"
        @click="showModal = false"
      >
        Aceptar
      </button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="deleteStudent" @click="showModal = true">Eliminar</button>
</template>

<style scoped>
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
.logo {
  align-self: center;
}
h3 {
  text-align: center;
  font-weight: bold;
}

#deleteStudent {
  background-color: var(--color-warning);
}

button,
.StudentName {
  border: none;
  border-radius: 2vh;
  height: 7vh;
  padding: 2vw;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2.5vh;
}

.cancel-button {
  background-color: var(--base-color-blue);
}

.accept-button {
  background-color: var(--color-warning);
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
