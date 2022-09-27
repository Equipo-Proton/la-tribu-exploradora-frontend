import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // vista de login
    {
      path: "/",
      name: "home",
      component: () => import("../views/LoginView.vue"),
    },
    // vista de register
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    // vista de panel de administración
    {
      path: "/panel",
      name: "administrationpanel",
      component: () => import("../views/AdminPanelView.vue"),
    },
    // vista de prueba simulando la pantalla de espera de los alumnos
    {
      path: "/childs",
      name: "rutadeprueba",
      component: () => import("../views/RutaEspera.vue"),
    },
    {
      path: "/abcgameview",
      name: "AbcGameView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AbcGameView.vue"),
    },
  ],
});

export default router;
