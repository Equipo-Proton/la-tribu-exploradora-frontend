<script>
import { ref } from "vue";
export default {
  setup() {
    const items = ref([
      { id: 0, title: "0", list: 1 },
      { id: 1, title: "1", list: 1 },
      { id: 2, title: "2", list: 1 },
      { id: 3, title: "3", list: 1 },
      { id: 4, title: "4", list: 1 },
      { id: 5, title: "5", list: 1 },
      { id: 6, title: "6", list: 1 },
      { id: 7, title: "7", list: 1 },
      { id: 8, title: "8", list: 1 },
      { id: 9, title: "9", list: 1 },
      { id: 10, title: "10", list: 1 },
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
  <div class="num-pad">
    <div @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div class="drop-zone">

      </div>
    </div>
    <div @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
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
  border-radius: 15px;
  border: 5px solid var(--base-color-purple);
  background-color: var(--base-color-white);
  font-family: var(--font-family-game);
  font-size: 4vw;
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
  min-width: 50px;
  min-height: 50px;
  border-radius: 50px;
  background-color: var(--base-color-orange);
  font-family: var(--font-family-game);
  font-size: 2vw;
  margin: auto;
}
</style>
