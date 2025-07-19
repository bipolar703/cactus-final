import type { Express } from 'express';
import { createServer, type Server } from 'http';
import { z } from 'zod';
import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Error logging endpoint
  app.post('/log-error', (req, res) => {
    try {
      const { error, timestamp } = req.body;
      const logEntry = `${timestamp} - ${error}\n`;
      
      // Append to progress.log
      fs.appendFileSync(
        path.resolve(process.cwd(), 'progress.log'),
        logEntry,
        { encoding: 'utf8' }
      );
      
      console.log('Error logged:', error);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to log error:', err);
      res.status(500).json({ success: false, message: 'Failed to log error' });
    }
  });
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);

      // In a real application, you would:
      // 1. Send an email using a service like Nodemailer
      // 2. Store the message in a database
      // 3. Send notifications to the team

      console.log('Contact form submission:', validatedData);

      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000));

      res.json({
        success: true,
        message: 'Contact form submitted successfully',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: error instanceof z.ZodError ? error.errors : undefined,
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
