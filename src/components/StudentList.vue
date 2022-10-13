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
    <div class="studentsBox">
      <div
        v-for="(student, index) in students"
        :key="index"
        id="userManagement"
      >
        <div class="studentName">{{ student.name }}</div>
        <div><EditStudent :student="student"></EditStudent></div>
        <div>
          <ConfirmDeleteStudent :student="student"></ConfirmDeleteStudent>
        </div>
      </div>
    </div>
    <CreateStudent></CreateStudent>
  </main>
  <RouterView />
</template>
<style scoped>
.studentsBox {
  width: 55vw;
  height: 70vh;
  background: #ffffff;
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

#userManagement {
  padding: 2.5vh 1.5vw 2.5vh 1.5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button,
.studentName {
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
::-webkit-scrollbar {
  width: 1vw;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5vh;
}

::-webkit-scrollbar-thumb {
  background: rgba(179, 143, 224, 0.53);
  border-radius: 5vh;
}

.studentName {
  background-color: var(--base-color-orange);
}

#editStudent {
  background-color: var(--base-color-blue);
}

#deleteTeacher {
  background-color: var(--color-warning);

}

#newStudent {
  background-color: var(--base-color-green);
  color: var(--font-color);
  margin: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
@media only screen and (orientation: portrait) {
  .studentsBox {
    width: 80vw;
    height: auto;
    padding: 2vh;
    background: #ffffff;
    border: 1px solid #a5a2a9;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 3vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
}
</style>
