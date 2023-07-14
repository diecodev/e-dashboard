CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY DEFAULT uuid_generate_v7() NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sub_categories" (
	"id" text PRIMARY KEY DEFAULT uuid_generate_v7() NOT NULL,
	"name" text NOT NULL,
	"category_id" text NOT NULL
);
