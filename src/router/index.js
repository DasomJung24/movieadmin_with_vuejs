import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/Register.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Nav.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
