<template>
  <div class="services">
    <div class="textbox">
      <h1>Services</h1>
      <div
        style="font-size:0.95rem;font-weight:400;margin-top:0.9vw;width:39vw;color:gray"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br></div>
    </div>
    <div @click="slideAnimation(index)" v-for="(item,index) of itemArray" :key="item" class="service-box">
      <div :class="{active:isActive[index]}" class="service-item">
        <div class="service-text">{{item.title}}</div>
        <div class="image"><img v-bind:src="getImgAdress(index)"/></div>
        <div class="image-two" @click="slideAnimation(index)"><img style="width:20px;height:20px;" src="../assets/arrow_down.png" /></div>
        <div class="box">
          <div class="inner-text fade-in" v-if="isActive[index]">  {{item.description}} </div>
          <img id="mock-image" class="fade-in" v-if="isActive[index]" src="../assets/mock-image.jpg">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "services",
  data() {
    return {
      itemArray:[
        {title:"STATISTICS",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
        {title:"INBOX",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {title:"TEAM",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {title:"SETTINGS",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {title:"FEED",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
        ],
        isActive:[false,false,false,false,false]
    };
  },
  methods:{
    getImgAdress(index){
      return require('../assets/pic'+ index+ '.png')
    },
    slideAnimation(index){
      let value = !this.isActive[index]
      this.isActive.splice(index,1,value)
      
      
    }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0 auto;
}
.services {
  margin-top: 5vw;
  margin-bottom:5vw;
}
.textbox {
  margin-top: 3vw;
  font-family: "Raleway", sans-serif;
}
.textbox h1 {
  font-size: 2.3em;
  font-weight: 600;
  color: black;
}
.service-box {
  margin-top: 1.5vw;
  
}
.service-text {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  position: absolute;
  margin-top: 1.25vw;
  margin-left: 5vw;
  font-size: 0.7em;
}
.service-item {
  height: 3vw;
  width: 50vw;
  box-shadow: 5px 6px 10px 1px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  transition:height 0.6s;
}
.image {
  position: absolute;
  margin-left:2vw;
  margin-top:1vw;
}
.image img{
    width:20px;
    height:20px;
}

.image-two{
  position:absolute;
  margin-top:0.8vw;
  margin-left:47vw;
}

.active{
  height: 25vw;
  width: 50vw;
  box-shadow: 5px 6px 10px 1px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  transition: height 0.6s;
}
.inner-text{
  font-family: "Raleway", sans-serif;
  position:absolute;
  width:27vw;
  margin-top:5.8vw;
  margin-left:19vw;
  font-size:0.8em;
  text-align:left;
}
#mock-image{
  height:15vw;
  width:13vw;
  margin-right:30vw;
  margin-top:6vw;
  border-radius:3px;
  transition-delay: 1s;
}



.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.25s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

</style>