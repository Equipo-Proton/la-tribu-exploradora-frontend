<script>
import { apiTeachers } from "../../services/apiTeachers.js";

export default {
  name: "EditTeacher",

  data() {
    return {
      teacherId: this.teacher.id,
      form: {
        name: this.teacher.name,
        email: this.teacher.email,
        password: this.teacher.showPassword,
      },
      showModal: false,
    };
  },

  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async editTeacher() {
      await apiTeachers.updateTeacher(this.teacherId, this.form);

      alert(`${this.teacher.name} has been updated`);

      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
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
      <label for="psw"><b>Password</b></label>
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
      <button class="accept-button" v-on:click="editTeacher">Aceptar</button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="editTeacher" @click="showModal = true">Editar</button>
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

.form-camp {
  display: flex;
  flex-direction: column;
}

#editTeacher {
  background-color: var(--base-color-blue);
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
