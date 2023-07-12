import type { RequestHandler } from "@builder.io/qwik-city";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "@db";

export const onGet: RequestHandler = async (event) => {
  await migrate(db, {
    migrationsFolder: "db/drizzle",
  });

  event.json(200, {
    message: "Migrations complete",
  });
};
