<template>
<v-layout justify-center>
     <v-img
      class="bg-imagen"
      height=""
      src="../assets/presente.jpg"
    ></v-img>

    
<v-card
    
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    elevation="10"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

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
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Nombre Usuario"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
            outlined
            v-model="email"
            :error-messages="emailErrors"
            label="Contraseña"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            ></v-text-field>

            <v-btn
            to="home"
            class="mr-4"
            @click="submit"
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
        @click="reserve"
      >
        RECUPERAR CONTRASEÑA
      </v-btn>
    <v-card-text>
      
    </v-card-text>

    <v-card-actions>
    
    </v-card-actions>
  </v-card>

</v-layout>
</template>

<script>

export default {


    
}
</script>

<style >
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