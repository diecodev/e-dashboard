import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./db/schemas.ts",
  driver: "pg",
  out: "./db/drizzle",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
};

export default config