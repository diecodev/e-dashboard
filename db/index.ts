import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres({
  ssl: import.meta.env.DB_SSLMODE,
});

export const db = drizzle(client);
