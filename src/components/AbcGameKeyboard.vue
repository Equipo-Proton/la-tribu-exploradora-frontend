<script>
import { ref } from "vue";
export default {
  setup() {
    const items = ref([
      { id: 0, title: "a", list: 1 },
      { id: 1, title: "b", list: 1 },
      { id: 2, title: "c", list: 1 },
      { id: 3, title: "d", list: 1 },
      { id: 4, title: "e", list: 1 },
      { id: 5, title: "f", list: 1 },
      { id: 6, title: "g", list: 1 },
      { id: 7, title: "h", list: 1 },
      { id: 8, title: "i", list: 1 },
      { id: 9, title: "j", list: 1 },
      { id: 10, title: "k", list: 1 },
      { id: 11, title: "l", list: 1 },
      { id: 12, title: "m", list: 1 },
      { id: 13, title: "n", list: 1 },
      { id: 14, title: "ñ", list: 1 },
      { id: 15, title: "o", list: 1 },
      { id: 16, title: "p", list: 1 },
      { id: 17, title: "q", list: 1 },
      { id: 18, title: "r", list: 1 },
      { id: 19, title: "s", list: 1 },
      { id: 20, title: "t", list: 1 },
      { id: 21, title: "u", list: 1 },
      { id: 22, title: "v", list: 1 },
      { id: 23, title: "w", list: 1 },
      { id: 24, title: "y", list: 1 },
      { id: 25, title: "z", list: 1 },
    ]);
    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };
    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
    };
    return { getList, onDrop, startDrag };
  },
};
</script>

<template>
  <div class="keyboard">
    <div @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div class="drop-zone">
        <div
          v-for="item in getList(2)"
          :key="item.id"
          class="drop-el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    <div @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div class="drag-zone">
        <div
          v-for="item in getList(1)"
          :key="item.id"
          class="drag-el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="bot-buttons">
      <button>mayuscula</button>
      <button>Listo</button>
      <button>Borrar</button>
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
  border-radius: 15px;
  border: 5px solid var(--base-color-purple);
  background-color: var(--base-color-white);
  font-family: var(--font-family-game);
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
  min-width: 55px;
  min-height: 55px;
  border-radius: 10px;
  background-color: var(--base-color-purple);
  font-family: var(--font-family-game);
  font-size: 2vw;
  margin: auto;
}
.bot-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
