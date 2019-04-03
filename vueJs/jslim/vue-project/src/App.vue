<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import img1 from './components/img/img1.jpeg'
import img2 from './components/img/img2.jpeg'
import img3 from './components/img/img3.jpeg'
import img4 from './components/img/img4.jpeg'
import img5 from './components/img/img5.jpeg'
import img6 from './components/img/img6.jpeg'


export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
