<script>
import draggable from "vuedraggable";
import { apiUsers } from "../services/apiUsers.js";

let idGlobal = 8;
export default {
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: "a", id: 1 },
        { name: "b", id: 2 },
        { name: "c", id: 3 },
        { name: "d", id: 4 },
        { name: "e", id: 5 },
        { name: "f", id: 6 },
        { name: "g", id: 7 },
        { name: "h", id: 8 },
        { name: "i", id: 9 },
        { name: "j", id: 10 },
        { name: "k", id: 11 },
        { name: "l", id: 12 },
        { name: "m", id: 13 },
        { name: "n", id: 14 },
        { name: "ñ", id: 15 },
        { name: "o", id: 16 },
        { name: "p", id: 17 },
        { name: "q", id: 18 },
        { name: "r", id: 19 },
        { name: "s", id: 20 },
        { name: "t", id: 21 },
        { name: "u", id: 22 },
        { name: "v", id: 23 },
        { name: "w", id: 24 },
        { name: "x", id: 25 },
        { name: "y", id: 26 },
        { name: "z", id: 27 },
      ],
      list2: [],
    };
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    cloneLetter({ name }) {
      return {
        id: idGlobal++,
        name: ` ${name}`,
      };
    },

    async sendWord() {
      const dataObject = this.list2;

      let dataLetters = [];
      dataObject.forEach((letterObj) => {
        const letter = letterObj.name;

        dataLetters.push(letter);
      });

      let dataWord = dataLetters.toString("");
      dataWord = dataWord.replace(/, /g, "");

      const jsonData = {
        word: dataWord,
      };

      await apiUsers.sendWord(jsonData);

      alert("Has enviado la palabra");
    },
    deleteLetter() {
      this.list2.pop();
    },
  },
};
</script>

<template>
  <div class="keyboard">
    <draggable
      class="drop-zone"
      :list="list2"
      group="people"
      @change="log"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="drop-el">
          {{ element.name }}
        </div>
      </template>
    </draggable>

    <draggable
      class="drag-zone"
      :list="list1"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :clone="cloneLetter"
      @change="log"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="drag-el">
          {{ element.name }}
        </div>
      </template>
    </draggable>

    <rawDisplayer :value="list1" title="List 1" />

    <rawDisplayer :value="list2" title="List 2" />
    <div class="bot-buttons">
      <button type="button" class="mayus-button">ABC</button>
      <button v-on:click="sendWord" type="submit" class="ready-button">
        ¡Listo!
      </button>
      <button @click="deleteLetter" type="button" class="delete-button">
        <img src="../assets/img/deleteIcon.png" alt="Borrar" />
      </button>
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
.drop-el {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5vw;
  min-height: 7vh;
  border-radius: 1vw;
  background-color: var(--base-color-purple);
  font-family: var(--font-family-game);
  font-size: 2vw;
}
.drag-zone {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1vw;
}
.drag-el {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5vw;
  min-height: 7vh;
  border-radius: 1vw;
  background-color: var(--base-color-purple);
  font-family: var(--font-family-game);
  font-size: 2vw;
  margin: auto;
}
.bot-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw auto;
}

.mayus-button,
.ready-button,
.delete-button {
  border: none;
  border-radius: 1vw;
  min-width: 10vw;
  padding: 1vw;
  font-weight: bold;
  font-family: var(--font-family-secondary);
}

.mayus-button {
  background-color: var(--base-color-blue);
}

.ready-button {
  background-color: var(--base-color-green);
  color: var(--base-color-white-2);
}

.delete-button {
  background-color: var(--base-color-orange);
}
img {
  height: 2vw;
}
</style>
