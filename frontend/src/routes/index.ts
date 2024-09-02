import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import HomePage from "../pages/HomePage.vue";
import ReceivablePage from "../pages/ReceivablePage.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/receivable",
        name: "Receivable",
        component: ReceivablePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
