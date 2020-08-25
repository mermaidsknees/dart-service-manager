<template>
  <div class="bottomBar">
    <div class="logobox">
      <img class="logo" src="../assets/save.png" />
      <!-- <p style="color:white">Dart</p>
      <p style="font-weight:700; position:absolute; margin-left:4vw;">Service Manager</p> -->
    </div>
      <div class="about-us">
          <p>Privacy Policy</p>
          <span class="dot"></span>
          <p>About Us</p>
          <span class="dot"></span>
          <p>About us</p>
      </div>
         <div class="footer-nav">
          <p>Home</p>
          <p>Service</p>
          <p>Extension</p>
          <p>Pricing</p>
          <p>Help</p>
      </div>
            <div class="icons">
                <img class="hvr-grow" src="@/assets/Twitter-1.png">
                <img class="hvr-grow" src="@/assets/Facebook.png">
                <img class="hvr-grow" src="@/assets/GitHub.png">
                <img class="hvr-grow" src="@/assets/Dribbble.png">
                <img class="hvr-grow" src="@/assets/Behance.png">
      </div>
  </div>
</template>


<script>
export default {
  name: "bottomBar",
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.icons{
    position: absolute;
    margin-top:10vw;
    margin-left:80vw;
    width:10vw;
    display: flex;
    justify-content: space-between;
}
.icons img{
    height:20px;
    width:20px;
    color:white;

}
.about-us{
    display:flex;
    justify-content: space-between;
    width:20vw;
    position:absolute;
    margin-left:15vw;
    margin-top:10vw;
}
.about-us > p{
    color:gray;
    font-family: 'Raleway';
    font-weight:500;
    &:hover{
        color:white;
    }


}
.footer-nav{ 
    position: absolute;
    right:9vw;
    margin-top:6vw;
    width:25vw;
    display:flex;
    justify-content: space-between;


}
.footer-nav > p{
    color:white;
    font-family: 'Raleway';
    font-weight:600;
       &:hover{
        color:gray;
    }
}
.bottomBar {
  height: 15vw;
  background-color: #061e37;
}
.logo {
  width: 30px;
  height: 30px;
}
p {
  margin: 0;
  padding: 0;
}
.dot {
  height:5px;
  width:5px;
  margin: auto;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
}
.logobox {
  display: flex;
  height: 30px;
  position: absolute;
  margin-top: 5vw;
  left: 15vw;
  color: #ffffff;
  font-size: 15px;
  font-family: "Raleway";
  text-transform: uppercase;
  line-height: 15px;
  font-weight: 400;
}
  .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        transition-duration: 0.3s;
        transition-property: transform;
    }

    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
        transform: scale(1.3);
    }

</style>