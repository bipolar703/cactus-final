import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

// Database connection
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

// Contact submissions table schema
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  projectType: varchar('project_type', { length: 100 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Error logs table schema
export const errorLogs = pgTable('error_logs', {
  id: serial('id').primaryKey(),
  error: text('error').notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
  userAgent: text('user_agent'),
  url: text('url'),
  userId: varchar('user_id', { length: 100 }),
});

// Newsletter subscriptions table schema
export const newsletterSubscriptions = pgTable('newsletter_subscriptions', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  status: varchar('status', { length: 20 }).default('active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferInsert;
export type ErrorLog = typeof errorLogs.$inferInsert;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferInsert;