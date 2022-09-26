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
  ],
});

export default router;
