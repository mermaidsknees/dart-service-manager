<template>
  <div class="root">
    <div class="container">
        <img class="logo" src="../assets/save.png" />
      <div class="logo-container">
      </div>
      <div class="nav-items">
        <div class="nav-item" v-for="navItem in navItems" :key="navItem">{{navItem}}</div>
      </div>
      <button class="sign-up">Sign up</button>
    </div>
    <Hero/>
  </div>
</template>

<script>
import Hero from "./Hero";

export default {
  name: "HelloWorld",
  components: {
    Hero,
  },
  data() {
    return {
      navItems: ["Home", "Service", "Extension", "Pricing", "Help"],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
  margin: 0 auto;
}

.logo {
  margin-top: 1.3vw;
  margin-right:2vw;
  width: 29px;
  height: 27px;

}

.sign-up {
  font-family: "Raleway";
  font-weight: 400;
  color: white;
  border-radius: 6px;
  margin-top: 15px;
  margin-bottom: 5px;
  border: 2px solid white;
  background-color: transparent;
  align-content: center;

  &:hover {
    background-color: white;
    color: gray;
  }
}

.nav-items {
  margin-right:15vw;
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav-item {
  margin-top: 2em;
  color: white;
  cursor:pointer;

  &:hover{
    color:black;
  }
}
.container {
  display: flex;
  flex-direction: row;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 0.85em;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  height: 50px;
  background-color: transparent !important;
  position: absolute;
  // background-color:#42b983;
}
</style>
