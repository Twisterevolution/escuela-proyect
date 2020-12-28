<template>
    <v-container>
        <new-matricula></new-matricula>
    </v-container>
</template>

<script>
import matricula from '../components/newMatricula'

export default {
    name:"Matriculas",
    components:{
        "new-matricula":matricula
    }
}
</script>