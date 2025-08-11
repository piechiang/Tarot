#!/usr/bin/env node

// 完整的塔罗牌中文翻译数据
const chineseTranslations = {
  // 大奥秘牌 (Major Arcana)
  "The Fool": { nameCn: "愚者", suitCn: "大奥秘" },
  "The Magician": { nameCn: "魔术师", suitCn: "大奥秘" },
  "The High Priestess": { nameCn: "女教皇", suitCn: "大奥秘" },
  "The Empress": { nameCn: "皇后", suitCn: "大奥秘" },
  "The Emperor": { nameCn: "皇帝", suitCn: "大奥秘" },
  "The Hierophant": { nameCn: "教皇", suitCn: "大奥秘" },
  "The Lovers": { nameCn: "恋人", suitCn: "大奥秘" },
  "The Chariot": { nameCn: "战车", suitCn: "大奥秘" },
  "Strength": { nameCn: "力量", suitCn: "大奥秘" },
  "The Hermit": { nameCn: "隐者", suitCn: "大奥秘" },
  "Wheel of Fortune": { nameCn: "命运之轮", suitCn: "大奥秘" },
  "Justice": { nameCn: "正义", suitCn: "大奥秘" },
  "The Hanged Man": { nameCn: "倒吊人", suitCn: "大奥秘" },
  "Death": { nameCn: "死神", suitCn: "大奥秘" },
  "Temperance": { nameCn: "节制", suitCn: "大奥秘" },
  "The Devil": { nameCn: "恶魔", suitCn: "大奥秘" },
  "The Tower": { nameCn: "塔", suitCn: "大奥秘" },
  "The Star": { nameCn: "星星", suitCn: "大奥秘" },
  "The Moon": { nameCn: "月亮", suitCn: "大奥秘" },
  "The Sun": { nameCn: "太阳", suitCn: "大奥秘" },
  "Judgement": { nameCn: "审判", suitCn: "大奥秘" },
  "The World": { nameCn: "世界", suitCn: "大奥秘" },

  // 圣杯牌 (Cups)
  "Ace of Cups": { nameCn: "圣杯王牌", suitCn: "圣杯" },
  "Two of Cups": { nameCn: "圣杯二", suitCn: "圣杯" },
  "Three of Cups": { nameCn: "圣杯三", suitCn: "圣杯" },
  "Four of Cups": { nameCn: "圣杯四", suitCn: "圣杯" },
  "Five of Cups": { nameCn: "圣杯五", suitCn: "圣杯" },
  "Six of Cups": { nameCn: "圣杯六", suitCn: "圣杯" },
  "Seven of Cups": { nameCn: "圣杯七", suitCn: "圣杯" },
  "Eight of Cups": { nameCn: "圣杯八", suitCn: "圣杯" },
  "Nine of Cups": { nameCn: "圣杯九", suitCn: "圣杯" },
  "Ten of Cups": { nameCn: "圣杯十", suitCn: "圣杯" },
  "Page of Cups": { nameCn: "圣杯侍卫", suitCn: "圣杯" },
  "Knight of Cups": { nameCn: "圣杯骑士", suitCn: "圣杯" },
  "Queen of Cups": { nameCn: "圣杯皇后", suitCn: "圣杯" },
  "King of Cups": { nameCn: "圣杯国王", suitCn: "圣杯" },

  // 权杖牌 (Wands)
  "Ace of Wands": { nameCn: "权杖王牌", suitCn: "权杖" },
  "Two of Wands": { nameCn: "权杖二", suitCn: "权杖" },
  "Three of Wands": { nameCn: "权杖三", suitCn: "权杖" },
  "Four of Wands": { nameCn: "权杖四", suitCn: "权杖" },
  "Five of Wands": { nameCn: "权杖五", suitCn: "权杖" },
  "Six of Wands": { nameCn: "权杖六", suitCn: "权杖" },
  "Seven of Wands": { nameCn: "权杖七", suitCn: "权杖" },
  "Eight of Wands": { nameCn: "权杖八", suitCn: "权杖" },
  "Nine of Wands": { nameCn: "权杖九", suitCn: "权杖" },
  "Ten of Wands": { nameCn: "权杖十", suitCn: "权杖" },
  "Page of Wands": { nameCn: "权杖侍卫", suitCn: "权杖" },
  "Knight of Wands": { nameCn: "权杖骑士", suitCn: "权杖" },
  "Queen of Wands": { nameCn: "权杖皇后", suitCn: "权杖" },
  "King of Wands": { nameCn: "权杖国王", suitCn: "权杖" },

  // 宝剑牌 (Swords)
  "Ace of Swords": { nameCn: "宝剑王牌", suitCn: "宝剑" },
  "Two of Swords": { nameCn: "宝剑二", suitCn: "宝剑" },
  "Three of Swords": { nameCn: "宝剑三", suitCn: "宝剑" },
  "Four of Swords": { nameCn: "宝剑四", suitCn: "宝剑" },
  "Five of Swords": { nameCn: "宝剑五", suitCn: "宝剑" },
  "Six of Swords": { nameCn: "宝剑六", suitCn: "宝剑" },
  "Seven of Swords": { nameCn: "宝剑七", suitCn: "宝剑" },
  "Eight of Swords": { nameCn: "宝剑八", suitCn: "宝剑" },
  "Nine of Swords": { nameCn: "宝剑九", suitCn: "宝剑" },
  "Ten of Swords": { nameCn: "宝剑十", suitCn: "宝剑" },
  "Page of Swords": { nameCn: "宝剑侍卫", suitCn: "宝剑" },
  "Knight of Swords": { nameCn: "宝剑骑士", suitCn: "宝剑" },
  "Queen of Swords": { nameCn: "宝剑皇后", suitCn: "宝剑" },
  "King of Swords": { nameCn: "宝剑国王", suitCn: "宝剑" },

  // 金币牌 (Pentacles)
  "Ace of Pentacles": { nameCn: "金币王牌", suitCn: "金币" },
  "Two of Pentacles": { nameCn: "金币二", suitCn: "金币" },
  "Three of Pentacles": { nameCn: "金币三", suitCn: "金币" },
  "Four of Pentacles": { nameCn: "金币四", suitCn: "金币" },
  "Five of Pentacles": { nameCn: "金币五", suitCn: "金币" },
  "Six of Pentacles": { nameCn: "金币六", suitCn: "金币" },
  "Seven of Pentacles": { nameCn: "金币七", suitCn: "金币" },
  "Eight of Pentacles": { nameCn: "金币八", suitCn: "金币" },
  "Nine of Pentacles": { nameCn: "金币九", suitCn: "金币" },
  "Ten of Pentacles": { nameCn: "金币十", suitCn: "金币" },
  "Page of Pentacles": { nameCn: "金币侍卫", suitCn: "金币" },
  "Knight of Pentacles": { nameCn: "金币骑士", suitCn: "金币" },
  "Queen of Pentacles": { nameCn: "金币皇后", suitCn: "金币" },
  "King of Pentacles": { nameCn: "金币国王", suitCn: "金币" }
};

console.log('🀄 开始为塔罗牌数据添加中文翻译...\n');

// 这个脚本用于添加中文名称，具体的关键词和解读需要在tarot-data.ts中手动添加
console.log('📋 中文名称对照表：');
console.log('='.repeat(50));

Object.entries(chineseTranslations).forEach(([englishName, chinese]) => {
  console.log(`${englishName.padEnd(25)} -> ${chinese.nameCn} (${chinese.suitCn})`);
});

console.log('\n✅ 中文名称对照表已生成');
console.log('📝 请在 tarot-data.ts 中为每张牌添加：');
console.log('   - nameCn: "中文名称"');
console.log('   - suitCn: "花色中文"');
console.log('   - keywordsCn: ["中文关键词"]');
console.log('   - meaningCn: "中文含义"');
console.log('   - adviceCn: "中文建议"');

// 导出翻译数据供其他工具使用
module.exports = chineseTranslations;