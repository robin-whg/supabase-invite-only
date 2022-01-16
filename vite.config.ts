import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue(),
    Pages({
      extendRoute(route, parent) {
        if (route.path === "/sign_in") {
          return route;
        }

        return {
          ...route,
          meta: { requiresAuth: true },
        };
      },
    }),
    Layouts(),
    Components({
      resolvers: [IconsResolver(), HeadlessUiResolver({})],
    }),
    Icons(),
  ],
});
