import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { supabase } from "./useSupabase";

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = supabase.auth.user();
  if (to.name !== "sign_in" && !isAuthenticated) next({ name: "sign_in" });
  else next();
});
