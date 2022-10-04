<script>
import EditTeacher from "./modals/EditTeacher.vue";
import CreateTeacher from "./modals/CreateTeacher.vue";
import ConfirmDeleteTeacher from "./modals/ConfirmDeleteTeacher.vue";

export default {
  name: "StudentList",

  props: {
    teachers: {
      type: Object,
      required: true,
    },
  },

  components: { EditTeacher, CreateTeacher, ConfirmDeleteTeacher },
};
</script>
<template>
  <main>
    <h3>Profesores</h3>
    <div class="teachersBox">
      <div
        v-for="(teacher, index) in teachers"
        :key="index"
        id="userManagement"
      >
        <div class="teacherName">{{ teacher.name }}</div>
        <div><EditTeacher :teacher="teacher"></EditTeacher></div>
        <div>
          <ConfirmDeleteTeacher :teacher="teacher"></ConfirmDeleteTeacher>
        </div>
      </div>
    </div>
    <CreateTeacher></CreateTeacher>
  </main>
  <RouterView />
</template>
<style scoped>

.teachersBox {
  width: 55vw;
  height: 70vh;
  background: #ffffff;
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
}

#userManagement {
  padding: 2.5vh 1.5vw 2.5vh 1.5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.teacherName {
  background-color: var(--base-color-orange);
}

#editTeacher {
  background-color: var(--base-color-blue);
}

#deleteTeacher {
  background-color: var(--color-warning);
}

#newTeacher {
  background-color: var(--base-color-green);
  color: var(--font-color);
  margin: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
</style>
