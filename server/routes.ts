import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, 'Project type is required'),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Error logging endpoint
  app.post("/log-error", (req, res) => {
    try {
      const { error, timestamp } = req.body;
      const logEntry = `${timestamp} - ${error}\n`;

      // Append to progress.log
      fs.appendFileSync(path.resolve(process.cwd(), "progress.log"), logEntry, {
        encoding: "utf8",
      });

      console.log("Error logged:", error);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Failed to log error:", err);
      res.status(500).json({ success: false, message: "Failed to log error" });
    }
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);

      const submissionsPath = path.resolve(process.cwd(), 'server/data/submissions.json');
      const submissions = JSON.parse(fs.readFileSync(submissionsPath, 'utf-8'));
      submissions.push(validatedData);
      fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));

      res.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error instanceof z.ZodError ? error.errors : undefined,
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
