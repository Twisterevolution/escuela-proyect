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
				v-for="ready in allCursos"
				:key="ready.id"
			>
				<v-row class="">
					<v-col cols="5" class="ml-3">
						<h3>{{ ready.nombreCurso }}</h3>
					</v-col>
					<v-col cols="6">
						<v-chip class="" color="primary">Total Alumnos: {{}}</v-chip>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
		<v-col cols="8">
		<v-card>
			<v-card-text>
				<v-row v-for="(x, id) in 8" :key="id" dense >
				<v-col cols="6" >
				<v-text-field
					dense
					outlined
					hide-details
					label="Nombre Alumno"
				></v-text-field>
				</v-col>

				<v-col cols="3" >
				<v-text-field
					dense
					outlined
					hide-details
					label="Curso Actual"
				></v-text-field>
				</v-col>

				<v-col cols="3">
				<v-select
						dense
						outlined
						hide-details
						:items="cursos"
						label="asignar curso"
						@input="total3"
					></v-select>
				</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		</v-col>
		<v-col cols="8">
			<v-data-table
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
						:items="cursos"
						v-model="item.curso"
						label="asignar curso"
						@input="total3"
					></v-select>
				</template>
			</v-data-table>
		</v-col>
	</v-row>
</template>

<script>
import axios from "axios";
export default {
	name: "asignar-alumno-a-curso",
	props: {},
	data() {
		return {
			cargandodatos: true,
			cabecera: [
				{ text: "N°Mat", value: "numeroMatricula" },
				// { text: "Rut", value: "usuario.rut" },
				{ text: "Alumno", value: "alumno" },
				{ text: "Curso asignado", value: "curso", align: "center" },
				{ text: "asignar", value: "asignar", width: "25%" },
			],
			datosTabla: [],
			cursos: [
				{ id: 1, text: "1 medio A", value: "1mA", total: 0 },
				{ id: 2, text: "1 medio B", value: "1mB", total: 0 },
				{ id: 3, text: "1 medio C", value: "1mC", total: 0 },
			],
			nivelesSelec: [],
			allCursos: [],
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
			console.log(datosBusqueda);
			this.cargandodatos = true;
			axios.post("/api/getmatricula", datosBusqueda).then((res) => {
				console.log(res.data);
				this.datosTabla = res.data;
				this.cargandodatos = false;
			});
		},
		total3: function() {
			for (let index = 0; index < this.cursos.length; index++) {
				let tot = 0;
				for (let indexb = 0; indexb < this.datosTabla.length; indexb++) {
					if (this.datosTabla[indexb].curso == this.cursos[index].value) {
						tot += 1;
					}
				}
				this.cursos[index].total = tot;
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
