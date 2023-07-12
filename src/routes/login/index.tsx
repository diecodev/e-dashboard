import { component$ } from "@builder.io/qwik";
import { routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { db } from "@db";
import { LoginForm } from "~/components/login";
import { admins } from "@db/schemas";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const useLoginAction = routeAction$(
  async (formData, event) => {
    const adminResult = await db
      .select({ id: admins.id, password: admins.password })
      .from(admins)
      .where(eq(admins.email, formData.email));

    if (!adminResult.length) {
      return event.fail(401, { message: "Invalid credentials" });
    }

    if (!bcrypt.compareSync(formData.password, adminResult[0].password)) {
      return event.fail(401, { message: "Invalid credentials" });
    }

    event.redirect(302, "/admin");
  },
  zod$({
    email: z.string().email().min(6),
    password: z.string().min(8).max(24),
  })
);

export default component$(() => {
  return <LoginForm />;
});
