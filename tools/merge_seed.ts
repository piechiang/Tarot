#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

interface SeedData {
  [key: string]: {
    tags: string[];
    modernSummary: string;
    keywords: string[];
  };
}

interface HexagramData {
  id: number;
  name: string;
  chineseName: string;
  lines: boolean[];
  judgment?: string;
  judgmentCn?: string;
  meaning?: string;
  meaningCn?: string;
  advice?: {
    love: string;
    career: string;
    health: string;
    general: string;
  };
  adviceCn?: {
    love: string;
    career: string;
    health: string;
    general: string;
  };
  // Extended fields
  tags?: string[];
  modernSummary?: string;
  keywords?: string[];
}

function parseArgs() {
  const args = process.argv.slice(2);
  const parsedArgs: { [key: string]: string } = {};
  
  for (let i = 0; i < args.length; i += 2) {
    if (args[i].startsWith('--')) {
      const key = args[i].substring(2);
      const value = args[i + 1];
      parsedArgs[key] = value;
    }
  }
  
  return parsedArgs;
}

function mergeSeedData(hexagramsPath: string, seedPath: string, outputPath: string) {
  console.log(`Reading hexagrams from: ${hexagramsPath}`);
  console.log(`Reading seed data from: ${seedPath}`);
  
  // Read existing hexagrams data
  let hexagramsData: HexagramData[];
  if (fs.existsSync(hexagramsPath)) {
    const content = fs.readFileSync(hexagramsPath, 'utf-8');
    hexagramsData = JSON.parse(content);
    console.log(`Found ${hexagramsData.length} existing hexagrams`);
  } else {
    console.log('Creating new hexagrams file...');
    hexagramsData = [];
  }
  
  // Read seed data
  const seedContent = fs.readFileSync(seedPath, 'utf-8');
  const seedData: SeedData = JSON.parse(seedContent);
  console.log(`Found seed data for ${Object.keys(seedData).length} hexagrams`);
  
  // Merge seed data into hexagrams
  for (const [hexagramId, seed] of Object.entries(seedData)) {
    const id = parseInt(hexagramId);
    let hexagram = hexagramsData.find(h => h.id === id);
    
    if (hexagram) {
      // Update existing hexagram
      hexagram.tags = seed.tags;
      hexagram.modernSummary = seed.modernSummary;
      hexagram.keywords = seed.keywords;
      console.log(`Updated hexagram ${id}: ${hexagram.chineseName}`);
    } else {
      // Create placeholder hexagram (will be filled by other tools)
      const newHexagram: HexagramData = {
        id,
        name: `Hexagram ${id}`,
        chineseName: `卦${id}`,
        lines: [false, false, false, false, false, false], // Placeholder
        tags: seed.tags,
        modernSummary: seed.modernSummary,
        keywords: seed.keywords
      };
      hexagramsData.push(newHexagram);
      console.log(`Created placeholder hexagram ${id}`);
    }
  }
  
  // Sort by ID
  hexagramsData.sort((a, b) => a.id - b.id);
  
  // Write merged data
  fs.writeFileSync(outputPath, JSON.stringify(hexagramsData, null, 2), 'utf-8');
  console.log(`Merged data written to: ${outputPath}`);
  console.log(`Total hexagrams: ${hexagramsData.length}`);
}

function main() {
  const args = parseArgs();
  
  if (!args.seed || !args.out) {
    console.error('Usage: ts-node merge_seed.ts --seed <seed_file> --out <output_file> [--in <input_file>]');
    console.error('');
    console.error('Options:');
    console.error('  --seed    Path to the seed data JSON file');
    console.error('  --in      Path to existing hexagrams file (optional)');
    console.error('  --out     Path to output the merged file');
    process.exit(1);
  }
  
  const inputPath = args.in || args.out; // If no input, use output (create new)
  const seedPath = args.seed;
  const outputPath = args.out;
  
  try {
    mergeSeedData(inputPath, seedPath, outputPath);
    console.log('Merge completed successfully!');
  } catch (error) {
    console.error('Error during merge:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}