<template>
<v-app dark>
  <div id="home">
    <img class="edo-logo" src="../assets/Eto-bottom-tp.png">
    <h1>Welcome to Eto.</h1>
    <p>
      We will help you organize and manage bookings for services you render.
    </p>
  </div>

  <div class="buttons text-xs-center">
    <router-link to="/signin">
      <v-btn outline round>Sign in</v-btn>
    </router-link>
    <router-link to="/signup">
      <v-btn outline round>Sign Up</v-btn>
    </router-link>
  </div>
</v-app>
  
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.edo-logo{
  margin-top: 300px;
  width: 200px; 
  height: 200px;
}

@media (max-width: 1920px){
  .edo-logo{
  margin-top: 200px;
  width: 170px; 
  height: 190px;
  }
}

@media (max-width: 768px){
  .edo-logo{
  margin-top: 150px;
  width: 170px; 
  height: 190px;
  }
}

h1 {
  color: white;
}
</style>
