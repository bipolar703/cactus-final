// Website Snapshot Generator
// This script can be used to generate website snapshots using Puppeteer

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const websites = [
  { name: 'vonoy', url: 'https://vonoy.co' },
  { name: 'optimaloption', url: 'https://optimaloption.net' },
  { name: 'triome-sa', url: 'https://triome.com.sa' },
  { name: 'trillogy-trading', url: 'https://trillogytradingllc.net' },
  { name: 'trilogy-trading', url: 'https://trilogytradingllc.com' },
];

async function generateSnapshots() {
  const browser = await puppeteer.launch({ headless: true });
  
  for (const site of websites) {
    try {
      console.log(`Generating snapshot for ${site.name}...`);
      
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      
      // Navigate to the website
      await page.goto(site.url, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for content to load
      await page.waitForTimeout(3000);
      
      // Take screenshot
      const screenshotPath = path.join(__dirname, '..', 'public', 'assets', 'portfolio', `${site.name}-snapshot.jpg`);
      await page.screenshot({ 
        path: screenshotPath,
        type: 'jpeg',
        quality: 90,
        fullPage: false
      });
      
      console.log(`✅ Snapshot saved: ${site.name}-snapshot.jpg`);
      await page.close();
      
    } catch (error) {
      console.error(`❌ Error generating snapshot for ${site.name}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('🎉 All snapshots generated!');
}

// Run the script
generateSnapshots().catch(console.error);

export { generateSnapshots };