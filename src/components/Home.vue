<template>
<v-app dark>
  <div id="home">
    <h1>{{ msg }}</h1>
    <p>
      We will help you organize and manage bookings for services you render.
    </p>
  </div>
</v-app>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
}
</style>
