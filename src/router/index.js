import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "default",
    },
    component: () => import(/*webpackChunkName: "home" */ "../views/index"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/*webpackChunkName: "register" */ "../views/register"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import(/*webpackChunkName: "login" */ "../views/login"),
  },
  {},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
