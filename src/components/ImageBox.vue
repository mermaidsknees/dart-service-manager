<template>
    <div class="imagebox">
        <div class="textbox">
            <div style="font-size:2.3em;font-weight:600;color:black;">Easy & Useful</div>
            <div style="font-size:1.1rem;font-weight:500;margin-top:0.6vw;color:gray">Project Management Tool</div>
            <div style="font-size:0.95rem;font-weight:400;margin-top:0.9vw;width:39vw;color:gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
        </div>
        <div class="icons-container">
            <div class="flexbox">
                <img class="hvr-grow" src="../assets/img3.png">
                <img class="hvr-grow" src="../assets/img2.png">
                <img class="hvr-grow" src="../assets/img1.png">
            </div>
            <div class="flexbox-text">
                <div> 
                    <h1>Title Goes Here</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                <div><h1>Title Goes Here</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                <div> <h1>Title Goes Here</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            </div>
        </div>
        <button>GET STARTED</button>
    </div>
</template>

<script>
export default {
    name:'imagebox',
    data(){
        return{

        }
    }
}
</script>


<style scoped lang="scss">
    *{
        font-family: 'Raleway',sans-serif;
        margin: 0 auto;
    }
    button{
        margin-top:4vw;
        margin-bottom:4vw;
        background-color:#1de9b6;
        color:white;
        border-radius:5px;
        padding: 0.75rem 1rem;
        border: 0;
        cursor: pointer;
        box-shadow: 5px 6px 10px 1px rgba(0,0,0,0.19);

        &:hover{
            background-color:black;
        }
    }
    .imagebox{
        margin-top:6vw;
        margin-bottom:2vw;
    }
    .icons-container{
        width:100%;
        margin-top:8vw;
    }
    .icons-container img{
        width:80px;
        height:80px; 
    }
    .flexbox{
        display:flex;
    }
    .flexbox-text{
        display:flex;
        font-weight:400;
    }
    .flexbox-text div{
        font-size:0.8em;
        width:24vw;
        height:10vw;
    }
    .flexbox-text h1{
        font-size:1.15em;
        margin-top:2vw;
        margin-bottom:0.6vw;
    }
    /* Grow */
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
        transform: scale(1.1);
    }
</style>