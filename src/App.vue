<template>
  <div id="app">
    <Navbar/>  
    <ImageBox/>
    <VerticalBar/>
    <Services/>
    <Customers/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ImageBox from './components/ImageBox.vue'
import VerticalBar from './components/VerticalBar.vue'
import Services from './components/Services.vue'
import Customers from './components/Customers.vue'

export default {
  name: 'App',
  components: {
    Navbar,Hero,ImageBox,VerticalBar,Services,Customers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
