import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    cities: [],
    sortBy: 'population',
    isLoading: false
  },
  getters: {
    filteredCities(state){
      return state.cities.sort((a,b)=>{
        switch(state.sortBy){
          case 'name' : return a.name > b.name ? 1 : -1;
          case 'population': return a.population > b.population ? 1 : -1;
          case 'square' : return  a.square > b.square ? 1 : -1;
        }
      })
    }
  },
  actions: {
    loadCities({commit}){
      axios
        .get('https://my-json-server.typicode.com/YegorShtonda/test-json/cities')
        .then(data=>{
          let cities = data.data;
          console.log(data.data);
          commit('SET_CITIES', cities);
        })
        .catch(error=>{
          console.log(error);
        })
    }
  },
  mutations: {
    SET_CITIES(state, cities){
      state.cities = cities;
      state.isLoading = true;
    },
    SET_SORTING_TYPE(state, payload){
      state.sortBy = payload;
    }
  }
});