<!-- eslint-disable prettier/prettier -->
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

  data() {
    return {
      timer: null,
      lowercase: true,
      uppercase: false,
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
      list3: [
        { name: "A", id: 39 },
        { name: "B", id: 40 },
        { name: "C", id: 41 },
        { name: "D", id: 42 },
        { name: "E", id: 43 },
        { name: "F", id: 44 },
        { name: "G", id: 45 },
        { name: "H", id: 46 },
        { name: "I", id: 47 },
        { name: "J", id: 48 },
        { name: "K", id: 49 },
        { name: "L", id: 50 },
        { name: "M", id: 51 },
        { name: "N", id: 52 },
        { name: "Ñ", id: 53 },
        { name: "O", id: 54 },
        { name: "P", id: 55 },
        { name: "Q", id: 56 },
        { name: "R", id: 57 },
        { name: "S", id: 58 },
        { name: "T", id: 59 },
        { name: "U", id: 60 },
        { name: "V", id: 61 },
        { name: "W", id: 62 },
        { name: "X", id: 63 },
        { name: "Y", id: 64 },
        { name: "Z", id: 65 },
      ],
    };
  },
  beforeUnmount() {
    clearInterval(this.timer);
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

      await apiGame.sendWord(jsonData);

      alert("Has enviado la palabra");
    },
    deleteLetter() {
      this.list2.pop();
    },

    toggle() {
      if (this.lowercase && !this.uppercase) {
        this.lowercase = false;
        this.uppercase = true;
      } else {
        this.lowercase = true;
        this.uppercase = false;
      }
    },

    sort() {
      this.list3 = this.list3.sort((a, b) => a.id - b.id);
      this.list1 = this.list1.sort((a, b) => a.id - b.id);
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

    <div v-if="lowercase">
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
    </div>

    <div v-if="uppercase">
      <draggable
        class="drag-zone"
        :list="list3"
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
    </div>

    <rawDisplayer :value="list1" title="List 1" />

    <rawDisplayer :value="list2" title="List 2" />
    <div class="bot-buttons">
      <button
        v-if="lowercase"
        @click="toggle"
        type="button"
        class="mayus-button"
      >
        abc
      </button>
      <button
        v-if="uppercase"
        @click="toggle"
        type="button"
        class="mayus-button"
      >
        ABC
      </button>

      <button @click="sendWord" type="submit" class="ready-button">
        <img src="../assets/img/submitIcon.png" />
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
  cursor: grab;
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
  cursor: grab;
}
.drag-zone {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1vw;
  cursor: grab;
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
  cursor: grab;
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
  font-size: 150%;
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
