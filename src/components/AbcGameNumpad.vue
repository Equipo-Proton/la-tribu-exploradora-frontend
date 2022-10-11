<script>
import draggable from "vuedraggable";
import { apiGame } from "../services/apiGame.js";

let idGlobal = 8;
export default {
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    draggable,
  },
  mounted: function () {
    this.timer = setInterval(() => {
      this.sort();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },

  data() {
    return {
      list1: [
        { name: "0", id: 28 },
        { name: "1", id: 29 },
        { name: "2", id: 30 },
        { name: "3", id: 31 },
        { name: "4", id: 32 },
        { name: "5", id: 33 },
        { name: "6", id: 34 },
        { name: "7", id: 35 },
        { name: "8", id: 36 },
        { name: "9", id: 37 },
        { name: "10", id: 38 },
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
    async sendNumber() {
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

      await apiGame.sendWord(jsonData);

      alert("Has enviado el número");
    },
    clearField() {
      this.list2 = [];
    },
    sort() {
      this.list1 = this.list1.sort((a, b) => a.id - b.id);
    },
  },
};
</script>

<template>
  <div class="num-pad">
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
    <div class="bot-buttons">
      <button type="submit" class="ready-button" @click="sendNumber">
        <img src="../assets/img/submitIcon.png" alt="" />
      </button>
      <button @click="clearField" type="button" class="delete-button">
        <img src="../assets/img/deleteIcon.png" alt="Borrar" />
      </button>
    </div>

    <rawDisplayer :value="list1" title="List 1" />

    <rawDisplayer :value="list2" title="List 2" />
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
  font-family: var(--font-family-secondary);
  margin: 1vw auto;
  cursor: grab;
  font-size: 2vw;
  font-weight: bolder;
}
.drag-zone {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vw;
  cursor: grab;
}
.drag-el {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.5vw;
  min-height: 4.5vw;
  border-radius: 50px;
  background-color: var(--base-color-orange);
  font-family: var(--font-family-secondary);
  font-size: 2vw;
  margin: auto;
  cursor: grab;
}
.bot-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw auto;
}
.ready-button,
.delete-button {
  border: none;
  border-radius: 1vw;
  padding: 1vw;
  font-weight: bold;
  font-family: var(--font-family-secondary);
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
