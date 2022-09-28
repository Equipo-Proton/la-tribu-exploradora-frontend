<script>
import TheHeader from "../components/TheHeader.vue";
import GameList from "../components/GameList.vue";
import TeacherList from "../components/TeacherList.vue";
import StudentList from "../components/StudentList.vue";

export default {
  name: "AdminPanelView",

  data() {
    return {
      isAdmin: Boolean,
      superAdmin: Boolean,
    };
  },

  methods: {
    getIsAdmin() {
      const isAdmin = localStorage.getItem("isAdmin");

      if (isAdmin === "1") {
        this.isAdmin = true;

        return;
      }

      this.isAdmin = false;
    },

    getSuperAdmin() {
      const superAdmin = localStorage.getItem("superAdmin");

      if (superAdmin === "1") {
        this.superAdmin = true;

        return;
      }

      this.superAdmin = false;
    },
  },

  created() {
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
      <StudentList />
    </div>
    <div v-if="superAdmin">
      <TeacherList />
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
