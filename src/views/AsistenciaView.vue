<template>
    <div>
        <menu-asistencia></menu-asistencia>
    </div>
</template>

<script>
import menuAsistencias from '../components/asistenciaComponents/menuAsistencia'


export default {
  name: "asistenciaView",
  components:{
      
      "menu-asistencia":menuAsistencias
  },
  data() {
    return {
     
    }
  }

};
</script>

<style scoped>
menu-lateral{
    border: 1px solid
}
</style>