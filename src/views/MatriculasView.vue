<template>
	<v-container>
		<v-row>
			<v-col>
				<card-dashboard
					title="Año Académico"
					:datogeneral="anio"
				></card-dashboard>
				{{ urlx }}
			</v-col>
			<v-col>
				<card-dashboard
					title="Matrículas Periodo"
					:datogeneral="matdisp"
				></card-dashboard>
			</v-col>
			<v-col>
				<card-dashboard
					title="Matrículas Disponibles"
					:datogeneral="quedan"
				></card-dashboard>
			</v-col>
		</v-row>
		<v-row v-show="false">
			<v-col cols="12">
				<tabla-matriculas-por-nivel></tabla-matriculas-por-nivel>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="4" xs="12" class="">
				<v-btn
					
					@click="dialogVerificaAlumno=true"
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
					to="/home/asigmataalumno"
					
					block
					color="blue darken-4"
					x-large
					dark
				>
					<v-icon class="mr-5">mdi-account-settings-outline</v-icon>
					ASIGNAR MATRÍCULA
				</v-btn>

				<v-btn
					to="/home/panelcontrol"
					class="my-5"
					block
					outlined
					color="warning"
					x-large
					dark
				>
					<v-icon class="mr-5">mdi-arrow-left-circle</v-icon>
					volver menú principal
				</v-btn>
			</v-col>
			<v-col>
				<tabla-matriculas
					:detallematriculas="matriculas"
					:cargando="cargando"
				></tabla-matriculas>
			</v-col>
		</v-row>
		<!--SECCION: dialog NUEVA MATRICULA -->
		<v-dialog
			v-model="dialog"
			persistent
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

		<!-- SECCION: dialog para ingresar rut alumno a verificar -->
		<v-dialog
			v-model="dialogVerificaAlumno"
			persistent
			:overlay="false"
			max-width="500px"
			transition="dialog-transition"
		>
			<v-card>
				<v-card-title primary-title>
					VERIFICAR RUT ALUMNO
				</v-card-title>
				<v-card-text>
					<v-text-field
						label="RUT: XXXXXXXX-X"
						v-mask="'########-#'"
						v-model="verificarutalumno"
					></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-btn color="warning" text @click="dialogVerificaAlumno = false"
						>Cancelar</v-btn
					>
					<v-spacer></v-spacer>
					<v-btn color="success" @click="verificaSituacionAlumnoAMatricular"
						>VERIFICAR</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!--SECCION: dialog load verificando alumno -->
		<v-dialog
			v-model="verificandoCargando"
			width="350"
			max-width="500px"
			transition="dialog-transition"
			persistent
		>
			<v-card>
				<v-card-title primary-title>
					VERIFICANDO RUT ALUMNO
				</v-card-title>
				<v-card-text class="text-center">
					<img
						src="../assets/book-loader.gif"
						alt=""
						width="300"
						height="220"
						srcset=""
						class="carga"
					/>
				</v-card-text>
				<v-card-text>
					Un momento Porfavor....
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import cardDashboardVue from "../components/cardDashboard.vue";
import matricula from "../components/newMatricula";
import TablaMatriculas from "../components/tablaMatriculas.vue";
import TablaMatriculasPorNivel from "../components/tablaMatriculasPorNivel.vue";

import axios from "axios";
import Swal from "sweetalert2";

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
			verificandoCargando: false,
			verificarutalumno: "",
			cargando: true,
			anio: 0,
			matdisp: 0,
			quedan: 0,

			matriculas: [],
			idAnioAcademicoActivo: 0,
			urlx: process.env.VUE_APP_URIAPI,
		};
	},
	methods: {
		dialogMatriculasCerrar: function(e) {
			this.dialog = e;
		},
		getanioacademicoapi() {
			axios.get("/api/anioActivo").then((res) => {
				console.log(res.data);
				this.anio = parseInt(res.data.anioAcademicoNumero);
				this.matdisp = parseInt(res.data.cantidadMatriculas);
				this.idAnioAcademicoActivo = res.data.id;
				axios.post("/api/getmatricula", {"anioAcademico":1})
				.then((res) => {
					console.log(res.data);
					this.cargando = false;
					this.matriculas = res.data;
					let mattotal = res.data.length;
					this.quedan = this.matdisp - mattotal;
				});
			});
		},
		Calcular() {},
		verificaSituacionAlumnoAMatricular: function() {
			this.verificandoCargando = true;
			let datos = {"anioAcademico":this.idAnioAcademicoActivo, "rutAlumno":this.verificarutalumno}
			axios.post('/api/getmatricula', datos)
			.then(res =>{
				if (res.data.length !== 0) {
					this.dialogVerificaAlumno = false
					this.verificandoCargando = false;
					this.verificarutalumno = ""
					Swal.fire({
						allowOutsideClick: false,
						icon: "warning",
						title: "Matricula ya existe",
						text: "El alumno consultado ya posee Matricula activa",
					});
				}else{
					this.dialog= true
					this.verificandoCargando = false;
					this.dialogVerificaAlumno = false
					this.verificarutalumno = ""
				}
			})

			
				

				
			
		},
	},
	computed: {
		retanio() {
			let valor = "xx";
			return valor;
		},
	},
	created() {
		this.getanioacademicoapi();
	},
};
</script>
<style>

.swal2-popup {
	font-family: "system-ui", Helvetica, Arial, sans-serif;
}
</style>
