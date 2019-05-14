<template>
<v-app dark>
  <div id="signin">
    <img class="edo-logo" src="../assets/Eto-bottom-tp.png">
    <h1>Sign In</h1>
  </div>

  <v-form>
    <v-container align-content-end>
      <v-text-field id="email" class="signin-tf" label="Email" outline>
      </v-text-field>
      <v-text-field id="password" class="signin-tf" label="password" outline>
      </v-text-field>
    </v-container>
  </v-form>

  <div class="buttons text-xs-center">
    <v-btn outline round>Sign in</v-btn>
  </div>
</v-app>
  
</template>

<script>
export default {
  name: 'signin'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.edo-logo{
  margin-top: 300px;
  width: 200px; 
  height: 200px;
}

.signin-tf {
  width: 400px;
  align-content: center;
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
