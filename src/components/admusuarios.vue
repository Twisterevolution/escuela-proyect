<template>
	<v-container>
        <!--SECCION:componente, tabla tipo/ usuarios  -->
		<tabla
			tablename="USUARIOS MYCOL"
			btnTitulo="CREAR NUEVO USUARIO"
			:encabezado="cabeceras"
			:datostabla="datostabla"
            @abrirDialog1="abrirDl"
		></tabla>

		<!-- SECCION: dialog crera nuevo usuario  -->
		<v-dialog
			v-model="dialogNuevoUsuario"
			persistent
			:overlay="false"
			max-width="500px"
			transition="dialog-transition"
		>
			<v-card>
                <v-form ref="nuevoForm">
				<v-card-title primary-title>
					CREAR NUEVO USUARIO
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col>
							<v-text-field
								name="rut"
								label="RUT"
								v-mask="'########-#'"
								v-model="nuevoUsuario.rut"
							></v-text-field>
						</v-col>
						<v-col>
							<v-select
								:items="roles"
								v-model="nuevoUsuario.rol"
								label="ROL DE SISTEMA"
							></v-select>
						</v-col>
					</v-row>

					<v-text-field
						name="nombre"
						label="Nombres"
						v-model="nuevoUsuario.nombre"
					></v-text-field>
					<v-text-field
						name="Apellido1"
						label="Apellido Paterno"
						v-model="nuevoUsuario.apellido1"
					></v-text-field>
					<v-text-field
						name="Apellido2"
						label="Apellido Materno"
						v-model="nuevoUsuario.apellido2"
					></v-text-field>
					<v-text-field 
                        name="email" 
                        label="E-Mail" 
                        type="email"
                        v-model="nuevoUsuario.email"
                    ></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-btn color="warning" text @click="cerrarDialog">cancelar</v-btn>
					<v-spacer></v-spacer>
					<v-btn color="success">guardar</v-btn>
				</v-card-actions>
                </v-form>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import tabla from "../components/tablatipo.vue";
export default {
	name: "admusuarios",
	components: {
		tabla,
	},
	data() {
		return {
			dialogNuevoUsuario: false,
			nuevoUsuario: {
				rut: "",
				nombre: "",
				apellido1: "",
				apellido2: "",
				rol: null,
                email:null
			},
            roles:[],
			cabeceras: [
				{ text: "Nombre", value: "nombre" },
				{ text: "Nombre Usuario", value: "rut" },
				{ text: "rol", value: "rol" },
				{ text: "acciones", value: "actions" },
			],
			datostabla: [
				{
					nombre: "Juan",
					rut: "12365489-7",
					direccion: "av. Sin Numero 230, temuco",
					nacimiento: "12-10-1899",
					edad: 34,
					rol: "alumno",
				},
				{
					nombre: "Marcelo Oliva",
					rut: "8365122-5",
					direccion: "Los alreces #1824, labranza",
					nacimiento: "12-10-1997",
					edad: 30,
					rol: "Profesor",
				},
			],
		};
	},
    methods: {
        abrirDl(e){
            this.dialogNuevoUsuario = e.abre
        },
        cerrarDialog:function(){
            this.$refs.nuevoForm.reset()
            this.dialogNuevoUsuario = false
        }
    },
};
</script>
