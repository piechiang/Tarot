export interface Hexagram {
  id: number;
  name: string;
  chineseName: string;
  lines: boolean[]; // true = solid line, false = broken line
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
  originalText?: {
    judgment: string;
    image: string;
    commentary: string;
  };
}

// Import the extended hexagrams data
import hexagramsData from '../data/hexagrams_extended.json';

export const hexagrams: Hexagram[] = hexagramsData as Hexagram[];

export function generateHexagram(): { primary: Hexagram; changing?: Hexagram; changingLines: number[] } {
  // Simulate coin throws (6 lines from bottom to top)
  const lines: number[] = [];
  const changingLines: number[] = [];
  
  for (let i = 0; i < 6; i++) {
    // Each line is determined by 3 coin flips
    // 3 heads (3) = old yang (solid, changing)
    // 2 heads 1 tail (2) = young yang (solid)
    // 1 head 2 tails (1) = young yin (broken)
    // 3 tails (0) = old yin (broken, changing)
    const coins = Array.from({length: 3}, () => Math.random() < 0.5 ? 1 : 0);
    const sum = coins.reduce((a: number, b: number) => a + b, 0);
    
    lines.push(sum);
    if (sum === 0 || sum === 3) {
      changingLines.push(i);
    }
  }
  
  // Convert to boolean array (true = solid, false = broken)
  const primaryLines = lines.map(sum => sum === 2 || sum === 3);
  
  // Find matching hexagram
  const primary = hexagrams.find(hex => 
    hex.lines.every((line, i) => line === primaryLines[i])
  ) || hexagrams[0];
  
  let changing: Hexagram | undefined;
  
  // If there are changing lines, create the changed hexagram
  if (changingLines.length > 0) {
    const changedLines = [...primaryLines];
    changingLines.forEach(i => {
      changedLines[i] = !changedLines[i];
    });
    
    changing = hexagrams.find(hex => 
      hex.lines.every((line, i) => line === changedLines[i])
    );
  }
  
  return { primary, changing, changingLines };
}