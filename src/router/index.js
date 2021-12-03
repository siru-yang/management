import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

Vue.use(VueRouter);

export const constRoutes = [
  {
    path: "",
    name: "home",
    component: layout,
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
        component: () => import ('@/views/order/list'),
      }
    ]
  }
]


const router = new VueRouter({
  routes: constRoutes,
});

export default router;
