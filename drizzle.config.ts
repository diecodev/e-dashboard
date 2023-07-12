import type { Config } from "drizzle-kit";

export const config: Config = {
  schema: "./db/schemas.ts",
  driver: "pg",
  out: "./db/drizzle",
  dbCredentials: {
    user: import.meta.env.DB_USER,
    password: import.meta.env.DB_PASSWORD,
    host: import.meta.env.DB_HOST,
    database: import.meta.env.DB_DATABASE,
    ssl: import.meta.env.DB_SSLMODE === "require",
  },
};
