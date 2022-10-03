<script>
import { apiUsers } from "../services/apiUsers.js";

export default {
  name: "WaitingView",

  methods: {
    async letsPlay() {
      const question = confirm("¿Quieres jugar?");

      if (question === true) {
        this.getPlayValue();
      }

      return;
    },

    async getPlayValue() {
      const response = await apiUsers.getPlayValue();

      if (response.data.data === 1) {
        this.$router.push("/abcgameview");

        return;
      }

      if (response.data.data === 0) {
        alert("Lo siento... Tu profesor no te ha dado permiso todavía");

        return;
      }
    },
  },
};
</script>

<template>
  <main>
    <section class="sky">
      <div class="bird purple grid-item">
        <img class="bird" src="../assets/img/purpleBird.png" />
      </div>
      <div class="bird yellow grid-item">
        <img class="bird" src="../assets/img/yellowBird.png" />
      </div>
      <div class="play grid-item">
        <button type="button" v-on:click="letsPlay">
          <img class="playLogo" src="../assets/img/greenPlay.svg" />
        </button>
      </div>
      <div class="bird green grid-item">
        <img class="bird" src="../assets/img/greenBird.png" />
      </div>
      <div class="bird blue grid-item">
        <img class="bird" src="../assets/img/blueBird.png" />
      </div>
    </section>
    <section class="garden">
      <img class="bush" src="../assets/img/garden.svg" />
    </section>
  </main>
  <RouterView />
</template>

<style>
main {
  width: 100%;
  background-color: var(--background-color-blue);
}
.bird {
  width: 10vw;
}
.sky {
  display: grid;
  column-gap: 2vw;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  align-items: center;
  justify-content: space-around;
  padding: 5vh;
}
.play {
  grid-column-start: 2;
  grid-row-start: 2;
}
.playLogo {
  width: 25vw;
}
.purple {
  grid-column-start: 1;
  grid-row-start: 1;
  transform: rotate(45deg);
  justify-content: flex-end;
}
.green {
  grid-column-start: 1;
  grid-row-start: 3;
  transform: scale(-1, 1);
}
.yellow {
  grid-column-start: 3;
  grid-row-start: 1;
  transform: rotate(15deg);
}
.blue {
  grid-column-start: 3;
  grid-row-start: 3;
  transform: rotate(-60deg);
}
.bush {
  width: 100%;
  margin-top: -10vh;
  position: relative;
}
</style>
