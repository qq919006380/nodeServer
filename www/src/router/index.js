import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {path: '/', redirect: 'index'},

  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/list.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
