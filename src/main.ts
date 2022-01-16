import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import "./styles/main.css";
import { router } from "~/hooks/useRouter";
import { supabase } from "./hooks/useSupabase";
import { userSession } from "./hooks/useAuth";

const app = createApp(App);

const head = createHead();

const pinia = createPinia();

app.use(head);
app.use(pinia);
app.use(router);
app.mount("#app");

supabase.auth.onAuthStateChange((event, session) => {
  userSession.value = session;
});
