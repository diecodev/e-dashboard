import type { Session } from "@auth/core/types";
import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import {  db } from "@db";import { admins } from "../../db/schemas";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const onRequest: RequestHandler = async (event) => {
  // const session: Session | null = event.sharedMap.get('session');
  // if ((!session || new Date(session.expires) < new Date()) && !event.url.pathname.startsWith('/api/auth')) {
  //   throw event.redirect(302, `/api/auth/signin?callbackUrl=${event.url.href}`);
  // }
  const allAdmins = await db.select().from(admins);

  console.log(allAdmins);
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
