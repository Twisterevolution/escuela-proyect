<template>
	<v-container>
		<v-row justify="space-around">
            <v-col  >
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
            <v-col  >
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
            
            <v-col  >
				<v-btn color="primary" @click="modal3=true" :disabled="btnactive" block>
					<v-icon class="mx-2">mdi-format-list-checkbox</v-icon>
					ASISTENCIA
				</v-btn>
			</v-col>
            <v-col  >
				<v-btn color="primary" @click="modal1=true" :disabled="btnactive" block>
					<v-icon class="mx-2">mdi-briefcase-search-outline</v-icon>
					FIJAR PRUEBA
				</v-btn>
			</v-col>

             <v-col  >
				<v-btn color="primary" @click="modal2=true" :disabled="btnactive" block>
					<v-icon class="mx-2">mdi-spellcheck</v-icon>
					PONER NOTAS
				</v-btn>
			</v-col>
           
            
		</v-row>
        <v-row>
            <v-col>
                <v-card color="primary" dark elevation="20" v-if="showInfo" >
                    <v-card-title primary-title >
                      <span>CURSO: </span>{{curso}} <v-spacer></v-spacer> <span>Alumnos:</span>24 <v-spacer></v-spacer><span>Profesor Jefe:</span>Luis Perez de arce  
                    </v-card-title>
                    
                </v-card>
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
                        readonly
                        class="mx-1"
                        outlined
                        name="profesor"
                        label="PROFESOR"
                        v-model="profesor"
                        id="curso"
                        ></v-text-field>  
                    </v-row>
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
					<v-btn color="blue darken-1" dark>GUARDAR</v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-dialog>

 <!-- DIASLOG PONER NOTAS -->
        <v-dialog v-model="modal2" max-width="1290px" persistent fullscreen class="dl">
			<v-card color="blue lighten-5" >
                <v-container>
                    <v-row>
                        <v-col cols="3"> 
                            <v-card-title class="headline">NOTA DE PRUEBA</v-card-title>                  
                            <v-card-text>
                                <v-text-field
                                background-color="white"
                                dense
                                readonly
                                class="mx-1"
                                outlined
                                name="profesor"
                                label="PROFESOR"
                                v-model="profesor"
                                id="curso"
                                ></v-text-field>  
                    
                                <v-text-field
                                background-color="white"
                                dense
                                class="mx-1"
                                outlined
                                name="curso"
                                label="CURSO"
                                v-model="curso"
                                id="curso"
                                ></v-text-field>

                                <v-text-field
                                background-color="white"
                                dense
                                class="mx-1"
                                outlined
                                name="asignatura"
                                label="ASIGNATURA"
                                v-model="asignatura"
                                id="adignatura"
                                ></v-text-field>
                        
                                <v-text-field
                                background-color="white"
                                dense
                                class="mx-1"
                                outlined
                                type="date"
                                name="fechaprueba"
                                label="fecha"
                                id="fechaprueba"
                                ></v-text-field>

                                <v-text-field
                                background-color="white"
                                dense
                                class="mx-1"
                                outlined
                                name="ponderacion"
                                label="PONDERACION"
                                id="ponderacion"
                                ></v-text-field>
                        
                                <v-textarea
                                height="80"
                                class="mx-1"
                                outlined
                                name="detalleprueba"
                                label="DETALLE/CONTENIDO"
                                id="detalleprueba"
                                ></v-textarea>    
                            </v-card-text>
                        </v-col>

                        <v-col cols="4" v-for="tablanota in 2" :key="tablanota">
                            <v-card-text>
                                <v-simple-table dark dense style="width:400px"> 
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">
                                            Alumno
                                        </th>
                                        <th class="text-left">
                                            NOTA
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                        v-for="item in 14"
                                        :key="item"
                                        >
                                        <td>ALUMNO{{ item }}</td>
                                        <td style="width:100px">
                                            <v-text-field
                                                dense
                                                dark
                                                width="80"
                                                hide-details
                                                name="name"
                                                id="id"
                                            ></v-text-field>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12">
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="modal2 = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" dark>GUARDAR</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
			</v-card>
		</v-dialog>

<!-- DIALOG ASISTENCIA ALUMNOS ASIGNATURA -->
        <v-dialog v-model="modal3" max-width="1290px" persistent fullscreen class="dl">
			<v-card color="blue lighten-5" >
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="2" justify="center">
                            <h5 class="headline text-center">ASISTENCIA CURSO</h5>                   
                        </v-col>
                        <v-col cols="2">
                             <v-text-field
                                background-color="white"
                                dense
                                readonly
                                class="mx-1"
                                outlined
                                name="profesor"
                                label="PROFESOR"
                                v-model="profesor"
                                id="curso"
                                ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                                <v-text-field
                                background-color="white"
                                dense
                                readonly
                                class="mx-1"
                                outlined
                                name="curso"
                                label="CURSO"
                                v-model="curso"
                                id="curso"
                                ></v-text-field>  
                        </v-col>
                        <v-col cols="2">
                             <v-text-field
                                background-color="white"
                                readonly
                                dense
                                class="mx-1"
                                outlined
                                name="asignatura"
                                label="ASIGNATURA"
                                v-model="asignatura"
                                id="adignatura"
                                ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                             <v-text-field
                                background-color="white"
                                dense
                                class="mx-1"
                                outlined
                                type="date"
                                name="fechaprueba"
                                label="fecha"
                                id="fechaprueba"
                                ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="3" v-for="tabla in 4" :key="tabla">
                            
                                <v-simple-table dark dense style="width:400px"> 
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">
                                            Alumno
                                        </th>
                                        <th class="text-left">
                                            PRESENTE
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                        v-for="item in 10"
                                        :key="item"
                                        >
                                        <td>ALUMNO{{ item }}</td>
                                        <td style="width:100px;">
                                            <v-checkbox
                                            v-model="value" 
                                            value="value"
                                            hide-details
                                            ></v-checkbox>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
                            
                        </v-col>
                        <v-col cols="12">
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="modal3 = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" dark>GUARDAR</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
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
            modal2:false,
            modal3:false,
            curso:"",
            asignatura:"",
            profesor:"luis Guerra",
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
    computed: {
        showInfo(){
            if(this.curso!=="" && this.asignatura!==""){
                return true
            }
        }
    },
};
</script>

<style scoped >


*{
    border: 0px solid;
    }

span{
    font-weight: bolder; 
    }

td .v-input--checkbox{
    margin-top: 0px !important;
}



</style>
<style lang="sass">
    @import 'src/sass/variables.scss'
</style>