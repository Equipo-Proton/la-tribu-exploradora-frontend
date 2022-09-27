import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Vista home
    {
      path: "/",
      name: "home",
      component: () => import("../views/LoginView.vue"),
    },
    // vista de login
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },

    // vista de panel de administración
    {
      path: "/panel",
      name: "adminPanel",
      component: () => import("../views/AdminPanelView.vue"),
    },
    // vista de prueba simulando la pantalla de espera de los alumnos
    {
      path: "/waiting",
      name: "waitingView",
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
  ],
});

export default router;
