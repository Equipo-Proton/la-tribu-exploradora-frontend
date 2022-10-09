<script setup>
import { RouterView, useRouter } from "vue-router";
import AbcGameKeyboard from "../components/AbcGameKeyboard.vue";
import AbcGameNumpad from "../components/AbcGameNumpad.vue";
import { apiGame } from "../services/apiGame.js";

const router = useRouter();

const data = {
  correction: null,
};

const intervalPlay = setInterval(checkRedirect, 5000);
const intervalCorrection = setInterval(checkCorrection, 4000);

async function checkCorrection() {
  const response = await apiGame.getCorrection();

  const correction = response.data.data;

  if (correction === null) {
    return;
  }

  if (correction === 1) {
    await apiGame.correctionNull(data);

    alert("GOOD CORRECTION");

    return;
  }

  if (correction === 0) {
    await apiGame.correctionNull(data);

    alert("BAD CORRECTION");

    return;
  }
}

async function checkRedirect() {
  const playValue = await callDatabase();

  checkPlayValue(playValue);

  return;
}

function checkPlayValue(playValue) {
  if (playValue === 0) {
    clearInterval(intervalPlay);
    clearInterval(intervalCorrection);

    router.push({ path: "/waiting" });

    return;
  }
}

async function callDatabase() {
  const response = await apiGame.getPlayPermission();

  if (response.data.message === "Unauthenticated.") {
    clearInterval(intervalPlay);
    clearInterval(intervalCorrection);
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
    <AbcGameKeyboard />
    <AbcGameNumpad />
  </main>
  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-blue);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 2vw;
  align-items: center;
  font-weight: bold;
  color: var(--font-color);
}
.keyboard {
  grid-column: 2 / 10;
  grid-row: 1;
}
.num-pad {
  grid-column: 11 / 12;
  grid-row: 1;
}
</style>
