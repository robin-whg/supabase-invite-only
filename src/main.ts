import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import "./styles/main.css";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const app = createApp(App);

const head = createHead();

const pinia = createPinia();

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(head);
app.use(pinia);
app.use(router);
app.mount("#app");
