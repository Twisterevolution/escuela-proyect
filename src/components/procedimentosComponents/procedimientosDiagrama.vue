<template>
	<div>
		<h1>DIAGRAMA PROCEDIMENTO</h1>
		<div class="tool" ></div>
		<v-tooltip right max-width="180">
			<template v-slot:activator="{ on, attrs }">
                <div class="tool" v-bind="attrs" v-on="on" ></div>
			</template>
			<span>Aqui comienza el procedimento recuerde mantener la reserva de la informacion</span>
		</v-tooltip>
		<img src="../assets/diagramasImg/diagrama.png" alt="" width="100%" />
	</div>
</template>

<script>
export default {
	name: "procedimiento-diagrama",
};
</script>

<style scoped>

.tool {
	position: absolute;
	top: 9.4%;
	left: 55.2%; /* 741 */
	/* border: 1px solid; */
	width: 237px;
	height: 60px;
	z-index: 999;
}

</style>

