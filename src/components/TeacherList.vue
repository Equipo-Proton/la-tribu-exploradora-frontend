import { RouterView } from 'vue-router';
<script setup></script>
<template>
  <main>
    <h3>Estudiantes</h3>
    <div class="teachersBox">
      <div id="userManagement">
        <div class="teacherName">Nombre</div>
        <div><button id="editTeacher">Editar</button></div>
        <div><button id="deleteTeacher">Eliminar</button></div>
      </div>
    </div>
    <div>
      <button id="newTeacher">Añadir profe</button>
    </div>
  </main>
  <RouterView />
</template>
<style scoped>

.teachersBox {
  width: 55vw;
  height: 70vh;
  background: #ffffff;
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
}
#userManagement{
    padding: 2.5vh 1.5vw 2.5vh 1.5vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
button, .teacherName{
    border: none;
    border-radius: 2vh;
    height: 7vh;
    padding: 2vw;
    display: flex;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 2.5vh;
}

.teacherName {
    background-color:var(--base-color-orange);
}

#editTeacher {
    background-color:var(--base-color-blue);
}
#deleteTeacher {
    background-color:var(--color-warning)
}

#newTeacher{
    background-color: var(--base-color-green);
    color: var(--font-color);
    margin: auto;
    margin-top: 3vh;
    margin-bottom: 3vh;

}

</style>
