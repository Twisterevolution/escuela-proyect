<template>
  <v-app>
    <v-main
      class="pt-2 pt-sm-2 pt-xs-2 pt-md-0 pt-lg-0 pt-xl-0 pl-2 pl-sm-2 pl-xs-2 pl-md-2 pl-lg-2 pl-xl-2"
    >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import panel from "./PrincipalPanel";
import { mapActions } from "vuex";
export default {
  components: {
    panel
  },
  data: () => ({}),

  methods: {
   
  },
  computed: {

  },
  created() {

  }
};
</script>

<style >
* {
  /* border: 1px solid; */
}
.bandera {
  position: relative;
  overflow: hidden;
}

.bandera::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  /* background: url('./assets/bandera.jpg') ; */
  transform: rotate(0deg);
  -webkit-filter: brightness(60%);
  filter: brightness(60%);
}
</style>