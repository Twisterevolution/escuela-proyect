<template>
	<v-data-table
		dense
		:headers="encabezado"
		:items="datostabla"
		:search="search"
		sort-by="calories"
		class="elevation-4"
		:footer-props="{
			'items-per-page-text': 'Cursos por página',
		}"
	>
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>{{ nombretabla }}</v-toolbar-title>

				<v-spacer></v-spacer>
				<v-text-field
					class="mr-10"
					v-model="search"
					append-icon="mdi-magnify"
					label="Buscar por Curso"
					single-line
					hide-details
				></v-text-field>
				<v-btn color="primary" dark class="mb-2">
					<v-icon>mdi-plus</v-icon>
					 NUEVO CURSO
				</v-btn>

				<v-dialog persistent v-model="dialog" max-width="650px">
					<v-card>
						<v-card-title>
							<span class="headline">ANOTACION LIBRO DE CLASES</span>
						</v-card-title>

						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="6">
										<v-text-field
											dense
											readonly
											filled
											rounded
											name="anotacionPor"
											label="PROFESOR QUE REALIZA"
											value="luis Guerra"
											id="anotacionPor"
										></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field
											dense
											filled
											rounded
											type="date"
											v-model="editedItem.codigo"
											label="FECHA"
										></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field
											dense
											readonly
											filled
											rounded
											v-model="editedItem.nombre"
											label="ALUMNO ANOTADO"
										></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-radio-group row justify-center>
											<v-radio color="green" label="POSITIVA" value="1"></v-radio>
											<v-radio color="red" label="NEGATIVA" value="0"></v-radio>
										</v-radio-group>
									</v-col>
								</v-row>

								<v-row>
									<v-col cols="12" sm="12" md="12">
										<v-textarea dense outlined label="DETALLE ANOTACION"></v-textarea>
									</v-col>
								</v-row>
							</v-container>
						</v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="close">
								Cancel
							</v-btn>
							<v-btn dark color="blue darken-1" @click="save">
								GUARDAR
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-dialog>

				<v-dialog v-model="dialogDelete" max-width="500px">
					<v-card>
						<v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
							<v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-toolbar>
		</template>
		<template v-slot:item.actions="{ item }">
			<v-icon small class="mr-2" @click="editItem(item)">
				ANOTACION
			</v-icon>
			<v-icon small @click="deleteItem(item)">
				mdi-delete
			</v-icon>
		</template>
		<template v-slot:no-data>
			<v-btn color="primary">
				Reset
			</v-btn>
		</template>
	</v-data-table>
</template>

<script>
export default {
	name: "tablaAdmin",
	props: {
		nombretabla: String,
		encabezado: Array,
		datostabla: Array,
	},
	data() {
		return {
			search: "",
			dialog: false,
			dialogDelete: false,
			headers: [{ text: "nombre", value: "nombre" }],
			items: [
				{ nombre: "castessllano", codigo: "cas001", nivel_asoc: "1°medio" },
				{ nombre: "Matematica", codigo: "mat001", nivel_asoc: "1°medio" },
				{ nombre: "Historia", codigo: "his001", nivel_asoc: "1°medio" },
				{ nombre: "Tecnologia", codigo: "tec001", nivel_asoc: "1°medio" },
			],
			desserts: [],
			editedIndex: -1,
			editedItem: {
				nombre: "",
				nivel_asoc: "",
				codigo: "",
				carbs: 0,
				protein: 0,
			},
			defaultItem: {
				name: "",
				calories: 0,
				fat: 0,
				carbs: 0,
				protein: 0,
			},
		};
	},
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "CREAR NUEVA ASIGNATURA" : "EDITAR ASIGNATURA";
		},
	},
	methods: {
		deleteItem(item) {
			this.editedIndex = this.datostabla.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialogDelete = true;
		},
		editItem(item) {
			this.editedIndex = this.items.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		closeDelete() {
			this.dialogDelete = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},
		deleteItemConfirm() {
			this.datostabla.splice(this.editedIndex, 1);
			this.closeDelete();
		},
		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.items[this.editedIndex], this.editedItem);
			} else {
				this.items.push(this.editedItem);
			}
			this.close();
		},
	},
};
</script>

<style scoped>
.col {
	padding-top: 0px;
	padding-bottom: 0px;
}
.v-input--radio-group--row {
	background-color: #f0f0f0;
	border-radius: 50px;
	margin-top: 0px;
}
.v-radio {
	margin-bottom: 3px;
	margin-left: 15px;
}
</style>
