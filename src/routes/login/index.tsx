import { component$ } from "@builder.io/qwik";
import type { CookieOptions, type RequestHandler } from "@builder.io/qwik-city";
import { routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { db } from "@db";
import { LoginForm } from "~/components/login";
import { admins } from "@db/schemas";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { COOKIE_SESSION } from "~/libs/constants";

/**
 * @description
 * Fake user info:
 * - email: admin@admin.com
 * - password: admin_123
 */
export const useLoginAction = routeAction$(
  async (formData, { fail, cookie, redirect }) => {
    const adminResult = await db
      .select({ id: admins.id, password: admins.password })
      .from(admins)
      .where(eq(admins.email, formData.email));

    if (adminResult.length === 0) {
      throw fail(401, {
        message: "Your credentials are invalid. Please try again.",
      });
    }

    const isValidPassword = await bcrypt.compare(
      formData.password,
      adminResult[0].password
    );

    if (!isValidPassword) {
      throw fail(401, {
        message: "Your credentials are invalid. Please try again.",
      });
    }

    const newCookieSession: CookieOptions = {
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    };

    cookie.set(COOKIE_SESSION, adminResult[0].id, newCookieSession);
    throw redirect(302, "/");
  },
  zod$({
    email: z.string().email().min(6),
    password: z.string().min(8).max(24),
  })
);

export default component$(() => {
  return <LoginForm />;
});
