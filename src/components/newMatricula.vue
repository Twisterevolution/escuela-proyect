<template>
    <v-card>
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
     
      
       
       <v-btn class="mx-2 mt-5" color="success" @click="guardarNuevaMatricula">
                <v-icon left>
                    mdi-content-save-all
                </v-icon>
            GUARDAR MATRÍCULA
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
                            :rules="[rules.required]"
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
                            label="NOMBRES *"
                            v-model="matricula.nombreAlumno"
                            :rules="[rules.required]"
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
                        <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            label="RUT *"
                            v-mask="'########-#'"
                            v-model="matricula.rutAlumno"
                            :rules="[rules.required]"
                        ></v-text-field>
                        <v-select
                            dense
                            class="mx-1 mt-1"
                            outlined
                            label="GRADO QUE MATRICULA *"
                            v-model="matricula.nivelMatricula"
                            :rules="[rules.required]"
                            :items="grados"
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
                        ></v-select>
                    </v-col>
                    <v-col v-if='matricula.parentezcoApoderado =="Otro"'>
                        <v-text-field
                            
                            dense
                            outlined
                            label="Detalle de parentesco con el alumno/a"
                            v-model="matricula.otroParentezco"
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
                            required
                            :rules="[() => !!name || 'Campo Obligatorio']"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="4">   
                        <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            label="APELLIDO PATERNO *"
                            v-model="matricula.apellidoPatApoderado"
                            required
                            :rules="[() => !!name || 'Campo Obligatorio']"
                        ></v-text-field>
                    </v-col> 

                    <v-col cols="4">
                        <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            label="APELLIDO MATERNO *"
                            v-model="matricula.apellidoMatApoderado "
                            required
                            :rules="[() => !!name || 'Campo Obligatorio']"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                        <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            label="RUT *"
                            v-model="matricula.rutApoderado"
                            required
                            :rules="[() => !!name || 'Campo Obligatorio']"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                         <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            v-model="matricula.fechaNaciemientoApoderado "
                            label="FECHA NACIMIENTO *"
                            type="date"
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
                        :rules="[rules.required]"
                    ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field
                            dense
                            class="mx-1"
                            outlined
                            label="NACIONALIDAD *"
                            v-model="matricula.nacionalidadApoderado"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4" class="pt-1 " >
                        <h3 class="text-center d-block">Apoderado vive con el alumno</h3>
                        <v-row class="justify-center">
                        <v-checkbox 
                            style="width:40px"
                            class="mt-1 "
                            hide-details
                            label="SI" 
                            v-model="matricula.apoderadoViveConAlumno"
                            @change="mismaDireccion" 
                        ></v-checkbox>
                        </v-row>
                        
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
                            @input="selectComuna"
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
                        ></v-select>
                    </v-col> 
                </v-row>
                <v-row>
                    <v-col>
                    <v-text-field
                        dense
                        class="mx-1"
                        outlined
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
                            :rules="[rules.required]"
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
  </v-card>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import regionesx from '../assets/dataApp/comunas-regiones.json'
import nacionalidades from '../assets/dataApp/nacionalidades.json'

export default {
    name:"new-matricula",
    data() {
        return {
            rules:{
                required: value => !!value || 'Dato Obligatorio.',
                email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Email-Incorrecto.'
                },
            },
            regiones: regionesx,
            nacionalidad: nacionalidades,
            sexo:["Masculino","Femenino", "Indefinido"],
            viveCon:["Papá","Mamá","Hermano", "Tio", "Abuelo", "Familiar", "Amigo de La familia","Pensión/Residencia/Internado/Hogar","Otro"],
            grados:["1°Medio","2°Medio"],
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


                hermanos:"",
                conQuienVive:"",
                nombreConQuienVive:"",
                checkRolJunji:"",
                detalleRolJunji:"",

                tieneRsh:"",
                conocePuntajeRsh:"",
                puntajeRsh:""
            }
        }
    },
    methods: {
        selectComuna:function(){
            this.comunasx = this.regiones.filter(selec => selec.region == this.matricula.regionAlumno)
       },
       mismaDireccion:function(){
           this.matricula.direccionApoderado = this.matricula.direccionAlumno
           this.matricula.regionApoderado = this.matricula.regionAlumno
           this.matricula.comunaApoderado = this.matricula.comunaAlumno
        },
        guardarNuevaMatricula:function(){
            Swal.fire({
                title: 'Guardada Correctamente!',
                text: 'Se ha creado una nueva matrícula',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
        },
        fotoVistaPrevia:function(){
            this.urlimagen = URL.createObjectURL(this.fotoAlumno)
        },
    },
    computed:{
        edadAlumno:function(){
            let hoy = new Date()
            let cumpleanos = new Date(this.matricula.fechaNacimientoAlumno)
            let edad = hoy-this.matricula.fechaNacimientoAlumno
            let x = hoy.getFullYear() - cumpleanos.getFullYear()
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
   
}
</script>

<style scoped>
    /* *{
        border:1px solid
    } */

</style>