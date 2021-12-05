import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

Vue.use(VueRouter);

export const constRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login'),
  }
];

export const asynRoutes = [
  {
    path: "/order",
    component: layout,
    children: [
      {
        path: "/list",
        name: "list",
        component: () => import('@/views/order/list'),
      }
    ]
  }
]


const router = new VueRouter({
  mode: "history",
  routes: constRoutes,
});

export default router;
