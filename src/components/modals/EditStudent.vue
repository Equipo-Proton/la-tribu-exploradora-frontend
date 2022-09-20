<script>
export default {
  name: "EditStudent",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="form-camp">
      <label for="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
      />
    </div>
    <div class="form-camp">
      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />
    </div>
    <div class="form-camp">
      <label for="prefix"><b>Prefijo</b></label>
      <input
        type="text"
        placeholder="Enter prefix"
        name="prefix"
        id="prefix"
        required
      />
    </div>
    <div class="modal-buttons">
      <button class="accept-button" @click="showModal = false">Aceptar</button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="editStudent" @click="showModal = true">Editar</button>
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

#editStudent {
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
