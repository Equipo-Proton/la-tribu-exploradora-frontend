<script setup>
import TheHeader from "./TheHeader.vue";
import ButtonsForm from "./ButtonsForm.vue";
</script>

<template>
  <TheHeader />

  <main>
    <div class="secret-word">
      <label for="name"><b>PALABRA SECRETA</b></label>
      <input
        type="text"
        placeholder="Introduce la palabra secreta"
        name=""
        id="name"
      />
    </div>
    <div class="student-container">
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
      <div class="student-box">
        <h2>TRIBU</h2>
        <div class="word-container"></div>
        <div class="studentIcons">
          <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
          <img src="../assets/img/redFinger.svg" alt="red Finger" />
          <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
          <img src="../assets/img/restartWord.svg" alt="restart Word" />
        </div>
      </div>
    </div>
  </main>
  <ButtonsForm></ButtonsForm>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1vw;
}
.secret-word {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;
}

label {
  font-size: 1.5vw;
}
input {
  width: 30vw;
  height: 6vh;
  border: 0.2vw solid var(--base-color-orange);
  border-radius: 0.8vw;
  text-align: center;
  font-size: 1vw;
}
.secret-word div {
  border-radius: 15px 15px 15px 15px;
  text-align: center;
  border: 2px solid var(--base-color-orange);
  width: 730px;
  height: 51px;
  background-color: var(--base-color-white);
}
.student-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90vw;
  height: 70vh;
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
  width: calc(100% / 6);
  height: calc(100% / 6);
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
