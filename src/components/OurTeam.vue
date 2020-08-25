<template>
	<div class="main">
		<h1>Our Team</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem iusto magna</p>
		<div v-for="(item,index) of itemArray" :key="item" class="imagebox">
			<img :class="{isCenter:isCenter[index]}" v-bind:src="getImageAdress(index)" />
		</div>
		<div class="infobox">
			<p>Somebody Something</p>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		</div>
			<div class="icons">
				<img class="hvr-grow" src="@/assets/Twitter-1.png" />
				<img class="hvr-grow" src="@/assets/Facebook.png" />
				<img class="hvr-grow" src="@/assets/GitHub.png" />
				<img class="hvr-grow" src="@/assets/Dribbble.png" />
				<img class="hvr-grow" src="@/assets/Behance.png" />
			</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCenter: [0, 1, 0],
			itemArray: [
				{ name: "Xulescu Altcineva" },
				{ name: "Xulescu Altcineva" },
				{ name: "Xulescu Altcineva" },
			],
		};
	},

	methods: {
		getImageAdress(index) {
			return require("../assets/clip" + index + ".jpg");
		},
	},
};
</script>

<style scoped>
* {
	font-family: "Raleway";
}

.main > h1 {
	margin-top: 3vw;
	color: black;
	font-size: 2.3em;
	font-weight: 600;
	color: black;
}
.infobox {
	padding:3vw;
}

.infobox > p:first-child {
	font-size: 1.2em;
	font-weight: 700;
	color: #061e37;
}
.infobox > p:nth-child(2) {
	/* font-weight:400; */
	width: 42vw;
	color: gray;
	margin: 0 auto;
    font-size:1.05em;
}
.main > p {
	width: 30vw;

	margin: 0 auto;
	color: gray;
}

.imagebox {
	margin-top: 3vw;
	/* margin:0 auto; */
	/* height:2vw; */
	display: inline-flex;
	flex-direction: row;

	/* flex-flow: row wrap; */
}

.imagebox > img {
	height: 7vw;
	width: 7vw;
	clip-path: circle(50% at 50% 50%);
	-webkit-box-shadow: 10px 10px 37px -12px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 37px -12px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 37px -12px rgba(0, 0, 0, 0.75);
    border:1px solid white
}

.icons{
    /* position: absolute; */
    /* margin-top:10vw;
    margin-left:80vw; */
    margin-top:2vw;
    width:10vw;
    display: flex;
    margin: auto;
    justify-content: space-between;
}
.icons img{
    height:20px;
    width:20px;
    color:white;

}

.isCenter {
	height: 8vw;
	width: 8vw;
}
</style>