module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer:{
    port:3000,
    proxy:{
    '^/api':{
      target:'http://localhost:8080/api',
      changeOrigin:true
    }
    }
  },
};
