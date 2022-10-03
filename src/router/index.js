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
    },

    // vista de prueba simulando la pantalla de espera de los alumnos
    {
      path: "/waiting",
      name: "waiting",
      meta: {
        requiresAuth: true,
      },
      isAdmin: 0,
      superAdmin: 0,
      component: () => import("../views/WaitingView.vue"),
     /*  async beforeEnter(to) {
        const isAdmin = localStorage.getItem("isAdmin");
        const superAdmin = localStorage.getItem("superAdmin");
        if (to.isAdmin != isAdmin || to.superAdmin != superAdmin) {
          await router.push({
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue"),
          });
        }
      }, */
    },

    // vista de juego
    {
      path: "/abcgameview",
      name: "abcgameview",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/AbcGameView.vue"),
    },

    // vista de preparado para jugar
    {
      path: "/play",
      name: "readytoplay",
      meta: {
        requiresAuth: true,
      },
      roles: false,
      component: () => import("../views/ReadyToPlayView.vue"),
    },

    // vista de panel de juego
    {
      path: "/gamecontrol",
      name: "gamecontrol",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/GameControlView.vue"),
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
