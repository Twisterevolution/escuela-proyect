<template>
  <v-app>
     <v-app-bar dense app class="bandera" color="navBarpersonal" dark><!--"deep-purple lighten-1" -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon left>mdi-school</v-icon>MyCol
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title >Año Academico:{{$store.state.anioAcademicoData.anioAcademicoNumero}} </v-toolbar-title> <!--{{aniox.anioAcademicoNumero}} -->
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  data: () => ({
    drawer: false,
    aniox: JSON.parse(localStorage.getItem("LSanioAcademicoId")),
    most:false
  }),
   methods: {
   
  },
  
  mounted() {
  
     
  },
 beforeUpdate(){ 
  
   
 }
 
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css? family=Oxygen:300,400,700&display=swap");
@import url("https://fonts.googleapis.com/css? family=Comfortaa&display=swap");

// $body-font-family: 'system-ui';
// $title-font: 'Comfortaa';

// .v-application {
//    font-family: $body-font-family, Helvetica, sans-serif !important ;

//  }
</style>