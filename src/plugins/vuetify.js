import '@mdi/font/css/materialdesignicons.css'
import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
      theme: {
      themes: {
        light: {
          primary: '#0d47a1', //   #1976D2
          secondary: '#0d91a1', //  #424242
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          //#0d47a1
          //#0d91a1
          //#1d0da1

          //#1d0da1
          //#0d47a1
          //#a10d47
          //#a1670d
        },
        dark: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        }
      }
    }
});
