import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Router } from "express";
import fs from "fs";
import path from "path";
import { db, contactSubmissions, errorLogs, newsletterSubscriptions } from "../src/lib/database.js";
import { eq } from "drizzle-orm";

const router = Router();

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Error logging endpoint
  app.post("/log-error", async (req, res) => {
    try {
      const { error, timestamp, userAgent, url, userId } = req.body;
      
      // Save to database
      await db.insert(errorLogs).values({
        error,
        timestamp: new Date(timestamp),
        userAgent,
        url,
        userId,
      });

      // Also append to progress.log for backup
      const logEntry = `${timestamp} - ${error}\n`;
      fs.appendFileSync(path.resolve(process.cwd(), "progress.log"), logEntry, {
        encoding: "utf8",
      });

      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to log error" });
    }
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);

      // Save to database
      await db.insert(contactSubmissions).values({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        projectType: validatedData.projectType,
        message: validatedData.message,
      });

      // Also save to JSON file for backup
      const submissionsPath = path.resolve(
        process.cwd(),
        "server/data/submissions.json",
      );
      try {
        const submissions = JSON.parse(fs.readFileSync(submissionsPath, "utf-8"));
        submissions.push({
          ...validatedData,
          timestamp: new Date().toISOString(),
        });
        fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));
      } catch (fileError) {
        // File backup failed, but database save succeeded
      }

      res.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error instanceof z.ZodError ? error.errors : undefined,
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !z.string().email().safeParse(email).success) {
        return res.status(400).json({
          success: false,
          message: "Valid email is required",
        });
      }

      // Check if email already exists
      const existing = await db.select().from(newsletterSubscriptions).where(eq(newsletterSubscriptions.email, email));
      
      if (existing.length > 0) {
        return res.status(409).json({
          success: false,
          message: "Email already subscribed",
        });
      }

      // Add new subscription
      await db.insert(newsletterSubscriptions).values({
        email,
        status: 'active',
      });

      res.json({
        success: true,
        message: "Successfully subscribed to newsletter",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to subscribe to newsletter",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
