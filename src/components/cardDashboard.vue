<template>
	<v-card v-bind="$attrs" class="v-card--material pa-3 mt-5">
		<div class="d-flex grow flex-wrap">
			<v-sheet
				:color="color"
				max-height="50"
				width="100%"
				elevation="6"
				class="text-start v-card--material__heading mb-n8 pa-2 "
				dark
			>
				<div
                    class="title pb-5 " 
                    v-text="title" 
                >
                </div>
			</v-sheet>

			<div class="ml-6">
				<h1>{{datogeneral}}</h1>
			</div>
		</div>

		<slot />

		<template v-if="$slots.actions">
			<v-divider class="mt-2" />

			<v-card-actions class="pb-0">
				<slot name="actions" />
			</v-card-actions>
		</template>
	</v-card>
</template>

<script>
export default {
	name: "cardDashboard",
	props: {
        datogeneral:{
            type: Number,
            default:'-'
        },
		avatar: {
			type: String,
			default: "",
		},
		color: {
			type: String,
			default: "primary",
		},
		icon: {
			type: String,
			default: "mdi-pencil",
		},
		image: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			default: "el Texto",
		},
		title: {
			type: String,
			default: "Año Academico",
		},
	},
};
</script>

<style lang="sass" scoped>
.v-card--material
  &__heading
    position: relative
    top: -40px
    transition: .3s ease
    z-index: 1
</style>
