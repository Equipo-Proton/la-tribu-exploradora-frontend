<script setup>
  
</script>

<template>
  <main id="header">
    <div id="logo">
      <img src="../assets/logo.svg" />
    </div>
    <div id="appTitle">La Tribu Exploradora</div>
    <div id="user">
      <p>user</p>
      <img src="./icons/IconUser.vue" />
      <button id="logout"></button>
    </div>
  </main>
</template>

<style scoped>
main #header {
  background-color: var(--purple-dark);
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
#appTitle{
  font-family: 'Montserrat Alternates', sans-serif;
}

#user {
  justify-content: space-between;
}

#logout {
  border: none;
  width: 10vw;
  height: 2vh;
  border-radius: 10vh;
}
</style>
