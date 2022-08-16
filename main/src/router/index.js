import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/Layout";
import Signin from "@/pages/signin";
import { apps } from "../apps";

const routes = [
  {
    path: "/user/signin",
    component: Signin,
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "/portal-web",
      },
      ...apps.map((app) => ({
        path: app.path,
        component: Layout,
      })),
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
