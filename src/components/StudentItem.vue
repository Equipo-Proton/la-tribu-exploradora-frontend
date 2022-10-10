<script>
import { apiGame } from "../services/apiGame.js";

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

      await apiGame.sendCorrection(this.studentId, this.jsonData);

      alert("Has enviado una buena corrección");
    },

    async sendBadCorrection() {
      this.jsonData.correct = false;

      const response = await apiGame.sendCorrection(
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
      <div class="fingers">
        <button v-on:click="sendGoodCorrection">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
        </button>
        <button v-on:click="sendBadCorrection">
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
        </button>
      </div>
      <div class="options">
        <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
        <img src="../assets/img/restartWord.svg" alt="restart Word" />
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
}

img button {
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
  display: flex;
  align-items: center;
  width: 20vw;
  height: 10vh;
  border-radius: 1vw;
  border: 0.3vw solid var(--color-border);
  background-color: var(--base-color-white);
}

.studentIcons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 5vh;
}
.fingers {
  display: flex;
}

.options {
  display: flex;
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

p {
  margin: auto;
}

@media only screen and (orientation: portrait) {
  .word-container {
    width: 20vw;
    height: 5vh;
  }
  .studentIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
  }

  .fingers {
    display: flex;
    justify-content: center;
  }
  .fingers img {
    height: 2vh;
  }

  .options {
    display: flex;
    margin-top: -2vh;
  }
  .options img {
    display: flex;
    height: 2vh;
  }
}
</style>
