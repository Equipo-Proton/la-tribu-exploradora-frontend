<script>
import TheHeader from "./TheHeader.vue";
import ButtonsForm from "./ButtonsForm.vue";
import { apiUsers } from "../services/apiUsers.js";
import StudentItem from "./StudentItem.vue";

export default {
  name: "StudentBox",

  data() {
    return {
      students: [],
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
      <label for="name"><b>PALABRA SECRETA</b></label>
      <input
        type="text"
        placeholder="Introduce la palabra secreta"
        name=""
        id="name"
      />
    </div>
    <div class="student-container">
      <div v-for="(student, index) in students" :key="index">
        <StudentItem :student="student" />
      </div>
    </div>
    <ButtonsForm></ButtonsForm>
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
</style>
