<template>
	<v-container>
		<v-row>
			<v-col>
				<card-dashboard :datogeneral="2021"></card-dashboard>
			</v-col>
			<v-col>
				<card-dashboard title="Matriculas año Academico" :datogeneral="300"></card-dashboard>
			</v-col>
			<v-col>
				<card-dashboard title="Matriculas Disponibles" :datogeneral="150"></card-dashboard>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<tabla-matriculas-por-nivel></tabla-matriculas-por-nivel>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="4" class="text-center">
				<v-btn @click="dialogVerificaAlumno = true" class="my-5" block color="blue darken-4" x-large dark>
					<v-icon class="mr-5">mdi-book-plus</v-icon>
					MATRICULAR ALUMNO
				</v-btn>
				
				<v-divider></v-divider>

				<v-btn to="panelcontrol" class="my-5" block outlined color="warning" x-large dark>
					<v-icon class="mr-5">mdi-arrow-left-circle</v-icon>
					volver al menu principal
				</v-btn>
			</v-col>
			<v-col cols="8">
				<tabla-matriculas></tabla-matriculas>
			</v-col>
		</v-row>

		<v-dialog
			v-model="dialog"
			scrollable
			
			:overlay="false"
			max-width="1000px"
			transition="dialog-transition"
		>
			<new-matricula></new-matricula>
		</v-dialog>

        
		<v-dialog
			v-model="dialogVerificaAlumno"
			scrollable
			
			:overlay="false"
			max-width="500px"
			transition="dialog-transition"
		>
			<v-card>
                <v-card-title primary-title>
                    Verificacion de Alumno
                </v-card-title>
				<v-card-text>
					<v-text-field 
                    class="mt-3"
                    name="name"
                    outlined 
                    label="RUT ALUMNO"
                    placeholder="xx.xxx.xxx-x" 
                    id="id">
                    </v-text-field>
				</v-card-text>
                <v-card-actions class="mb-5">
                    <v-btn @click="verificarAlumno" block color="blue darken-4" dark x-large>VERIFICAR</v-btn>
                </v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import cardDashboardVue from "../components/cardDashboard.vue";
import matricula from "../components/newMatricula";
import TablaMatriculas from "../components/tablaMatriculas.vue";
import TablaMatriculasPorNivel from "../components/tablaMatriculasPorNivel.vue";

export default {
	name: "Matriculas",
	components: {
		"new-matricula": matricula,
		"card-dashboard": cardDashboardVue,
		TablaMatriculas,
		TablaMatriculasPorNivel,
	},
	data() {
		return {
			dialog: false,
			dialogVerificaAlumno: false,
		};
    },
    methods: {
        verificarAlumno:function(){
            this.dialogVerificaAlumno = false
            this.dialog = true
        }
    },
};
</script>
