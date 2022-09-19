<script setup></script>

<template>
  <main id="header">
    <div id="logo">
      <img src="../assets/logo.svg" />
    </div>
    <div id="appTitle">La Tribu Exploradora</div>
    <div id="user">
      <div><p>user</p></div>
      <div><img src="../assets/icons/iconUser.svg" /></div>
      <div><button id="logout">Salir</button></div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap");

main #header {
  background-color: var(--base-color-purple);
  width: 100%;
  height: 10vh;
  justify-content: space-around;
}
#header,
#user {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#appTitle {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 3vh;
  color: var(--base-color-orange);
}

#user p, #logout {
  color: var(--base-color-white);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 1.5vh;
}

#user div {
  margin: 0 0.5vw 0 0.5vw;
}

#logout {
  border: none;
  width: 5vw;
  height: 4vh;
  border-radius: 10vh;
  background-color: var(--purple-dark);
}
</style>
