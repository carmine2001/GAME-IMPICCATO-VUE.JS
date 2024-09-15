<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
export default {
  components: {
    HomePage
  }
  
}
</script>

<style>
  *{
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 0;
    margin: 0;
  }

  .message-error{
    color: red;
  }
</style>

<style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }
</style>