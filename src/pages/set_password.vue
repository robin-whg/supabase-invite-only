<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "~/hooks/useSupabase";

const router = useRouter();
const password = ref("");

const setPassword = async () => {
  const { user, error } = await supabase.auth.update({
    password: password.value,
  });

  if (error) {
    alert(error.message);
    console.log(error);
  } else {
    router.push("/");
  }
};
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center px-2">
    <form
      @submit.prevent="setPassword()"
      class="max-w-lg w-full flex flex-col gap-4"
    >
      <h1 class="text-2xl font-semibold text-zinc-700 text-center">
        Set password
      </h1>
      <input
        type="password"
        v-model="password"
        class="py-2 px-4 rounded-lg border border-zinc-300 w-full"
      />
      <button
        type="submit"
        class="py-2 text-white px-4 rounded-lg bg-[#24b47e] w-full font-semibold"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: fullscreen
</route>
