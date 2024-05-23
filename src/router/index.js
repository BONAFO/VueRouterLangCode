import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { ava_langs } from "./routes.params";

import mainRoutes from "./main.routes";




const routes = [
  ...mainRoutes,
  { path: '/:pathMatch(.*)*', redirect:"/en/" },
];

export const BASE_URL = "/#/";

let router;

router = createRouter({
  history: createWebHashHistory(BASE_URL),
  routes,
});

export const redirect = (uri = "") => {
  window.location.href = window.origin + BASE_URL + uri;
  // window.location.reload()
};

export default router;
