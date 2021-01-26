import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
    prueba:3,
    nivelesapp:[],
    
  },
  mutations: {
    addniveles (state, payload) {
      state.nivelesapp = payload
    },
    addanioacademicovigente(state, payload){

      state.anioacademicovigente = payload
    }
  },
  actions: {
    GETNIVELESAPI (context){
      console.log("hola");
      axios.get('/api/niveles')
      .then(res=>{
        this.commit('addniveles', res.data)
      })
    },
  },
});
