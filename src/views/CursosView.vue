<template>
	<v-container>
		<v-row justify="center">
			
            <v-col class="d-flex" cols="2">
				<v-select
					class="mx-2"
					outlined
					dense
					:items="cursos"
					v-model="curso"
					label="CURSO"
                    placeholder="MIS CURSOS"
                    @input="activarBoton"
				></v-select>
            </v-col>
            <v-col class="d-flex" cols="2">
				<v-select
					class="mx-2"
					outlined
					dense
					:items="asignaturas"
					v-model="asignatura"
					label="ASIGNATURAS"
                    placeholder="MIS ASIGNATURAS"
                    @input="activarBoton"
				></v-select>
            </v-col>
            
            <v-col class="d-flex" cols="2">
				<v-btn color="primary" :disabled="btnactive">
					<v-icon class="mx-2">mdi-format-list-checkbox</v-icon>
					ASISTENCIA
				</v-btn>
			</v-col>
            <v-col class="d-flex" cols="2">
				<v-btn color="primary" @click="modal1=true" :disabled="btnactive">
					<v-icon class="mx-2">mdi-briefcase-search-outline</v-icon>
					CREAR NUEVA PRUEBA
				</v-btn>
			</v-col>
           
            
		</v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col cols="12">
                <tabla
                :encabezado="headers"
                :datostabla="items"
                ></tabla>
            </v-col>
        </v-row>

        <v-dialog v-model="modal1" max-width="500px" persistent>
			<v-card>
				<v-card-title class="headline">ESPESIFICAR NUEVA PRUEBA</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-text-field
                        class="mx-1"
                        outlined
                        name="curso"
                        label="CURSO"
                        v-model="curso"
                        id="curso"
                    ></v-text-field>
                    <v-text-field
                        class="mx-1"
                        outlined
                        name="asignatura"
                        label="ASIGNATURA"
                        v-model="asignatura"
                        id="adignatura"
                    ></v-text-field>
                    </v-row>
                    <v-row>
                       <v-text-field
                        class="mx-1"
                        outlined
                        type="date"
                        name="fechaprueba"
                        label="fecha"
                        id="fechaprueba"
                    ></v-text-field>
                     <v-text-field
                        class="mx-1"
                        outlined
                        name="ponderacion"
                        label="PONDERACION"
                        id="ponderacion"
                    ></v-text-field>
                    </v-row>
                    <v-row>
                    <v-textarea
                        class="mx-1"
                        outlined
                        name="detalleprueba"
                        label="DETALLE/CONTENIDO"
                        id="detalleprueba"
                    ></v-textarea>    
                    </v-row>
                    
                   
                </v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="modal1 = false">Cancel</v-btn>
					<v-btn color="blue darken-1"  >GUARDAR</v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-dialog>

	</v-container>
</template>

<script>
import tabla from '../components/tablaCursos'
export default {
    name: "CursosView",
    components:{
        tabla,
    },
	data() {
		return {
            btnactive:true,
            modal1:false,
            curso:"",
            asignatura:"",
			asignaturas: ["CASTELLANO", "MATEMATICA", "BIOLOGIA", "GRAMATICA"],
			cursos: ["1 medio A", "2 medio A", "2 medio C", "2 basico b", "2 basico c"],
			letras: ["A", "B", "C", "D"],
            años: [2020, 2021, 2022, 2023],
             headers:[
                {text:'Alumno', value: 'nombre'},
                {text:'Prom', value:'promedio'},
                {text:'Asist', value: 'asistencia'},
                {text:'P1', value: 'p1'},
                {text:'P2', value: 'p2'},
                {text:'P3', value: 'p3'},
                {text:'P4', value: 'p4'},
                {text:'P5', value: 'p5'},
                {text:'P6', value: 'p6'},
                {text:'P7', value: 'p7'},

                {text:'acciones', value: 'actions'}
            ],
            items:[
                {nombre: 'Juan Maldonado', promedio: '5,4', asistencia: '95%', p1:"6,1", p2:"3,5"},
                {nombre: 'Pepe Rojas', promedio: '5,4', asistencia: '95%', p1:"6,2",p2:"6,5"},
                {nombre: 'Junin Juan Jarry', promedio: '5,4', asistencia: '95%', p1:"6,5", p2:"5,5"},
                {nombre: 'Mala Junta', promedio: '5,4', asistencia: '95%', p1:"6,4", p2:"5,5"},
               
            ],
		};
    },
    methods: {
        activarBoton:function(){
            if(this.curso!=="" && this.asignatura!==""){
                this.btnactive = false
            }
        }
    },
};
</script>
