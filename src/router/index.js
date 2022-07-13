import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// // Auth guards
const authGuard = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user && to.name === "Profile") next({ name: "Login", params: {} });
  else next();
  console.log("Before enter router:", user);
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "default",
      text: "Hey friend",
      leading: true,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/index"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import(/* webpackChunkName: "login" */ "../views/login"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
    beforeEnter: authGuard,
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "default",
    },
    component: () => import(/* webpackChunkName: "logout" */ "../views/logout"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      layout: "default",
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "report" */ "../views/report"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      layout: "default",
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "budget" */ "../views/budget"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      layout: "default",
      text: "New Transaction",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "transaction" */ "../views/new-transaction"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
