/**
 * 完整的中文星盘解读库
 * 包含行星落座、落宫和相位的详细解读
 * 集成详细的中文占星解读数据
 */

// 导入完整的中文占星解读数据
import planetSignHouseData from '../planet_sign_house_zh.json'

// 行星落座解读（行星在星座的含义）
export const PLANET_SIGN_INTERPRETATIONS: Record<string, Record<string, string>> = {
  Sun: {
    "Aries": "主动直接，行动力强，天生的领导者。喜欢开创新局面，但可能急躁，需要学会耐心。",
    "Taurus": "务实稳重，重视物质与感官享受。追求安全感，但可能固执，需要接受变化。",
    "Gemini": "好奇心强，善于沟通，思维灵活。喜欢学习新知，但可能三分钟热度，需要持续力。",
    "Cancer": "情感丰富，重视家庭，具有保护欲。直觉强，但可能情绪化，需要情绪管理。",
    "Leo": "自信大方，具有表演天赋，需要被认可。创造力强，但可能自我中心，需要谦逊。",
    "Virgo": "细心谨慎，追求完美，善于分析。服务精神，但可能过度挑剔，需要包容。",
    "Libra": "追求和谐，善于合作，具有审美眼光。外交能力强，但可能犹豫不决，需要果断。",
    "Scorpio": "洞察力强，意志坚定，喜欢探索深层真相。专注力强，但可能极端，需要平衡。",
    "Sagittarius": "乐观向上，热爱自由，追求真理。视野开阔，但可能不够实际，需要脚踏实地。",
    "Capricorn": "目标明确，意志坚强，具有组织能力。责任感强，但可能过于严肃，需要轻松。",
    "Aquarius": "独立创新，重视友谊，关注人类福祉。思维前卫，but可能疏离，需要情感连接。",
    "Pisces": "富有同情心，直觉敏锐，具有艺术天赋。包容力强，但可能逃避现实，需要实际行动。"
  },
  Moon: {
    "Aries": "情绪直接，反应迅速，需要独立空间。内在动力强，但可能冲动，需要冷静思考。",
    "Taurus": "情绪稳定，需要安全感，喜欢舒适环境。持久力强，但可能固执，需要灵活变通。",
    "Gemini": "情绪多变，需要智力刺激，善于表达感受。适应力强，but可能浮躁，需要专注。",
    "Cancer": "情感细腻，重视家庭，需要归属感。nurturing天性，but可能依赖，需要独立。",
    "Leo": "情绪外放，需要被欣赏，内在有强烈的自尊。创造力丰富，but可能戏剧化，需要真实。",
    "Virgo": "情绪内敛，需要秩序，关注健康与细节。分析能力强，but可能焦虑，需要放松。",
    "Libra": "情绪平和，需要和谐，重视人际关系。合作精神，but可能依赖他人，需要自主。",
    "Scorpio": "情绪深沉，需要深度连接，具有治愈能力。洞察力强，but可能猜疑，需要信任。",
    "Sagittarius": "情绪乐观，需要自由探索，热爱学习。适应力强，but可能不安定，需要根基。",
    "Capricorn": "情绪克制，需要成就感，重视传统。稳重可靠，but可能压抑，需要表达。",
    "Aquarius": "情绪超脱，需要友谊，关注集体利益。独特个性，but可能疏离，需要亲密。",
    "Pisces": "情绪敏感，需要精神寄托，具有共情能力。想象力丰富，but可能混乱，需要界限。"
  },
  Mercury: {
    "Aries": "思维敏捷，说话直接，决策快速。行动导向，但可能鲁莽，需要深思熟虑。",
    "Taurus": "思维务实，说话稳重，决策谨慎。持续性强，但可能固化，需要开放思维。",
    "Gemini": "思维活跃，表达流畅，善于学习。多元兴趣，但可能分散，需要专注深入。",
    "Cancer": "思维感性，记忆力强，善于直觉思考。情感丰富，但可能主观，需要客观分析。",
    "Leo": "思维创造，表达有力，善于演讲。自信表达，但可能主观，需要倾听他人。",
    "Virgo": "思维精确，表达清晰，善于分析。逻辑性强，但可能挑剔，需要包容心态。",
    "Libra": "思维平衡，表达优雅，善于协调。外交手腕，但可能犹豫，需要决断力。",
    "Scorpio": "思维深刻，表达有力，善于洞察。专注力强，但可能极端，需要开放心态。",
    "Sagittarius": "思维开放，表达直率，善于哲思。视野广阔，但可能草率，需要细致考虑。",
    "Capricorn": "思维严谨，表达正式，善于规划。组织能力强，但可能保守，需要创新思维。",
    "Aquarius": "思维独特，表达新颖，善于创新。前瞻性强，但可能脱离实际，需要务实。",
    "Pisces": "思维直觉，表达诗意，善于想象。创意丰富，但可能模糊，需要逻辑结构。"
  },
  Venus: {
    "Aries": "爱情直接热烈，喜欢主动追求，审美偏好鲜明。激情四射，但可能冲动，需要耐心经营。",
    "Taurus": "爱情稳定持久，重视感官享受，审美偏好经典。专一深情，但可能占有，需要给予空间。",
    "Gemini": "爱情多变有趣，重视智力交流，审美偏好多元。沟通能力强，but可能花心，需要专注。",
    "Cancer": "爱情温馨体贴，重视情感安全，审美偏好温暖。nurturing特质，but可能黏腻，需要独立。",
    "Leo": "爱情浪漫大气，重视被欣赏，审美偏好华丽。表现欲强，but可能自我，需要关注对方。",
    "Virgo": "爱情细致入微，重视实际行动，审美偏好简洁。服务精神，but可能挑剔，需要包容。",
    "Libra": "爱情和谐优雅，重视平等伙伴，审美sense极佳。合作精神，but可能依赖，需要自主。",
    "Scorpio": "爱情深度专注，重视灵魂契合，审美偏好神秘。忠诚度高，but可能嫉妒，需要信任。",
    "Sagittarius": "爱情自由开放，重视精神探索，审美偏好异域。冒险精神，but可能逃避，需要承诺。",
    "Capricorn": "爱情稳重实际，重视长期发展，审美偏好传统。责任感强，but可能严肃，需要浪漫。",
    "Aquarius": "爱情独特友好，重视精神独立，审美偏好前卫。友谊为基础，but可能疏离，需要亲密。",
    "Pisces": "爱情梦幻无私，重视精神融合，审美偏好艺术。包容力强，but可能理想化，需要现实。"
  },
  Mars: {
    "Aries": "行动直接果断，竞争意识强，勇于挑战。领导能力强，但可能鲁莽，需要策略思考。",
    "Taurus": "行动稳健持续，耐力惊人，坚持到底。毅力超群，但可能固执，需要灵活调整。",
    "Gemini": "行动灵活多变，善于多线作业，反应敏捷。适应力强，but可能分散，需要专注目标。",
    "Cancer": "行动情绪导向，保护欲强，为家庭奋斗。直觉行动，but可能被动，需要主动出击。",
    "Leo": "行动充满自信，表现欲强，追求认可。创造力强，but可能自大，需要团队合作。",
    "Virgo": "行动精确细致，注重效率，完美执行。分析能力强，but可能过度，需要抓重点。",
    "Libra": "行动追求公平，重视合作，避免冲突。协调能力强，but可能优柔，需要果断决策。",
    "Scorpio": "行动深度专注，意志坚定，不达目的不罢休。专注力强，but可能极端，需要适度。",
    "Sagittarius": "行动目标远大，热爱冒险，追求真理。视野开阔，but可能缺乏持续，需要坚持。",
    "Capricorn": "行动有组织性，责任心强，追求成就。执行力强，but可能保守，需要创新勇气。",
    "Aquarius": "行动独特创新，为理想奋斗，重视人道。前瞻性强，but可能脱离实际，需要落地。",
    "Pisces": "行动直觉驱动，为他人奉献，富有同情。包容力强，but可能缺乏方向，需要明确目标。"
  }
}

