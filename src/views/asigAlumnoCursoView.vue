<template>
    <v-container>
        <v-row>
            <v-col>
              <asig-alumno-to-curso></asig-alumno-to-curso>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import asigAlumnoToCurso from '../components/asigAlumnoToCurso.vue'
export default {
  components: { asigAlumnoToCurso },
    name: "vista-alumno-curso"
}
</script>