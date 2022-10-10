<script setup>
import { RouterView, useRouter } from "vue-router";
import AbcGameKeyboard from "../components/AbcGameKeyboard.vue";
import AbcGameNumpad from "../components/AbcGameNumpad.vue";
import { apiGame } from "../services/apiGame.js";
import OkAnimation from "../components/animations/OkAnimation.vue";
import TryAgain from "../components/animations/TryAgain.vue";
import { ref } from "vue";

const router = useRouter();

// view variables
const data = {
  correction: null,
};
const ok = ref(false);
const bad = ref(false);

// view intervals
/* const intervalPlay = setInterval(checkRedirect, 8000); */
const intervalCorrection = setInterval(checkCorrection, 4000);
/* const intervalShow = setInterval(checkShowWord, 5000); */

// view functions
async function checkShowWord() {
  const response = await apiGame.getShow();

  const show = response.data.data;

  if (show === null) {
    return;
  }

  if (show != null) {
    alert(`This is the correct word... ${show}`);
  }
}

async function checkCorrection() {
  const response = await apiGame.getCorrection();

  const correction = await response.data.data;

  if (correction === null) {
    return;
  }

  if (correction === 1) {
    ok.value = true;

    await apiGame.correctionNull(data);

    setTimeout(setTofalse, 3000);

    return;
  }

  if (correction === 0) {
    bad.value = true;

    await apiGame.correctionNull(data);

    setTimeout(setTofalse, 3000);

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

async function setTofalse() {
  ok.value = false;
  bad.value = false;
}
</script>

<template>
  <main>
    <AbcGameKeyboard />

    <OkAnimation v-if="ok === true" />

    <TryAgain v-if="bad === true" />

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
