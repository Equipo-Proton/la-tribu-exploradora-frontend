<script>
import EditStudent from "./modals/EditStudent.vue";
import CreateStudent from "./modals/CreateStudent.vue";
import ConfirmDeleteStudent from "./modals/ConfirmDeleteStudent.vue";

export default {
  name: "StudentList",

  props: {
    students: {
      type: Object,
      required: true,
    },
  },

  components: { EditStudent, CreateStudent, ConfirmDeleteStudent },
};
</script>
<template>
  <main>
    <h3>Estudiantes</h3>
    <div v-for="(student, index) in students" :key="index" class="teachersBox">
      <div id="userManagement">
        <div class="teacherName">{{ student.name }}</div>
        <div><EditStudent></EditStudent></div>
        <div><ConfirmDeleteStudent></ConfirmDeleteStudent></div>
      </div>
    </div>
    <CreateStudent></CreateStudent>
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

#editStudent {
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
