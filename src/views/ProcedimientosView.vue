<template>
	<v-container>
		<v-row>
			<v-col>
				<v-btn color="blue darken-4" dark @click="dialogNuevaDenuncia = true">
					<v-icon class="mr-3">mdi-text-box-plus-outline</v-icon>
					GENERAR NUEVA DENUNCIA</v-btn
				></v-col
			>
          
			
			<v-col class="d-flex justify-end">
               
				<v-btn color="warning" text outlined to="panelcontrol">
                    <v-icon class="mr-3">mdi-arrow-left-circle</v-icon>
                    volver al menu</v-btn></v-col
			>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-text-field
					dense
					outlined
					label="Buscar denuncia por tipo o nombre alumno"
					v-model="search"
				></v-text-field>
				<v-data-table
					:headers="headers"
					:items="items"
					class="elevation-3"
					loading="true"
					:search="search"
					hide-default-footer
				>
					<template v-slot:item.acciones="{ item }">
						<v-row justify="center">
							<v-btn small color="blue darken-1" dark class="mr-3">
								<v-icon class="mr-1">mdi-comment-eye</v-icon>
								VER DETALLE</v-btn
							>
							<v-btn small color="green darken-1" dark>
								<v-icon class="mr-1">mdi-book-plus-outline</v-icon>
								AGREGAR ACCION</v-btn
							>
						</v-row>
					</template>
				</v-data-table>
			</v-col>
		</v-row>
        <!-- SECCION: Dialog nueva denuncia -->
        <v-dialog
            v-model="dialogNuevaDenuncia"
            persistent 
            :overlay="false"
            max-width="600px"
            transition="dialog-transition"
        >
        <form-denuncia
            @cerrar="cerrarx"
        ></form-denuncia>
            
        </v-dialog>
	</v-container>
</template>

<script>
import FormDenuncia from '../components/procedimentosComponents/formDenuncia.vue';
export default {
	name: "procedimientos_view",
	components: {FormDenuncia},
	data() {
		return {
			search: "",
            dialogNuevaDenuncia :false,
			headers: [
				{ text: "Tipo Procedimento", value: "nombreProcedimiento" },
				{ text: "Alumno Asociado", value: "nombreAlumno" },
				{ text: "Fecha Inicio", value: "fechaInicio" },
				{ text: "Estado", value: "estado" },
				{ text: "Acciones", value: "acciones" },
			],
			items: [
				{
					id: 1,
					nombreProcedimiento: "Acoso sexual",
					nombreAlumno: "Luis Manuel",
					fechaInicio: "21-03-2021",
					estado: "En Tramite",
				},
				{
					id: 2,
					nombreProcedimiento: "Cyber Bulling",
					nombreAlumno: "Carlos Lopez",
					fechaInicio: "21-03-2021",
					estado: "Iniciado",
				},
				{
					id: 3,
					nombreProcedimiento: "Embarazo",
					nombreAlumno: "Romina lemus",
					fechaInicio: "21-03-2021",
					estado: "Cerrado",
				},
				{
					id: 4,
					nombreProcedimiento: "Violacion",
					nombreAlumno: "Eduardo Fiel",
					fechaInicio: "21-03-2021",
					estado: "Cerrado",
				},
			],
		};
	},
    methods: {
        cerrarx:function(e){
            this.dialogNuevaDenuncia = e
        }
    },
};
</script>

<style scoped>
/* *{
    border: 1px solid;
} */
</style>
