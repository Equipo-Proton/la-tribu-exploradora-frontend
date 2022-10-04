<script>
import { apiTeachers } from "../services/apiTeachers.js";
import { apiUsers } from "../services/apiUsers.js";
import { admin } from "../functions/admin.js";

export default {
  name: "AdminPanelView",

  data() {
    return {
      obj: {
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
      if (this.obj.play === false) {
        this.obj.play = true;

        await apiUsers.play(this.obj);

        return;
      }

      if (this.obj.play === true) {
        this.obj.play = false;

        await apiUsers.play(this.obj);

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

};
</script>
<template>
  <main>
    <h3>Juegos</h3>
    <div class="gamesBox">
      <div class="game">
        <img src="../assets/img/gameImage.svg" />
      </div>
      <div v-if="this.obj.play === false">
        <button class="play" type="button" v-on:click="play">PLAY</button>
      </div>
      <div v-if="this.obj.play === true">
        <button class="stop" type="button" v-on:click="play">STOP</button>
      </div>
      <!--       <div class="playButton" v-if="this.obj.play === true">
        <button type="button" v-on:click="play">STOP</button>
      </div>
      <div class="playButton" v-if="this.obj.play === false">
        <button type="button" v-on:click="play">PLAY</button>
      </div> -->
    </div>
  </main>
  <RouterView />
</template>
<style scoped>


.gamesBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 70vh;
  background: #ffffff;
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
}

.game {
  width: 16vw;
  height: 25vh;
  border: solid 0.5vh var(--base-color-green);
  border-radius: 3vh;
  margin: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
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
.play {
  background-color: var(--base-color-green);
}
.stop {
  background-color: var(--color-warning);
}

</style>
