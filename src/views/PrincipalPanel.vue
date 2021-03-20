<template>
	<v-container>
		<v-row>
			<h1>BIENVENIDO A MYCOL</h1>
		</v-row>
		<v-row align-content="center" justify="center">
			<v-card
				v-tilt="{scale:1.1}"
				:to="item.ruta"
				v-for="item in infocards"
				:key="item.name"
				width="300"
				height="200"
				class="mx-5 my-5 mb-5 mover"
				
				color="primary"
				dark
				
			>
				<v-card-title primary-title>
					<div>
						<h4 class="headline mb-0">
							<v-icon class="mr-2">mdi-teach</v-icon>
							{{ item.name }}
						</h4>
						<div>descripción</div>
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
				{ name: "MATRÍCULAS", ruta: "matriculas" },
				{ name: "ASITENCIAS", ruta: "/asistencia" },
				{ name: "LIBRO DE CLASES", ruta: "cursos" },
				{ name: "PROCEDIMIENTOS", ruta: "procedimientos" },
				// { name: "PROFESORES", ruta: "about" },
				// { name: "ASIGNATURAS", ruta: "about" },
				{ name: "ADMINISTRACIÓN", ruta: "administracion" },
				
			],
		};
	},
};
</script>


<style>

</style>
