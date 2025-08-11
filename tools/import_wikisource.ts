#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';

interface HexagramData {
  id: number;
  name: string;
  chineseName: string;
  lines: boolean[];
  judgment?: string;
  judgmentCn?: string;
  judgmentZh?: string;
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
  // Original text fields
  originalText?: {
    judgment: string;
    image: string;
    commentary: string;
  };
}

// Mapping of hexagram binary patterns to Wikisource page names
const pages: { [key: string]: string } = {
  "111111": "周易/乾",  // Qian - The Creative
  "000000": "周易/坤",  // Kun - The Receptive
  "100010": "周易/屯",  // Zhun - Difficulty at the Beginning
  "010001": "周易/蒙",  // Meng - Youthful Folly
  "111010": "周易/需",  // Xu - Waiting
  "010111": "周易/讼",  // Song - Conflict
  "010000": "周易/师",  // Shi - The Army
  "000010": "周易/比",  // Bi - Holding Together
  "111011": "周易/小畜", // Xiao Xu - The Taming Power of the Small
  "110111": "周易/履",  // Lu - Treading
  "111000": "周易/泰",  // Tai - Peace
  "000111": "周易/否",  // Pi - Standstill
  "101111": "周易/同人", // Tong Ren - Fellowship with Men
  "111101": "周易/大有", // Da You - Possession in Great Measure
  "001000": "周易/谦",  // Qian - Modesty
  "000100": "周易/豫",  // Yu - Enthusiasm
  "100110": "周易/随",  // Sui - Following
  "011001": "周易/蛊",  // Gu - Work on What Has Been Spoiled
  "110000": "周易/临",  // Lin - Approach
  "000011": "周易/观",  // Guan - Contemplation
  "100101": "周易/噬嗑", // Shi He - Biting Through
  "101001": "周易/贲",  // Pi - Grace
  "000001": "周易/剥",  // Bo - Splitting Apart
  "100000": "周易/复",  // Fu - Return
  "100111": "周易/无妄", // Wu Wang - Innocence
  "111001": "周易/大畜", // Da Xu - The Taming Power of the Great
  "100001": "周易/颐",  // Yi - The Corners of the Mouth
  "011110": "周易/大过", // Da Guo - Preponderance of the Great
  "010010": "周易/坎",  // Kan - The Abysmal (Water)
  "101101": "周易/离",  // Li - The Clinging (Fire)
  "001110": "周易/咸",  // Xian - Influence (Wooing)
  "011100": "周易/恒",  // Heng - Duration
  "001111": "周易/遁",  // Dun - Retreat
  "111100": "周易/大壮", // Da Zhuang - The Power of the Great
  "000101": "周易/晋",  // Jin - Progress
  "101000": "周易/明夷", // Ming Yi - Darkening of the Light
  "101011": "周易/家人", // Jia Ren - The Family
  "110101": "周易/睽",  // Kui - Opposition
  "001010": "周易/蹇",  // Jian - Obstruction
  "010100": "周易/解",  // Xie - Deliverance
  "110001": "周易/损",  // Sun - Decrease
  "100011": "周易/益",  // Yi - Increase
  "111110": "周易/夬",  // Guai - Breakthrough
  "011111": "周易/姤",  // Gou - Coming to Meet
  "000110": "周易/萃",  // Cui - Gathering Together
  "011000": "周易/升",  // Sheng - Pushing Upward
  "010110": "周易/困",  // Kun - Oppression
  "011010": "周易/井",  // Jing - The Well
  "101110": "周易/革",  // Ge - Revolution
  "011101": "周易/鼎",  // Ding - The Cauldron
  "100100": "周易/震",  // Zhen - The Arousing (Shock)
  "001001": "周易/艮",  // Gen - Keeping Still (Mountain)
  "001011": "周易/渐",  // Jian - Development (Gradual Progress)
  "110100": "周易/归妹", // Gui Mei - The Marrying Maiden
  "101100": "周易/丰",  // Feng - Abundance
  "001101": "周易/旅",  // Lu - The Wanderer
  "011011": "周易/巽",  // Xun - The Gentle (Wind)
  "110110": "周易/兑",  // Dui - The Joyous (Lake)
  "010011": "周易/涣",  // Huan - Dispersion
  "110010": "周易/节",  // Jie - Limitation
  "110011": "周易/中孚", // Zhong Fu - Inner Truth
  "001100": "周易/小过", // Xiao Guo - Preponderance of the Small
  "101010": "周易/既济", // Ji Ji - After Completion
  "010101": "周易/未济"  // Wei Ji - Before Completion
};

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

