import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, projectType, message } = req.body;
  if (!firstName || !lastName || !email || !projectType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await pool.query(
      "INSERT INTO contact_submissions (first_name, last_name, email, phone, project_type, message) VALUES ($1, $2, $3, $4, $5, $6)",
      [firstName, lastName, email, phone || null, projectType, message],
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ error: "Database error", details: error });
  }
}
