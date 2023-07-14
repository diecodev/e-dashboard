import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schemas";

const client = postgres({ ssl: "require" });

export const db = drizzle(client, { schema });
