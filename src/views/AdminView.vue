<template>
    <v-container>
        <v-row>
            <v-col class="text-center titulo white--text ">
                <h1>Panel de Administración MyCol</h1>
            </v-col>
        </v-row>
        <v-row >
            <v-col cols="3" > 
                <ul>
                    <li><router-link :to="{name:'roles'}">Administración de Roles</router-link></li>
                    <li><router-link :to="{name:'usuarios'}">Administración de Usuarios</router-link></li>
                    <li><router-link :to="{name:'asignaturas'}">Administración de Asignaturas</router-link></li>
                    <li><router-link :to="{name:'cursos'}">Administración de Cursos</router-link></li>
                    <li><router-link :to="{name:'anoAcademico'}">Gestión Año Académico</router-link></li>
                    <li>Administración de Niveles</li>
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
    