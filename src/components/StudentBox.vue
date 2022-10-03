<script setup>
import TheHeader from './TheHeader.vue';

</script>

<template>
    <TheHeader/>
    <h1>Palabra Secreta</h1>
    <main>  
        <div class="secretWord">
            <div><h2>Valnalon</h2></div>
        </div>
        <div class="StudentCell">
            <div class="studentBox">
                <div><h2> Tribu Ejemplo</h2> </div>
            </div>
            <div class="studentIcons">
                
                <img src="../assets/img/greenFinger.svg" alt="Green Finger" />
                <img src="../assets/img/redFinger.svg" alt="red Finger" />
                <img src="../assets/img/orangeEye.svg" alt="orange Eye" />
                <img src="../assets/img/restartWord.svg" alt="restart Word" />
               
            </div>
        </div>

        <div class="gameButtons">

        </div>
    </main>
</template>


<style scoped>
    h1{
        top: 20px;
        text-align: center;
        
    }
    h2{
        bottom:50px;
    }
    .secretWord{
        top:20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .secretWord div{
        border-radius: 15px 15px 15px 15px;
        text-align: center;
        border: 2px solid rgb(255, 170, 22);
        width: 730px;
        height: 51px;
        background-color: #ffffff;
    }
    .secretWord div h2{
        top: 0px;
    }
    .studentBox{
        top: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .studentBox div{
        border-radius: 20px 20px 20px 20px;
        text-align: center;
        border: 3px solid rgb(184, 184, 184);
        width: 300px;
        height: 100px;
        background-color: #ffffff;
    }
    .studentIcons{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        
    }
    img{
        display: inline-block;
        margin: 20px;
        top: 140px;


    }
    .studentIcons div{
        border-radius: 20px;
        text-align: center;
        border: 3px solid rgb(184, 184, 184);
        width: 300px;
        height: 60px;
        top: 160px;
        background-color: #ffffff;
    }
 
    /*
    div{
        display: flex;
        justify-items: center;
        justify-content: center;
        border-radius: 20px 20px 20px 20px;
        height: 60px;
        width: 740px;
        background-color: rgb(226, 255, 255);

    }
    #secretWord{
        display: flex;
        align-items: center;
        justify-content: center;

    }
    #grid { 
        top: 360px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:9vw;
    }
    #grid > div {
        font-size: 3vw;
        padding: .5em;
        background: rgb(239, 234, 205);
        text-align: center;
    }
    */
</style>