-- Initial schema for Cactus Media Group database

CREATE TABLE IF NOT EXISTS "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(20),
	"project_type" varchar(100) NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "error_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"error" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"user_agent" text,
	"url" text,
	"user_id" varchar(100)
);

CREATE TABLE IF NOT EXISTS "newsletter_subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "newsletter_subscriptions_email_unique" UNIQUE("email")
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "idx_contact_submissions_email" ON "contact_submissions" ("email");
CREATE INDEX IF NOT EXISTS "idx_contact_submissions_created_at" ON "contact_submissions" ("created_at");
CREATE INDEX IF NOT EXISTS "idx_error_logs_timestamp" ON "error_logs" ("timestamp");
CREATE INDEX IF NOT EXISTS "idx_newsletter_subscriptions_email" ON "newsletter_subscriptions" ("email");
CREATE INDEX IF NOT EXISTS "idx_newsletter_subscriptions_status" ON "newsletter_subscriptions" ("status");