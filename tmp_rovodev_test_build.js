// Test build configuration
console.log("Testing optimized build configuration...");

// Check if all motion imports are updated
const fs = require('fs');
const path = require('path');

function checkMotionImports(dir) {
  const files = fs.readdirSync(dir);
  let issues = [];
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.')) {
      issues = issues.concat(checkMotionImports(filePath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('from "framer-motion"')) {
        issues.push(`${filePath}: Still using framer-motion import`);
      }
    }
  });
  
  return issues;
}

const issues = checkMotionImports('./src');
if (issues.length > 0) {
  console.log('Found motion import issues:');
  issues.forEach(issue => console.log(issue));
} else {
  console.log('All motion imports updated successfully!');
}