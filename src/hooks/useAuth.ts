import { ref } from "vue";
import { Session } from "@supabase/supabase-js";

export const userSession = ref<Session | null>(null);
