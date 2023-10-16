import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../src/components/Layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("./views/Home/index.vue"),
      },
      {
        path: "user",
        component: () => import("./views/User/index.vue"),
      },
      {
        path: "setting",
        component: () => import("./views/Setting/index.vue"),
      },
      {
        path: "login",
        component: () => import("./views/Login/index.vue"),
      },
      {
        path: "register",
        component: () => import("./views/Register/index.vue"),
      },
      {
        path: "article",
        component: () => import("./views/Article/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
