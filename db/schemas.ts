import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const admins = pgTable("admins", {
  id: text("id").primaryKey().default(crypto.randomUUID()).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});
