<template>
<v-container>
<v-row justify-center class="zz">

    
<v-card
    class="mx-auto my-12  xx"
    max-width="374"
    elevation="10"
  >
    <v-img
      class="avatar"
      height="150"
      src="../assets/escuela.jpg"
    ></v-img>

    <v-card-title class="justify-center" >BIENVENIDO A MYCOL</v-card-title>

    <v-card-text>
    
        <form>
            <v-text-field
            outlined
            :counter="10"
            label="Nombre Usuario"
            required
           
            ></v-text-field>
            <v-text-field
            outlined
           
           
            label="Contraseña"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            ></v-text-field>

            <v-btn
            to="home"
            class="mr-4"
          
            color="success"
            >
            ENTRAR
            </v-btn>
   
  </form>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    
         <v-btn
        color="deep-purple lighten-2"
        text
      >
        RECUPERAR CONTRASEÑA
      </v-btn>
    <v-card-text>
      
    </v-card-text>

    <v-card-actions>
    
    </v-card-actions>
  </v-card>

</v-row>
</v-container>
</template>

<script>

export default {


    
}
</script>

<style >

.zz{
    background-image: url('../assets/presente.jpg');
}
.zz:before{

     -webkit-filter: brightness(60%);
        filter: brightness(60%);
        opacity: 0.5;
        filter: blur(6px);
}
    .bg-imagen{
        position: absolute;
        height: 100vh;
        width: 100vw;
        -webkit-filter: brightness(60%);
        filter: brightness(60%);
        opacity: 0.5;
        filter: blur(6px);
    }
  
    .avatar{
        border-radius: 50%;
        bottom: 10px;
        position: relative;
    }
</style>