// 行星落宫解读（行星在宫位的生活领域表现）
export const PLANET_HOUSE_INTERPRETATIONS: Record<string, Record<number, string>> = {
  Sun: {
    1: "个人形象与自我表达是人生重点，具有强烈的个人魅力和领导气质。",
    2: "物质安全与价值观是核心关注，通过资源管理来体现自我价值。",
    3: "沟通学习与兄弟姐妹关系重要，擅长表达和信息传播。",
    4: "家庭根基与内在安全感是根本，重视家族传统和情感基础。",
    5: "创造表现与子女教育是焦点，具有艺术天赋和教育能力。",
    6: "工作服务与健康管理是日常重心，注重实用技能和身体保健。",
    7: "伴侣关系与合作是重要课题，通过他人来认识和完善自己。",
    8: "深层转化与共享资源是考验，具有心理洞察和投资理财能力。",
    9: "高等教育与精神探索是使命，追求智慧和人生哲学。",
    10: "事业成就与社会地位是目标，在公众领域有重要影响力。",
    11: "朋友网络与社会理想是动力，通过集体活动实现个人价值。",
    12: "精神修养与潜意识探索是隐藏主题，具有直觉力和奉献精神。"
  },
  Moon: {
    1: "情绪直接表露，给人温暖亲切的印象，情感需求影响个人形象。",
    2: "情感安全与物质稳定相关，通过购买和收集来获得情感满足。",
    3: "情绪通过言语表达，与兄弟姐妹和邻居关系密切。",
    4: "家庭是情感港湾，深受母亲和家族影响，重视居住环境。",
    5: "通过创造和娱乐表达情感，与子女关系深厚，浪漫感性。",
    6: "日常工作影响情绪状态，关注健康饮食，重视服务他人。",
    7: "情感需要伴侣来平衡，容易被伴侣情绪影响，重视关系和谐。",
    8: "情绪深沉复杂，具有心理治愈能力，对生死和转化敏感。",
    9: "通过学习和旅行获得情感满足，对外国文化和宗教感兴趣。",
    10: "情感与事业相关，可能从事照顾性职业，公众形象温和。",
    11: "朋友是重要情感支持，在团体中扮演关怀角色。",
    12: "情感深藏不露，具有强烈直觉和同情心，需要独处时间。"
  },
  Mercury: {
    1: "思维敏捷，表达清晰，给人聪明机智的印象。",
    2: "思考与金钱价值相关，善于商业头脑和实用技能。",
    3: "沟通是天赋，学习能力强，与兄弟姐妹和邻居交流频繁。",
    4: "家庭教育重要，可能在家工作或从事房地产相关。",
    5: "创意表达和教育是专长，与子女沟通良好。",
    6: "日常工作涉及分析和服务，注重健康信息和实用技能。",
    7: "通过伙伴关系学习，善于协商和合同谈判。",
    8: "深入研究和调查是专长，对心理学和投资理财有兴趣。",
    9: "高等教育和出版是强项，喜欢传播知识和文化。",
    10: "职业与沟通相关，在公众场合表达能力强。",
    11: "在朋友圈中是信息枢纽，通过网络实现理想。",
    12: "直觉思维强，可能从事幕后研究或心灵治疗。"
  },
  Venus: {
    1: "个人魅力突出，外表优雅，天生具有吸引力。",
    2: "通过美好事物获得满足，有艺术收藏或奢侈品爱好。",
    3: "表达优雅得体，与兄弟姐妹关系和谐，喜欢艺术学习。",
    4: "家庭环境美丽温馨，重视家庭和谐和传统价值。",
    5: "浪漫创意丰富，与子女关系亲密，具有艺术教育天赋。",
    6: "工作环境重视美感，可能从事美容健康或艺术服务。",
    7: "伴侣关系和谐美满，重视婚姻质量和合作关系。",
    8: "通过他人资源获得美好体验，对投资和理财有品味。",
    9: "追求高雅文化和艺术，可能与外国文化结缘。",
    10: "事业与美感相关，在公众场合展现优雅形象。",
    11: "朋友圈子高雅，通过社交实现美好愿景。",
    12: "内在美丽，具有艺术直觉和奉献精神。"
  },
  Mars: {
    1: "行动力强，个人风格鲜明，给人活力充沛的印象。",
    2: "为物质目标努力奋斗，有强烈的赚钱欲望。",
    3: "表达直接有力，学习积极主动，可能与兄弟姐妹竞争。",
    4: "为家庭奋斗，可能家庭关系紧张但充满活力。",
    5: "创造表现积极，对子女教育严格，浪漫方式直接。",
    6: "工作态度积极，身体活力充沛，重视健康锻炼。",
    7: "伴侣关系可能有冲突，但也充满激情和挑战。",
    8: "深层欲望强烈，具有投资勇气和心理治愈能力。",
    9: "追求真理的热情，可能在教育或法律领域积极行动。",
    10: "事业野心大，在职场中具有竞争力和领导力。",
    11: "为理想积极奋斗，在团体中起推动作用。",
    12: "内在动力强，可能从事幕后工作或心灵服务。"
  }
}

