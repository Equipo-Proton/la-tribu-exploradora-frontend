<script>
import { apiGame } from "../services/apiGame.js";

export default {
  name: "GameList",

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
    async play() {
      if (this.obj.play === false) {
        this.obj.play = true;

        await apiGame.changePlayPermission(this.obj);

        this.$router.push("/gamecontrol");

        return;
      }
    },
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
