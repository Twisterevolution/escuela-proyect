<template>
	<v-container>
		<v-data-table
			dense
			:headers="encabezado"
			:items="datostabla"
			:search="search"
            :loading="cargando"
            loading-text="Cargando datos...."
			sort-by="calories"
			class="elevation-4"
			:footer-props="{
				'items-per-page-text': 'Cursos por página',
			}"
		>
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title>CURSOS AÑO ACADEMICO</v-toolbar-title>

					<v-spacer></v-spacer>
					<v-text-field
						class="mr-10"
						v-model="search"
						append-icon="mdi-magnify"
						label="Buscar por Curso"
						single-line
						hide-details
					></v-text-field>
					<v-btn color="primary" dark class="mb-2" @click="openDialogNuevoCurso">
						<v-icon>mdi-plus</v-icon>
						NUEVO CURSO
					</v-btn>

					<v-dialog persistent v-model="dialog" max-width="500px">
                        <v-form 
                            v-model="validforCurso"
                            ref="curso"
                            lazy-validation
                            >
						<v-card>
							<v-card-title>
								<span class="headline">CREAR CURSO {{nuevoCurso.cursoNombre}}</span>
							</v-card-title>

							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="6">
                                            <v-select
                                                dense 
                                                filled 
                                                rounded
                                                :rules="[reglas.required]"
                                                :items="$store.state.nivelesapp"
                                                item-text="nombreNivel"
                                                item-value="id"
                                                v-model="nuevoCurso.nivel_id"
                                                label="NIVEL"
                                                @change="completaNombre"
                                            ></v-select>
										</v-col>
										<v-col cols="6">
											<v-text-field
												dense
												filled
												rounded
                                                :rules="[reglas.required]"
												:label="labelNombreCurso +' '+cambiaMayuscula"
                                                v-mask="'A'"
                                                v-model="letraNombre"
                                                placeholder="Letra"
											></v-text-field>
										</v-col>
										<v-col cols="6">
                                            <v-select
                                                dense
												filled
												rounded
                                                :rules="[reglas.required]"
                                                :items="$store.state.profesoresapp"
                                                item-text="usuario.nombreUsuario"
                                                item-value="id"
                                                label="Profesor Jefe"
                                                v-model="nuevoCurso.profesorJefe_id"
                                            ></v-select>
										</v-col>
										<v-col cols="6">
											<v-text-field
                                                dense
												filled
												rounded
                                                label="Maximo de Alumnos"
                                                :rules="[reglas.required]"
                                                v-model.number="nuevoCurso.totalAlumnos"
                                                type="number"
                                            ></v-text-field>
										</v-col>
									</v-row>

									<v-row>
										<v-col cols="12" sm="12" md="12">
											
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="dialog = false">
									Cancel
								</v-btn>
								<v-btn  color="blue darken-1" @click="guardarCurso" :disabled="!validforCurso">
									GUARDAR
								</v-btn>
								<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
                    </v-form>
					</v-dialog>
					<v-dialog max-width="500px">
						<v-card>
							<v-card-title class="headline">
								Are you sure you want to delete this item?
							</v-card-title>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text>Cancel</v-btn>
								<v-btn color="blue darken-1" text>OK</v-btn>
								<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-toolbar>
			</template>
			<template v-slot:[`item.actions`]="{ item }">
				<v-icon small>
					mdi-pencil
				</v-icon>
			</template>
			
		</v-data-table>
	</v-container>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
	name: "admcursos",
	components: {},
	props: {
		nivelBuscado: Number,
	},
	data() {
		return {
            validforCurso:true,
			dialog: false,
            search: "",
            profesoresSelect: this.$store.state.profesoresapp,
            cargando:true,
            reglas:{
               required: value => !!value || 'Dato Obligatorio.',
            },
			encabezado: [
				{ text: "NOMBRE", value: "nombreCurso" },
				{ text: "Max-Alumn", value: "cuposCurso" },
				{ text: "Prof-Jefe", value: "profesor.usuario.nombreUsuario" },
				{ text: "acciones", value: "actions" },
            ],
            labelNombreCurso:"",
            datostabla: [],
            letraNombre: "",
            nuevoCurso:{
                anioAcademico_id:"",
                nivel_id:"",
                profesorJefe_id: 1,
                cursoNombre:"",
                anio:"",
                totalAlumnos:""

            }
		};
	},
	methods: {
        guardarCurso:function(){
            this.$refs.curso.validate()
            axios.post('/api/cursos', this.nuevoCurso)
            .then(res=>{
                console.log(res.data);
                this.$refs.curso.reset()
                this.dialog = false

            })
            .catch(error=>{
                console.log(error);
            })
        },
        openDialogNuevoCurso:function(){
            this.dialog = true
            this.nuevoCurso.anioAcademico_id = this.anioAcademicoData.id
            this.nuevoCurso.anio = this.anioAcademicoData.anioAcademicoNumero
            
        },
        completaNombre: function(){
           let jj = this.nivelesapp.find(x=> x.id == this.nuevoCurso.nivel_id)
           this.labelNombreCurso = jj.nombreNivel;
           this.nuevoCurso.cursoNombre = jj.nombreNivel 
        },
		getCursosAnioAcademico: function() {
            const byanioAcademico = this.anioAcademicoData.id;
            let x = JSON.parse(localStorage.getItem('LSanioAcademicoId'));
			axios.get(`/api/cursos/searchByAnioAcademico/${x[0].id}`).then((res) => {
                this.datostabla = res.data;
                this.cargando = false
			});
		},
		...mapActions(['GETNIVELESDATA', 'GETPROFESORESDATA']),
    },
    computed:{
        cambiaMayuscula(){
            this.nuevoCurso.cursoNombre += " " + this.letraNombre.toUpperCase()
            return this.letraNombre.toUpperCase()
        },
       
        ...mapState(['anioAcademicoData', 'nivelesapp']),
    },
    created() {
        
    },
	mounted() {
		this.getCursosAnioAcademico();
        this.GETNIVELESDATA();
        this.GETPROFESORESDATA();
    },
};
</script>
