import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from 'drizzle-orm'

export const admins = pgTable("admins", {
  id: text("id").primaryKey().default(sql`uuid_generate_v7()`).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});