function binaryToHexagramId(binary: string): number {
  // Convert binary representation to hexagram ID
  // This is a simplified mapping - in practice you'd need a proper lookup table
  const knownMappings: { [key: string]: number } = {
    "111111": 1, "000000": 2, "100010": 3, "010001": 4, "111010": 5,
    "010111": 6, "010000": 7, "000010": 8, "111011": 9, "110111": 10,
    // ... add all 64 mappings
  };
  
  return knownMappings[binary] || 0;
}

async function fetchWikisourcePage(pageName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = `https://zh.wikisource.org/api.php?action=query&format=json&titles=${encodeURIComponent(pageName)}&prop=extracts&exintro=&explaintext=`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          const extract = pages[pageId].extract || '';
          resolve(extract);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

function extractTexts(content: string): { judgment: string; image: string; commentary: string } {
  // Basic extraction of classical texts
  // This is a simplified version - you'd want more sophisticated parsing
  const lines = content.split('\n').filter(line => line.trim());
  
  let judgment = '';
  let image = '';
  let commentary = '';
  
  // Look for key patterns in the text
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Extract judgment text (卦辞)
    if (line.includes('：') && judgment === '') {
      judgment = line;
    }
    
    // Extract image text (象曰)
    if (line.includes('象曰') || line.includes('《象》')) {
      image = line;
    }
    
    // Extract commentary (彖曰)
    if (line.includes('彖曰') || line.includes('《彖》')) {
      commentary = line;
    }
  }
  
  return { judgment, image, commentary };
}

async function importWikisourceData(inputPath: string, outputPath: string) {
  console.log(`Reading hexagrams from: ${inputPath}`);
  
  // Read existing hexagrams data
  let hexagramsData: HexagramData[] = [];
  if (fs.existsSync(inputPath)) {
    const content = fs.readFileSync(inputPath, 'utf-8');
    hexagramsData = JSON.parse(content);
    console.log(`Found ${hexagramsData.length} existing hexagrams`);
  }
  
  // Process each page mapping
  for (const [binary, pageName] of Object.entries(pages)) {
    const hexagramId = binaryToHexagramId(binary);
    if (hexagramId === 0) continue;
    
    console.log(`Fetching ${pageName} for hexagram ${hexagramId}...`);
    
    try {
      const content = await fetchWikisourcePage(pageName);
      const texts = extractTexts(content);
      
      // Find or create hexagram
      let hexagram = hexagramsData.find(h => h.id === hexagramId);
      if (hexagram) {
        // Update with original texts
        hexagram.originalText = texts;
        if (texts.judgment) {
          hexagram.judgmentZh = texts.judgment;
        }
        console.log(`Updated hexagram ${hexagramId} with original texts`);
      } else {
        console.log(`Hexagram ${hexagramId} not found in data`);
      }
      
      // Small delay to be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.warn(`Failed to fetch ${pageName}:`, error);
    }
  }
  
  // Write updated data
  fs.writeFileSync(outputPath, JSON.stringify(hexagramsData, null, 2), 'utf-8');
  console.log(`Updated data written to: ${outputPath}`);
}

function main() {
  const args = parseArgs();
  
  if (!args.in || !args.out) {
    console.error('Usage: ts-node import_wikisource.ts --in <input_file> --out <output_file>');
    console.error('');
    console.error('Options:');
    console.error('  --in      Path to existing hexagrams JSON file');
    console.error('  --out     Path to output the enhanced file');
    process.exit(1);
  }
  
  const inputPath = args.in;
  const outputPath = args.out;
  
  importWikisourceData(inputPath, outputPath).then(() => {
    console.log('Import completed successfully!');
  }).catch((error) => {
    console.error('Error during import:', error);
    process.exit(1);
  });
}

if (require.main === module) {
  main();
}