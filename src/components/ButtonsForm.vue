<script setup>

</script>
<template>
    <div class="flex-parent jc-center">
        <button type="button" class="ButtonLeft">Alumno</button>
        <button type="button" class="ButtonRight">Profesor</button>
    </div>
</template>

<style scoped>
.ButtonLeft {
    background-color: var(--base-color-purple);
    font-size: 25px;
    border: 1px solid;
    border-radius: 9px 9px 9px 9px;
    border-color: black;
    padding: auto;
}

.ButtonRight {
    background-color: var(--base-color-purple);
    font-size: 25px;
    border: 1px solid;
    border-radius: 9px 9px 9px 9px;
    border-color: black;
    margin: 6px;
    padding: auto;

}

.flex-parent {
    display: flex;
    top:60px

}

.jc-center {
    justify-content: center;
    margin: auto;
    padding: auto;
}

.ButtonLeft:hover {
    color: #fff;
    background-color: #ab09d0;
    border-color: #000000;
}
.ButtonRight:hover {
    color: #fff;
    background-color: #ab09d0;
    border-color: #000000;
}
</style>



