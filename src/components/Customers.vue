<template>
    <div class="main">
        <div class="left">
            <h1>What our customers <br> have to say about us.</h1>
            <div class="a-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt ut labore et dolore magna</div>
            <button>GET STARTED</button>
        </div>
        <div class="right">
            <div class="slider">
                <div class="slidebox"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.main{
    height:30vw;
    background-color: #008080;
  

}
h1{
    color:white;
    font-family: 'Raleway';
    font-weight:600;
    margin: 0 auto;
    position:absolute;
    margin-top:9vw;
    margin-left:5vw;
}
.a-text{
    color:white;
    position: absolute;
    font-family: 'Raleway';
    font-size:0.9em;
    font-weight:500;
    margin-left:5vw;
    margin-top:15.5vw;
    text-align:left;
}
.slidebox{
    height:20vw;
    width:20vw;
    position:relative;
    background-color:white;
    margin-bottom:10vw;
}
button{
    position: relative;
    margin-top:21vw;
    margin-right:79vw;
    background-color:#050422;
    color:white;
    border-radius:5px;
    padding: 0.75rem 1rem;
    border: 0;
    font-weight:500;
    cursor: pointer;
    box-shadow: 5px 6px 10px 1px rgba(0,0,0,0.19);

    &:hover{
        background-color:white;
        color:#050422;

    }
}
</style>