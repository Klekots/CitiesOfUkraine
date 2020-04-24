<template>
  <div id="app">
    <div class="main-wrap">
      <Header/>
      <Tabs/>
      <Cities v-if="isLoading"/>
      <Spinner v-else/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Cities from "./components/Cities";
import Spinner from "./components/Spinner";

export default {
  name: 'App',
  data(){
    return {

    }
  },
  computed: {
    isLoading(){
      return this.$store.state.isLoading;
    }
  },
  components: {
    Header,
    Tabs,
    Cities,
    Spinner
  },
  created() {
    this.$store.dispatch('loadCities');
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  #app{
    font-family: 'Roboto', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;

  }
  body{
    background: url("./assets/images/map.svg") no-repeat center center fixed;
    background-size: 62%;
  }
  h1, p{
    margin: 0;
    padding: 0;
  }

  .main-wrap{
    display: flex;
    width: 62%;
    height: 100vh;
    margin: 0 auto;
    flex-direction: column;

  }
</style>

