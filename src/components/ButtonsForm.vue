<script setup>

</script>
<template>
    <div class="flex-parent jc-center">
        <button type="button" class="ButtonLeft">Reiniciar Juego</button>
        <button type="button" class="ButtonRight">Terminar Juego</button>
    </div>
</template>

<style scoped>
.ButtonLeft {
    background-color: rgb(255, 183, 0);
    font-size: 30px;
    border: 0px;
    height: 50px;
    border-radius: 15px 15px 15px 15px;
    border-color: black;
    color: #fff;
    padding: auto;
}

.ButtonRight {
    background-color: red;
    font-size: 30px;
    border: 0px;
    height: 50px;
    border-radius: 15px 15px 15px 15px;
    border-color: black;
    margin: 60px;
    color: #fff;
    padding: auto;

}

.flex-parent {
    display: flex;
    align-items: center;
    top: 600px;

}

.jc-center {
    justify-content: center;
    margin: auto;
    padding: auto;
}

.ButtonLeft:hover {
    color: #fff;
    background-color: #fb6e16;
    border-color: #000000;
}
.ButtonRight:hover {
    color: #fff;
    background-color: #ae1302;
    border-color: #000000;
}
</style>



