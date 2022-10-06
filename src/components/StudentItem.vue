<script>
import { apiUsers } from "../services/apiUsers.js";

export default {
  name: "StudentItem",

  data() {
    return {
      jsonData: {
        correct: false,
      },
      studentId: this.student.id,
    };
  },

  props: {
    student: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async sendGoodCorrection() {
      this.jsonData.correct = true;

      await apiUsers.sendCorrection(this.studentId, this.jsonData);

      alert("Has enviado una buena corrección");
    },

    async sendBadCorrection() {
      this.jsonData.correct = false;

      const response = await apiUsers.sendCorrection(
        this.studentId,
        this.jsonData
      );
      console.log(response);

      alert("Has enviado una mala corrección");
    },
  },
};
</script>

<template>
  <div class="student-box">
    <h2>{{ student.name }}</h2>
    <div class="word-container">
      <p class="text-center">{{ student.word }}</p>
    </div>
    <div class="studentIcons">
      <button v-on:click="sendGoodCorrection">
        <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
      </button>
      <button v-on:click="sendBadCorrection">
        <img src="../assets/img/redFinger.svg" alt="red Finger" />
      </button>
      <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
      <img src="../assets/img/restartWord.svg" alt="restart Word" />
    </div>
  </div>
</template>

<style scoped>
  button{
  background-color: transparent;
  border: none;
  }

  img button{
    width: 4vw;
  }
  .student-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 25vw;
}

.word-container {
  width: 20vw;
  height: 10vh;
  border-radius: 1vw;
  border: 0.3vw solid var(--color-border);
  background-color: var(--base-color-white);
}

.studentIcons {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: calc(100% / 2);
  height: calc(100% / 6);
}

img {
  display: inline-block;
  margin: 2vh;
  width: 3vw;
  height: 2vw;
  display: flex;
  align-content: center;
  align-items: center;
}
.studentIcons div {
  border-radius: 20px;
  text-align: center;
  border: 3px solid rgb(184, 184, 184);
  width: 300px;
  height: 60px;
  background-color: var(--base-color-white);
}
</style>
