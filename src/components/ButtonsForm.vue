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
    height: 60px;
    border-radius: 9px 9px 9px 9px;
    border-color: black;
    padding: auto;
}

.ButtonRight {
    background-color: red;
    font-size: 30px;
    border: 0px;
    height: 60px;
    border-radius: 9px 9px 9px 9px;
    border-color: black;
    margin: 6px;
    padding: auto;

}

.flex-parent {
    display: flex;
    top: 600px;

}

.jc-center {
    justify-content: center;
    margin: auto;
    padding: auto;
}

.ButtonLeft:hover {
    color: #fff;
    background-color: #ffbe45;
    border-color: #000000;
}
.ButtonRight:hover {
    color: #fff;
    background-color: #ff5b49;
    border-color: #000000;
}
</style>



