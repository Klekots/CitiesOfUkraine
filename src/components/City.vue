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
    font-size: 20px;
    font-weight: bold;
  }
  span{
    display: block;
    padding: 5px 0;
    margin: 8px 0 0;
  }
  .city{
    display: flex;
    min-width: 340px;
    background: white;
    padding: 15px 14px 15px 30px;
    margin: 0 auto 80px;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.2);
  }
  .name{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .about-wrap{
    display: flex;
  }
  .population, .square{
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 0 5px;
    margin: 18px 0;
    justify-content: flex-start;
    position: relative;
  }
  .square{
    text-align: center;
  }
  .population::after{
    content: "";
    display: block;
    width: 1px;
    height: 90%;
    background: black;
    position: absolute;
    right: 0;
    bottom: 1%;
  }

</style>