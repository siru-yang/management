import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

Vue.use(VueRouter);

export const constRoutes = [
  {
    path: "/",
    name: "laylout",
    component: layout
  },
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
    ],
    meta: { roles: ['admin'] }
  },
  {
    path: "/customer",
    component: layout,
    meta: { roles: ['editor'] }
  }
]


const router = new VueRouter({
  mode: "history",
  routes: constRoutes,
});

export default router;
