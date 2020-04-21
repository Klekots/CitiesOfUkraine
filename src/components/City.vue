<template>
  <div class="city">
    <span>місто</span>
    <p class="name">{{name}}</p>
    <div class="about-wrap">
      <div class="population">
        <span>населення</span>
        <p>{{population | thousand}}</p>
      </div>
      <div class="square">
        <span>площа</span>
        <p>{{square}} км&sup2;</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "City",
    data(){
      return {
      }
    },
    props: {
      name: String,
      population: Number,
      square: Number
    },
    filters:{
      thousand(data){
        return `${Math.round(data/1000)} тис`;
      }
    }
  }
</script>

<style scoped>
  p{
    margin: 0;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  span{
    display: block;
    padding: 0 5px;
    margin-bottom: 5px;
  }
  .city{
    display: flex;
    min-width: 30%;
    background: white;
    padding: 20px;
    margin: 10px 15px;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.2);
  }
  .name{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .about-wrap{
    display: flex;
  }
  .population, .square{
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 0 5px;
    justify-content: center;
    position: relative;
  }
  .population::after{
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: black;
    position: absolute;
    right: 7%;
  }

</style>