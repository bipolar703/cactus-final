import { Pool } from 'pg';
import nodemailer from 'nodemailer';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: 'Missing phone number' });
  }

  try {
    await pool.query(
      'INSERT INTO quick_calls (phone) VALUES ($1)',
      [phone]
    );

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER || 'rayangb2@gmail.com',
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Cactus Media Group <rayangb2@gmail.com>',
      to: 'rayangb2@gmail.com',
      subject: `New Quick Call Request`,
      text: `Phone: ${phone}`,
      html: `<p><strong>Phone:</strong> ${phone}</p>`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Database or email error', details: error });
  }
}
