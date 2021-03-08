<template>
	<v-card>
		<v-form ref="form" v-model="valid" >
			<v-toolbar flat color="primary" dark>
				<v-toolbar-title>
					NUEVA MATRÍCULA
					<v-spacer></v-spacer>
					Alumno(a): {{ matricula.nombreAlumno }} {{ matricula.apellidoPatAlumno }}
				</v-toolbar-title>
			</v-toolbar>
			<v-tabs vertical>
				<v-tab>
					<v-icon left>
						mdi-account
					</v-icon>
					Datos del alumno
				</v-tab>
				<v-tab>
					<v-icon left>
						mdi-human-male-boy
					</v-icon>
					Datos Apoderado
				</v-tab>
				<v-tab>
					<v-icon left>
						mdi-family-tree
					</v-icon>
					datos familiares
				</v-tab>

				<v-btn class="mx-2 mt-5" color="success" @click="guardarNuevaMatricula" x-large>
					<v-icon left>
						mdi-content-save-all
					</v-icon>
					GUARDAR MATRÍCULA
				</v-btn>

				<v-btn class="mx-2 mt-5" color="warning" dark outlined @click="cancelarCreacionMatricula">
					<v-icon left>
						mdi-close
					</v-icon>
					CANCELAR
				</v-btn>

				<v-tab-item>
					<v-card flat>
						<v-card-text>
							<v-row>
								<v-col class="pa-0 text-center" cols="6">
									<v-avatar color="grey" size="203">
										<img :src="fotoUrlMatricula" id="foto" >
									</v-avatar>
									<v-file-input
										class="mt-2"
										outlined
										dense
										@change="fotoVistaPrevia"
										label="SUBIR FOTO ALUMNO"
										v-model="matricula.fotoAlumno"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
									<v-row class="mb-3">
										<v-col cols="6">
											<h3 class="mt-1">Alumno Nuevo</h3>
										</v-col>
										<v-col cols="6">
											<v-checkbox
												class="mt-0"
												hide-details
												label="SI"
												v-model="matricula.alumnoNuevo"
											></v-checkbox>
										</v-col>
									</v-row>
								</v-col>

								<v-col cols="6">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="RUT *"
										v-mask="'########-#'"
										v-model="matricula.rutAlumno"
										@change="verificarAlumno"
										:rules="[rules.required]"
									></v-text-field>
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="NOMBRES *"
										v-model="matricula.nombreAlumno"
										v-bind:rules="[rules.required]"
										required
									></v-text-field>

									<v-text-field
										dense
										class="mx-1"
										outlined
										label="APELLIDO PATERNO *"
										v-model="matricula.apellidoPatAlumno"
										:rules="[rules.required]"
									></v-text-field>
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="APELLIDO MATERNO *"
										v-model="matricula.apellidoMatAlumno"
										:rules="[rules.required]"
									></v-text-field>

									<v-select
										dense
										class="mx-1 mt-1"
										outlined
										label="NIVEL QUE MATRICULA *"
										v-model="matricula.nivelMatricula"
										:rules="[rules.required]"
										:items="niveles"
										item-text="nivel"
										item-value="idnivel"
									></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-divider class="mb-5"></v-divider>
							</v-row>
							<v-row>
								<v-col>
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-model="matricula.fechaNacimientoAlumno"
										label="FECHA NACIMIENTO *"
										type="date"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>
								<v-col>
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-model="edadAlumno"
										label="EDAD"
										type="number"
										readonly
									></v-text-field>
								</v-col>
								<v-col>
									<v-select
										dense
										class="mx-1"
										outlined
										label="SEXO *"
										v-model="matricula.sexoAlumno"
										:items="sexo"
										item-text="nombre"
										item-value="id"
										:rules="[rules.required]"
									></v-select>
								</v-col>
								<v-col>
									<v-select
										dense
										class="mx-1"
										outlined
										:items="nacionalidad"
										item-text="name"
										v-model="matricula.nacionalidadAlumno"
										label="Nacionalidad *"
										:rules="[rules.required]"
									></v-select>
								</v-col>
							</v-row>

							<v-row>
								<v-divider class="mb-5"></v-divider>
							</v-row>

							<v-row>
								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="DIRECCION *"
										v-model="matricula.direccionAlumno"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>

								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										:items="regiones"
										item-text="region"
										v-model="matricula.regionAlumno"
										label="REGION *"
										@input="selectComuna"
										:rules="[rules.required]"
									></v-select>
								</v-col>

								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										:items="comunasx[0].comunas"
										label="COMUNA *"
										:rules="[rules.required]"
										v-model="matricula.comunaAlumno"
									></v-select>
								</v-col>
							</v-row>

							<v-row>
								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="N°TELEFONO "
										v-mask="'+56 #########'"
										v-model="matricula.telefonoAlumno"
									></v-text-field>
								</v-col>
								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="EMAIL *"
										v-model="matricula.emailAlumno"
										:rules="[rules.email]"
									></v-text-field>
								</v-col>
							</v-row>

							<v-row>
								<v-divider class="mb-5"></v-divider>
							</v-row>

							<p>
								Campos señalados con * son obligatorios para poder guardar la nueva matricula
							</p>
						</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card flat>
						<v-card-title primary-title>
							DATOS APODERADO
						</v-card-title>
						<v-card-text>
							<v-row>
								<v-col>
									<v-select
										dense
										outlined
										:items="parentesco"
										v-model="matricula.parentescoApoderado"
										label="Parentesco con el alumno/a"
										:rules="[rules.required]"
										item-text="parentesco"
										item-value="idparentesco"
									></v-select>
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-mask="'########-#'"
										label="RUT *"
										v-model="matricula.rutApoderado"
										@change="verificarUsuarioApoderado"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>
								<v-col v-if="matricula.parentescoApoderado == 'Otro'">
									<v-text-field
										dense
										outlined
										label="Detalle de parentesco con el alumno/a"
										v-model="matricula.otroParentesco"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="NOMBRES *"
										v-model="matricula.nombreApoderado"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>

								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="APELLIDO PATERNO *"
										v-model="matricula.apellidoPatApoderado"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>

								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="APELLIDO MATERNO *"
										v-model="matricula.apellidoMatApoderado"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>

								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-model="matricula.fechaNacimientoApoderado"
										label="FECHA NACIMIENTO *"
										type="date"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>
								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-model="edadApoderado"
										label="EDAD"
										type="number"
										readonly
									></v-text-field>
								</v-col>
								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										label="SEXO *"
										v-model="matricula.sexoApoderado"
										:items="sexo"
										item-value="id"
										item-text="nombre"
										:rules="[rules.required]"
									></v-select>
								</v-col>
								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										label="NACIONALIDAD *"
										:items="nacionalidad"
										item-text="name"
										v-model="matricula.nacionalidadApoderado"
										:rules="[rules.required]"
									></v-select>
								</v-col>
								<v-col cols="4" class="pt-1 ">
									<h3 class="text-center d-block">Apoderado vive con el alumno</h3>
									<v-row class="justify-center"></v-row>
								</v-col>
								<v-col cols="4">
									<v-checkbox
										style="width:40px"
										class="mt-1 "
										hide-details
										label="SI"
										v-model="matricula.apoderadoViveConAlumno"
										@change="mismaDireccion"
									></v-checkbox>
								</v-col>
							</v-row>

							<v-row>
								<v-divider class="mb-5"></v-divider>
							</v-row>
							<v-row>
								<v-col cols="4">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="DIRECCION *"
										v-model="matricula.direccionApoderado"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>

								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										:items="regiones"
										item-text="region"
										v-model="matricula.regionApoderado"
										label="REGION *"
										@input="selectComunaApoderado"
										:rules="[rules.required]"
									></v-select>
								</v-col>

								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										:items="comunasx[0].comunas"
										v-model="matricula.comunaApoderado"
										label="COMUNA *"
										:rules="[rules.required]"
									></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-col>
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-mask="'+56 #########'"
										label="N°TELEFONO *"
										v-model="matricula.telefonoApoderado"
									></v-text-field>
								</v-col>
								<v-col>
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="EMAIL *"
										v-model="matricula.emailApoderado"
										:rules="[rules.email]"
									></v-text-field>
								</v-col>
							</v-row>
							<p>
								Campos señalados con * son obligatorios para poder guardar la nueva matricula
							</p>
						</v-card-text>
					</v-card>
				</v-tab-item>

				<v-tab-item>
					<v-card flat>
						<v-card-title primary-title>
							DATOS FAMILIARES Y SOCIOECÓNOMICOS
						</v-card-title>
						<v-card-text>
							<v-row>
								<v-col cols="7" class="">
									<h3 class="ml-5">El alumno pertenece a pueblo originario</h3>
								</v-col>
								<v-col cols="5" >
									<v-select
										dense
										hide-details
										outlined
										:items="pueblo"
										label="Pueblo originario"
										v-model="matricula.puebloOriginarioAlumno"
									></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-divider class=""></v-divider>
							</v-row>
							<v-row>
								<v-col cols="7" class="">
									<h3 class="ml-5">Clasificación MINEDUC del alumno</h3>
								</v-col>
								<v-col>
									<v-select
										dense
										outlined
										hide-details
										:items="tipoAlumno"
										label="Clasificacion"
										v-model="matricula.tipoAlumnoSeleccionado"
									></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-divider class=""></v-divider>
							</v-row>

							<v-row>
								<v-col cols="7" class="">
									<h3 class="ml-5">Beca Junaeb</h3>
								</v-col>
								<v-col>
									<v-select
										dense
										class=""
										hide-details
										:items="becasJunaeb"
										outlined
										label="Tipo de Beca *"
										v-model="matricula.detalleRolJunaeb"
									></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-divider class=""></v-divider>
							</v-row>

							<v-row>
								<v-col cols="3">
									<v-text-field
										dense
										class="mx-1"
										outlined
										label="Cuantos Hermanos Tiene"
										v-model="matricula.hermanos"
										type="number"
										min="0"
										:rules="[rules.required]"
									></v-text-field>
								</v-col>

								<v-col cols="4">
									<v-select
										dense
										class="mx-1"
										outlined
										:items="viveCon"
										label="Con quien o donde vive *"
										v-model="matricula.conQuienVive"
										required
										:rules="[rules.required]"
									></v-select>
								</v-col>
								<v-col cols="5">
									<v-text-field
										dense
										class="mx-1"
										outlined
										v-model="matricula.nombreConQuienVive"
										label="Nombre con quien vive"
									></v-text-field>
								</v-col>
								
							</v-row>
							<v-row>
								<v-divider class=""></v-divider>
							</v-row>
							<v-row>
								<v-col cols="6" class="pt-1 ">
									<v-row>
										<v-col cols="6">
											<h3 class="text-center d-block">Tiene Registro social de hogares</h3>
										</v-col>
										<v-col cols="6">
											<v-checkbox
												style="width:40px"
												class="mt-1 "
												hide-details
												label="SI"
												v-model="matricula.tieneRsh"
											></v-checkbox>
										</v-col>
									</v-row>
								</v-col>
								<v-col cols="3" class="pt-1 ">
									<v-row class="justify-center">
										<v-col cols="6">
											<h3 class="text-center d-block">Conoce Puntaje</h3>
										</v-col>
										<v-col cols="6">
											<v-checkbox
												style="width:40px"
												class="mt-1 "
												hide-details
												label="SI"
												v-model="matricula.conocePuntajeRsh"
											></v-checkbox>
										</v-col>
									</v-row>
								</v-col>
								<v-col cols="3" class="pt-5 ">
									<v-text-field
										outlined
										dense
										label="Puntaje RSH"
										type="number"
										min="0"
										v-model.number="matricula.puntajeRsh"
									></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-divider class="mb-5"></v-divider>
							</v-row>

							<p>
								Campos señalados con * son obligatorios para poder guardar la nueva matricula
							</p>
						</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs>
		</v-form>
		<v-dialog
			v-model="cargando"
			width="350"
			max-width="500px"
			transition="dialog-transition"
			persistent
		>
			<v-card>
				<v-card-title primary-title>
					Guardando Nueva Matricula
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
	</v-card>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import regionesx from "../assets/dataApp/comunas-regiones.json";
