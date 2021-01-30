<template>
    <v-card>
      <v-form 
            ref="form"
            v-model="valid"
            lazy-validation
        > 
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title>NUEVA MATRÍCULA <v-spacer></v-spacer>Alumno(a): {{matricula.nombreAlumno}} {{matricula.apellidoPatAlumno}} </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical >
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

               <v-btn class="mx-2 mt-5" color="warning"  dark outlined @click="cancelarCreacionMatricula">
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
                            <v-img :src="urlimagen"></v-img>
                        </v-avatar>
                        <v-file-input
                            class="mt-2" 
                            outlined
                            dense
                            @change="fotoVistaPrevia"
                            label="SUBIR FOTO ALUMNO"
                            v-model="fotoAlumno"
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
                            item-text="nombreNivel"
                            item-value="id"
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
                        v-model="matricula.sexoSAlumno"
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
                            item-text='region'
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
                <v-row>
                    <v-col cols="2" class="text-center">
                        <label  for="">Pertenece a Pueblo Originario</label>
                    </v-col>
                    <v-col cols="2" justify="center">    
                        <v-checkbox 
                            label="SI" 
                            v-model="matricula.originarioAlumno" 
                        ></v-checkbox>
                    </v-col>
                    <v-col cols="8">
                        <v-select
                            v-if="matricula.originarioAlumno"
                            dense
                            class=""
                            outlined
                            :items="pueblo"
                            label="Pueblo Originario"
                            v-model="matricula.puebloOriginarioAlumno"
                        ></v-select>
                        <h3 class="pt-4" v-if="!matricula.originarioAlumno" >No Pertenece a Pueblo Orinario</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-divider class="mb-5"></v-divider>
                </v-row>
                <v-row>
                    <v-col cols="2" class="text-center">
                        <label  for="">Categoría MINEDUC</label>
                    </v-col>
                    <v-col cols="2" justify="center">    
                        <v-checkbox 
                            label="SI" 
                            v-model="matricula.tipoAlumnoCheck" 
                        ></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-select
                            v-if="matricula.tipoAlumnoCheck"
                            dense
                            class=""
                            outlined
                            :items="tipoAlumno"
                            label="Tipo de Alumno"
                            v-model="matricula.tipoAlumnoSeleccionado"
                        ></v-select>
                         <h3 class="pt-4" v-if="!matricula.tipoAlumnoCheck" >No tiene Tipo de Alumno Segun Mineduc</h3>
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
                DATOS APODERADO
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-select
                            dense
                            outlined
                            :items="parentezco"
                            v-model="matricula.parentezcoApoderado"
                            label="Parentesco con el alumno/a"
                            :rules="[rules.required]"
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
                    <v-col v-if='matricula.parentezcoApoderado =="Otro"'>
                        <v-text-field
                            
                            dense
                            outlined
                            label="Detalle de parentesco con el alumno/a"
                            v-model="matricula.otroParentezco"
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
                            v-model="matricula.apellidoMatApoderado "
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>

                    
                    <v-col cols="4">
                         <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            v-model="matricula.fechaNacimientoApoderado "
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
                        v-model="matricula.sexoSApoderado"
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
                    <v-col cols="4" class="pt-1 " >
                        <h3 class="text-center d-block">Apoderado vive con el alumno</h3>
                        <v-row class="justify-center">
                        
                        </v-row>
                        
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
                            item-text='region'
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
                    ></v-text-field></v-col>
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

                    <v-col cols="4">
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
                    <v-col cols="4">
                         <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            v-model="matricula.nombreConQuienVive "
                            label="Nombre con quien vive"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="4" class="pt-1 " >
                        <h3 class="text-center d-block">Tiene Rol JUNJI</h3>
                        <v-row class="justify-center">
                        <v-checkbox 
                            style="width:40px"
                            class="mt-1 "
                            hide-details
                            label="SI" 
                            v-model="matricula.checkRolJunji"
                        ></v-checkbox>
                        </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            label="UN NUMERO O UN NOMBRE DE CLASIFICACION *"
                            v-model="matricula.detalleRolJunji"
                            
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-divider class="mb-5"></v-divider>
                </v-row>
                <v-row>
                    <v-col cols="5" class="pt-1 " >
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
                    <v-col cols="3" class="pt-1 " >
                        <v-row class="justify-center">
                            <v-col cols="6">
                                <h3 class="text-center d-block">Conoce el Puntaje</h3>
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
                    <v-col cols="4" class="pt-5 " >
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
       scrollable="true"
       persistent
       
   >
    <v-card>
        <v-card-title primary-title>
          Guardando Nueva Matricula
        </v-card-title>
        <v-card-text class="text-center">
           <img  src="../assets/book-loader.gif" alt="" width="300" height="220" srcset="" class="carga">
        </v-card-text>
        <v-card-text>
            Un momento Porfavor....
        </v-card-text>
    </v-card>
       
   </v-dialog>
  </v-card>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import regionesx from '../assets/dataApp/comunas-regiones.json'
