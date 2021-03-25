<template>
  <v-card
    v-bind="$attrs"
    class=" mt-4"
  >
    <v-card-title class="align-start">
      <v-sheet
        :color="color"
        :width="'100%'"
        height="50"
        class="overflow-hidden mt-n9 transition-swing v-card--material__sheet"
        elevation="6"
        max-width="100%"
        rounded
      >
          <slot name="heading" />

            <div class="text-md-h6 text-caption white--text text-center pt-2">
                {{ heading }}
            </div>
        
      </v-sheet>

      
        <h4 class="text-md-h4 mx-auto pt-4">{{ title }} </h4>

        
     
    </v-card-title>

    <slot />

    <template v-if="$slots.actions">
      <v-divider class="mt-2 mx-4" />

      <v-card-actions class="px-4 text-caption grey--text">
        <slot name="actions" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
  export default {
    name: 'MaterialCard',

    props: {
      color: String,
      fullHeader: Boolean,
      heading: String,
      icon: String,
      iconSmall: Boolean,
      subtitle: String,
      title: String,
    },

    computed: {
      hasHeading () {
        return !!(
          this.icon ||
          this.heading ||
          this.$slots.heading
        )
      },
      hasTitle () {
        return !!(
          this.title ||
          this.subtitle ||
          this.$slots.title ||
          this.$slots.subtitle
        )
      },
    },
  }
</script>

<style lang="sass">
  .v-card.v-card--material
    > .v-card__title
      > .v-card--material__title
        flex: 1 1 auto
        word-break: break-word
</style>