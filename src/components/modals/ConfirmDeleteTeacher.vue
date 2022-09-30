<script>
import { apiTeachers } from "../../services/apiTeachers";
export default {
  name: "ConfirmDeleteTeacher",
  data() {
    return {
      showModal: false,
      teacherId: this.teacher.id,
    };
  },

  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async confirmDeleteTeacher() {
      await apiTeachers.deleteTeacher(this.teacherId);

      alert(`${this.teacher.name} has been deleted`);

      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="logo">
      <img src="../../assets/logo.svg" />
    </div>
    <h3>¿Estas seguro que quieres eliminar al profesor?</h3>
    <div class="modal-buttons">
      <button class="accept-button" v-on:click="confirmDeleteTeacher">
        Aceptar
      </button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="deleteTeacher" @click="showModal = true">Eliminar</button>
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

#deleteTeacher {
  background-color: var(--color-warning);
}

button,
.teacherName {
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
