<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "~/hooks/useSupabase";

const router = useRouter();
const email = ref("");
const password = ref("");

const signIn = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  });

  if (error) {
    alert(error.message);
    console.log(error);
  } else {
    router.go(-2);
    router.push("/");
  }
};
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center px-2">
    <form
      @submit.prevent="signIn()"
      class="max-w-lg w-full flex flex-col gap-4"
    >
      <h1 class="text-2xl font-semibold text-zinc-700 text-center">Sign In</h1>
      <div>
        <label for="email">E-Mail</label>
        <input
          id="email"
          type="email"
          v-model="email"
          class="py-2 px-4 rounded-lg border border-zinc-300 w-full"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          class="py-2 px-4 rounded-lg border border-zinc-300 w-full"
        />
      </div>
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
