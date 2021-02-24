<template>
	<v-container>
		<v-row>
			<v-col cols="4">
				<v-text-field
					dense
					outlined
					label="Buscar Procedimiento"
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
				</v-data-table>
			</v-col>
			<v-col cols="8">
                <procedimientos-diagrama></procedimientos-diagrama>
            </v-col>
		</v-row>
	</v-container>
</template>

<script>

import ProcedimientosDiagrama from '../components/procedimientosDiagrama.vue';
export default {
	name: "procedimientos_view",
    components:{
        ProcedimientosDiagrama
       
    },
	data() {
		return {
			search:"",
			headers: [{ text: "NOMBRE PRODECIMIENTOS", value: "nombreProcedimiento" }],
			items: [
				{ id: 1, nombreProcedimiento: "Acoso sexual" },
				{ id: 2, nombreProcedimiento: "Cyber Bulling" },
				{ id: 3, nombreProcedimiento: "Embarazo" },
				{ id: 4, nombreProcedimiento: "Violacion" },
			],
		};
	},
};
</script>

<style scoped>
/* *{
    border: 1px solid;
} */
</style>
