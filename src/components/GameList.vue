<script setup></script>
<template>
  <main>
    <h3>Juegos</h3>
    <div class="gamesBox">
        <div class="game">
            <img src="../assets/img/gameImage.svg"/>
        </div>

    </div>
  </main>
  <RouterView />
</template>
<style scoped>
.gamesBox {
  width: 20vw;
  height: 70vh;
  background: #FFFFFF;
border: 1px solid #A5A2A9;  
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
</style>
