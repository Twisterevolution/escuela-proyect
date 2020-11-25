<template>
<v-app>
  <v-main>
      <router-view></router-view>    
  </v-main>
  </v-app>
</template>

<script>

  export default {
  
    data: () => ({ 

     }),
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css? family=Oxygen:300,400,700&display=swap');
@import url('https://fonts.googleapis.com/css? family=Comfortaa&display=swap');



$body-font-family: 'system-ui';
$title-font: 'Comfortaa';

.v-application {
   font-family: $body-font-family, Helvetica, sans-serif !important ;
    
 }


  
</style>