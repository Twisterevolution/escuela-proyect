module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer:{
    port:3000,
    proxy:{
    '^/api':{
      target:process.env.VUE_APP_URIAPI,
      changeOrigin:true
    }
    }
  },
};
