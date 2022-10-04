<script setup>
import { RouterView, useRouter } from "vue-router";
import AbcGameKeyboard from "../components/AbcGameKeyboard.vue";
import AbcGameNumpad from "../components/AbcGameNumpad.vue";
import { apiUsers } from "../services/apiUsers";

const router = useRouter();

const interval = setInterval(checkRedirectToWaitingView, 5000);

async function checkRedirectToWaitingView() {
  const playValue = await callDatabase();

  checkPlayValue(playValue);

  return;
}

function checkPlayValue(playValue) {
  if (playValue === 0) {
    clearInterval(interval);

    router.push({ path: "/waiting" });

    return;
  }
}

async function callDatabase() {
  const response = await apiUsers.getPlayValue();

  if (response.data.message === "Unauthenticated.") {
    clearInterval(interval);

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
