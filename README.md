# Supabase Invite Only

Invite-only example for Supabase made with Vue 3

## Steps

1. Go to `Authentication > Settings` and disable Signup.
2. Go to `Authentication > Templates` and change `<a href="{{ .ConfirmationURL }}">` to `<a href="{{ .ConfirmationURL }}/set_password">` in invite user template.
3. Initialize Client

```ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "supabase-url",
  "public-anon-key"
);
```

4. Listen to Session changes

```ts 
import { Session } from "@supabase/supabase-js";

export const userSession = ref<Session | null>(null);

supabase.auth.onAuthStateChange((event, session) => {
  userSession.value = session;
});
```

5. Set password on `/set_password` route

```ts
  const { user, error } = await supabase.auth.update({
    password: password.value,
  });
```

6. Create route guards and redirect to `/sign_in` if not authenticated (`requiresAuth`) needs to be set on routes

```ts
router.beforeEach((to, from, next) => {
  const isAuthenticated = supabase.auth.user();
  if (to.name !== "sign_in" && !isAuthenticated) next({ name: "sign_in" });
  else next();
});
```