import nacionalidades from '../assets/dataApp/nacionalidades.json'
axios.defaults.baseURL = process.env.VUE_APP_URIAPI;



export default {
    name:"new-matricula",
    props:{
        idAnioAcademico:Number,
        anio:Number
    },
    data() {
        return {
            cargando:false,
            valid:true,
            estado:false,
            rules:{
                required: value => !!value || 'Dato Obligatorio.',
                email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Email-Incorrecto.'
                },
            },
            regiones: regionesx,
            nacionalidad: nacionalidades,
            sexo:[
                {id:"M", nombre: "Masculino"},
                {id:"F",nombre:"Femenino"}, 
                {id:"X", nombre:"Indefinido"}
                ],
            viveCon:["Papá","Mamá","Hermano", "Tio", "Abuelo", "Familiar", "Amigo de La familia","Pensión/Residencia/Internado/Hogar","Otro"],
            niveles:"",
            parentezco:["Papá","Mamá","Hermano","Tío","Abuelo","Otro"],
            comunasx:["-"],
            fotoAlumno:"",
            urlimagen:"",
            fechaNacimiento:"",
            regionselecionada:"",
            comunaseleccionada:"",
            nacionalidadseleccionada:"",
            originarioAlumno:false,
            tipoAlumnoCheck:false,
            viveConAlumno:false,
                            

            pueblo:["Alacalufe","Atacameño","Aimara","Colla","Diagita","Mapuche","Quechua","Rapanui","Ninguno", "Otro"],
            tipoAlumno:["Sin Clasificación","Prioritario", "Integrado", "Preferente-Emergente", "Preferente-Autónomo"],

            matricula:{
                nombreAlumno:"",
                apellidoPatAlumno:"",
                apellidoMatAlumno:"",
                rutAlumno:"",
                fechaNacimientoAlumno:"",
                edadAlumno:"",
                sexoSAlumno:"",
                nacionalidadAlumno:"",
                alumnoNuevo:"",
                nivelMatricula:"",
                telefonoAlumno:"",
                emailAlumno:"",
                originarioAlumno:false,
                puebloOriginarioAlumno:"",
                tipoAlumnoCheck:false,
                tipoAlumnoSeleccionado:"",
                direccionAlumno:"",
                regionAlumno:"",
                comunaAlumno:"",
                curso:1,

                parentezcoApoderado:"",
                otroParentezco:"",
                nombreApoderado:"",
                apellidoPatApoderado:"",
                apellidoMatApoderado:"",
                rutApoderado:"",
                fechaNacimientoApoderado:"",
                edadApoderado:"",
                sexoSApoderado:"",
                nacionalidadApoderado:"",
                apoderadoViveConAlumno:"",
                telefonoApoderado:"",
                emailApoderado:"",
                direccionApoderado:"",
                regionApoderado:"",
                comunaApoderado:"",


                hermanos:0,
                conQuienVive:"",
                nombreConQuienVive:"",
                checkRolJunji:"",
                detalleRolJunji:"",

                tieneRsh:"",
                conocePuntajeRsh:"",
                puntajeRsh:"",
                anioAcademico:this.idAnioAcademico,
                anioAcademicoNumero:this.anio
            }
        }
    },
    methods: {
        cancelarCreacionMatricula:function(){
            this.$refs.form.reset()
            this.$emit('cerrarDialogMatricula', false)
        },
         verificarAlumno:function(){
			axios.get(`/api/usuarios/searchRut/${this.matricula.rutAlumno}`)
			.then(res=>{
                console.log(res.data);
                this.matricula.nombreAlumno= res.data.nombreUsuario
                this.matricula.apellidoPatAlumno =res.data.apellidoPaternoUsuario
                this.matricula.apellidoMatAlumno = res.data.apellidoMaternoUsuario
                this.matricula.fechaNacimientoAlumno = res.data.fechaNacimiento
                this.matricula.edadAlumno = res.data.edad
                this.matricula.sexoSAlumno = res.data.sexo
                this.matricula.nacionalidadAlumno = res.data.nacionalidad
                this.matricula.telefonoAlumno = res.data.telefono
                this.matricula.emailAlumno = res.data.email
                this.matricula.direccionAlumno = res.data.direccion
                this.matricula.regionAlumno = res.data.region
                this.matricula.comunaAlumno = res.data.comuna
			})
		},


        verificarUsuarioApoderado:function(){
			axios.get(`/api/usuarios/searchRut/${this.matricula.rutApoderado}`)
			.then((res)=>{
                this.matricula.nombreApoderado = res.data.nombreUsuario
                this.matricula.apellidoPatApoderado = res.data.apellidoPaternoUsuario
                this.matricula.apellidoMatApoderado = res.data.apellidoMaternoUsuario
                this.matricula.fechaNacimientoApoderado = res.data.fechaNacimiento
                // this.matricula.edadApoderado = res.data.edad
                this.matricula.sexoSApoderado = res.data.sexo
                this.matricula.nacionalidadApoderado = res.data.nacionalidad
                this.matricula.direccionApoderado = res.data.direccion
                this.matricula.regionApoderado = res.data.region
                this.matricula.comunaApoderado = res.data.comuna
                this.matricula.telefonoApoderado = res.data.telefono
                this.matricula.emailApoderado = res.data.email
				console.log(res.data);
			})
            
		},
        

        traerniveles(){
            axios.get('/api/niveles')
            .then(res=>{
                this.niveles = res.data
            })
        },
        selectComuna:function(){
            this.comunasx = this.regiones.filter(selec => selec.region == this.matricula.regionAlumno)
       },
       selectComunaApoderado:function(){
            this.comunasx = this.regiones.filter(selec => selec.region == this.matricula.regionApoderado)
       },
       mismaDireccion:function(){
           this.matricula.direccionApoderado = this.matricula.direccionAlumno
           this.matricula.regionApoderado = this.matricula.regionAlumno
           this.matricula.comunaApoderado = this.matricula.comunaAlumno
        },
        guardarNuevaMatricula:function(){
            let self = this
            this.$refs.form.validate()
            this.todosObligatorios()
            if (this.estado) {
                console.log(this.matricula);
                this.cargando = true

                axios.post('/api/matriculas', this.matricula, {
                    headers:{
                        'Content-Type': 'application/json',
                    }
                })
            .then(res =>{
                
                if (res.status == 200) {
                    self.cargando = false
                    Swal.fire({
                        title: 'Guardada Correctamente!',
                    text: 'Se ha creado una nueva matrícula para:'+ res.data.usuario.nombreUsuario,
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                    })
                    this.$refs.form.reset()
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }else{
            console.log("faltan datos");
        }

            
        },
        fotoVistaPrevia:function(){
            this.urlimagen = URL.createObjectURL(this.fotoAlumno)
        },
        todosObligatorios:function(){
            if(this.matricula.nombreAlumno==""||
                this.matricula.apellidoPatAlumno==""||
                this.matricula.apellidoMatAlumno==""||
                this.matricula.rutAlumno==""||
                this.matricula.fechaNacimientoAlumno==""||
                this.matricula.edadAlumno==""||
                this.matricula.sexoSAlumno==""||
                this.matricula.nacionalidadAlumno==""||
                this.matricula.alumnoNuevo==""||
                this.matricula.nivelMatricula==""|| 
                this.matricula.emailAlumno==""||
                this.matricula.direccionAlumno==""||
                this.matricula.regionAlumno==""||
                this.matricula.comunaAlumno==""||
                this.matricula.parentezcoApoderado==""||
                this.matricula.nombreApoderado==""||
                this.matricula.apellidoPatApoderado==""||
                this.matricula.apellidoMatApoderado==""||
                this.matricula.rutApoderado==""||
                this.matricula.fechaNacimientoApoderado==""||
                this.matricula.edadApoderado==""||
                this.matricula.sexoSApoderado==""||
                this.matricula.nacionalidadApoderado==""||
                this.matricula.emailApoderado==""||
                this.matricula.direccionApoderado==""||
                this.matricula.regionApoderado==""||
                this.matricula.comunaApoderado==""||
                this.matricula.conQuienVive==""||
                this.matricula.nombreConQuienVive==""||
                this.matricula.anioAcademico==""
                ){
                    console.log("falata algun dato");
                }else{
                    this.estado=true
                }
        }
    },
    created() {
        this.traerniveles()
        
        
    },

    computed:{
        edadAlumno:function(){
            let hoy = new Date()
            let cumpleanos = new Date(this.matricula.fechaNacimientoAlumno)
            let edad = hoy-this.matricula.fechaNacimientoAlumno
            let x = hoy.getFullYear() - cumpleanos.getFullYear()
            this.matricula.edadAlumno = x
            if(isNaN(x)){
                return "....Esperando Facha Nacimiento"
            }else{
                if(x<0){
                 return 0   
                }else{
                    return x
                }
            }
        },
         edadApoderado:function(){
            let hoy = new Date()
            let cumpleanos = new Date(this.matricula.fechaNacimientoApoderado)
            let edad = hoy-this.matricula.fechaNacimientoApoderado
            let x = hoy.getFullYear() - cumpleanos.getFullYear()
            this.matricula.edadApoderado = x
            if(isNaN(x)){
                return "....Esperando Facha Nacimiento"
            }else{
                if(x<0){
                 return 0   
                }else{
                    return x
                }
            }
        }
    },
    mounted() {
        
    },
   
}
</script>

<style scoped>
    /* *{
        border:1px solid
    } */
</style>