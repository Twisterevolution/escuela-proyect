(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tablaAdmin"],{"169a":function(t,e,a){"use strict";a("7db0"),a("caad"),a("45fc"),a("a9e3"),a("2532"),a("498a");var i=a("5530"),n=a("2909"),o=a("ade3"),s=(a("368e"),a("480e")),c=a("4ad4"),l=a("b848"),d=a("75eb"),r=a("e707"),u=a("e4d3"),v=a("21be"),h=a("f2e7"),m=a("a293"),f=a("58df"),g=a("d9bd"),b=a("80d2"),p=Object(f["a"])(c["a"],l["a"],d["a"],r["a"],u["a"],v["a"],h["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:m["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(n["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(s["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,a){},4841:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-4",attrs:{headers:t.encabezado,items:t.datostabla,search:t.search,btnTitulo:t.btnTitulo,loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v(t._s(t.tablename)+" ")]),a("v-spacer"),a("v-text-field",{staticClass:"mr-10",attrs:{"append-icon":"mdi-magnify",label:"Buscar por año","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:t.passdata}},[a("v-icon",[t._v("mdi-plus")]),t._v(" "+t._s(t.btnTitulo)+" ")],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"NOMBRE ASIGNATURA"},model:{value:t.nuevaasignatura.nombre_asignatura,callback:function(e){t.$set(t.nuevaasignatura,"nombre_asignatura",e)},expression:"nuevaasignatura.nombre_asignatura"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"NIVEL-ASSOCIADO"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"CODIGO-MINEDUC"},model:{value:t.nuevaasignatura.codigo_asignatura,callback:function(e){t.$set(t.nuevaasignatura,"codigo_asignatura",e)},expression:"nuevaasignatura.codigo_asignatura"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editar(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}}],null,!0)})},n=[],o=(a("c975"),a("a434"),a("bc3a")),s=a.n(o),c={name:"tabla-tipo",props:{tablename:String,encabezado:Array,datostabla:Array,loading:Boolean,btnTitulo:String,editar:Function},data:function(){return{nuevaasignatura:{nombre_asignatura:"",codigo_asignatura:""},search:"",dialog:!1,dialogDelete:!1,headers:[{text:"nombre",value:"nombre"},{text:"nivel-asoc",value:"nivel_asoc"},{text:"codigo",value:"codigo"},{text:"acciones",value:"actions"}],items:[{nombre:"castellano",codigo:"cas001",nivel_asoc:"1°medio"},{nombre:"Matematica",codigo:"mat001",nivel_asoc:"1°medio"},{nombre:"Historia",codigo:"his001",nivel_asoc:"1°medio"},{nombre:"Tecnologia",codigo:"tec001",nivel_asoc:"1°medio"}],desserts:[],editedIndex:-1,editedItem:{nombre:"",nivel_asoc:"",codigo:"",carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"CREAR NUEVA ASIGNATURA":"EDITAR ASIGNATURA"}},methods:{passdata:function(t){this.$emit("abrirDialog1",{abre:!0,nueva:1})},deleteItem:function(t){this.editedIndex=this.datostabla.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},deleteItemConfirm:function(){this.datostabla.splice(this.editedIndex,1),this.closeDelete()},save:function(){s.a.post("http://localhost:3000/api/asignaturas",this.nuevaasignatura).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},l=c,d=a("2877"),r=a("6544"),u=a.n(r),v=a("8336"),h=a("b0af"),m=a("99d9"),f=a("62ad"),g=a("a523"),b=a("8fea"),p=a("169a"),x=a("132d"),A=a("0fd9"),I=a("2fa4"),k=a("8654"),C=a("71d9"),O=a("2a7f"),_=Object(d["a"])(l,i,n,!1,null,null,null);e["a"]=_.exports;u()(_,{VBtn:v["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:f["a"],VContainer:g["a"],VDataTable:b["a"],VDialog:p["a"],VIcon:x["a"],VRow:A["a"],VSpacer:I["a"],VTextField:k["a"],VToolbar:C["a"],VToolbarTitle:O["a"]})},a070:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("tabla",{attrs:{tablename:"ASIGNATURAS",encabezado:t.cabeceras,datostabla:t.datostabla,loading:t.loadingx,btnTitulo:"NUEVA ASIGNATURA",editar:t.editItem},on:{abrirDialog1:t.nuevaAsignatura}}),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialogEdit,callback:function(e){t.dialogEdit=e},expression:"dialogEdit"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("EDITAR ASIGNATURA")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"NOMBRE ASIGNATURA"},model:{value:t.editedItem.nombre,callback:function(e){t.$set(t.editedItem,"nombre",e)},expression:"editedItem.nombre"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"NIVEL-ASSOCIADO"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"CODIGO"},model:{value:t.editedItem.codigo,callback:function(e){t.$set(t.editedItem,"codigo",e)},expression:"editedItem.codigo"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveoedit}},[t._v(" Save ")])],1)],1)],1)],1)},n=[],o=(a("c975"),a("bc3a")),s=a.n(o),c=a("4841"),l={name:"tablaAdmin",components:{tabla:c["a"]},data:function(){return{dialogEdit:!1,loadingx:!0,editedIndex:-1,editedItem:{nombre:"",codigo:"",fechaModificacion:null,createdBy:0,modifiedBy:0},defaultItem:{nombre:"",codigo:"",fechaModificacion:null,createdBy:0,modifiedBy:0},nuevaOedita:0,cabeceras:[{text:"nombres",value:"nombre"},{text:"nivel-asoc",value:"nivel_asoc"},{text:"codigo",value:"codigo"},{text:"acciones",value:"actions"}],datostabla:[]}},computed:{},methods:{nuevaAsignatura:function(t){this.dialogEdit=t.abre,this.nuevaOedita=t.nueva},traerAsignaturas:function(){var t=this;s.a.get("/api/asignaturas").then((function(e){t.datostabla=e.data,t.loadingx=!1}))},editItem:function(t){this.editedIndex=this.datostabla.indexOf(t),this.editedItem=Object.assign({},t),this.dialogEdit=!0},saveoedit:function(){var t=this,e={headers:{Accept:"application/json, text/plain, */* ","Content-Type":"application/json"}};0==this.nuevaOedita?s.a.put("/api/asignaturas",this.editedItem,e).then((function(e){t.dialogEdit=!1,t.traerAsignaturas(),t.editedItem=Object.assign({},t.defaultItem)})).catch((function(t){console.log(t)})):s.a.post("/api/asignaturas",this.editedItem,e).then((function(e){t.dialogEdit=!1,t.traerAsignaturas(),t.editedItem=Object.assign({},t.defaultItem)})).catch((function(t){console.log(t)}))},close:function(){var t=this;this.dialogEdit=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.nuevaOedita=0}))}},created:function(){this.traerAsignaturas()}},d=l,r=a("2877"),u=a("6544"),v=a.n(u),h=a("8336"),m=a("b0af"),f=a("99d9"),g=a("62ad"),b=a("a523"),p=a("169a"),x=a("0fd9"),A=a("2fa4"),I=a("8654"),k=Object(r["a"])(d,i,n,!1,null,null,null);e["default"]=k.exports;v()(k,{VBtn:h["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:g["a"],VContainer:b["a"],VDialog:p["a"],VRow:x["a"],VSpacer:A["a"],VTextField:I["a"]})}}]);
//# sourceMappingURL=tablaAdmin.31f5dc9d.js.map