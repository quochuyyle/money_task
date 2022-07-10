import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "default",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
