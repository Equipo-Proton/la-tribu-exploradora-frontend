import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // vista de login

    /*     {
      path: "/",
      name: "home",
      component: () => import("../views/LandingPageView.vue"),
    }, */
    /*     {
      path: "/",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    }, */
    {
      path: "/",
      name: "home",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/LoginView.vue"),
    },
    // vista de register
    /*     {
      path: "/register",
      name: "register",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/RegisterView.vue"),
    }, */
    // vista de panel de administración

    {
      path: "/panel",
      name: "AdminPanel",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/AdminPanelView.vue"),
    },
    // vista de prueba simulando la pantalla de espera de los alumnos
    {
      path: "/waiting",
      name: "Waiting",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/WaitingView.vue"),
    },
    {
      path: "/abcgameview",
      name: "AbcGameView",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/AbcGameView.vue"),
    },
    {
      path: "/play",
      name: "ReadyToPlay",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/ReadyToPlayView.vue"),
    },
    {
      path: "/gamecontrol",
      name: "GameControl",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/GameControlView.vue"),
    },
  ],
});

router.beforeEach((to, next) => {
  if (to.meta.requiresAuth && localStorage.getItem("token")) {
    return next();
  }

  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    router.push({
      path: "/",
      name: "home",
      component: () => import("../views/LoginView.vue"),
    });
  }
});

export default router;
