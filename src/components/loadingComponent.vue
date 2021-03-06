<template>
    <v-dialog
			v-model="mostrarDialog"
			width="350"
			max-width="500px"
			transition="dialog-transition"
			persistent
		>
			<v-card>
				<v-card-title primary-title>
					{{tituloLoading}}
				</v-card-title>
				<v-card-text class="text-center">
					<img
						src="../assets/book-loader.gif"
						alt=""
						width="300"
						height="220"
						srcset=""
						class="carga"
					/>
				</v-card-text>
				<v-card-text>
					Un momento Porfavor....
				</v-card-text>
			</v-card>
		</v-dialog>
</template>
<script>
export default {
    name: "loading-dialog-component",
    props:{
        mostrarDialog:Boolean,
        tituloLoading:String
    }
}
</script>