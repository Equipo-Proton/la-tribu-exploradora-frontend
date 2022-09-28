<script>
import { apiTeachers } from "../services/apiTeachers.js";
import { apiUsers } from "../services/apiUsers.js";
import TheHeader from "../components/TheHeader.vue";
import GameList from "../components/GameList.vue";
import TeacherList from "../components/TeacherList.vue";
import StudentList from "../components/StudentList.vue";

export default {
  name: "AdminPanelView",

  data() {
    return {
      students: [],
      teachers: [],
      isAdmin: Boolean,
      superAdmin: Boolean,
    };
  },

  methods: {
    async listStudents() {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await apiUsers.listUsers();

      const studentsData = response.data.data;
      console.log(studentsData);

      this.students = studentsData;
    },

    async listTeachers() {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await apiTeachers.listTeachers();

      const teachersData = response.data.data;

      this.teachers = teachersData;
    },

    async getIsAdmin() {
      const isAdmin = localStorage.getItem("isAdmin");

      if (isAdmin === "1") {
        this.isAdmin = true;

        return;
      }

      this.isAdmin = false;
    },

    async getSuperAdmin() {
      const superAdmin = localStorage.getItem("superAdmin");

      if (superAdmin === "1") {
        this.superAdmin = true;

        return;
      }

      this.superAdmin = false;
    },
  },

  created() {
    this.listStudents();
    this.listTeachers();
    this.getIsAdmin();
    this.getSuperAdmin();
  },

  components: { TheHeader, GameList, TeacherList, StudentList },
};
</script>
<template>
  <TheHeader />
  <main>
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
