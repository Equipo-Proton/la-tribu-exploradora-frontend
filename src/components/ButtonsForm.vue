<script>
import { apiGame } from "../services/apiGame.js";

export default {
  name: "ButtonsForm",

  data() {
    return {
      obj: {
        play: true,
      },
      data: {
        word: null,
      },
    };
  },

  methods: {
    // play boolean to false no permission to play
    async play() {
      if (this.obj.play === true) {
        this.obj.play = false;

        await apiGame.changePlayPermission(this.obj);

        this.$router.push("/panel");

        return;
      }
    },

    // word to null and restart game
    async load() {
      const verify = confirm(
        "¿Estás seguro de que quieres reiniciar el juego?"
      );

      if (verify === true) {
        await apiGame.wordNull(this.data);
      }
    },
  },
};
</script>
<template>
  <div class="buttons-game-control">
    <button v-on:click="load" type="button" class="button-left">
      Reiniciar Juego
    </button>
    <button v-on:click="play" type="button" class="button-right">
      Terminar Juego
    </button>
  </div>
</template>
<style scoped>
.buttons-game-control {
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  text-align: center;
}
.button-left,
.button-right {
  border: 0px;
  height: 5vh;
  width: 15vw;
  color: var(--base-color-white-2);
  border-radius: 0.7vw;
  font-size: 1vw;
  text-align: center;
  font-weight: bold;
}
.button-left {
  background-color: var(--base-color-orange);
}

.button-right {
  background-color: var(--color-warning);
}

.button-left:hover {
  background-color: var(--base-color-orange);
  border-color: #000000;
}
.button-right:hover {
  background-color: #ae1302;
  border-color: #000000;
}

@media only screen and (orientation: portrait) {
  .button-left,
  .button-right {
    border: 0px;
    height: 6vh;
    width: 15vw;
    color: var(--base-color-white-2);
    border-radius: 0.7vw;
    font-size: 2.5vw;
    text-align: center;
    font-weight: bold;
  }
}
</style>
