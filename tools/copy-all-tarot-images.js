#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping from file names to destination paths
const cardMappings = [
  // Major Arcana
  { source: 'The Fool.png', dest: 'major-arcana/00-fool.png' },
  { source: 'The Magician.png', dest: 'major-arcana/01-magician.png' },
  { source: 'The High Priestess.png', dest: 'major-arcana/02-high-priestess.png' },
  { source: 'The Empress.png', dest: 'major-arcana/03-empress.png' },
  { source: 'The Emperor.png', dest: 'major-arcana/04-emperor.png' },
  { source: 'The Hierophant.png', dest: 'major-arcana/05-hierophant.png' },
  { source: 'The Lovers.png', dest: 'major-arcana/06-lovers.png' },
  { source: 'The Chariot.png', dest: 'major-arcana/07-chariot.png' },
  { source: 'Strength.png', dest: 'major-arcana/08-strength.png' },
  { source: 'The Hermit.png', dest: 'major-arcana/09-hermit.png' },
  { source: 'Wheel of Fortune.png', dest: 'major-arcana/10-wheel-of-fortune.png' },
  { source: 'Justice.png', dest: 'major-arcana/11-justice.png' },
  { source: 'The Hanged Man.png', dest: 'major-arcana/12-hanged-man.png' },
  { source: 'Death.png', dest: 'major-arcana/13-death.png' },
  { source: 'Temperance.png', dest: 'major-arcana/14-temperance.png' },
  { source: 'The Devil.png', dest: 'major-arcana/15-devil.png' },
  { source: 'The Tower.png', dest: 'major-arcana/16-tower.png' },
  { source: 'The Star.png', dest: 'major-arcana/17-star.png' },
  { source: 'The Moon.png', dest: 'major-arcana/18-moon.png' },
  { source: 'The Sun.png', dest: 'major-arcana/19-sun.png' },
  { source: 'Judgement.png', dest: 'major-arcana/20-judgement.png' },
  { source: 'The World.png', dest: 'major-arcana/21-world.png' },

  // Cups
  { source: 'Ace of Cups.png', dest: 'cups/ace-cups.png' },
  { source: 'Two of Cups.png', dest: 'cups/02-cups.png' },
  { source: 'Three of Cups.png', dest: 'cups/03-cups.png' },
  { source: 'Four of Cups.png', dest: 'cups/04-cups.png' },
  { source: 'Five of Cups.png', dest: 'cups/05-cups.png' },
  { source: 'Six of Cups.png', dest: 'cups/06-cups.png' },
  { source: 'Seven of Cups.png', dest: 'cups/07-cups.png' },
  { source: 'Eight of Cups.png', dest: 'cups/08-cups.png' },
  { source: 'Nine of Cups.png', dest: 'cups/09-cups.png' },
  { source: 'Ten of Cups.png', dest: 'cups/10-cups.png' },
  { source: 'Page of Cups.png', dest: 'cups/page-cups.png' },
  { source: 'Knight of Cups.png', dest: 'cups/knight-cups.png' },
  { source: 'Queen of Cups.png', dest: 'cups/queen-cups.png' },
  { source: 'King of Cups.png', dest: 'cups/king-cups.png' },

  // Wands
  { source: 'Ace of Wands.png', dest: 'wands/ace-wands.png' },
  { source: 'Two of Wands.png', dest: 'wands/02-wands.png' },
  { source: 'Three of Wands.png', dest: 'wands/03-wands.png' },
  { source: 'Four of Wands.png', dest: 'wands/04-wands.png' },
  { source: 'Five of Wands.png', dest: 'wands/05-wands.png' },
  { source: 'Six of Wands.png', dest: 'wands/06-wands.png' },
  { source: 'Seven of Wands.png', dest: 'wands/07-wands.png' },
  { source: 'Eight of Wands.png', dest: 'wands/08-wands.png' },
  { source: 'Nine of Wands.png', dest: 'wands/09-wands.png' },
  { source: 'Ten of Wands.png', dest: 'wands/10-wands.png' },
  { source: 'Page of Wands.png', dest: 'wands/page-wands.png' },
  { source: 'Knight of Wands.png', dest: 'wands/knight-wands.png' },
  { source: 'Queen of Wands.png', dest: 'wands/queen-wands.png' },
  { source: 'King of Wands.png', dest: 'wands/king-wands.png' },

  // Swords
  { source: 'Ace of Swords.png', dest: 'swords/ace-swords.png' },
  { source: 'Two of Swords.png', dest: 'swords/02-swords.png' },
  { source: 'Three of Swords.png', dest: 'swords/03-swords.png' },
  { source: 'Four of Swords.png', dest: 'swords/04-swords.png' },
  { source: 'Five of Swords.png', dest: 'swords/05-swords.png' },
  { source: 'Six of Swords.png', dest: 'swords/06-swords.png' },
  { source: 'Seven of Swords.png', dest: 'swords/07-swords.png' },
  { source: 'Eight of Swords.png', dest: 'swords/08-swords.png' },
  { source: 'Nine of Swords.png', dest: 'swords/09-swords.png' },
  { source: 'Ten of Swords.png', dest: 'swords/10-swords.png' },
  { source: 'Page of Swords.png', dest: 'swords/page-swords.png' },
  { source: 'Knight of Swords.png', dest: 'swords/knight-swords.png' },
  { source: 'Queen of Swords.png', dest: 'swords/queen-swords.png' },
  { source: 'King of Swords.png', dest: 'swords/king-swords.png' },

  // Pentacles
  { source: 'Ace of Pentacles.png', dest: 'pentacles/ace-pentacles.png' },
  { source: 'Two of Pentacles.png', dest: 'pentacles/02-pentacles.png' },
  { source: 'Three of Pentacles.png', dest: 'pentacles/03-pentacles.png' },
  { source: 'Four of Pentacles.png', dest: 'pentacles/04-pentacles.png' },
  { source: 'Five of Pentacles.png', dest: 'pentacles/05-pentacles.png' },
  { source: 'Six of Pentacles.png', dest: 'pentacles/06-pentacles.png' },
  { source: 'Seven of Pentacles.png', dest: 'pentacles/07-pentacles.png' },
  { source: 'Eight of Pentacles.png', dest: 'pentacles/08-pentacles.png' },
  { source: 'Nine of Pentacles.png', dest: 'pentacles/09-pentacles.png' },
  { source: 'Ten of Pentacles.png', dest: 'pentacles/10-pentacles.png' },
  { source: 'Page of Pentacles.png', dest: 'pentacles/page-pentacles.png' },
  { source: 'Knight of Pentacles.png', dest: 'pentacles/knight-pentacles.png' },
  { source: 'Queen of Pentacles.png', dest: 'pentacles/queen-pentacles.png' },
  { source: 'King of Pentacles.png', dest: 'pentacles/king-pentacles.png' },
];

