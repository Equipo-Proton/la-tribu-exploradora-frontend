<script>
import { apiAuth } from "../services/apiAuth.js";
import { apiUsers } from "../services/apiUsers";

export default {
  name: "TheHeader",

  data() {
    return {
      obj: {
        play: false,
      },
    };
  },

  methods: {
    async logout() {
      const noSuperAdmin = localStorage.getItem("superAdmin");

      if (noSuperAdmin != "1") {
        await apiUsers.play(this.obj);
      }

      await apiAuth.getLogout();

      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("superAdmin");

      this.$router.push("/");
    },
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.svg" />
    </div>
    <div class="appTitle">AÑA: añerando, la Tribu Exploradora</div>
    <div class="user">
      <div>
        <p>¡Hola!</p>
      </div>
      <div><img src="../assets/icons/iconUser.svg" /></div>
      <div><button id="logout" v-on:click="logout">Salir</button></div>
    </div>
  </header>
</template>

<style scoped>
@import "../assets/main.css";

header {
  background-color: var(--base-color-purple);
  width: 100%;
  height: 15vh;
  justify-content: space-around;
}

img #logo {
  width: 100%;
  height: 95%;
}
header,
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.appTitle {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 3vh;
  color: var(--base-color-orange);
}

.user p,
#logout {
  color: var(--base-color-white);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 1.5vh;
}

.user div {
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
