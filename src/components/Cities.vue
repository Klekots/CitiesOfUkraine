<template>
  <div class="cities">
    <City v-for="city in cities"
          :key="city.id"
          :name="city.name"
          :population="city.population"
          :square="city.square"
    ></City>
  </div>
</template>

<script>
  import City from "./City";

  export default {
    name: "Cities",
    components: {
      City
    },
    computed:{
      cities(){
        return this.$store.getters.filteredCities;
      }
    }
  }
</script>

<style scoped>
  .cities{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 992px) {
    .cities{
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1200px) {
    .cities{
      width: 80%;
      margin: 0 auto;
    }
  }
</style>