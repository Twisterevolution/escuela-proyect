<template>
	<v-card elevation="5">
		<p class="subtitle-2 ml-3">MATRÍCULAS TOMADAS POR CURSO</p>
		<v-simple-table dense>
			<thead>
				<tr>
					<th class="text-center" v-for="(nivelb, indexa) in 8" :key="indexa">
						{{ nivelb }}Basico
					</th>
					<th class="text-center" v-for="(nivelm, indexb) in 4" :key="indexb + 9">
						{{ nivelm }}Medio
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="text-center">
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
			</tbody>
		</v-simple-table>
	</v-card>
</template>

<script>
export default {
    name: "tabla-por-nivel"
}
</script>