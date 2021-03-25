import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_URIAPI 

export default new Vuex.Store({
	state: {
    nivelesapp:[],
    cursosapp:[],
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
    // loadProfesores(state, payloadx){
    //   state.profesoresapp = payloadx
    // }
    cursosMutation(state, payload){
      state.cursosapp = payload
    }
  },
  actions: {
   async GETANIOACADEMICODATA (context){
     let f = await axios.get('/api/anio/2021')
     console.log(f.data);
        this.commit('addanioacademicovigente', f.data)
        localStorage.setItem("LSanioAcademicoId", JSON.stringify(f.data))
        this.dispatch('GETCURSOSDATA',f.data.anioAcademicoNumero)
     
    },
    GETNIVELESDATA(context){
      axios.get('/api/niveles')
      .then(res=>{
        this.commit('nivelesMutation', res.data)
      })
    },
  //   GETPROFESORESDATA(context){
  //     axios.get('/api/profesores')
  //     .then(res=>{
  //       let resultado = res.data.filter(x=>{
  //         return x.estado.id == 1
  //       })
  //       this.commit('loadProfesores', resultado)
  //     })
  //   },
    GETCURSOSDATA(contex, payload){
      let anioNumero = payload      
      axios.get('/api/cursosanio/'+ anioNumero)
      .then(res=>{
        this.commit('cursosMutation', res.data)
      })
    }
  },

});
