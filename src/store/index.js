import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_URIAPI 

export default new Vuex.Store({
	state: {
    nivelesapp:[],
    profesoresapp:[],
    anioAcademicoData:{}
    
  },
  mutations: {
    nivelesMutation (state, payload) {
      state.nivelesapp = payload
    },
    addanioacademicovigente(state, payload){
      state.anioAcademicoData = payload
    },
    loadProfesores(state, payloadx){
      state.profesoresapp = payloadx
    }
  },
  actions: {
   async GETANIOACADEMICODATA (context){
     let f = await axios.get('/api/anioAcademico/searchEstado/1')
        this.commit('addanioacademicovigente', ...f.data)
        localStorage.setItem("LSanioAcademicoId", JSON.stringify(f.data))
     
    },
    GETNIVELESDATA(context){
      axios.get('/api/niveles')
      .then(res=>{
        this.commit('nivelesMutation', res.data)
      })
    },
    GETPROFESORESDATA(context){
      axios.get('/api/profesores')
      .then(res=>{
        let resultado = res.data.filter(x=>{
          return x.estado.id == 1
        })
        this.commit('loadProfesores', resultado)
      })
    }
  },

});
