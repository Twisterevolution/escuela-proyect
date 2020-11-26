<template>
	<v-container>
		<v-row>
			<h1>BIENVENIDO A MYCOL</h1>
		</v-row>
		<v-row align-content="center" justify="center">
			<v-card
				hover
				:to="item.ruta"
				v-for="item in infocards"
				:key="item.name"
				width="300"
				height="200"
				class="mx-5 my-5 mb-5 purple lighten-5"
			>
				<v-card-title primary-title>
					<div>
						<h4 class="headline mb-0">
							<v-icon class="mr-2">mdi-teach</v-icon>
							{{ item.name }}
						</h4>
						<div>description</div>
					</div>
				</v-card-title>
			</v-card>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "panelControl",
	data() {
		return {
			infocards: [
				{ name: "ALUMNOS", ruta: "about" },
				{ name: "PROFESORES", ruta: "about" },
				{ name: "LIBRO DE CLASES", ruta: "about" },
				{ name: "CURSOS", ruta: "about" },
				{ name: "ASIGNATURAS", ruta: "about" },
				{ name: "ADMINISTRACION", ruta: "administracion" },
			],
		};
	},
};
</script>

<style></style>
