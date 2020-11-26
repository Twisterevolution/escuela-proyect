import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/LoginView.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children:[
      {path: "panelcontrol",
      name: "PanelControl",
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/PrincipalPanel.vue")
      },
      {path: "about",
      name: "About",
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
      ,
      {path: "administracion",
      name: "Administracion",
      component: () =>
      import(/* webpackChunkName: "administracion" */ "../views/AdminView.vue"),
      children:[
        {
          path: "admroles",
          name:"roles",
          component:()=>
          import(/* webpackChunkName: "admroles" */ "../components/admroles.vue")
        },
        {
          path: "admusuarios",
          name:"usuarios",
          component:()=>
          import(/* webpackChunkName: "admusuarios" */ "../components/admusuarios.vue")
        },
        {
          path: "admasignaturas",
          name:"asignaturas",
          component:()=>
          import(/* webpackChunkName: "tablaAdmin" */ "../components/tablaAdmin.vue")
        },
      ]
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
