import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // vista de Landing
    {
      path: "/",
      name: "landing",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/LandingView.vue"),
    },

    // vista de login
    {
      path: "/login",
      name: "home",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/LoginView.vue"),
    },

    // vista de panel
    {
      path: "/panel",
      name: "adminpanel",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/AdminPanelView.vue"),
      async beforeEnter() {
        const isAdmin = localStorage.getItem("isAdmin");
        const superAdmin = localStorage.getItem("superAdmin");
        if (isAdmin === "0" && superAdmin === "0") {
          await router.push({
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue"),
          });

          console.log(
            "Debes loguearte como profesor o director para acceder a esta ruta"
          );
        }
      },
    },

    // pantalla de espera de los alumnos
    {
      path: "/waiting",
      name: "waiting",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/WaitingView.vue"),
      async beforeEnter() {
        const isAdmin = localStorage.getItem("isAdmin");
        const superAdmin = localStorage.getItem("superAdmin");
        if (isAdmin != "0" || superAdmin != "0") {
          await router.push({
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue"),
          });

          console.log(
            "Debes loguearte como estudiante para acceder a esta ruta"
          );
        }
      },
    },

    // pantalla de preparados para jugar
    {
      path: "/play",
      name: "play",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/ReadyToPlayView.vue"),
      async beforeEnter() {
        const isAdmin = localStorage.getItem("isAdmin");
        const superAdmin = localStorage.getItem("superAdmin");
        if (isAdmin != "0" || superAdmin != "0") {
          await router.push({
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue"),
          });

          console.log(
            "Debes loguearte como estudiante para acceder a esta ruta"
          );
        }
      },
    },

    // vista de juego
    {
      path: "/abcgameview",
      name: "abcgameview",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/AbcGameView.vue"),
      async beforeEnter() {
        const isAdmin = localStorage.getItem("isAdmin");
        const superAdmin = localStorage.getItem("superAdmin");
        if (isAdmin != 0 || superAdmin != 0) {
          await router.push({
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue"),
          });

          console.log(
            "Debes loguearte como estudiante para acceder a esta ruta"
          );
        }
      },
    },

    // vista de control de juego
    {
      path: "/gamecontrol",
      name: "gamecontrol",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/GameControlView.vue"),
      async beforeEnter() {
        const isAdmin = localStorage.getItem("isAdmin");
        const superAdmin = localStorage.getItem("superAdmin");
        if (
          (isAdmin === "0" && superAdmin === "0") ||
          (isAdmin === "0" && superAdmin === "1")
        ) {
          await router.push({
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue"),
          });

          console.log("Debes loguearte como profesor para acceder a esta ruta");
        }
      },
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    router.push({
      path: "/",
      name: "home",
      component: () => import("../views/LoginView.vue"),
    });
  }
});

export default router;
