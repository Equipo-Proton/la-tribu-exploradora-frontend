<script></script>

<template>
  <div class="num-pad">
    <div>
      <div class="drop-zone"></div>
    </div>
    <div>
      <div class="drag-zone">
        <div class="drag-el" id="n0">0</div>
        <div class="drag-el" id="n1">1</div>
        <div class="drag-el" id="n2">2</div>
        <div class="drag-el" id="n3">3</div>
        <div class="drag-el" id="n4">4</div>
        <div class="drag-el" id="n5">5</div>
        <div class="drag-el" id="n6">6</div>
        <div class="drag-el" id="n7">7</div>
        <div class="drag-el" id="n8">8</div>
        <div class="drag-el" id="n9">9</div>
        <div class="drag-el" id="n10">10</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10vw;
  min-height: 10vh;
  border-radius: 1vw;
  border: 0.3vw solid var(--base-color-purple);
  background-color: var(--base-color-white);
  font-family: var(--font-family-game);
  margin: 1vw auto;
}
.drag-zone {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vw;
}
.drag-el {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.5vw;
  min-height: 4.5vw;
  border-radius: 50px;
  background-color: var(--base-color-orange);
  font-family: var(--font-family-game);
  font-size: 2vw;
  margin: auto;
}
</style>
