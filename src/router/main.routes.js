import { disclaim_middleware, language_middleware } from "./middewares";

export default [
  {
    path: "/:lang/",
    component: () => import("@/pages/Home.vue"),
    beforeEnter: (to, from, next) => {
      language_middleware(to, next);
      disclaim_middleware(to, next);
      next();
    },
  },
  { path: "/:lang/cards", component: () => import("@/pages/Home.vue") },
  { path: "/load/:token", component: () => import("@/pages/Token.vue") },
  {
    path: "/:lang/disclaim",

    component: () => import("@/pages/Disclaim.vue"),

    beforeEnter: (to, from, next) => {
      language_middleware(to, next);
      next();
    },
  },
];