// 相位解读库（基于提供的JSON数据）
export const ASPECT_INTERPRETATIONS = {
  "generic": {
    "conjunction": "合相（0°±orb）：能量叠加，主题被放大；关键在于方向一致与角色分工。",
    "sextile": "六分相（60°±orb）：温和机遇，需要主动协作与行动来兑现潜力。",
    "square": "刑相（90°±orb）：张力/摩擦，促使调整结构与节奏；化冲突为推动力。",
    "trine": "拱相（120°±orb）：顺畅流动，优势自然发挥，但易松懈；以目标锁定产出。",
    "opposition": "对分相（180°±orb）：两端拉锯，需要谈判与边界，找到动态平衡点。"
  },
  "overrides": {
    "太阳—水星": {
      "conjunction": "太阳合水星：目标与思路合流，表达直接高效；留意自我中心下的信息偏听。",
      "sextile": "太阳六合水星：思考与意志互相促进，利学习沟通；主动输出更有收获。",
      "square": "太阳刑水星：想法与立场常冲突，先厘清事实与价值，再做决定。",
      "trine": "太阳拱水星：思维清晰、表达顺手，适合规划与演讲；设定里程碑避免拖延。",
      "opposition": "太阳对分水星：自我主张与信息客观性拉扯；学会换位与复核。"
    },
    "太阳—金星": {
      "conjunction": "太阳合金星：魅力与价值观被放大，社交/审美加分；注意过度求好。",
      "sextile": "太阳六合金星：人际关系带来助力，利合作与品牌呈现。",
      "square": "太阳刑金星：面子/享乐与目标打架；设预算与优先级。",
      "trine": "太阳拱金星：表达自我优雅自然，适合谈判与公关。",
      "opposition": "太阳对分金星：需求交换需谈判，避免讨好或强势。"
    },
    "太阳—火星": {
      "conjunction": "太阳合火星：行动果断，驱动力强；防冲动与对抗升级。",
      "sextile": "太阳六合火星：执行与领导协调，推进项目效率高。",
      "square": "太阳刑火星：急于求成，易与权威或同伴冲突；先定规则再冲刺。",
      "trine": "太阳拱火星：精力充沛，适合攻坚；注意节能与恢复。",
      "opposition": "太阳对分火星：立场与手段对拉；用阶段目标化解对冲。"
    },
    "太阳—木星": {
      "conjunction": "太阳合木星：视野放大与好运加成；警惕过度乐观。",
      "sextile": "太阳六合木星：学习/证书/远行利好；把握窗口期。",
      "square": "太阳刑木星：目标膨胀、承诺过多；收敛范围。",
      "trine": "太阳拱木星：资源/贵人顺势而来；以长期策略放大成果。",
      "opposition": "太阳对分木星：理想与现实拉扯；以数据校准信念。"
    },
    "土星—太阳": {
      "conjunction": "太阳合土星：责任与纪律上身，成就来自长期耕耘。",
      "sextile": "太阳六合土星：稳健推进，结构化带来安全边际。",
      "square": "太阳刑土星：阻力与延迟，考验耐心；拆解任务。",
      "trine": "太阳拱土星：权威与可信度提升；适合立规与授信。",
      "opposition": "太阳对分土星：个人意志与外部规则对峙；谈判边界。"
    },
    "月亮—水星": {
      "conjunction": "月亮合水星：情绪与思维互通；沟通更贴近感受。",
      "sextile": "月亮六合水星：适合写作与对话；记录情绪洞察。",
      "square": "月亮刑水星：理性/情感打架；先情绪减压再讨论。",
      "trine": "月亮拱水星：表达自然流畅；家人/伙伴沟通顺。",
      "opposition": "月亮对分水星：观点与感受拉扯；练习非暴力沟通。"
    },
    "月亮—金星": {
      "conjunction": "月亮合金星：温柔与疗愈氛围；适合人际/美食/艺术。",
      "sextile": "月亮六合金星：关系中的体贴增多；营造仪式感。",
      "square": "月亮刑金星：情绪化消费或黏腻；学会边界。",
      "trine": "月亮拱金星：社交顺滑、受欢迎；适合修复关系。",
      "opposition": "月亮对分金星：亲密与个人需求拉扯；均衡投入。"
    },
    "月亮—火星": {
      "conjunction": "月亮合火星：情绪驱动行动；先稳情绪再决策。",
      "sextile": "月亮六合火星：家务/健康执行力提升。",
      "square": "月亮刑火星：易怒或冲动；进行情绪减压与运动排解。",
      "trine": "月亮拱火星：活力增强；把劲头用在建设性事务。",
      "opposition": "月亮对分火星：需求与手段不合；换方案而非硬刚。"
    }
  }
}

