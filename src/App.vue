<template>
<v-app dark>
  <div id="app">
    <router-view/>
  </div>
</v-app>
</template>

<script>
import Home from './components/Home.vue'
import SignIn from './components/signin.vue'
import SignUp from './components/signup.vue'

export default {
  name: 'app',
  components: {
    /* eslint-disable */
    Home,
    SignIn,
    SignUp
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

</style>