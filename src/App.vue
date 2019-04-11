<template>
<v-app dark>
  <div id="app">
    <img class="edo-logo" src="./assets/Eto-bottom-tp.png">
    <Home msg="Welcome to Eto."/>
  </div>
</v-app>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0d0e14;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.edo-logo{
  margin-top: 300px;
  width: 200px; 
  height: 200px;
}

@media (max-width: 768px){
  .edo-logo{
  margin-top: 150px;
  width: 170px; 
  height: 190px;
  }
}
</style>