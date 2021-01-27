<template>
<v-app>
        <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chair-school</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>ALUMNOS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-teach</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>PROFESORES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>LIBRO DE CLASES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home-thermometer</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>CURSOS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-clipboard-check</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>ASIGNATURAS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app class="bandera" color="deep-purple lighten-1
" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       
      <v-toolbar-title><v-icon>mdi-school</v-icon> MyCol</v-toolbar-title>
    </v-app-bar>

<v-main class="pt-2 pt-sm-2 pt-xs-2 pt-md-0 pt-lg-0 pt-xl-0   pl-2 pl-sm-2 pl-xs-2 pl-md-2 pl-lg-2 pl-xl-2">
  <router-view></router-view>
</v-main>
    
</v-app>
</template>

<script>
import panel from './PrincipalPanel'
  export default {
    components:{
      panel
    },
    data: () => ({ 
      drawer: false,
      }),
    
  }
</script>

<style scoped>
*{
  /* border: 1px solid; */
}
  .bandera{
  position: relative;
  overflow: hidden;
  }

  .bandera::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    /* background: url('./assets/bandera.jpg') ; */
    transform: rotate(0deg);
    -webkit-filter: brightness(60%);
    filter: brightness(60%);
}
</style>