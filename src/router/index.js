import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Vista home
/*     {
      path: "/",
      name: "LandingPage",
      component: () => import("../views/LandingPageView.vue"),
    }, */
    {
      path: "/",
      name: "Home",
      component: () => import("../views/LoginView.vue"),
    },
    // vista de login
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },

    // vista de panel de administración
    {
      path: "/panel",
      name: "AdminPanel",
      component: () => import("../views/AdminPanelView.vue"),
    },
    // vista de prueba simulando la pantalla de espera de los alumnos
    {
      path: "/waiting",
      name: "WaitingView",
      component: () => import("../views/WaitingView.vue"),
    },
    {
      path: "/abcgame",
      name: "AbcGameView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AbcGameView.vue"),
    },
    {
      path: "/play",
      name: "ReadyToPlay",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ReadyToPlayView.vue"),
    },
    {
      path: "/gamecontrol",
      name: "GameControl",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GameControlView.vue"),
    },



  ],
});

export default router;
