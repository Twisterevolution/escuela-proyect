<template>
	<v-row>
		<v-col cols="12" class="text-start title-color-bg ">
			<h2 class="title-color-bg white--text">
				<v-btn class="btnseparate" color="success" to="./matriculas"
					>VOLVER</v-btn
				>
				ASIGNAR ALUMNOS A SUS CURSOS
			</h2>
		</v-col>
		<v-col cols="4" class="br-secction">
			<h3>selecciona un nivel</h3>

			<v-select
				dense
				outlined
				:items="nivelesSelec"
				item-text="nivel"
				item-value="idnivel"
				v-model="id_nivelSeleccionado"
				label="NIVELES"
				@input="alumnosAnioAcademico"
			></v-select>

			<v-card
				width="370"
				elevation="5"
				class=" mx-1 my-3 d-inline-block"
				v-for="ready in allCursosPorNivelSeleccionado"
				:key="ready.id"
			>
				<v-row class="">
					<v-col cols="5" class="ml-3">
						<h3>{{ ready.curso }}</h3>
					</v-col>
					<v-col cols="6">
						<v-chip class="" color="primary">Total Alumnos: {{ready.total}}</v-chip>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
		<v-col cols="8">
		<v-card>
			<v-card-text>
				<v-row v-for="(x, id) in datosTabla" :key="id" dense >
				<v-col cols="5" >
				<v-text-field
					dense
					outlined
					hide-details
					:value="x.nombre1 +' '+ x.apellido1"
					
				></v-text-field>
				</v-col>

				<v-col cols="2" >
				<v-text-field
					dense
					outlined
					hide-details
					:value="x.nivel"
					label="Nivel"
				></v-text-field>
				</v-col>

				<v-col cols="2" >
				<v-text-field
					dense
					outlined
					hide-details
					:value="x.curso"
					label="Curso Actual"
				></v-text-field>
				</v-col>

				<v-col cols="3">
				<v-select
						dense
						outlined
						hide-details
						:items="allCursosPorNivelSeleccionado"
						item-text="curso"
						item-value="idcurso"
						label="asignar curso"
						v-model="datosTabla[id].curso_idcurso"

						@input="total3"
					></v-select>
				</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		</v-col>
		<v-col cols="8">
			<v-data-table
				v-if="false"
				dense
				:loading="cargandodatos"
				loading-text="... Un momento porfavor"
				:headers="cabecera"
				:items="datosTabla"
				class="elevation-5 mt-3"
			>
				<template v-slot:[`item.alumno`]="{ item }">
					{{ item.nombre1 }} {{ item.apellido1 }} {{ item.apellido2 }}
				</template>
				<template v-slot:[`item.asignar`]="{ item }">
					<v-select
						dense
						outlined
						class="my-1"
						hide-details
						
						v-model="item.curso"
						label="asignar curso"
						@input="total3"
					></v-select>
				</template>
			</v-data-table>
		</v-col>
		<loading-component
			:mostrarDialog="cargandodatos"
			tituloLoading="Buscando Alumnos"
		></loading-component>
	</v-row>
</template>

<script>
import axios from "axios";
import LoadingComponent from './loadingComponent.vue';

export default {
	name: "asignar-alumno-a-curso",
	props: {},
	components:{
		LoadingComponent
	},
	data() {
		return {
			xxx:"",
			cargandodatos: false,
			cabecera: [
				{ text: "N°Mat", value: "numeroMatricula" },
				{ text: "Alumno", value: "alumno" },
				{ text: "Curso asignado", value: "curso", align: "center" },
				{ text: "asignar", value: "asignar", width: "25%" },
			],
			datosTabla: [],
			nivelesSelec: [],
			allCursos: [],
			allCursosPorNivelSeleccionado:[],
			id_nivelSeleccionado: 0,
		};
	},
	methods: {
		niveles: function() {
			axios.get("/api/niveles").then((res) => {
				this.nivelesSelec = res.data;
			});
		},
		listaCursos: function() {
			let cursos = [];
			axios.get("/api/cursos").then((res) => {
				console.log(res.data);
				cursos = res.data;
				const cursosFiltrados = cursos.filter((x) => {
					return x.anioAcademico_id == this.$store.state.anioAcademicoData.id;
				});
				this.allCursos = cursosFiltrados;
			});
		},
		alumnosAnioAcademico: function() {
			let idanioactivo = JSON.parse(localStorage.getItem("LSanioAcademicoId"));
			let datosBusqueda = {
				anioAcademico: idanioactivo.id,
				idNivel: this.id_nivelSeleccionado,
			};
			this.cargandodatos = true;
			axios.post("/api/getmatricula", datosBusqueda)
			.then((res) => {
				console.log(res.data);
				this.datosTabla = res.data;
				this.allCursosPorNivelSeleccionado = this.allCursos.filter((x)=>{
					return x.nivel_idnivel == this.id_nivelSeleccionado
				})
				this.cargandodatos = false;
				this.total3()
				
			});
			
		},

		total3: function() {
			for (let index = 0; index < this.allCursosPorNivelSeleccionado.length; index++) {
				let tot = 0;
				for (let indexb = 0; indexb < this.datosTabla.length; indexb++) {
					if (this.datosTabla[indexb].curso_idcurso == this.allCursosPorNivelSeleccionado[index].idcurso) {
						tot += 1;
					}
				}
				 this.allCursosPorNivelSeleccionado[index].total = tot;
			}
		},
		total2: function() {
			for (const cursox of this.datosTabla) {
				console.log(cursox.curso);
				let res2 = this.cursos.find((x) => {
					return x.value == cursox.curso;
				});
			}
		},
		total(dato) {
			let suma = this.datosTabla.filter((x) => {
				return x.curso == dato;
			});
			let resultado = suma.length;
			const res2 = this.cursos.find((x) => {
				return x.value == dato;
			});
			res2.total = resultado;
			console.log(res2);
		},
	},
	computed: {},
	created() {
		this.listaCursos();
		this.niveles();
	},
};
</script>

<style scoped>
.title-color-bg {
	background-color: gray;
	border-radius: 10px;
}
.br-secction {
	border: 1px solid;
	border-radius: 10px;
	margin-top: 5px;
}
.btnseparate {
	margin-right: 250px;
}
</style>
