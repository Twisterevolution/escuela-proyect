<template>
	<v-container>
		<tabla
			tablename="ASIGNATURAS"
			:encabezado="cabeceras"
			:datostabla="datostabla"
			:loading="loadingx"
			btnTitulo="NUEVA ASIGNATURA"
			:editar="editItem"
			@abrirDialog1="nuevaAsignatura"
		></tabla>
		<v-dialog persistent v-model="dialogEdit" max-width="500px">
			<v-card>
				<v-card-title>
					<span class="headline">EDITAR ASIGNATURA</span>
				</v-card-title>

				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12" sm="12" md="12">
								<v-text-field
									dense
									outlined
									v-model="editedItem.nombre"
									label="NOMBRE ASIGNATURA"
								></v-text-field>
							</v-col>
							<v-col cols="12" sm="12" md="12">
								<v-text-field dense outlined label="NIVEL-ASSOCIADO"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="6">
								<v-text-field
									dense
									outlined
									v-model="editedItem.codigo"
									label="CODIGO"
								></v-text-field>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="close">
						Cancel
					</v-btn>
					<v-btn color="blue darken-1" text @click="saveoedit">
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import axios from "axios";
import tabla from "../components/tablatipo";
export default {
	name: "tablaAdmin",
	components: {
		tabla,
	},
	data() {
		return {
			dialogEdit: false,
			loadingx: true,
			editedIndex: -1,
			editedItem: {
				nombre: "",
				codigo: "",
				fechaModificacion: null,
				createdBy: 0,
				modifiedBy: 0,
            },
            defaultItem: {
				nombre: "",
				codigo: "",
				fechaModificacion: null,
				createdBy: 0,
				modifiedBy: 0,
			},
			nuevaOedita: 0,
			cabeceras: [
				{ text: "nombres", value: "nombre" },
				{ text: "nivel-asoc", value: "nivel_asoc" },
				{ text: "codigo", value: "codigo" },
				{ text: "acciones", value: "actions" },
			],
			datostabla: [],
		};
	},
	computed: {},
	methods: {
		nuevaAsignatura(datos) {
			this.dialogEdit = datos.abre;
			this.nuevaOedita = datos.nueva;
		},
		traerAsignaturas: function() {
			axios.get("/api/asignaturas").then((res) => {
				this.datostabla = res.data;
				this.loadingx = false;
			});
		},
		editItem(item) {
			this.editedIndex = this.datostabla.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialogEdit = true;
		},
		saveoedit() {
			const config = {
				headers: {
					Accept: "application/json, text/plain, */* ",
					"Content-Type": "application/json",
				},
			};
			if (this.nuevaOedita == 0) {
				axios
					.put("/api/asignaturas", this.editedItem, config)
					.then((res) => {
						this.dialogEdit = false;
                        this.traerAsignaturas();
                        this.editedItem = Object.assign({}, this.defaultItem);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				axios
					.post("/api/asignaturas", this.editedItem, config)
					.then((res) => {
						this.dialogEdit = false;
                        this.traerAsignaturas();
                        this.editedItem = Object.assign({}, this.defaultItem);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},

		close() {
			this.dialogEdit = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
				this.nuevaOedita = 0;
			});
		},
	},
	created() {
		this.traerAsignaturas();
	},
};
</script>
