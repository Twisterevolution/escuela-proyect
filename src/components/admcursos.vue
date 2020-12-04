<template>
    <v-container>
         <tablacurso
        tablename="CURSOS"
        :encabezado="cabeceras"
        :datostabla="datostabla"
      ></tablacurso>
    </v-container>
</template>

<script>
import tablacurso from '../components/tablatipo'
export default {
    name: "admcursos",
    components:{
        tablacurso
    },
     data() {
        return {
            cabeceras:[
                {text:'NOMBRE', value: 'nombre'},
                {text:'ENSEÑANZA', value:'enseñanza'},
                {text:'CODIGO', value:'codigo'},
                {text:'acciones', value: 'actions'}
            ],
            datostabla:[
                {nombre: "1°", enseñanza:"basica", codigo: "1bsc"},
                {nombre: "2°", enseñanza:"basica", codigo: "2bsc"},
                {nombre: "3°", enseñanza:"basica", codigo: "3bsc"},
                {nombre: "4°", enseñanza:"basica", codigo: "4bsc"},
                {nombre: "5°", enseñanza:"basica", codigo: "5bsc"},
                {nombre: "6°", enseñanza:"basica", codigo: "6bsc"},
                {nombre: "7°", enseñanza:"basica", codigo: "7bsc"},
                {nombre: "8°", enseñanza:"basica", codigo: "8bsc"},
                {nombre: "1°", enseñanza:"media", codigo: "1md"},
                {nombre: "2°", enseñanza:"media", codigo: "2md"},
                {nombre: "3°", enseñanza:"media", codigo: "3md"},
                {nombre: "4°", enseñanza:"media", codigo: "4md"},
               
            ] 
        }
    },
}
</script>