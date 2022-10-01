<script setup>
import { RouterView } from "vue-router";

/* export default {
      name: "WaitingView",
    }; */
</script>

<template>
  <main>
    <section class="sky">
      <div class="chicks">
        <div class="chick purple">
          <img class="chick" src="../assets/img/purpleChicken.png" />
        </div>
        <div class="chick blue">
          <img class="chick" src="../assets/img/blueChicken.png" />
        </div>
        <div class="chick yellow">
          <img class="chick" src="../assets/img/yellowChicken.png" />
        </div>
      </div>
      <div class="play">
        <img class="playLogo" src="../assets/img/greenPlay.svg" />
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
  height: 100%;
  background-color: var(--background-color-blue);
}
.sky {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chick {
  height: 15vh;
}
.chicks {
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5vh;
}
.play {
  position: relative;
  padding: 0;
  margin-top: -5vh;
}

.playLogo {
  width: 30vw;
}
.purple {
  transform: rotate(25deg);
  justify-content: flex-end;
  align-self: flex-end;
}

.yellow {
  align-self: center;
  transform: rotate(15deg);
}
.blue {
  align-self: flex-start;
  transform: rotate(-35deg);
}
.bush {
  width: 100%;
  margin-top: -10vh;
  /*   position: relative;
 */
}
</style>
