<template>
  <div class="tabs-wrap">
    <ul>
      <li type="name"
          :class="active === 'name' ? 'active' : ''"
          @click="changeSortStatus($event)"
      >за назвою</li>
      <li type="population"
          :class="active === 'population' ? 'active' : ''"
          @click="changeSortStatus($event)"
      >за населенням</li>
      <li type="square"
          :class="active === 'square' ? 'active' : ''"
          @click="changeSortStatus($event)"
      >за площею</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
    methods: {
      changeSortStatus(e){
        this.$store.commit('SET_SORTING_TYPE', e.target.type);
      }
    },
    computed:{
      active(){
        return this.$store.state.sortBy;
      }
    }
  }
</script>

<style scoped>
  .tabs-wrap{
    width:100%;
    margin: 2px auto 40px;
    display: flex;
  }
  ul{
    display: flex;
    width: 94%;
    justify-content: center;
  }
  li{
    background: white;
    list-style-type: none;
    padding: 15px 20px;
    flex-basis: 190px;
    text-align: center;
    font-size: 18px;
    margin: 0 17px;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.2);
  }
  .active{
    background: black;
    color: white;
  }

  @media only screen and (max-width: 992px) {
    ul{
      flex-direction: column;
    }
    li{
      flex-basis: 50px;
      margin: 10px 0;
    }
  }
</style>