// 行星名称中英文映射
const PLANET_NAME_MAP: Record<string, string> = {
  'Sun': '太阳',
  'Moon': '月亮', 
  'Mercury': '水星',
  'Venus': '金星',
  'Mars': '火星',
  'Jupiter': '木星',
  'Saturn': '土星',
  'Uranus': '天王星',
  'Neptune': '海王星',
  'Pluto': '冥王星'
}

// 星座名称中英文映射
const SIGN_NAME_MAP: Record<string, string> = {
  'Aries': '白羊座',
  'Taurus': '金牛座',
  'Gemini': '双子座',
  'Cancer': '巨蟹座',
  'Leo': '狮子座',
  'Virgo': '处女座',
  'Libra': '天秤座',
  'Scorpio': '天蝎座',
  'Sagittarius': '射手座',
  'Capricorn': '摩羯座',
  'Aquarius': '水瓶座',
  'Pisces': '双鱼座'
}

/**
 * 从JSON数据获取行星-星座-宫位组合的详细解读
 */
function getDetailedInterpretation(planetName: string, signName: string, house: number): string {
  const chinesePlanet = PLANET_NAME_MAP[planetName]
  const chineseSign = SIGN_NAME_MAP[signName]
  
  if (!chinesePlanet || !chineseSign) {
    return "暂无详细解读数据。"
  }
  
  try {
    const planetData = (planetSignHouseData as any)[chinesePlanet]
    if (planetData && planetData[chineseSign] && planetData[chineseSign][house.toString()]) {
      return planetData[chineseSign][house.toString()]
    }
  } catch (error) {
    console.log('获取解读数据出错:', error)
  }
  
  return "暂无此组合的详细解读数据。"
}

