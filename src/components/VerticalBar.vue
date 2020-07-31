<template>
    <div class="vertical-bar">
        <div class="blocks">
            <div class="block" style="background-color:#80d8ff;">
                <div>12000+ <br>Business</div>
                <img src='../assets/icon2.png'>
                </div>
            <div class="block" style="background-color:#b388ff;"><div>6000+ <br>Downloads</div><img src='../assets/icon4.png'></div>
            <div class="block" style="background-color:#82b1ff;"><div>30000+ <br>Free Installs</div><img src='../assets/icon3.png'></div>
            <div class="block" style="background-color:#ea80fc;"><div>40000+ <br>Pro Users</div><img src='../assets/icon1.png'></div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.blocks{
    width:100%;
    display:flex;
    color:white;
}
.block{
    width:25%;
    height:12vw;

    &:hover{
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.2);
    }
}
.block div{
    position:absolute;
    margin-top:4.8vw;
    margin-left:10vw;
    text-align: left;
    font-weight:700;
    font-family: 'Raleway', sans-serif;
}
.block img{
    width:80px;
    height:80px;
    display:flex;
    justify-content:center;
    margin-left:3vw;
    margin-top:3vw;
}
</style>