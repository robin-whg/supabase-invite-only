<script lang="ts" setup>
import { supabase } from "~/hooks/useSupabase";
import { userSession } from "~/hooks/useAuth";
import { useRouter } from "vue-router";

const router = useRouter();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    alert(error.message);
  } else {
    router.push("/sign_in");
  }
};
</script>

<template>
  <h1 class="text-xl font-semibold">
    {{ userSession?.user?.email }}
  </h1>
  <button
    @click="signOut()"
    class="py-2 text-white px-4 rounded-lg bg-[#24b47e] font-semibold"
  >
    Sign out
  </button>
</template>