const sourceDir = '/workspaces/Tarot/Tarot page';
const destDir = '/workspaces/Tarot/public/images/tarot';

let copiedCount = 0;
let failedCount = 0;

console.log('🔮 开始复制所有78张Waite塔罗牌图片...\n');

cardMappings.forEach((mapping, index) => {
  const sourcePath = path.join(sourceDir, mapping.source);
  const destPath = path.join(destDir, mapping.dest);
  
  try {
    if (fs.existsSync(sourcePath)) {
      // Ensure destination directory exists
      const destDirPath = path.dirname(destPath);
      if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath, { recursive: true });
      }
      
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ ${index + 1}/78 - ${mapping.source} -> ${mapping.dest}`);
      copiedCount++;
    } else {
      console.log(`❌ 找不到文件: ${mapping.source}`);
      failedCount++;
    }
  } catch (error) {
    console.log(`❌ 复制失败 ${mapping.source}: ${error.message}`);
    failedCount++;
  }
});

console.log(`\n🎯 复制完成!`);
console.log(`✅ 成功复制: ${copiedCount} 张图片`);
if (failedCount > 0) {
  console.log(`❌ 失败: ${failedCount} 张图片`);
} else {
  console.log(`🎉 全部78张Waite塔罗牌图片已成功集成!`);
  console.log(`🌐 现在可以访问 http://localhost:3003 查看完整的塔罗占卜体验!`);
}