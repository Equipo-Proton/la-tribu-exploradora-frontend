<script setup>
import { useRouter } from "vue-router";
import { apiGame } from "../services/apiGame.js";

const router = useRouter();

const interval = setInterval(checkToPlayView, 5000);

async function checkToPlayView() {
  const playValue = await callDatabase();

  checkPlayValue(playValue);

  return;
}

function checkPlayValue(playValue) {
  if (playValue === 1) {
    clearInterval(interval);

    router.push({ path: "/play" });

    return;
  }
}

async function callDatabase() {
  const response = await apiGame.getPlayPermission();

  if (response.data.message === "Unauthenticated.") {
    clearInterval(interval);

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("superAdmin");

    router.push("/login");
  }

  return response.data.data;
}
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
        <button type="button">
          <img class="playLogo" src="../assets/img/greyPlay.svg" />
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
  column-gap: 10vw;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  row-gap: 0;
  align-items: center;
  justify-content: center;
  padding: 4vh;
}
.play {
  grid-column-start: 2;
  grid-row-start: 2;
}
.playLogo {
  width: 20vw;
}
button {
  background-color: transparent;
  border: none;
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
  height: 100%;
  margin-top: -5vh;
  position: relative;
  margin-bottom: 0;
}

@media only screen and (orientation: portrait) {

  .bird {
  width: 6vw;
}
}
</style>
