#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Script to update image paths in tarot-images.ts when switching formats
function updateImagePaths(newFormat = 'jpg') {
  const filePath = path.join('lib', 'tarot-images.ts');
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ tarot-images.ts not found');
    process.exit(1);
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace .svg with new format
  const oldFormat = content.includes('.svg') ? 'svg' : 'jpg';
  
  if (oldFormat === newFormat) {
    console.log(`✅ Already using .${newFormat} format`);
    return;
  }
  
  // Update image paths
  content = content.replace(new RegExp(`\\.${oldFormat}`, 'g'), `.${newFormat}`);
  
  // Update card back reference
  content = content.replace(/card-back\.\w+/g, `card-back.${newFormat}`);
  
  fs.writeFileSync(filePath, content);
  
  console.log(`✅ Updated image paths from .${oldFormat} to .${newFormat}`);
  console.log(`📝 Make sure you have ${newFormat} images in the correct directories`);
}

// Parse command line arguments
const args = process.argv.slice(2);
const formatArg = args.find(arg => arg.startsWith('--format='));
const format = formatArg ? formatArg.split('=')[1] : 'jpg';

if (!['jpg', 'png', 'svg', 'webp'].includes(format)) {
  console.error('❌ Invalid format. Use: jpg, png, svg, or webp');
  process.exit(1);
}

updateImagePaths(format);