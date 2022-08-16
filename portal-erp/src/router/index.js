import { createRouter, createWebHistory } from "vue-router";

export const constRoutes = [
  {
    path: "/dashboard",
    meta: { title: "dashboard" },
    component: () => import("../pages/dashboard"),
  },
  {
    path: "/permission",
    meta: { title: "permission" },
    component: () => import("../pages/permission"),
  },
  {
    path: "/customers",
    meta: { title: "customers" },
    component: () => import("../pages/customers"),
  },
];

const routes = [
  {
    path: "/",
    component: () => import("../Layout"),
    redirect: "/dashboard",
    children: constRoutes,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
