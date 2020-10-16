<template>

<div class="main-container">
    <div class="text-container">
        <div class="animate__animated animate__slideInLeft textbox" >LOREM IPSUM <br>DOLOR SIT AMET</div>
        <div class="animate__animated animate__slideInLeft textbox-lite">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </div>
        <div class="button-container">
            <button class="animate__animated animate__slideInDown buttonOne">BUY NOW</button>
            <button class="animate__animated animate__slideInDown buttonTwo">TRY FOR FREE</button>
        </div>
        <div class="background">
            <img class="background"  />
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    
}
</script>


<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.background{
    width:100%;
    height:45vw;
    background-image: url('../assets/save2.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.textbox{
    left: 8vw;
    position:absolute;
    text-align: left;
    margin-top:15vw;
    font-family: 'Raleway',sans-serif;
    font-weight:900;    
    color:white;    
    font-size:2.8vw;
     @media only screen and (max-width: 800px) {
      font-size:4vw;
  }
}

.textbox-lite{
    line-height: 1.7;
    width:37vw;
    left:8vw;
    font-size:0.93vw;
    position:absolute;
    text-align: left;
    margin-top:24.5vw;
    font-family:'Raleway',sans-serif;
    color:white;
    display:flex;
    justify-content: center;
}


.button-container{
    font-family: 'Raleway',sans-serif;
    font-weight: 600;
    font-weight: 700;
    font-size: 0.8em;
    color: #fff;
    box-shadow: 10px;;

}
.buttonOne{
    position:absolute;
    left:8vw;
    margin-top:32vw;
    font-size:0.8vw;
    background-color:#050422;
    color:white;
    border-radius:5px;
    padding: 0.75vw 1vw;
	border: 0;
    cursor: pointer;
    box-shadow: 5px 6px 10px 1px rgba(0,0,0,0.19);
  
    
      &:hover{
        background-color:white;
        color:#050422;
        
    }

}
.buttonTwo{
    position: absolute;
    left:18vw;
    margin-top:32vw;
    padding: 0.75vw 1vw;
    border-radius:5px;
    border: 0;
    font-size:0.8vw;
    color:black;
    background-color:white;
    cursor:pointer;
    box-shadow: 5px 6px 10px 1px rgba(0,0,0,0.19);

    &:hover{
        background-color:#050422;
        color:white;
    }


}

</style>