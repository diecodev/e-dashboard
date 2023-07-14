import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

export const admins = pgTable("admins", {
  id: text("id")
    .primaryKey()
    .default(sql`uuid_generate_v7()`)
    .notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export const categories = pgTable("categories", {
  id: text("id")
    .primaryKey()
    .default(sql`uuid_generate_v7()`)
    .notNull(),
  name: text("name").notNull(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  subCategories: many(subCategories),
}));

export const subCategories = pgTable("sub_categories", {
  id: text("id")
    .primaryKey()
    .default(sql`uuid_generate_v7()`)
    .notNull(),
  name: text("name").notNull(),
  categoryId: text("category_id").notNull(),
});

export const subCategoriesRelations = relations(subCategories, ({ one }) => ({
  category: one(categories, {
    fields: [subCategories.categoryId],
    references: [categories.id],
  }),
}));