/**
 * 生成完整的星盘解读文案
 */
export function generateChartInterpretation(chart: any): string {
  let interpretation = ""
  
  // 开场白
  interpretation += `## 🌟 您的本命盘解读\n\n`
  interpretation += `出生于 ${chart.birthData.dateTime.toLocaleDateString()} ${chart.birthData.dateTime.toLocaleTimeString()}\n\n`
  
  // 核心三要素
  interpretation += `### ✨ 核心三要素（大三角）\n\n`
  
  const sun = chart.planets.find((p: any) => p.name === 'Sun')
  const moon = chart.planets.find((p: any) => p.name === 'Moon')
  
  if (sun) {
    const detailedInterpretation = getDetailedInterpretation(sun.name, sun.sign, sun.house)
    interpretation += `**🌞 太阳在${sun.signChinese}第${sun.house}宫**\n`
    interpretation += `${detailedInterpretation}\n\n`
  }
  
  if (moon) {
    const detailedInterpretation = getDetailedInterpretation(moon.name, moon.sign, moon.house)
    interpretation += `**🌙 月亮在${moon.signChinese}第${moon.house}宫**\n`
    interpretation += `${detailedInterpretation}\n\n`
  }
  
  // 上升星座
  const ascendantSign = chart.planets.find((p: any) => p.house === 1) || sun
  if (ascendantSign) {
    interpretation += `**🎭 上升${ascendantSign.signChinese}**\n`
    interpretation += `你给人的第一印象和面对世界的方式。这是你的社交面具和外在形象的主要体现。\n\n`
  }
  
  // 其他行星
  interpretation += `### 🪐 其他行星力量\n\n`
  
  const otherPlanets = chart.planets.filter((p: any) => !['Sun', 'Moon'].includes(p.name))
  otherPlanets.forEach((planet: any) => {
    const detailedInterpretation = getDetailedInterpretation(planet.name, planet.sign, planet.house)
    
    interpretation += `**${planet.nameChinese}在${planet.signChinese}第${planet.house}宫**${planet.retrograde ? ' ℞' : ''}\n`
    interpretation += `${detailedInterpretation}\n\n`
  })
  
  // 重要相位
  if (chart.aspects && chart.aspects.length > 0) {
    interpretation += `### 🔗 重要星体相位\n\n`
    
    chart.aspects.slice(0, 5).forEach((aspect: any) => {
      const key = `${getPlanetChineseName(aspect.planet1)}—${getPlanetChineseName(aspect.planet2)}`
      const aspectKey = getAspectKey(aspect.aspectType)
      
      const specificInterpretation = ASPECT_INTERPRETATIONS.overrides[key]?.[aspectKey]
      const genericInterpretation = ASPECT_INTERPRETATIONS.generic[aspectKey]
      
      const finalInterpretation = specificInterpretation || genericInterpretation || "这个相位带来独特的能量组合。"
      
      interpretation += `**${aspect.planet1} ${aspect.aspectTypeChinese} ${aspect.planet2}** (容许度: ${aspect.orb.toFixed(1)}°)\n`
      interpretation += `${finalInterpretation}\n\n`
    })
  }
  
  // 性格总结
  interpretation += `### 🎯 性格特质总结\n\n`
  interpretation += `${chart.summary.description}\n\n`
  
  const elementMap: Record<string, string> = {
    fire: '🔥 火象能量主导：热情、直接、行动力强，追求理想与目标。',
    earth: '🌍 土象能量主导：务实、稳定、重视物质安全，脚踏实地。',
    air: '💨 风象能量主导：理性、沟通、重视思想交流，适应性强。',
    water: '🌊 水象能量主导：感性、直觉、重视情感连接，富有同情心。'
  }
  
  const qualityMap: Record<string, string> = {
    cardinal: '🌱 基本宫：开创性强，喜欢主动发起，具有领导潜质。',
    fixed: '🔒 固定宫：稳定性强，执行力佳，坚持力和专注度高。',
    mutable: '🔄 变动宫：适应性强，灵活变通，善于调整和完善。'
  }
  
  interpretation += `**能量特质：**\n`
  interpretation += `${elementMap[chart.summary.dominantElement] || ''}\n`
  interpretation += `${qualityMap[chart.summary.dominantQuality] || ''}\n\n`
  
  // 结语
  interpretation += `### 🌈 人生指导建议\n\n`
  interpretation += `每个人的星盘都是独一无二的宇宙蓝图。星象显示倾向而非宿命，关键在于如何运用这些天赋能量。\n\n`
  interpretation += `建议：\n`
  interpretation += `- 发挥你的${chart.summary.dominantElement}象特质，但也要平衡其他元素\n`
  interpretation += `- 善用你的${chart.summary.dominantQuality}宫特点，在适当时机主动或坚持\n`
  interpretation += `- 注意重要相位的提醒，将挑战转化为成长机会\n`
  interpretation += `- 记住：星盘是指南，而非限制。你的选择决定你的人生方向。✨\n`
  
  return interpretation
}

// 辅助函数
function getPlanetChineseName(englishName: string): string {
  const map: Record<string, string> = {
    'Sun': '太阳',
    'Moon': '月亮', 
    'Mercury': '水星',
    'Venus': '金星',
    'Mars': '火星',
    'Jupiter': '木星',
    'Saturn': '土星',
    'Uranus': '天王星',
    'Neptune': '海王星'
  }
  return map[englishName] || englishName
}

function getAspectKey(aspectType: string): string {
  const map: Record<string, string> = {
    'Conjunction': 'conjunction',
    'Sextile': 'sextile', 
    'Square': 'square',
    'Trine': 'trine',
    'Opposition': 'opposition'
  }
  return map[aspectType] || 'conjunction'
}