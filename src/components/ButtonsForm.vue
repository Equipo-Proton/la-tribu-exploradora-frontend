<script setup></script>
<template>
  <div class="buttons-game-control">
    <button type="button" class="button-left">Reiniciar Juego</button>
    <button type="button" class="button-right">Terminar Juego</button>
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
</style>