import nacionalidades from "../assets/dataApp/nacionalidades.json";
import fn from "../assets/jsapp/myFunc";

axios.defaults.baseURL = process.env.VUE_APP_URIAPI;

export default {
	name: "new-matricula",
	props: {
		idAnioAcademico: Number,
		anio: Number,
		rutVerificado: String
	},
	data() {
		return {
			cargando: false,
			valid: true,
			estado: false,
			rules: {
				required: (value) => !!value || "Dato Obligatorio.",
				email: (value) => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return pattern.test(value) || "Email-Incorrecto.";
				},
			},
			regiones: regionesx,
			nacionalidad: nacionalidades,
			sexo: [
				{ id: "M", nombre: "Masculino" },
				{ id: "F", nombre: "Femenino" },
				{ id: "X", nombre: "Indefinido" },
			],
			viveCon: [
				"Papá",
				"Mamá",
				"Hermano",
				"Tio",
				"Abuelo",
				"Familiar",
				"Amigo de La familia",
				"Pensión/Residencia/Internado/Hogar",
			],
			niveles: [],
			becasJunaeb:["Sin Beca","Beca Indigena", "Beca Presidente de la Republica","Beca Integracion Territorial", "Beca Polimentales", "Beca Practica Tecnico Profecional","Programa de residencia Familiar Estudiantil", "beca Recidencia Insular", "Hogares Junaeb"],
			comunasx: ["-"],
			
			fotoUrlMatricula:"../avatar.jpg",

			fechaNacimiento: "",
			regionselecionada: "",
			comunaseleccionada: "",
			nacionalidadseleccionada: "",
			originarioAlumno: false,
			tipoAlumnoCheck: false,
			viveConAlumno: false,
			parentesco:[],

			pueblo: [
				"No-Ninguno",
				"Alacalufe",
				"Atacameño",
				"Aimara",
				"Colla",
				"Diagita",
				"Mapuche",
				"Quechua",
				"Rapanui",
			],
			tipoAlumno: [
				"Sin Clasificación",
				"Prioritario",
				"Integrado",
				"Preferente-Emergente",
				"Preferente-Autónomo",
			],

			matricula: {
				nombreAlumno: "",
				apellidoPatAlumno: "",
				apellidoMatAlumno: "",
				rutAlumno: this.rutVerificado,
				fechaNacimientoAlumno: "",
				edadAlumno: "",
				sexoAlumno: "",
				nacionalidadAlumno: "",
				alumnoNuevo: false,
				nivelMatricula: "",
				telefonoAlumno: "",
				emailAlumno: "",
				originarioAlumno: false,
				puebloOriginarioAlumno: "",
				tipoAlumnoCheck: false,
				tipoAlumnoSeleccionado: "",
				direccionAlumno: "",
				regionAlumno: "",
				comunaAlumno: "",
				curso: 1,
				fotoAlumno: null,
				

				parentescoApoderado: null,
				otroParentesco: "",
				nombreApoderado: "",
				apellidoPatApoderado: "",
				apellidoMatApoderado: "",
				rutApoderado: "",
				fechaNacimientoApoderado: "",
				edadApoderado: "",
				sexoApoderado: "",
				nacionalidadApoderado: "",
				apoderadoViveConAlumno: "",
				telefonoApoderado: "",
				emailApoderado: "",
				direccionApoderado: "",
				regionApoderado: "",
				comunaApoderado: "",

				hermanos: 0,
				conQuienVive: "",
				nombreConQuienVive: "",
				checkRolJunji: "",
				detalleRolJunaeb: "",

				tieneRsh: "",
				conocePuntajeRsh: "",
				puntajeRsh: "",
				anioAcademico: this.idAnioAcademico,
				anioAcademicoNumero: this.anio,
			},
		};
	},
	methods: {
		cancelarCreacionMatricula: function() {
			document.getElementById('foto').src= "../avatar.jpg"
			this.$refs.form.reset();
			this.matricula.fotoAlumno = null
			this.$emit("cerrarDialogMatricula", false);
			
		},
		test(){
			axios.get(`/api/alumno/${this.matricula.rutAlumno}`)
			.then()
		},
		verificarAlumno: function() {
			const rutcorrecto = fn.validaRut(this.matricula.rutAlumno);

			if (rutcorrecto) {
				axios.get(`/api/alumno/${this.matricula.rutAlumno}`).then((res) => {
					if (res.data!=null) {
						console.log(res.data);
						this.matricula.nombreAlumno = res.data.nombre1;
						this.matricula.apellidoPatAlumno = res.data.apellido1;
						this.matricula.apellidoMatAlumno = res.data.apellido2;
						let solofecha = res.data.fecha_nac;
						solofecha= solofecha.split(' ')[0]
						this.matricula.fechaNacimientoAlumno = solofecha;
						this.matricula.edadAlumno = res.data.edad;
						this.matricula.sexoAlumno = res.data.sexo;
						this.matricula.nacionalidadAlumno = res.data.nacionalidad;
						this.matricula.telefonoAlumno = res.data.celular;
						this.matricula.emailAlumno = res.data.email;
						this.matricula.direccionAlumno = res.data.direccion;
						this.matricula.regionAlumno = res.data.region;
						this.matricula.comunaAlumno = res.data.comuna;
					}
				});
			} else {
				Swal.fire({
					allowOutsideClick: false,
					icon: "error",
					title: "RUT INVALIDO",
				});
			}
		},

		verificarUsuarioApoderado: function() {
            const rutcorrecto = fn.validaRut(this.matricula.rutApoderado);
            if (rutcorrecto) {
			axios.get(`/api/apoderado/${this.matricula.rutApoderado}`).then((res) => {
				console.log(res.data);
				this.matricula.nombreApoderado = res.data.nombre1;
				this.matricula.apellidoPatApoderado = res.data.apellido1;
				this.matricula.apellidoMatApoderado = res.data.apellido2;
				let solofecha = res.data.fecha_nac;
				// solofecha= solofecha.split(' ')[0]
				// this.matricula.fechaNacimientoApoderado = solofecha;
				// this.matricula.edadApoderado = res.data.edad
				this.matricula.sexoApoderado = res.data.sexo;
				this.matricula.nacionalidadApoderado = res.data.nacionalidad;
				this.matricula.direccionApoderado = res.data.direccion;
				this.matricula.regionApoderado = res.data.region;
				this.matricula.comunaApoderado = res.data.comuna;
				this.matricula.telefonoApoderado = res.data.celular;
				this.matricula.emailApoderado = res.data.email;
				
			});
            }else{
                Swal.fire({
					allowOutsideClick: false,
					icon: "error",
					title: "RUT INVALIDO",
				});
            }
		},

		traerniveles() {
			axios.get("/api/niveles").then((res) => {
				this.niveles = res.data;
			});
		},
		trerparientes(){
			axios.get('/api/parentesco')
			.then(res=>{
				this.parentesco = res.data
			})
		},
		selectComuna: function() {
			this.comunasx = this.regiones.filter((selec) => selec.region == this.matricula.regionAlumno);
		},
		selectComunaApoderado: function() {
			this.comunasx = this.regiones.filter(
				(selec) => selec.region == this.matricula.regionApoderado
			);
		},
		mismaDireccion: function() {
			this.matricula.direccionApoderado = this.matricula.direccionAlumno;
			this.matricula.regionApoderado = this.matricula.regionAlumno;
			this.matricula.comunaApoderado = this.matricula.comunaAlumno;
		},
		guardarNuevaMatricula: function() {
			let self = this;
			this.$refs.form.validate();
			this.todosObligatorios();
			if (this.estado) {
				console.log(this.matricula);
				this.cargando = true;

				axios
					.post("/api/matricula", this.matricula, {
						headers: {
							"Content-Type": "application/json",
						},
					})
					.then((res) => {
						if (res.status == 200) {
							self.cargando = false;
							Swal.fire({
								title: "Guardada Correctamente!",
								text: "Se ha creado una nueva matrícula",
								icon: "success",
								confirmButtonText: "Continuar",
							});
						this.functionResetForm()
						this.$emit("cerrarDialogMatricula", false)
						
						}
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				console.log("faltan datos");
			}
		},
		
		
		fotoVistaPrevia: function() {
			if (this.matricula.fotoAlumno==null || this.matricula.fotoAlumno==undefined ) {
				console.log("es nulo");
				document.getElementById('foto').src= "../avatar.jpg"
				
			}else{
				console.log("NO es nulo");
				console.log(this.matricula.fotoAlumno);
				let imagen = URL.createObjectURL(this.matricula.fotoAlumno);
				document.getElementById('foto').src= imagen
				// console.log(this.fotoUrlMatricula);
			}
			
		},
		todosObligatorios: function() {
			if (
				this.matricula.nombreAlumno == "" ||
				this.matricula.apellidoPatAlumno == "" ||
				this.matricula.apellidoMatAlumno == "" ||
				this.matricula.rutAlumno == "" ||
				this.matricula.fechaNacimientoAlumno == "" ||
				this.matricula.edadAlumno == "" ||
				this.matricula.sexoAlumno == "" ||
				this.matricula.nacionalidadAlumno == "" ||
				
				this.matricula.nivelMatricula == "" ||
				this.matricula.emailAlumno == "" ||
				this.matricula.direccionAlumno == "" ||
				this.matricula.regionAlumno == "" ||
				this.matricula.comunaAlumno == "" ||
				this.matricula.parentescoApoderado == "" ||
				this.matricula.nombreApoderado == "" ||
				this.matricula.apellidoPatApoderado == "" ||
				this.matricula.apellidoMatApoderado == "" ||
				this.matricula.rutApoderado == "" ||
				this.matricula.fechaNacimientoApoderado == "" ||
				this.matricula.edadApoderado == "" ||
				this.matricula.sexoApoderado == "" ||
				this.matricula.nacionalidadApoderado == "" ||
				this.matricula.emailApoderado == "" ||
				this.matricula.direccionApoderado == "" ||
				this.matricula.regionApoderado == "" ||
				this.matricula.comunaApoderado == "" ||
				this.matricula.conQuienVive == "" ||
				this.matricula.nombreConQuienVive == "" ||
				this.matricula.anioAcademico == ""
			) {
				console.log("falata algun dato");
			} else {
				this.estado = true;
			}
		},
		functionResetForm: function(){
			this.matricula.nombreAlumno= ""
				this.matricula.apellidoPatAlumno= ""
				this.matricula.apellidoMatAlumno= ""
				this.matricula.rutAlumno= ""
				this.matricula.fechaNacimientoAlumno= ""
				this.matricula.edadAlumno= ""
				this.matricula.sexoAlumno= ""
				this.matricula.nacionalidadAlumno= ""
				this.matricula.alumnoNuevo= false
				this.matricula.nivelMatricula= ""
				this.matricula.telefonoAlumno= ""
				this.matricula.emailAlumno= ""
				this.matricula.originarioAlumno= false
				this.matricula.puebloOriginarioAlumno= ""
				this.matricula.tipoAlumnoCheck= false
				this.matricula.tipoAlumnoSeleccionado= ""
				this.matricula.direccionAlumno= ""
				this.matricula.regionAlumno= ""
				this.matricula.comunaAlumno= ""
				this.matricula.curso= 1,
				this.matricula.fotoAlumno= null

				this.matricula.parentescoApoderado= null
				this.matricula.otroParentesco= ""
				this.matricula.nombreApoderado= ""
				this.matricula.apellidoPatApoderado= ""
				this.matricula.apellidoMatApoderado= ""
				this.matricula.rutApoderado= ""
				this.matricula.fechaNacimientoApoderado= ""
				this.matricula.edadApoderado= ""
				this.matricula.sexoApoderado= ""
				this.matricula.nacionalidadApoderado= ""
				this.matricula.apoderadoViveConAlumno= ""
				this.matricula.telefonoApoderado= ""
				this.matricula.emailApoderado= ""
				this.matricula.direccionApoderado= ""
				this.matricula.regionApoderado= ""
				this.matricula.comunaApoderado= ""

				this.matricula.hermanos= 0
				this.matricula.conQuienVive= ""
				this.matricula.nombreConQuienVive= ""
				this.matricula.checkRolJunji= ""
				this.matricula.detalleRolJunaeb= ""

				this.matricula.tieneRsh= ""
				this.matricula.conocePuntajeRsh= ""
				this.matricula.puntajeRsh= ""
				this.matricula.anioAcademico= this.idAnioAcademico
				this.matricula.anioAcademicoNumero= this.anio
				
				document.getElementById('foto').src= "../avatar.jpg"
				

				this.$refs.form.resetValidation()
		},
	},
	created() {
		this.traerniveles();
		this.trerparientes();
		this.verificarAlumno();
	},

	computed: {
		
		edadAlumno: function() {
			let hoy = new Date();
			let cumpleanos = new Date(this.matricula.fechaNacimientoAlumno);
			let edad = hoy - this.matricula.fechaNacimientoAlumno;
			let x = hoy.getFullYear() - cumpleanos.getFullYear();
			this.matricula.edadAlumno = x;
			if (isNaN(x)) {
				return "....Esperando Facha Nacimiento";
			} else {
				if (x < 0) {
					return 0;
				} else {
					return x;
				}
			}
		},
		edadApoderado: function() {
			let hoy = new Date();
			let cumpleanos = new Date(this.matricula.fechaNacimientoApoderado);
			let edad = hoy - this.matricula.fechaNacimientoApoderado;
			let x = hoy.getFullYear() - cumpleanos.getFullYear();
			this.matricula.edadApoderado = x;
			if (isNaN(x)) {
				return "....Esperando Facha Nacimiento";
			} else {
				if (x < 0) {
					return 0;
				} else {
					return x;
				}
			}
		},
	},
	mounted() {},
};
</script>

<style scoped>
/* *{
        border:1px solid
    } */
</style>
