<template>
    <div class="main">
            <h1>What our customers <br> have to say about us.</h1>
            <div class="a-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt ut labore et dolore magna</div>
            <button class="buttonOne">GET STARTED</button>
            <img id='arrow-up' src="../assets/arrow_up.png" @click="changeSliderUp()">
            <div class="sliderbox"  v-if="isShown[index]" v-for="(item,index) of itemArray" :key="item" >
                <div :class="{'animate__animated animate__pulse':item.slideDirection}" class="container">
                    <h2>{{item.name}}</h2>
                    <p>{{item.description}}</p>
                </div>
                <img :class="{'animate__animated animate__zoomIn':item.slideDirection }" class="clip-image" v-bind:src="getImageAdress(index)">
            </div>
            <img id='arrow-down' src="../assets/down.png" @click="changeSliderDown()">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            slideDirection:['','','','',''],
            isShown:[false,true,true,false,false],
            itemArray:[
                {
                    name:'Xulescu Cineva', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna',active:false
                },
                 {
                    name:'Xulescu Cineva', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna',active:true
                },
                {
                    name:'Xulescu Cineva', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna',active:true,  
                },
                {
                    name:'Xulescu Cineva', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna',active:false   
                },
                {
                    name:'Xulescu Cineva', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna',active:false   
                }
            ]
        }
    },  
    methods:{
        getImageAdress(index){
            return require('../assets/clip'+ index + '.jpg')
        },
        changeSliderDown(){
            let lastTrue = this.itemArray.map(e => e.active).lastIndexOf(true);
            let firstTrue = this.itemArray.findIndex(i=>i.active == true);
            if(this.itemArray[lastTrue-2] && this.itemArray[lastTrue]){
                this.itemArray[lastTrue].active=false;
                this.isShown.splice(lastTrue,1,false);
                this.itemArray[lastTrue-2].active=true;
                this.isShown.splice(lastTrue-2,1,true)
                this.itemArray[lastTrue].slideDirection='';
                this.itemArray[lastTrue-1].slideDirection='isShown[index-1]';
            }
         this.itemArray.map(e => e.slideDirection == '')

        },
        changeSliderUp(){
            let firstTrue = this.itemArray.findIndex(i=>i.active == true)
            if(this.itemArray[firstTrue] && this.itemArray[firstTrue+2]){

                this.itemArray[firstTrue].active=false;
                this.isShown.splice(firstTrue,1,false);
                this.itemArray[firstTrue+2].active=true;
                this.isShown.splice(firstTrue+2,1,true)
                this.itemArray[firstTrue].slideDirection='';
                this.itemArray[firstTrue+1].slideDirection='isShown[index+1]';
            }
            this.itemArray.map(e => e.slideDirection == '')
        }
    },
    watch:{
       isShown: function(){
           return (isAnimation == true);
       }
    }
    
}
</script>

<style scoped lang="scss">
.background{
    position: relative;
    width:100%;
    height:100%;
}

.sliderbox img{
    height:5vw;
    width:5vw;
    clip-path: circle(50% at 50% 50%);

}
.container h2{
    font-family: 'Raleway';
    font-weight:700;
    font-size:1.05vw;
    margin-right:30vw;
}
.container p{
    font-family: 'Raleway';
    font-weight:400;
    font-size:0.85vw;
    text-align:left;
    margin-left:.8vw;
    font-style: italic;
}
#arrow-up{
    height:2vw;
    width:2vw;
    position:absolute;
    margin-left:24vw;
    margin-top:2vw;
}
#arrow-down{
    height:2vw;
    width:2vw;
    position:absolute;
    margin-left:24vw;
    margin-top:5vw;
}
.clip-image{
    margin-right:4vw;
    margin-top:8vw;
    overflow:auto;
    --animate-duration: 0.6s;
}
.main{
    overflow:hidden;
    height:37vw;
    background-color: #008080;
    background-image: url('../assets/bg_customers.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

h1{
    color:white;
    font-family: 'Raleway';
    font-size:2.2vw;
    font-weight:600;
    margin: 0 auto;
    position:absolute;
    margin-top:11vw;
    margin-left:4.9vw;
}
.a-text{
    color:white;
    position: absolute;
    font-family: 'Raleway';
    font-size:0.9vw;
    font-weight:400;
    margin-left:5vw;
    margin-top:17.5vw;
    text-align:left;
}
.container{
    border-radius:7px;
    -webkit-box-shadow: 10px 10px 23px -13px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 23px -13px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 23px -13px rgba(0,0,0,0.75);
    overflow: visible;
    height:7vw;
    width:40vw;
    background-color:white;
    position: absolute;
    margin-top: 7vw ;
    padding:1vw;
    margin-left:53vw;
    --animate-duration: 0.6s;

}

.buttonOne{
    position:absolute;
    left:5.4vw;
    margin-top:22vw;
    background-color:#050422;
    color:white;
    border-radius:5px;
    padding: 0.75rem 1rem;
	border: 0;
    cursor: pointer;
    box-shadow: 5px 6px 10px 1px rgba(0,0,0,0.19);
  
    
      &:hover{
        background-color:white;
        color:#050422;
        
    }
}

</style>