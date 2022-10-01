<script>
import { apiTeachers } from "../services/apiTeachers.js";
import { apiUsers } from "../services/apiUsers.js";
import { admin } from "../functions/admin.js";
import TheHeader from "../components/TheHeader.vue";
import GameList from "../components/GameList.vue";
import TeacherList from "../components/TeacherList.vue";
import StudentList from "../components/StudentList.vue";

export default {
  name: "AdminPanelView",

  data() {
    return {
      form: {
        play: false,
      },
      students: [],
      teachers: [],
      isAdmin: Boolean,
      superAdmin: Boolean,
    };
  },

  methods: {
    async listStudents() {
      const response = await apiUsers.listUsers();

      const studentsData = response.data.data;

      this.students = studentsData;
    },

    async listTeachers() {
      const response = await apiTeachers.listTeachers();

      const teachersData = response.data.data;

      this.teachers = teachersData;
    },

    async play() {
      if (this.form.play === false) {
        this.form.play = true;

        await apiUsers.play(this.form);

        return;
      }

      if (this.form.play === true) {
        this.form.play = false;

        await apiUsers.play(this.form);

        return;
      }
    },

    getAdminValues() {
      const isAdmin = admin.getIsAdmin();

      const superAdmin = admin.getSuperAdmin();

      this.isAdmin = isAdmin;

      this.superAdmin = superAdmin;
    },
  },

  created() {
    this.listStudents();
    this.listTeachers();
    this.getAdminValues();
  },

  components: { TheHeader, GameList, TeacherList, StudentList },
};
</script>

<template>
  <TheHeader />
  <main>
    <div v-if="this.form.play === false">
      <button type="button" v-on:click="play">PLAY</button>
    </div>
    <div v-if="this.form.play === true">
      <button type="button" v-on:click="play">STOP</button>
    </div>

    <GameList />
    <div v-if="isAdmin">
      <StudentList :students="students" />
    </div>
    <div v-if="superAdmin">
      <TeacherList :teachers="teachers" />
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-blue);
  display: flex;
  justify-content: space-around;
  padding: 4vh;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bold;
  color: var(--font-color);
}
</style>
