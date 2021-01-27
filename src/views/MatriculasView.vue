<template>
	<v-container>
		<v-row>
			<v-col>
				<card-dashboard title="Año Académico" :datogeneral="anio"></card-dashboard>
				{{urlx}}
			</v-col>
			<v-col>
				<card-dashboard title="Matrículas Año Académico" :datogeneral="matdisp"></card-dashboard>
			</v-col>
			<v-col>
				<card-dashboard title="Matrículas Disponibles" :datogeneral="quedan"></card-dashboard>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<tabla-matriculas-por-nivel></tabla-matriculas-por-nivel>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="4" class="text-center">
				<v-btn
					@click="dialog = true"
					class="my-5"
					block
					color="blue darken-4"
					x-large
					dark
				>
					<v-icon class="mr-5">mdi-book-plus</v-icon>
					MATRICULAR ALUMNO
				</v-btn>

				<v-btn
					:to="{ name: 'asigMatriculaAAlumno' }"
					class="my-5"
					block
					color="blue darken-4"
					x-large
					dark
				>
					<v-icon class="mr-5">mdi-account-settings-outline</v-icon>
					ASIGNAR MATRÍCULA A CURSO
				</v-btn>

				<v-divider></v-divider>

				<v-btn to="panelcontrol" class="my-5" block outlined color="warning" x-large dark>
					<v-icon class="mr-5">mdi-arrow-left-circle</v-icon>
					volver al menú principal
				</v-btn>
			</v-col>
			<v-col cols="8">
				<tabla-matriculas
					:detallematriculas="matriculas"
					:cargando="cargando"
				></tabla-matriculas>
			</v-col>
		</v-row>

		<v-dialog
			v-model="dialog"
			scrollable
			:overlay="false"
			max-width="1000px"
			transition="dialog-transition"
		>
			<new-matricula
			:idAnioAcademico="idAnioAcademicoActivo"
			:anio="anio"
			@cerrarDialogMatricula="dialogMatriculasCerrar"
			></new-matricula>
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
						placeholder="xxxxxxxx-x"
						v-mask="'########-#'"
						v-model="verificarutalumno"
						
					></v-text-field>
				</v-card-text>
				<v-card-actions class="mb-5">
					<v-btn block color="blue darken-4" dark x-large>VERIFICAR</v-btn>
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
import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_URIAPI;


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
			cargando:true,
			anio: 0,
			matdisp: 0,
			quedan: 0,
			verificarutalumno:"",
			matriculas:[],
			idAnioAcademicoActivo:0,
			urlx: process.env.VUE_APP_URIAPI
			
		};
    },
    methods: {
		dialogMatriculasCerrar:function(e){
			this.dialog = e
		},
		getanioacademicoapi(){
			let url = process.env.VUE_APP_URIAPI
			axios.get('/api/anioAcademico/searchEstado/1')
			.then(res=>{
				this.anio= parseInt( res.data[0].anioAcademicoNumero)
				this.matdisp= parseInt( res.data[0].cantidadMatriculas)
				this.idAnioAcademicoActivo = res.data[0].id
				axios.get('/api/matriculas')
        		.then(res =>{
					console.log(res.data);
					this.cargando =false
					this.matriculas= res.data
					let mattotal = res.data.length
          			this.quedan = this.matdisp - mattotal
				})

			})
		},
		Calcular(){
        
		}
	},
	computed:{
		retanio(){
			let valor ="xx"
			return valor
		},


	},
	created() {
		this.getanioacademicoapi()
	}
};
</script>
