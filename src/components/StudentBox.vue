<script>
import TheHeader from "./TheHeader.vue";
import ButtonsForm from "./ButtonsForm.vue";
import { apiUsers } from "../services/apiUsers.js";
import { apiGame } from "../services/apiGame.js";
import StudentItem from "./StudentItem.vue";

export default {
  name: "StudentBox",

  data() {
    return {
      students: [],
      showData: {
        show: null,
      },
      nullData: {
        show: null,
      },
    };
  },

  methods: {
    async listStudents() {
      const response = await apiUsers.listStudents();

      const studentsData = response.data.data;

      this.students = studentsData;
    },

    interval() {
      setInterval(this.listStudents, 5000);
    },

    // send correct word to the students
    async sendShow() {
      const verify = confirm(
        "Estás seguro/a de que quieres enviar la palabra correcta"
      );

      if (verify === true) {
        await apiGame.show(this.showData);

       /*  setTimeout(apiGame.show(this.nullData), 7000); */

        alert("Has enviado la palabra correcta");

        return;
      }

      return;
    },
  },

  created() {
    this.listStudents();
    this.interval();
  },

  components: { TheHeader, ButtonsForm, StudentItem },
};
</script>

<template>
  <TheHeader />

  <main>
    <div class="secret-word">
      <form @submit.prevent="sendShow">
        <label for="name"><b>PALABRA SECRETA</b></label>
        <input
          type="text"
          placeholder="Introduce la palabra secreta"
          name=""
          id="name"
          v-model="showData.show"
        />
        <button type="submit">
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
        </button>
      </form>
    </div>
    <div class="student-container">
      <div v-for="(student, index) in students" :key="index">
        <StudentItem :student="student" />
      </div>
    </div>
    <div class="buttons">
      <ButtonsForm></ButtonsForm>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1vw;
  margin: 3vh 0 6vh 0;
}
.secret-word {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;
  margin-bottom: 3vh;
}

label {
  font-size: 1.5vw;
}
input {
  width: 30vw;
  height: 6vh;
  border: 0.2vw solid var(--base-color-orange);
  border-radius: 0.8vw;
  text-align: center;
  font-size: 1.5vw;
  font-weight: bold;
}

.student-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90vw;
  height: 70vh;
}
.buttons {
  margin-top: -10vh;
  width: 80vw;
  height: 20vh;
}

@media only screen and (orientation: portrait) {
  input {
    width: 60vw;
    height: 6vh;
    border: 0.2vw solid var(--base-color-orange);
    border-radius: 0.8vw;
    text-align: center;
    font-size: 3.5vw;
  }
}
</style>
