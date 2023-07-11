import { serverAuth$ } from "@builder.io/qwik-auth";
import GoogleProvider from "@auth/core/providers/google";
import type { Provider } from "@auth/core/providers";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      GoogleProvider({
        clientId: env.get("GOOGLE_ID")!,
        clientSecret: env.get("GOOGLE_SECRET")!,
      }),
    ] as Provider[],
  }));
