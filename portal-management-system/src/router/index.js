import { createRouter, createWebHistory } from "vue-router";

export const constRoutes = [
  {
    path: "/dashboard",
    meta: { title: "dashboard" },
    component: () => import("../pages/dashboard"),
  },
  {
    path: "/users",
    meta: { title: "users" },
    component: () => import("../pages/users"),
  },
  {
    path: "/orders",
    meta: { title: "orders" },
    component: () => import("../pages/orders"),
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
