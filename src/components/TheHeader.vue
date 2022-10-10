<script>
import { apiAuth } from "../services/apiAuth.js";
import { apiGame } from "../services/apiGame";

export default {
  name: "TheHeader",

  data() {
    return {
      obj: {
        play: false,
      },
      wordData: {
        word: null,
      },
      correctionData: {
        correction: null,
      },
      name: null,
    };
  },

  methods: {
    async logout() {
      const noSuperAdmin = localStorage.getItem("superAdmin");

      if (noSuperAdmin != "1") {
        await apiGame.changePlayPermission(this.obj);
        await apiGame.wordNull(this.wordData);
      }

      await apiAuth.logout();

      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("superAdmin");

      this.$router.push("/");
    },

    headerName() {
      const name = localStorage.getItem("name");

      this.name = name;
    },
  },

  created() {
    this.headerName();
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
      <div class="text">
        <div><img src="../assets/icons/iconUser.svg" /></div>
        <p v-if="name != undefined">{{ name }}</p>
        <p v-if="name === null">¡Hola!</p>
      </div>
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

.logo img {
  height: 12vh;
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

@media only screen and (orientation: portrait) {
  .appTitle {
    font-weight: 700;
    font-size: 1.75vh;
    color: var(--base-color-orange);
    width: 40vw;
  }
  .logo img {
    height: 10vh;
  }
  #logout {
  border: none;
  width: 9vw;
  height: 4vh;
  border-radius: 10vh;
  background-color: var(--purple-dark);
}

}
</style>
