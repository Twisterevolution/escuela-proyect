<template>
    <v-container>
        <v-row>
            <v-col class="text-center titulo white--text ">
                <h1>Panel de administracion MyCol</h1>
            </v-col>
        </v-row>
        <v-row >
            <v-col cols="3" > 
                <ul>
                    <li><router-link :to="{name:'roles'}">administracion de Roles</router-link></li>
                    <li><router-link :to="{name:'usuarios'}">administracion de usuarios</router-link></li>
                    <li><router-link :to="{name:'asignaturas'}">administracion de asignaturas</router-link></li>
                    <li><router-link :to="{name:'cursos'}">administracion de cursos</router-link></li>
                    <li><router-link :to="{name:'anoAcademico'}">gestion año academico</router-link></li>
                    <li>administracion de Niveles</li>
                </ul>
            </v-col>
            
            <v-col cols="9" class="text-center">
                <router-view></router-view>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
import tablaAdmin from '../components/tablaAdmin.vue'
export default {
    name:"panel-administracion",
    components:{
        tablaAdmin
    },
   
}
</script>

<style scoped>
*{
    /* border: 1px solid; */
}

    .titulo{
        border: 1px solid;
        border-radius: 10px;
        background: rgb(131,58,180);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    }
    li a {
    text-decoration: none;
}
</style>>
    