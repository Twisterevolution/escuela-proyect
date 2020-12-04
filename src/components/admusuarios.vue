<template>
    <v-container>
        <tabla
        tablename="USUARIOS"
        :encabezado="cabeceras"
        :datostabla="datostabla"
        ></tabla>
    </v-container>
</template>

<script>
import tabla from '../components/tablatipo.vue'
export default {
    name: "admusuarios",
    components: {
        tabla
    },
    data() {
        return {
            cabeceras:[
                {text:'nombre', value: 'nombre'},
                {text:'Rut', value:'rut'},
                {text:'Direccion', value: 'direccion'},
                {text:'F. Nacimiento', value: 'nacimiento'},
                {text:'Edad', value: 'edad'},
                {text:'rol', value: 'rol'},
                {text:'acciones', value: 'actions'}
            ],
            datostabla:[
                {nombre: "Juan", rut:"12.365.489-7", direccion: "av. Sin Numero 230, temuco" , nacimiento: "12-10-1899", edad: 34, rol: "alumno"  },
                {nombre: "Marcelo Oliva", rut:"8.365.122-5", direccion: "Los alreces #1824, labranza" , nacimiento: "12-10-1997", edad: 30, rol: "Profesor"  },
            ] 
        }
    },
}
</script>