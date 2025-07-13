import { Router } from 'express';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const router = Router();

router.post('/api/download-source', async (req, res) => {
  try {
    const projectRoot = process.cwd();
    const zipPath = path.join(projectRoot, 'cactus-media-source-code.zip');

    // Clean up any existing zip
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }

    // Run the source code packaging script using Node.js directly
    execSync('node scripts/package-source.js', {
      stdio: 'inherit',
      cwd: projectRoot,
      env: { ...process.env },
    });

    // Send the zip file
    if (fs.existsSync(zipPath)) {
      res.download(zipPath, 'cactus-media-source-code.zip', (err) => {
        if (err) {
          console.error('Download error:', err);
          if (!res.headersSent) {
            res.status(500).json({ error: 'Download failed' });
          }
        }
        // Clean up the zip file after download
        setTimeout(() => {
          if (fs.existsSync(zipPath)) {
            fs.unlinkSync(zipPath);
          }
        }, 5000);
      });
    } else {
      res.status(500).json({ error: 'Package generation failed' });
    }
  } catch (error) {
    console.error('Source download error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to generate source package' });
    }
  }
});

export default router;
