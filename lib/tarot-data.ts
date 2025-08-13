export interface TarotCard {
  id: number;
  name: string;
  nameCn?: string;
  suit: 'major' | 'cups' | 'wands' | 'swords' | 'pentacles';
  suitCn?: string;
  imageUrl?: string;
  imagePath?: string;
  upright: {
    keywords: string[];
    keywordsCn?: string[];
    meaning: string;
    meaningCn?: string;
    advice: string;
    adviceCn?: string;
  };
  reversed: {
    keywords: string[];
    keywordsCn?: string[];
    meaning: string;
    meaningCn?: string;
    advice: string;
    adviceCn?: string;
  };
}

export const tarotCards: TarotCard[] = [
  // Major Arcana (22 cards)
  {
    id: 0,
    name: "The Fool",
    nameCn: "愚者",
    suit: "major",
    suitCn: "大奥秘",
    imageUrl: "/images/tarot/major-arcana/00-fool.jpg",
    upright: {
      keywords: ["New beginnings", "Innocence", "Spontaneity", "Adventure", "Fearless", "Living in the moment"],
      keywordsCn: ["新开始", "纯真", "自发性", "冒险", "天不怕地不怕", "初生之犊不畏虎", "活在当下", "无限可能", "凭直觉行事", "新旅程"],
      meaning: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
      meaningCn: "愚人是天不怕地不怕的年轻人，穿着色彩斑斓的服装，头戴成功桂冠，无视前方悬崖昂首阔步。左手白玫瑰象征纯洁与热情，右手权杖挂着经验包袱，小白狗狂吠提醒却仍保持欢欣神色。编号0代表无限可能，如初生之犊不畏虎，凭本能和直觉行事，像风一样自由自在，活在当下的乐观主义者。",
      advice: "Trust in yourself and embrace new opportunities. Take calculated risks and remain open to possibilities.",
      adviceCn: "拥抱你内心的自由精神！凭直觉大胆行事，不要被经验束缚或他人眼光约束。这是开始新旅程的绝佳时机，无论是搬家、转学还是大胆的冒险。相信你的本能，活在当下，享受过程而非执着结果。你拥有无限可能，就像愚人一样无忧无虑地向前走。"
    },
    reversed: {
      keywords: ["Recklessness", "Risk-taking", "Foolishness", "Lack of direction", "Avoiding responsibility", "Lost intuition"],
      keywordsCn: ["鲁莽", "愚蠢", "缺乏方向", "逃避责任", "无法凭直觉行事", "与直觉失去连接", "时机掌握欠佳", "胆小怕事", "过于小心", "失去勇气"],
      meaning: "The reversed Fool suggests recklessness, risk-taking without thought, foolishness, and a lack of direction or purpose.",
      meaningCn: "逆位愚人失去与直觉的连接，无法凭直觉行事或逃避责任。玫瑰枯萎掉落，行囊散落，太阳落下失去光明。表现为两个极端：过度时天真变愚蠢、大胆变鲁莽、不守规矩；不足时无法听从内心本能、过于小心错失良机、胆小怕事失去勇气。时机掌握欠佳，要么错失机会，要么在不当时机行动。",
      advice: "Think before you act. Consider the consequences of your decisions and seek guidance if needed.",
      adviceCn: "现在不是追求自由或逃避的时候，而是承担责任、完成义务的时刻。重新连接你的内在直觉，但要在冲动和理性间找到平衡。不要因恐惧而错失良机，也不要过度依赖他人建议而犹豫不决。完成手头未完成的事情，才能重新获得自发性的生活。"
    }
  },
  {
    id: 1,
    name: "The Magician",
    nameCn: "魔术师",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Manifestation", "Willpower", "Creation", "Skill", "Communication", "New beginnings"],
      keywordsCn: ["显化", "意志力", "创造", "技能", "沟通", "新开始", "发挥潜能", "时机"],
      meaning: "The Magician represents manifestation, resourcefulness, power, and inspired action. You have the tools to achieve your goals.",
      meaningCn: "魔法师是沟通天地的桥梁，身前的四要素（权杖、圣杯、宝剑、钱币）象征万事齐备。他头顶的无限符号代表无限可能，红玫瑰象征热情，白百合代表纯洁动机。此时正是发挥潜能、展开新计划的绝佳时机，你拥有将梦想化为现实的所有工具。",
      advice: "Focus your energy and use your skills to manifest your desires. You have everything you need to succeed.",
      adviceCn: "现在是展开新计划的最佳时机！发挥你的潜能，运用沟通能力和原有技能，加入新鲜创意来实践想法。采取主动，保持专心一致。万事具备，只需将抽象转化为实质，把梦想踏实地转化为现实。"
    },
    reversed: {
      keywords: ["Manipulation", "Trickery", "Lack of energy", "Confusion"],
      keywordsCn: ["操纵", "欺骗", "缺乏能量", "困惑"],
      meaning: "The reversed Magician suggests manipulation, poor planning, latent talents, and a lack of clear intention.",
      meaningCn: "逆位的魔术师暗示操纵、计划不周、潜在才能和缺乏明确意图。",
      advice: "Be honest in your dealings. Focus on developing your skills rather than taking shortcuts.",
      adviceCn: "在交往中要诚实。专注于发展技能，而不是走捷径。"
    }
  },
  {
    id: 2,
    name: "The High Priestess",
    nameCn: "女教皇",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious"],
      keywordsCn: ["直觉", "神圣知识", "神圣女性", "潜意识"],
      meaning: "The High Priestess represents intuition, sacred knowledge, divine feminine, and the subconscious mind. Trust your inner voice.",
      meaningCn: "女教皇代表直觉、神圣知识、神圣女性和潜意识。相信你内心的声音。",
      advice: "Listen to your intuition and pay attention to your dreams. The answers you seek lie within.",
      adviceCn: "倾听你的直觉，关注你的梦境。你寻求的答案就在内心深处。"
    },
    reversed: {
      keywords: ["Secrets", "Disconnected from intuition", "Withdrawal"],
      keywordsCn: ["秘密", "与直觉断联", "退缩"],
      meaning: "The reversed High Priestess suggests secrets, being disconnected from intuition, and withdrawal from others.",
      meaningCn: "逆位的女教皇暗示秘密、与直觉断联和从他人处退缩。",
      advice: "Reconnect with your inner wisdom. Don't let fear or others' opinions cloud your judgment.",
      adviceCn: "重新连接你的内在智慧。不要让恐惧或他人的意见蒙蔽你的判断。"
    }
  },
  {
    id: 3,
    name: "The Empress",
    nameCn: "皇后",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance"],
      keywordsCn: ["女性气质", "美丽", "自然", "滋养", "丰盛"],
      meaning: "The Empress represents femininity, beauty, nature, nurturing, and abundance. A time of growth and prosperity.",
      meaningCn: "皇后代表女性气质、美丽、自然、滋养和丰盛。这是成长和繁荣的时期。",
      advice: "Nurture your creative projects and relationships. Connect with nature and embrace your feminine energy.",
      adviceCn: "滋养你的创意项目和人际关系。与自然连接，拥抱你的女性能量。"
    },
    reversed: {
      keywords: ["Creative block", "Dependence", "Smothering", "Lack of progress"],
      keywordsCn: ["创意受阻", "依赖", "过度保护", "缺乏进步"],
      meaning: "The reversed Empress suggests creative block, dependence on others, and smothering behavior.",
      meaningCn: "逆位的皇后暗示创意受阻、对他人的依赖和过度保护的行为。",
      advice: "Find balance between giving and receiving. Don't neglect your own needs while caring for others.",
      adviceCn: "在给予和接受之间找到平衡。在关怀他人的同时，不要忽视自己的需求。"
    }
  },
  {
    id: 4,
    name: "The Emperor",
    nameCn: "皇帝",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Authority", "Father-figure", "Structure", "Control"],
      keywordsCn: ["权威", "父亲形象", "结构", "控制"],
      meaning: "The Emperor represents authority, father-figure, structure, and control. A time to take charge and establish order.",
      meaningCn: "皇帝代表权威、父亲形象、结构和控制。这是掌控局面并建立秩序的时候。",
      advice: "Take leadership and create structure in your life. Use your authority wisely and fairly.",
      adviceCn: "承担领导责任，在生活中创建结构。明智公正地使用你的权威。"
    },
    reversed: {
      keywords: ["Tyranny", "Rigidity", "Coldness", "Loss of authority"],
      keywordsCn: ["暴政", "僵化", "冷漠", "失去权威"],
      meaning: "The reversed Emperor suggests tyranny, rigidity, coldness, and loss of authority or control.",
      meaningCn: "逆位的皇帝暗示暴政、僵化、冷漠以及权威或控制力的丧失。",
      advice: "Examine whether you're being too controlling or inflexible. Consider others' perspectives.",
      adviceCn: "审视你是否过于控制或缺乏灵活性。考虑他人的观点。"
    }
  },
  {
    id: 5,
    name: "The Hierophant",
    nameCn: "教皇",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Spiritual wisdom", "Religious beliefs", "Conformity", "Tradition"],
      keywordsCn: ["精神智慧", "宗教信仰", "顺从", "传统"],
      meaning: "The Hierophant represents spiritual wisdom, religious beliefs, conformity, and tradition. Learning from established systems.",
      meaningCn: "教皇代表精神智慧、宗教信仰、顺从和传统。从既定体系中学习。",
      advice: "Seek guidance from mentors or traditional wisdom. Sometimes conformity serves a purpose.",
      adviceCn: "向导师或传统智慧寻求指导。有时顺从是有目的的。"
    },
    reversed: {
      keywords: ["Personal beliefs", "Freedom", "Challenging tradition"],
      keywordsCn: ["个人信仰", "自由", "挑战传统"],
      meaning: "The reversed Hierophant suggests personal beliefs, freedom from conformity, and challenging tradition.",
      meaningCn: "逆位的教皇暗示个人信仰、摆脱顺从和挑战传统。",
      advice: "Trust your own beliefs and values. Question traditions that no longer serve you.",
      adviceCn: "相信你自己的信念和价值观。质疑那些不再对你有益的传统。"
    }
  },
  {
    id: 6,
    name: "The Lovers",
    nameCn: "恋人",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Love", "Harmony", "Relationships", "Values alignment"],
      keywordsCn: ["爱情", "和谐", "关系", "价值观一致"],
      meaning: "The Lovers represents love, harmony, relationships, and values alignment. A time of important choices in love.",
      meaningCn: "恋人代表爱情、和谐、关系和价值观的一致。这是在爱情中做出重要选择的时候。",
      advice: "Make decisions based on your values. Seek harmony and balance in your relationships.",
      adviceCn: "基于你的价值观做决定。在关系中寻求和谐与平衡。"
    },
    reversed: {
      keywords: ["Disharmony", "Imbalance", "Misalignment of values"],
      keywordsCn: ["不和谐", "失衡", "价值观不一致"],
      meaning: "The reversed Lovers suggests disharmony, imbalance, and misalignment of values in relationships.",
      meaningCn: "逆位的恋人暗示关系中的不和谐、失衡和价值观不一致。",
      advice: "Address relationship issues honestly. Ensure your actions align with your values.",
      adviceCn: "诚实地处理关系问题。确保你的行为与价值观一致。"
    }
  },
  {
    id: 7,
    name: "The Chariot",
    nameCn: "战车",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Control", "Willpower", "Success", "Determination"],
      keywordsCn: ["控制", "意志力", "成功", "决心"],
      meaning: "The Chariot represents control, willpower, success, and determination. Victory through maintaining focus and direction.",
      meaningCn: "战车代表控制、意志力、成功和决心。通过保持专注和方向获得胜利。",
      advice: "Stay focused on your goals and maintain self-discipline. Success is within reach.",
      adviceCn: "专注于你的目标，保持自律。成功就在眼前。"
    },
    reversed: {
      keywords: ["Lack of control", "Lack of direction", "Aggression"],
      keywordsCn: ["缺乏控制", "缺乏方向", "侵略性"],
      meaning: "The reversed Chariot suggests lack of control, lack of direction, and misdirected aggression.",
      meaningCn: "逆位的战车暗示缺乏控制、缺乏方向和错误的侵略性。",
      advice: "Regain control of your emotions and actions. Set clear goals and work towards them methodically.",
      adviceCn: "重新控制你的情绪和行为。设定明确目标，有条不紊地努力实现。"
    }
  },
  {
    id: 8,
    name: "Strength",
    nameCn: "力量",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Strength", "Courage", "Persuasion", "Influence", "Compassion"],
      keywordsCn: ["力量", "勇气", "说服", "影响力", "慈悲"],
      meaning: "Strength represents inner strength, courage, persuasion, influence, and compassion. Gentle control over difficult situations.",
      meaningCn: "力量代表内在力量、勇气、说服力、影响力和慈悲。温和地控制困难局面。",
      advice: "Use compassion and inner strength to overcome challenges. Lead with kindness rather than force.",
      adviceCn: "用慈悲和内在力量来克服挑战。用善意而不是暴力来领导。"
    },
    reversed: {
      keywords: ["Self-doubt", "Lack of confidence", "Low energy"],
      keywordsCn: ["自我怀疑", "缺乏自信", "能量低落"],
      meaning: "The reversed Strength suggests self-doubt, lack of confidence, and low energy or inner strength.",
      meaningCn: "逆位的力量暗示自我怀疑、缺乏自信和能量或内在力量低落。",
      advice: "Build your confidence through small victories. Practice self-compassion and patience.",
      adviceCn: "通过小的胜利来建立自信。练习自我慈悲和耐心。"
    }
  },
  {
    id: 9,
    name: "The Hermit",
    nameCn: "隐者",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Soul searching", "Introspection", "Inner guidance", "Solitude"],
      keywordsCn: ["灵魂探索", "内省", "内在指导", "独处"],
      meaning: "The Hermit represents soul searching, introspection, inner guidance, and beneficial solitude. A time for self-reflection.",
      meaningCn: "隐者代表灵魂探索、内省、内在指导和有益的独处。这是自我反思的时候。",
      advice: "Take time for introspection and self-discovery. The answers you seek come from within.",
      adviceCn: "花时间进行内省和自我发现。你寻求的答案来自内心。"
    },
    reversed: {
      keywords: ["Isolation", "Loneliness", "Lost your way"],
      keywordsCn: ["孤立", "孤独", "迷失方向"],
      meaning: "The reversed Hermit suggests isolation, loneliness, and having lost your way or direction.",
      meaningCn: "逆位的隐者暗示孤立、孤独和失去道路或方向。",
      advice: "Reach out to others for support. Don't let solitude become harmful isolation.",
      adviceCn: "向他人寻求支持。不要让独处变成有害的孤立。"
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameCn: "命运之轮",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Good luck", "Karma", "Life cycles", "Destiny", "Turning point"],
      keywordsCn: ["好运", "业力", "生命周期", "命运", "转折点"],
      meaning: "The Wheel of Fortune represents good luck, karma, life cycles, destiny, and turning points. What goes around comes around.",
      meaningCn: "命运之轮代表好运、业力、生命周期、命运和转折点。种什么因得什么果。",
      advice: "Accept the natural cycles of life. Good fortune is coming your way.",
      adviceCn: "接受生命的自然周期。好运正在向你走来。"
    },
    reversed: {
      keywords: ["Bad luck", "Lack of control", "Clinging to control"],
      keywordsCn: ["厄运", "缺乏控制", "紧抓控制"],
      meaning: "The reversed Wheel of Fortune suggests bad luck, lack of control, and clinging to control when you need to let go.",
      meaningCn: "逆位的命运之轮暗示厄运、缺乏控制和在需要放手时紧抓控制。",
      advice: "Accept what you cannot change and focus on what you can influence. This difficult period will pass.",
      adviceCn: "接受你无法改变的，专注于你能影响的。这个困难时期会过去的。"
    }
  },
  {
    id: 11,
    name: "Justice",
    nameCn: "正义",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Justice", "Fairness", "Truth", "Cause and effect", "Law"],
      keywordsCn: ["正义", "公平", "真理", "因果关系", "法律"],
      meaning: "Justice represents justice, fairness, truth, cause and effect, and law. Decisions will be made fairly and with integrity.",
      meaningCn: "正义代表公正、公平、真理、因果关系和法律。决定将公平公正地做出。",
      advice: "Seek truth and act with integrity. Fair judgment will be rendered in your situation.",
      adviceCn: "寻求真理，诚实行事。你的情况会得到公正的判决。"
    },
    reversed: {
      keywords: ["Unfairness", "Lack of accountability", "Dishonesty"],
      keywordsCn: ["不公平", "缺乏责任感", "不诚实"],
      meaning: "The reversed Justice suggests unfairness, lack of accountability, and dishonesty in dealings.",
      meaningCn: "逆位的正义暗示不公平、缺乏责任感和交往中的不诚实。",
      advice: "Take responsibility for your actions. Seek to make amends if you have acted unfairly.",
      adviceCn: "为你的行为承担责任。如果你行为不公，寻求弥补。"
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameCn: "倒吊人",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Waiting", "Surrender", "Letting go", "New perspective"],
      keywordsCn: ["等待", "投降", "放手", "新视角"],
      meaning: "The Hanged Man represents waiting, surrender, letting go, and gaining new perspective through stillness.",
      meaningCn: "倒吊人代表等待、投降、放手，以及通过静止获得新的视角。",
      advice: "Sometimes inaction is the best action. Let go of control and trust the process.",
      adviceCn: "有时不行动是最好的行动。放弃控制，相信过程。"
    },
    reversed: {
      keywords: ["Delays", "Resistance", "Stalling", "Indecision"],
      keywordsCn: ["延迟", "抵抗", "拖延", "犹豫不决"],
      meaning: "The reversed Hanged Man suggests delays, resistance to change, stalling, and indecision.",
      meaningCn: "逆位的倒吊人暗示延迟、对变化的抵抗、拖延和犹豫不决。",
      advice: "Stop resisting necessary changes. Move forward even if the path isn't completely clear.",
      adviceCn: "停止抵抗必要的改变。即使道路不完全清晰，也要向前迈进。"
    }
  },
  {
    id: 13,
    name: "Death",
    nameCn: "死神",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Endings", "Beginnings", "Change", "Transformation", "Transition"],
      keywordsCn: ["结束", "开始", "变化", "转化", "过渡"],
      meaning: "Death represents endings, beginnings, change, transformation, and transition. One phase ends so another can begin.",
      meaningCn: "死神代表结束、开始、变化、转化和过渡。一个阶段的结束意味着另一个阶段的开始。",
      advice: "Embrace necessary endings and transformations. Change brings new opportunities.",
      adviceCn: "拥抱必要的结束和转变。变化带来新机会。"
    },
    reversed: {
      keywords: ["Resistance to change", "Personal transformation", "Inner purging"],
      keywordsCn: ["抵抗变化", "个人转化", "内在清理"],
      meaning: "The reversed Death suggests resistance to change, personal transformation, and inner purging of old patterns.",
      meaningCn: "逆位的死神暗示对变化的抵抗、个人转化和内在旧模式的清理。",
      advice: "Don't resist necessary changes. Internal transformation is needed before external change can occur.",
      adviceCn: "不要抵抗必要的变化。在外在变化发生之前，需要内在转化。"
    }
  },
  {
    id: 14,
    name: "Temperance",
    nameCn: "节制",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Balance", "Moderation", "Patience", "Purpose", "Meaning"],
      keywordsCn: ["平衡", "节制", "耐心", "目的", "意义"],
      meaning: "Temperance represents balance, moderation, patience, purpose, and meaning. Finding the middle path brings harmony.",
      meaningCn: "节制代表平衡、节制、耐心、目的和意义。找到中间道路带来和谐。",
      advice: "Seek balance and moderation in all things. Patience will help you achieve your long-term goals.",
      adviceCn: "在一切事物中寻求平衡和节制。耐心将帮助你实现长期目标。"
    },
    reversed: {
      keywords: ["Imbalance", "Excess", "Self-healing", "Re-alignment"],
      keywordsCn: ["失衡", "过度", "自我治愈", "重新调整"],
      meaning: "The reversed Temperance suggests imbalance, excess, and the need for self-healing and re-alignment.",
      meaningCn: "逆位的节制暗示失衡、过度，以及对自我治愈和重新调整的需要。",
      advice: "Address areas of imbalance in your life. Practice moderation and self-care.",
      adviceCn: "解决生活中不平衡的领域。练习节制和自我关爱。"
    }
  },
  {
    id: 15,
    name: "The Devil",
    nameCn: "恶魔",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Bondage", "Addiction", "Sexuality", "Materialism"],
      keywordsCn: ["束缚", "上瘾", "性欲", "物质主义"],
      meaning: "The Devil represents bondage, addiction, sexuality, and materialism. Being trapped by material desires or unhealthy patterns.",
      meaningCn: "恶魔代表束缚、上瘾、性欲和物质主义。被物质欲望或不健康的模式所困。",
      advice: "Examine what may be controlling you. Break free from limiting beliefs and unhealthy attachments.",
      adviceCn: "审视什么可能在控制你。打破限制性信念和不健康的依恋。"
    },
    reversed: {
      keywords: ["Freedom", "Release", "Reclaiming power", "Independence"],
      keywordsCn: ["自由", "释放", "夺回力量", "独立"],
      meaning: "The reversed Devil suggests freedom, release, reclaiming personal power, and independence from constraining forces.",
      meaningCn: "逆位的恶魔暗示自由、释放、夺回个人力量，以及从束缚力量中获得独立。",
      advice: "You're breaking free from limitations. Continue to reclaim your personal power and independence.",
      adviceCn: "你正在从限制中突破。继续夺回你的个人力量和独立性。"
    }
  },
  {
    id: 16,
    name: "The Tower",
    nameCn: "塔",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Sudden change", "Upheaval", "Chaos", "Revelation", "Awakening"],
      keywordsCn: ["突发改变", "剧变", "混乱", "揭示", "觉醒"],
      meaning: "The Tower represents sudden change, upheaval, chaos, revelation, and awakening. Dramatic change that clears the way for something new.",
      meaningCn: "塔代表突发改变、剧变、混乱、揭示和觉醒。戏剧性的改变为新事物清道。",
      advice: "Accept that some structures in your life need to fall. This upheaval will ultimately lead to positive change.",
      adviceCn: "接受生活中的一些结构需要倒塔。这场剧变最终将导致积极的改变。"
    },
    reversed: {
      keywords: ["Personal transformation", "Fear of change", "Avoiding disaster"],
      keywordsCn: ["个人转化", "对改变的恐惧", "避免灾难"],
      meaning: "The reversed Tower suggests personal transformation, fear of change, and potentially avoiding disaster through awareness.",
      meaningCn: "逆位的塔暗示个人转化、对改变的恐惧，以及可能通过意识避免灾雾。",
      advice: "Don't resist necessary personal transformation. Face your fears about change.",
      adviceCn: "不要抵抗必要的个人转化。面对你对改变的恐惧。"
    }
  },
  {
    id: 17,
    name: "The Star",
    nameCn: "星星",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Hope", "Faith", "Purpose", "Renewal", "Spirituality"],
      keywordsCn: ["希望", "信念", "目的", "更新", "灵性"],
      meaning: "The Star represents hope, faith, purpose, renewal, and spirituality. A time of healing and renewed faith in the future.",
      meaningCn: "星星代表希望、信念、目的、更新和灵性。这是治愈和重新对未来抱有信念的时候。",
      advice: "Keep faith in your dreams and aspirations. Healing and renewal are coming into your life.",
      adviceCn: "对你的梦想和抱负保持信念。治愈和更新正在进入你的生活。"
    },
    reversed: {
      keywords: ["Lack of faith", "Despair", "Self-trust", "Disconnection"],
      keywordsCn: ["缺乏信念", "绝望", "自我信任", "断连"],
      meaning: "The reversed Star suggests lack of faith, despair, loss of self-trust, and feeling disconnected from purpose.",
      meaningCn: "逆位的星星暗示缺乏信念、绝望、失去自我信任，以及感觉与目的断连。",
      advice: "Reconnect with your inner guidance and renew your faith. Trust that better times are ahead.",
      adviceCn: "重新连接你的内在指引，重新燃起信念。相信更好的时光在前方。"
    }
  },
  {
    id: 18,
    name: "The Moon",
    nameCn: "月亮",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Illusion", "Fear", "Anxiety", "Subconscious", "Intuition"],
      keywordsCn: ["幻想", "恐惧", "焦虑", "潜意识", "直觉"],
      meaning: "The Moon represents illusion, fear, anxiety, subconscious influences, and trusting intuition over logic.",
      meaningCn: "月亮代表幻想、恐惧、焦虑、潜意识影响，以及相信直觉而非逻辑。",
      advice: "Trust your intuition but be aware of illusions. Face your fears and anxieties with courage.",
      adviceCn: "相信你的直觉，但要意识到幻想。勇敢地面对你的恐惧和焦虑。"
    },
    reversed: {
      keywords: ["Release of fear", "Repressed emotion", "Inner confusion"],
      keywordsCn: ["释放恐惧", "受压抑情绪", "内在困惑"],
      meaning: "The reversed Moon suggests release of fear, repressed emotions surfacing, and inner confusion being resolved.",
      meaningCn: "逆位的月亮暗示恐惧的释放、被压抑的情绪浮现，以及内在困惑得到解决。",
      advice: "Work through repressed emotions and fears. Clarity will come as you face your shadow self.",
      adviceCn: "处理被压抑的情绪和恐惧。当你面对阴暗自我时，清晰将会到来。"
    }
  },
  {
    id: 19,
    name: "The Sun",
    nameCn: "太阳",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Positivity", "Fun", "Warmth", "Success", "Vitality", "Joy"],
      keywordsCn: ["积极", "乐趣", "温暖", "成功", "活力", "欢乐"],
      meaning: "The Sun represents positivity, fun, warmth, success, vitality, and joy. A time of happiness and achievement.",
      meaningCn: "太阳代表积极、乐趣、温暖、成功、活力和欢乐。这是幸福和成就的时候。",
      advice: "Embrace joy and celebrate your successes. Share your positive energy with others.",
      adviceCn: "拥抱欢乐，庆祝你的成功。与他人分享你的积极能量。"
    },
    reversed: {
      keywords: ["Inner child", "Feeling down", "Overly optimistic"],
      keywordsCn: ["内在的孩子", "情绪低落", "过度乐观"],
      meaning: "The reversed Sun suggests connecting with your inner child, feeling down temporarily, or being overly optimistic.",
      meaningCn: "逆位的太阳暗示与内在的孩子连接、暂时情绪低落，或过度乐观。",
      advice: "Reconnect with simple pleasures and your playful nature. Balance optimism with realism.",
      adviceCn: "重新连接简单的快乐和你的玩心。平衡乐观与现实主义。"
    }
  },
  {
    id: 20,
    name: "Judgement",
    nameCn: "审判",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Judgement", "Rebirth", "Inner calling", "Forgiveness"],
      keywordsCn: ["审判", "重生", "内在召唤", "宽恕"],
      meaning: "Judgement represents judgement, rebirth, inner calling, and forgiveness. A time of spiritual awakening and second chances.",
      meaningCn: "审判代表审判、重生、内在召唤和宽恕。这是精神觉醒和第二次机会的时候。",
      advice: "Listen to your inner calling and embrace your higher purpose. Forgive yourself and others.",
      adviceCn: "倾听你的内在召唤，拥抱你的更高目的。宽恕自己和他人。"
    },
    reversed: {
      keywords: ["Self-doubt", "Inner critic", "Ignoring the call"],
      keywordsCn: ["自我怀疑", "内在批判", "忽视召唤"],
      meaning: "The reversed Judgement suggests self-doubt, harsh inner critic, and ignoring your inner calling or higher purpose.",
      meaningCn: "逆位的审判暗示自我怀疑、苛刻的内在批判，以及忽视你的内在召唤或更高目的。",
      advice: "Silence your inner critic and trust your inner wisdom. Don't ignore your calling to something greater.",
      adviceCn: "让你的内在批判安静，相信你的内在智慧。不要忽视你对更伟大事物的召唤。"
    }
  },
  {
    id: 21,
    name: "The World",
    nameCn: "世界",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Completion", "Integration", "Accomplishment", "Travel"],
      keywordsCn: ["完成", "整合", "成就", "旅行"],
      meaning: "The World represents completion, integration, accomplishment, and travel. The successful end of the Fool's journey.",
      meaningCn: "世界代表完成、整合、成就和旅行。是愚者之旅的成功终点。",
      advice: "Celebrate your achievements and prepare for new adventures. You have accomplished something significant.",
      adviceCn: "庆祝你的成就，为新的冒险做准备。你已经完成了一些重要的事情。"
    },
    reversed: {
      keywords: ["Incomplete", "Lack of closure", "Stagnation"],
      keywordsCn: ["不完整", "缺乏结束", "停滞"],
      meaning: "The reversed World suggests something incomplete, lack of closure, and stagnation in progress.",
      meaningCn: "逆位的世界暗示一些不完整的事物、缺乏结束和进展中的停滞。",
      advice: "Identify what needs to be completed before moving forward. Seek closure in unfinished matters.",
      adviceCn: "在向前迈进之前，确定什么需要完成。在未完成的事务中寻求结束。"
    }
  },

  // Cups Suit (14 cards)
  {
    id: 22,
    name: "Ace of Cups",
    nameCn: "圣杯王牌",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Love", "New relationships", "Compassion", "Creativity"],
      keywordsCn: ["爱情", "新关系", "同情心", "创造力"],
      meaning: "A new beginning in emotional matters. The start of love, friendship, or creative projects.",
      meaningCn: "情感事务的新开始。爱情、友谊或创意项目的开始。",
      advice: "Open your heart to new emotional experiences and creative inspirations.",
      adviceCn: "对新的情感经历和创意灵感开放你的心灵。"
    },
    reversed: {
      keywords: ["Self-love", "Intuition", "Repressed emotions"],
      keywordsCn: ["自爱", "直觉", "压抑情绪"],
      meaning: "Focus on self-love and emotional healing before engaging with others.",
      meaningCn: "在与他人建立关系之前，专注于自爱和情感治愈。",
      advice: "Practice self-compassion and work on healing emotional wounds.",
      adviceCn: "练习自我同情，努力治愈情感创伤。"
    }
  },
  {
    id: 23,
    name: "Two of Cups",
    nameCn: "圣杯二",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Unified love", "Partnership", "Mutual attraction"],
      keywordsCn: ["统一的爱", "伙伴关系", "相互吸引"],
      meaning: "A strong partnership or romantic connection based on mutual respect and understanding.",
      meaningCn: "基于相互尊重和理解的强大伙伴关系或浪漫连接。",
      advice: "Nurture your important relationships and seek balance in partnerships.",
      adviceCn: "培养你重要的人际关系，在伙伴关系中寻求平衡。"
    },
    reversed: {
      keywords: ["Breakup", "Imbalance", "Self-love"],
      keywordsCn: ["分手", "失衡", "自爱"],
      meaning: "Relationship difficulties or the need to focus on self-love before partnering with others.",
      meaningCn: "关系困难或需要在与他人建立伙伴关系之前专注于自爱。",
      advice: "Address relationship imbalances or take time to work on yourself.",
      adviceCn: "解决关系不平衡问题，或花时间提升自己。"
    }
  },
  {
    id: 24,
    name: "Three of Cups",
    nameCn: "圣杯三",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Celebration", "Friendship", "Community", "Collaboration"],
      keywordsCn: ["庆祝", "友谊", "社区", "合作"],
      meaning: "Celebration, friendship, and community support. A time of joy with others.",
      meaningCn: "庆祝、友谊和社区支持。与他人共享欢乐的时光。",
      advice: "Celebrate your achievements with friends and embrace community support.",
      adviceCn: "与朋友一起庆祝你的成就，拥抱社区的支持。"
    },
    reversed: {
      keywords: ["Independence", "Alone time", "Cancelled plans"],
      keywordsCn: ["独立", "独处时间", "取消计划"],
      meaning: "Need for independence, spending time alone, or social plans being disrupted.",
      meaningCn: "需要独立、独处时间，或社交计划被打乱。",
      advice: "Take time for yourself when needed, but don't isolate completely.",
      adviceCn: "必要时给自己一些时间，但不要完全孤立自己。"
    }
  },
  {
    id: 25,
    name: "Four of Cups",
    nameCn: "圣杯四",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Apathy", "Contemplation", "Disconnection", "Boredom"],
      keywordsCn: ["漠不关心", "沉思", "断连", "无聊"],
      meaning: "Feeling apathetic or disconnected. Missing opportunities due to lack of interest.",
      meaningCn: "感到漠不关心或断连。因缺乏兴趣而错过机会。",
      advice: "Open yourself to new opportunities and don't let boredom blind you to possibilities.",
      adviceCn: "对新机会开放自己，不要让无聊蒙蔽你的可能性。"
    },
    reversed: {
      keywords: ["Motivation", "New possibilities", "Acceptance"],
      keywordsCn: ["动机", "新可能", "接受"],
      meaning: "Renewed motivation and willingness to accept new opportunities or possibilities.",
      meaningCn: "重新燃起的动机和接受新机会或可能性的意愿。",
      advice: "Embrace new opportunities with renewed enthusiasm and energy.",
      adviceCn: "以重新燃起的热情和能量拥抱新机会。"
    }
  },
  {
    id: 26,
    name: "Five of Cups",
    nameCn: "圣杯五",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Regret", "Failure", "Disappointment", "Pessimism"],
      keywordsCn: ["后悔", "失败", "失望", "悲观"],
      meaning: "Dwelling on past failures or disappointments. Focusing on what went wrong rather than what remains.",
      meaningCn: "沉滯于过去的失败或失望。关注出错的事情而不是什么仍然存在。",
      advice: "Learn from past mistakes but don't let regret consume you. Focus on what you still have.",
      adviceCn: "从过去的错误中学习，但不要让后悔吞噬你。专注于你仍然拥有的。"
    },
    reversed: {
      keywords: ["Personal setbacks", "Self-forgiveness", "Moving on"],
      keywordsCn: ["个人挫折", "自我宽恕", "继续前进"],
      meaning: "Beginning to heal from setbacks and practicing self-forgiveness. Ready to move forward.",
      meaningCn: "开始从挫折中恢复，练习自我宽恕。准备好向前迈进。",
      advice: "Forgive yourself for past mistakes and focus on healing and moving forward.",
      adviceCn: "宽恕自己过去的错误，专注于治愈和向前迈进。"
    }
  },
  {
    id: 27,
    name: "Six of Cups",
    nameCn: "圣杯六",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Revisiting the past", "Childhood memories", "Innocence"],
      keywordsCn: ["重访过去", "童年回忆", "纯真"],
      meaning: "Nostalgia, childhood memories, and innocence. Reconnecting with your past or inner child.",
      meaningCn: "怀旧、童年回忆和纯真。重新连接你的过去或内在的孩子。",
      advice: "Embrace pleasant memories but don't get stuck in the past. Learn from your history.",
      adviceCn: "拥抱美好的回忆，但不要困在过去。从你的历史中学习。"
    },
    reversed: {
      keywords: ["Living in the past", "Forgiveness", "Lacking playfulness"],
      keywordsCn: ["沉滟过去", "宽恕", "缺乏玩心"],
      meaning: "Being too focused on the past or needing to forgive past hurts to move forward.",
      meaningCn: "过度专注于过去，或需要宽恕过去的伤害才能向前迈进。",
      advice: "Release past hurts and focus on creating new positive memories.",
      adviceCn: "释放过去的伤害，专注于创造新的积极回忆。"
    }
  },
  {
    id: 28,
    name: "Seven of Cups",
    nameCn: "圣杯七",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Opportunities", "Choices", "Wishful thinking", "Illusion"],
      keywordsCn: ["机会", "选择", "一厢情愿", "幻想"],
      meaning: "Many options and opportunities, but also confusion and illusion. Too many choices to make.",
      meaningCn: "许多选择和机会，但也有困惑和幻想。过多的选择需要做决定。",
      advice: "Ground your dreams in reality and choose your opportunities carefully.",
      adviceCn: "让你的梦想脚踏实地，谨慎地选择你的机会。"
    },
    reversed: {
      keywords: ["Alignment", "Personal values", "Overwhelmed by choices"],
      keywordsCn: ["一致", "个人价值观", "被选择压倒"],
      meaning: "Finding clarity in choices by aligning with personal values, or feeling overwhelmed by options.",
      meaningCn: "通过与个人价值观保持一致来在选择中找到清晰，或被选择所压倒。",
      advice: "Use your values as a guide to make clear decisions among many options.",
      adviceCn: "以你的价值观为指导，在众多选择中做出明智的决定。"
    }
  },
  {
    id: 29,
    name: "Eight of Cups",
    nameCn: "圣杯八",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Disappointment", "Abandonment", "Withdrawal", "Escapism"],
      keywordsCn: ["失望", "放弃", "退缩", "逃避主义"],
      meaning: "Walking away from a disappointing situation. Seeking something more meaningful.",
      meaningCn: "从令人失望的情况中走开。寻求更有意义的事物。",
      advice: "Sometimes walking away is the right choice. Trust your instincts about what serves you.",
      adviceCn: "有时走开是正确的选择。相信你对什么对你有益的直觉。"
    },
    reversed: {
      keywords: ["Trying one more time", "Indecision", "Aimless drifting"],
      keywordsCn: ["再试一次", "犹豫不决", "漫无目的漂泊"],
      meaning: "Attempting to salvage a situation one more time, or drifting without clear direction.",
      meaningCn: "尝试再次挝救局面，或没有明确方向地漂泊。",
      advice: "Decide whether to recommit fully or let go completely. Avoid half-measures.",
      adviceCn: "决定是否全力重新投入或完全放手。避免半心半意。"
    }
  },
  {
    id: 30,
    name: "Nine of Cups",
    nameCn: "圣杯九",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Contentment", "Satisfaction", "Gratitude", "Wish come true"],
      keywordsCn: ["满足", "满意", "感恩", "愿望成真"],
      meaning: "Emotional fulfillment and satisfaction. Getting what you wished for. The 'wish card'.",
      meaningCn: "情感上的满足和满意。得到你所愿望的。“愿望牌”。",
      advice: "Enjoy your achievements and express gratitude for what you have accomplished.",
      adviceCn: "享受你的成就，为你所完成的事情表达感恩。"
    },
    reversed: {
      keywords: ["Inner happiness", "Materialism", "Dissatisfaction"],
      keywordsCn: ["内在幸福", "物质主义", "不满足"],
      meaning: "Seeking inner happiness rather than external validation, or dissatisfaction despite material success.",
      meaningCn: "寻求内在幸福而不是外在认可，或尽管物质成功但仍不满足。",
      advice: "Find happiness within yourself rather than seeking it through external achievements.",
      adviceCn: "在内心找到幸福，而不是通过外在成就来寻求幸福。"
    }
  },
  {
    id: 31,
    name: "Ten of Cups",
    nameCn: "圣杯十",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Happiness", "Marriage", "Family", "Long-term success"],
      keywordsCn: ["幸福", "婚姻", "家庭", "长期成功"],
      meaning: "Emotional fulfillment in relationships and family. Harmony and happiness in personal life.",
      meaningCn: "在关系和家庭中的情感满足。个人生活中的和谐与幸福。",
      advice: "Cherish your relationships and create harmony in your personal life.",
      adviceCn: "珍惜你的人际关系，在个人生活中创造和谐。"
    },
    reversed: {
      keywords: ["Shattered dreams", "Broken family", "Bad investments"],
      keywordsCn: ["破碎的梦想", "破裂的家庭", "糕糕投资"],
      meaning: "Disruption in family harmony or relationships. Disappointment in personal life.",
      meaningCn: "家庭和谐或关系中的破裂。个人生活中的失望。",
      advice: "Work on healing family relationships and don't give up on your dreams of happiness.",
      adviceCn: "努力治愈家庭关系，不要放弃你对幸福的梦想。"
    }
  },
  {
    id: 32,
    name: "Page of Cups",
    nameCn: "圣杯伍从",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Creative opportunities", "Intuitive messages", "Curiosity"],
      keywordsCn: ["创意机会", "直觉信息", "好奇心"],
      meaning: "A messenger of emotional or creative opportunities. New artistic projects or intuitive insights.",
      meaningCn: "情感或创意机会的信使。新的艺术项目或直觉洞察。",
      advice: "Pay attention to your intuitive messages and embrace creative opportunities.",
      adviceCn: "注意你的直觉信息，拥抱创意机会。"
    },
    reversed: {
      keywords: ["Emotional immaturity", "Insecurity", "Escapism"],
      keywordsCn: ["情感不成熟", "不安全感", "逃避主义"],
      meaning: "Emotional immaturity or insecurity affecting your relationships or creative expression.",
      meaningCn: "情感不成熟或不安全感影响你的关系或创意表达。",
      advice: "Work on emotional maturity and address insecurities that hold you back.",
      adviceCn: "努力提升情感成熟度，解决阻碍你的不安全感。"
    }
  },
  {
    id: 33,
    name: "Knight of Cups",
    nameCn: "圣杯骑士",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Romance", "Charm", "Knight in shining armor", "Idealist"],
      keywordsCn: ["浪漫", "魅力", "闪亮钨甲的骑士", "理想主义者"],
      meaning: "A romantic idealist bringing emotional messages. Following your heart and dreams.",
      meaningCn: "一个浪漫的理想主义者带来情感信息。跟随你的心和梦想。",
      advice: "Follow your heart but balance emotion with practical considerations.",
      adviceCn: "跟随你的心，但要平衡情感与实际考虑。"
    },
    reversed: {
      keywords: ["Moodiness", "Disappointment", "Overemotional"],
      keywordsCn: ["情绪化", "失望", "过度情绪化"],
      meaning: "Moodiness, emotional manipulation, or disappointment in romantic matters.",
      meaningCn: "情绪化、情感操纵或在浪漫事务中的失望。",
      advice: "Manage your emotions constructively and avoid manipulative behavior.",
      adviceCn: "建设性地管理你的情绪，避免操纵行为。"
    }
  },
  {
    id: 34,
    name: "Queen of Cups",
    nameCn: "圣杯皇后",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Compassion", "Calm", "Comfort", "Intuition"],
      keywordsCn: ["同情心", "平静", "安慰", "直觉"],
      meaning: "Emotional maturity, compassion, and intuitive wisdom. A nurturing and supportive presence.",
      meaningCn: "情感成熟、同情心和直觉智慧。一个滋养和支持的存在。",
      advice: "Trust your intuition and offer compassionate support to others and yourself.",
      adviceCn: "相信你的直觉，对他人和自己提供同情的支持。"
    },
    reversed: {
      keywords: ["Emotional insecurity", "Codependency", "Self-care"],
      keywordsCn: ["情感不安全", "相互依赖", "自我关爱"],
      meaning: "Emotional insecurity, codependency, or neglecting self-care while caring for others.",
      meaningCn: "情感不安全、相互依赖，或在关爱他人时忽视自我关爱。",
      advice: "Practice self-care and establish healthy emotional boundaries.",
      adviceCn: "练习自我关爱，建立健康的情感边界。"
    }
  },
  {
    id: 35,
    name: "King of Cups",
    nameCn: "圣杯国王",
    suit: "cups",
    suitCn: "圣杯",
    upright: {
      keywords: ["Emotional balance", "Compassion", "Diplomacy"],
      keywordsCn: ["情感平衡", "同情心", "外交"],
      meaning: "Emotional maturity and balance. Compassionate leadership and diplomatic solutions.",
      meaningCn: "情感成熟和平衡。充满同情心的领导力和外交解决方案。",
      advice: "Lead with emotional intelligence and maintain balance between heart and mind.",
      adviceCn: "以情商领导，保持心灵和理智之间的平衡。"
    },
    reversed: {
      keywords: ["Emotional manipulation", "Moodiness", "Lack of compassion"],
      keywordsCn: ["情感操纵", "情绪化", "缺乏同情心"],
      meaning: "Using emotions to manipulate others or lacking compassion and emotional control.",
      meaningCn: "利用情感操纵他人，或缺乏同情心和情感控制。",
      advice: "Use your emotional intelligence ethically and practice genuine compassion.",
      adviceCn: "道德地使用你的情商，练习真正的同情心。"
    }
  },

  // Wands Suit (14 cards)
  {
    id: 36,
    name: "Ace of Wands",
    nameCn: "权杖王牌",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Inspiration", "New opportunities", "Growth", "Potential"],
      keywordsCn: ["灵感", "新机会", "成长", "潜力"],
      meaning: "A spark of inspiration and new creative or career opportunities. Raw potential waiting to be developed.",
      meaningCn: "灵感的火花和新的创意或职业机会。等待开发的原始潜力。",
      advice: "Act on your inspiration and take advantage of new opportunities with enthusiasm.",
      adviceCn: "按照你的灵感行动，满怀热情地利用新机会。"
    },
    reversed: {
      keywords: ["Lack of energy", "Delays", "False starts"],
      keywordsCn: ["缺乏能量", "延迟", "虚假开始"],
      meaning: "Lack of energy or motivation, delays in projects, or false starts in new ventures.",
      meaningCn: "缺乏能量或动机、项目延迟，或新企业的虚假开始。",
      advice: "Reassess your goals and wait for the right timing before proceeding.",
      adviceCn: "重新评估你的目标，等待正确的时机再继续。"
    }
  },
  {
    id: 37,
    name: "Two of Wands",
    nameCn: "权杖二",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Future planning", "Making decisions", "Leaving comfort zone"],
      keywordsCn: ["未来规划", "做决定", "离开舒适区"],
      meaning: "Planning for the future and making important decisions. Ready to leave your comfort zone.",
      meaningCn: "为未来做计划和做重要决定。准备好离开你的舒适区。",
      advice: "Make concrete plans and be willing to take calculated risks to achieve your goals.",
      adviceCn: "制定具体计划，愿意承担经过计算的风险来实现目标。"
    },
    reversed: {
      keywords: ["Poor planning", "Lack of foresight", "Fear of unknown"],
      keywordsCn: ["计划不周", "缺乏远见", "对未知的恐惧"],
      meaning: "Poor planning, lack of foresight, or fear preventing you from taking necessary action.",
      meaningCn: "计划不周、缺乏远见，或恐惧阻止你采取必要的行动。",
      advice: "Improve your planning and don't let fear hold you back from pursuing opportunities.",
      adviceCn: "改善你的计划，不要让恐惧阻碍你追求机会。"
    }
  },
  {
    id: 38,
    name: "Three of Wands",
    nameCn: "权杖三",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Progress", "Expansion", "Foresight", "Overseas opportunities"],
      keywordsCn: ["进展", "扩张", "远见", "海外机会"],
      meaning: "Expansion of horizons and long-term planning paying off. Progress in your endeavors.",
      meaningCn: "视野的扩展和长期计划的回报。你的努力取得进展。",
      advice: "Continue with your long-term plans and consider expanding your scope or reach.",
      adviceCn: "继续你的长期计划，考虑扩大你的范围或影响力。"
    },
    reversed: {
      keywords: ["Playing small", "Lack of foresight", "Delays"],
      keywordsCn: ["格局小", "缺乏远见", "延迟"],
      meaning: "Playing small, lack of foresight, or delays in expansion and progress.",
      meaningCn: "格局过小、缺乏远见，或扩张和进展的延迟。",
      advice: "Think bigger and don't limit yourself. Plan more carefully for future success.",
      adviceCn: "思路要更大，不要限制自己。为未来的成功更仔细地计划。"
    }
  },
  {
    id: 39,
    name: "Four of Wands",
    nameCn: "权杖四",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Celebration", "Joyful reunion", "Homecoming", "Wedding"],
      keywordsCn: ["庆祝", "欢乐重聚", "回家", "婚礼"],
      meaning: "Celebration, joyful reunions, and achieving stability. A happy homecoming or milestone.",
      meaningCn: "庆祝、欢乐的重聚和获得稳定。幸福的回家或里程碑。",
      advice: "Take time to celebrate your achievements and enjoy harmonious relationships.",
      adviceCn: "花时间庆祝你的成就，享受和谐的关系。"
    },
    reversed: {
      keywords: ["Home conflicts", "Delayed celebrations", "Lack of support"],
      keywordsCn: ["家庭冲突", "庆祝延迟", "缺乏支持"],
      meaning: "Conflicts at home, delayed celebrations, or lack of support from family or community.",
      meaningCn: "家庭冲突、庆祝延迟，或缺乏家庭或社区的支持。",
      advice: "Work on resolving home conflicts and build supportive relationships.",
      adviceCn: "努力解决家庭冲突，建立支持性的关系。"
    }
  },
  {
    id: 40,
    name: "Five of Wands",
    nameCn: "权杖五",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Conflict", "Disagreements", "Competition", "Tension"],
      keywordsCn: ["冲突", "分歧", "竞争", "紧张"],
      meaning: "Minor conflicts, disagreements, and healthy competition. Tension that leads to growth.",
      meaningCn: "轻微的冲突、分歧和健康的竞争。导致成长的紧张关系。",
      advice: "Work through disagreements constructively and use competition as motivation.",
      adviceCn: "建设性地处理分歧，将竞争作为动力。"
    },
    reversed: {
      keywords: ["Avoiding conflict", "Respecting differences", "Inner conflict"],
      keywordsCn: ["避免冲突", "尊重差异", "内在冲突"],
      meaning: "Avoiding conflict, learning to respect differences, or dealing with inner conflict.",
      meaningCn: "避免冲突、学会尊重差异，或处理内在冲突。",
      advice: "Address conflicts directly but respectfully. Work on resolving inner contradictions.",
      adviceCn: "直接但尊重地处理冲突。努力解决内在矛盾。"
    }
  },
  {
    id: 41,
    name: "Six of Wands",
    nameCn: "权杖六",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Success", "Public recognition", "Progress", "Self-confidence", "Victory", "Leadership"],
      keywordsCn: ["成功", "公开认可", "进步", "自信", "胜利归来", "众人拥戴", "傲视群雄", "衣锦还乡", "成就感", "好消息"],
      meaning: "Success and public recognition for your achievements. Victory and increased self-confidence.",
      meaningCn: "如凯旋归来的英雄，戴着胜利桂冠骑白马而归，众人夹道欢迎拥戴。红色外衣象征热情主动，绿色布幔代表和平喜悦，六根权杖高举庆贺胜利。这是经过艰辛努力后的世俗成功，金榜题名、衣锦还乡的荣耀时刻，傲视群雄、对人生充满自信的态度。",
      advice: "Enjoy your success but stay humble. Use your achievements to inspire others.",
      adviceCn: "现在正是享受荣耀、展现自信的时刻！抬头挺胸地接受众人的赞美和认可，你的努力已经得到回报。相信自己的能力，以领导者的姿态激励他人。好消息正在路上，地位提升和身份改变即将到来，尽情享受这份成就感吧。"
    },
    reversed: {
      keywords: ["Private achievement", "Personal definition of success", "Fall from grace", "False confidence", "Delayed success"],
      keywordsCn: ["地位失落", "花环掉落", "虚假勇气", "骄者必败", "坏消息", "太早放弃", "分散精力", "迟来的成功", "出丑窘况"],
      meaning: "Private achievement, defining success for yourself, or experiencing a fall from grace.",
      meaningCn: "花环掉落，胜利的骑士从马上跌落，失去众人拥戴变成人人指责。这是由恐惧或脆弱所产生的虚假勇气与乐观，自信演变为骄傲而导致失败。好消息变成坏消息，期待落空成为挂念甚至恐惧。可能是太早放弃、精力分散，或面临强敌时的退缩背叛。",
      advice: "Define success on your own terms and don't rely solely on public recognition.",
      adviceCn: "避免虚假的勇气和乐观，审视自己是否过于骄傲或分散了精力。不要太早放弃，也不要把精神同时投入过多目标。坏消息或挫折是暂时的，学会从失败中反思，重新聚焦在正确的方向上。有时迟来的成功更加珍贵。"
    }
  },
  {
    id: 42,
    name: "Seven of Wands",
    nameCn: "权杖七",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Challenge", "Competition", "Perseverance", "Maintaining control", "Defense", "Courage"],
      keywordsCn: ["坚韧不拔", "独树一帜", "一夫当关", "居高临下", "奋力迎击", "不要放弃", "情急生智", "择善固执", "魄力"],
      meaning: "Standing your ground against challenges and competition. Perseverance in difficult times.",
      meaningCn: "绿衣男子站在青葱山顶，手持权杖奋力迎击山下六根权杖的攻击。一脚穿鞋一脚穿靴显示匆忙应战，高举权杖坚守防御位置。象征坚韧不拔、独树一帜的挑战魅力，以自己的力量抗衡所有其他力量。在危难中情急生智，运用智慧和反应能力一夫当关万夫莫敌。虽然孤军奋战，但占据高地优势。",
      advice: "Stand firm in your convictions and don't give up when facing opposition.",
      adviceCn: "不要放弃！拿出大刀阔斧的决心面对挑战，成功之路将为你开启。虽然处境棘手让你感到无助，但事情并不像想象中那么可怕。像图中男子一样坚守岗位，发挥你的胆识和急智。你占据有利位置，继续努力前进必将得到成功的回报。择善固执，坚定维护正当立场。"
    },
    reversed: {
      keywords: ["Exhaustion", "Give up", "Lack of self-belief", "Overwhelmed", "Losing ground"],
      keywordsCn: ["疲惫不堪", "放弃抵抗", "缺乏自信", "寡不敌众", "失去优势", "逃避挑战", "意志薄弱", "被人反对"],
      meaning: "Feeling exhausted by constant challenges or giving up too easily due to lack of self-belief.",
      meaningCn: "从山顶跌落，失去居高临下的优势地位。面对众多挑战时感到疲惫不堪，缺乏继续战斗的勇气和决心。可能选择逃避而非坚守岗位，或在关键时刻意志薄弱。寡不敌众的局面让人失去信心，原本的坚韧不拔变成了轻易放弃。在众人反对下动摇立场，无法择善固执。",
      advice: "Rest and recharge, then recommit to your goals with renewed self-belief.",
      adviceCn: "重新审视你的立场和策略，不是所有战斗都必须独自承担。适时寻求支援和合作，而非孤军奋战。恢复体力和信心后再重新面对挑战。学会分辨哪些战斗值得坚持，哪些需要适时退让。记住暂时的撤退是为了更好的反击。"
    }
  },
  {
    id: 43,
    name: "Eight of Wands",
    nameCn: "权杖八",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Swiftness", "Speed", "Progress", "Quick decisions", "Travel", "Freedom"],
      keywordsCn: ["速度与激情", "自由流动", "迅速发展", "海外旅行", "新事物到来", "好消息", "财务全盛", "无拘无束", "目标清晰"],
      meaning: "Swift action, rapid progress, and quick decisions. Things moving at high speed.",
      meaningCn: "八根权杖整齐划一在空中航行，如飞机般快速飞行。象征速度与激情、自由流动的力量。事情发展快得出乎意料，拖延已久的事务将在短时间内得到结果。权杖顶端向下即将抵达地面，预示新事物即将到来。笼罩在自由且兴奋的氛围中，代表海外旅行、好消息和财务全盛时期。",
      advice: "Act quickly on opportunities and maintain momentum in your projects.",
      adviceCn: "拥抱这个速度与激情的时刻！新事物正快速向你靠近，可能是热情的恋爱对象、新工作机会或灵感突现。目标清晰可见且正轻松迈进，过去的努力现在开始收获。这是享受自由流动能量的全盛时期，海外旅行或跨越性计划都会顺利进行。保持积极乐观，好消息即将到来。"
    },
    reversed: {
      keywords: ["Delays", "Frustration", "Resisting change", "Blocked communication"],
      keywordsCn: ["延迟受阻", "坏消息", "失去自由", "旅行受阻", "缺乏进展", "沟通不畅", "错失机会"],
      meaning: "Delays, frustration with slow progress, or resisting necessary changes.",
      meaningCn: "权杖飞行受阻，自由流动的能量被限制。原本快速的进展变得缓慢，海外旅行或跨越性计划可能延迟或取消。好消息变成坏消息，财务全盛期暂时搁浅。可能错失重要机会，或在关键时刻犹豫不决。沟通不畅，原本的热情和激情被现实束缚。",
      advice: "Be patient with delays and don't resist beneficial changes to your plans.",
      adviceCn: "接受当前的延迟和限制，这是暂时的。不要因为进展缓慢而失去信心，重新评估你的计划和时机。有时放慢脚步能帮你看清真正重要的目标。避免在不合适的时机强行推进，耐心等待更好的机会。保持沟通畅通，不要让挫折影响人际关系。"
    }
  },
  {
    id: 44,
    name: "Nine of Wands",
    nameCn: "权杖九",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Resilience", "Courage", "Persistence", "Last stand", "Defense", "Vigilance"],
      keywordsCn: ["换位思考", "重新评估", "防御备战", "警觉坚毅", "从挫败中学习", "最后一搏", "谨慎承诺", "回顾过去"],
      meaning: "Resilience and courage in the face of adversity. Persistence despite challenges.",
      meaningCn: "壮汉靠着长杖等待，头部绷带显示过去战役受伤却仍不畏惧。身后八根权杖如栅栏防护，他站在缺口前补齐防线。这是换位思考、重新评估目前承诺的时机。从过去挫败中汲取经验，警觉备战面对未来挑战。不再盲目冲撞，而是小心翼翼、战战兢兢地坚持到底。",
      advice: "You're closer to success than you think. Don't give up now.",
      adviceCn: "现在是重新评估和审视过去的关键时刻！从之前的挫败中学习宝贵经验，不要重蹈覆辙。保持警觉备战状态，小心翼翼切勿托大。机会是给准备好的人，坚持信念但要谨慎行事。重新聚焦于真正重要的承诺和目标，抛弃那些不完全的计划。你比想象中更接近成功。"
    },
    reversed: {
      keywords: ["Inner resources", "Struggle", "Paranoia", "Over-defensive", "Inner conflict"],
      keywordsCn: ["内在冲突", "过度防御", "疑神疑鬼", "寻求冲突", "无法和解", "被过去伤害", "难以承诺"],
      meaning: "Drawing on inner resources, struggling with paranoia, or feeling defensive.",
      meaningCn: "内在冲突模式，寻求外在敌人来满足对刺激的渴求。过度防御心态，无法看出冲突来源是内在的。被过去伤害影响，在关系中过于谨慎，无法真诚地定下承诺。可能将自己不受欢迎的部分投射到他人身上，形成恶性循环。",
      advice: "Trust in your inner strength and don't let paranoia cloud your judgment.",
      adviceCn: "停止寻找外在敌人，真正的冲突来源在内心。不要让过去的伤害影响现在的判断和承诺。学会与问题的根本原因和解，而非持续战斗。在关系中要检视过去，衡量对目前的真正承诺。过度防御只会让你更加孤立，尝试放下戒心。"
    }
  },
  {
    id: 45,
    name: "Ten of Wands",
    nameCn: "权杖十",
    suit: "wands",
    suitCn: "权杖",
    upright: {
      keywords: ["Burden", "Hard work", "Responsibility", "Burn out"],
      keywordsCn: ["压力重重", "负担过重", "责任", "不敢说不", "事必躬亲", "辛苦努力", "抛开重负", "委托他人"],
      meaning: "Heavy burdens and responsibilities. Hard work that may lead to burnout.",
      meaningCn: "男人奋力扛着十根沉重权杖朝远方房子前进，被重量压得低头弯腰、喘不过气，疲累万分却不愿放弃。象征压力重重、负担过重，因不敢说'不'、计划不周、同时做太多事而导致的困境。虽然怀有信念与责任感，想一个人负起所有责任，却忘记自己只是凡人。预示努力后可能获得的成功，但过程异常辛苦。",
      advice: "Delegate responsibilities and don't take on more than you can handle.",
      adviceCn: "是时候抛开重负，轻身上路了！学会说'不'的艺术，不要把所有责任都往自己身上揽。多做规划，懂得委托他人分担工作，相信别人也能完成任务。你不是超人，不必事必躬亲。适当放手不是放弃，而是为了更高效地达成目标。压力来自于你的选择，改变选择就能减轻负担。"
    },
    reversed: {
      keywords: ["Doing it all", "Carrying the burden", "Delegation"],
      keywordsCn: ["过度承担", "拒绝放手", "控制欲强", "不信任他人", "身心疲惫", "学会放手"],
      meaning: "Trying to do everything yourself or learning to delegate and share responsibilities.",
      meaningCn: "极端的事必躬亲，完全不愿将控制权交出，认为'想妥善完成就要自己做'。过度承担不属于自己责任范围的事物，身心疲惫却仍拒绝放手。可能表示正在学习委托责任，或者意识到需要改变这种'超人'心态。也可能代表在关系中想独自承担所有责任的不健康模式。",
      advice: "Learn to delegate and share the load. You don't have to do everything alone.",
      adviceCn: "学会真正地放手和信任他人。你无法控制一切，也不应该为所有事情负责。在关系中，要认识到这是两个人的事，不能全部归咎于自己。建立健康的界限，区分哪些是你的责任，哪些不是。有时快刀斩乱麻比苦苦维持更明智。"
    }
  },
  {
    id: 46,
    name: "Page of Wands",
    suit: "wands",
    upright: {
      keywords: ["Enthusiasm", "Exploration", "Discovery", "Free spirit"],
      meaning: "Enthusiasm for new adventures and discoveries. A free spirit exploring possibilities.",
      advice: "Embrace your enthusiasm and explore new opportunities with an open mind."
    },
    reversed: {
      keywords: ["Lack of direction", "Procrastination", "Lack of commitment"],
      meaning: "Lack of direction, procrastination, or inability to commit to plans and projects.",
      advice: "Find your direction and make commitments to follow through on your ideas."
    }
  },
  {
    id: 47,
    name: "Knight of Wands",
    suit: "wands",
    upright: {
      keywords: ["Impulsive", "Adventure-seeking", "Energy", "Fearless"],
      meaning: "Impulsive action, adventure-seeking, and fearless pursuit of goals. High energy and passion.",
      advice: "Channel your energy constructively and think before acting impulsively."
    },
    reversed: {
      keywords: ["Impatience", "Recklessness", "Lack of self-control"],
      meaning: "Impatience, recklessness, and lack of self-control leading to poor decisions.",
      advice: "Practice patience and self-control. Think through consequences before acting."
    }
  },
  {
    id: 48,
    name: "Queen of Wands",
    suit: "wands",
    upright: {
      keywords: ["Courage", "Confidence", "Independence", "Social butterfly"],
      meaning: "Confidence, independence, and social leadership. Courageous and charismatic energy.",
      advice: "Lead with confidence and use your charisma to inspire others."
    },
    reversed: {
      keywords: ["Selfishness", "Jealousy", "Insecurity", "Temperamental"],
      meaning: "Selfishness, jealousy, insecurity, or temperamental behavior affecting relationships.",
      advice: "Work on insecurities and avoid letting jealousy or selfishness damage relationships."
    }
  },
  {
    id: 49,
    name: "King of Wands",
    suit: "wands",
    upright: {
      keywords: ["Leadership", "Vision", "Honour", "Example"],
      meaning: "Strong leadership, clear vision, and leading by example. Natural entrepreneur and leader.",
      advice: "Take charge with integrity and inspire others through your vision and actions."
    },
    reversed: {
      keywords: ["Impulsiveness", "Haste", "Ruthless", "High expectations"],
      meaning: "Impulsiveness, haste, ruthless behavior, or setting unrealistically high expectations.",
      advice: "Balance ambition with consideration for others. Don't let haste lead to poor decisions."
    }
  },

  // Swords Suit (14 cards)
  {
    id: 50,
    name: "Ace of Swords",
    nameCn: "宝剑王牌",
    suit: "swords",
    suitCn: "宝剑",
    upright: {
      keywords: ["Breakthrough", "New ideas", "Mental clarity", "Success", "Planning", "Justice"],
      keywordsCn: ["毅然决然行动", "新冒险计划", "理智中立", "心智力量", "通彻思想", "理解之剑", "刺透假象", "决心", "正义", "知识"],
      meaning: "Mental breakthrough, new ideas, and clarity of thought. Success through intellectual pursuits.",
      meaningCn: "从云中伸出的手握着蓝色宝剑，剑尖刺穿皇冠，象征心智可以看透物质世界。这是理解之剑，刺透现实假象，展现生命的二元性。代表毅然决然的行动，开始计划新的冒险。意念形成的开端，为未来行动做准备的计划。双刃宝剑显示可伤人亦可救人，可建设亦可毁灭的力量。",
      advice: "Use your mental clarity to cut through confusion and pursue new intellectual challenges.",
      adviceCn: "现在是毅然决然行动的时机！用你清晰的思考来规划新的冒险和挑战。剑已出鞘，意念已形成，是时候将计划付诸实行。保持理智中立的力量，通过周详的计划获得成功。记住这把双刃剑的责任，要有面对艰难挑战的勇气和心理准备。你的心智力量可以刺透假象，看到事件的真相。"
    },
    reversed: {
      keywords: ["Confusion", "Brutal thoughts", "Chaos", "Extremism", "Misuse of power"],
      keywordsCn: ["思维混乱", "残酷想法", "混沌", "极端主义", "滥用权力", "忘记中庸", "偏离正道", "破坏性思考"],
      meaning: "Mental confusion, harsh or brutal thoughts, and chaotic thinking patterns.",
      meaningCn: "剑尖偏离正道，失去理智的中立力量。思维混乱，想法极端，忘记了中庸之道。可能表示滥用心智力量，用残酷想法伤害他人或自己。原本的理解之剑变成了破坏之刃，计划失控，新冒险变成鲁莽行动。双刃剑的负面力量占据上风，带来伤害而非治愈。",
      advice: "Clear your mind and avoid harsh or destructive thinking patterns.",
      adviceCn: "暂停你的行动，重新找回理智和平衡。避免极端和残酷的想法，回归中庸之道。不要让愤怒或偏见蒙蔽你的判断力。重新审视你的计划，确保它们是建设性的而非破坏性的。真正的智慧是知道何时使用力量，何时保持克制。寻求专业建议或权威指导来澄清混乱的思维。"
    }
  },
  {
    id: 51,
    name: "Two of Swords",
    nameCn: "宝剑二",
    suit: "swords",
    suitCn: "宝剑",
    upright: {
      keywords: ["Difficult decisions", "Weighing options", "Indecision", "Stalemate"],
      keywordsCn: ["艰难决断", "逃避现实", "内心矛盾", "冷战对峙", "自我封闭", "蒙蔽双眼", "感情退缩", "恐怖平衡", "防卫心态", "僵持不下"],
      meaning: "Difficult decisions, weighing options carefully, indecision, or being in a stalemate situation.",
      meaningCn: "身穿浅灰长袍的女人蒙眼而坐，双手持剑交叉胸前，背对汹涌海面。两把宝剑代表两种选择，她在保护自己远离痛苦感情。眼罩是自己绑上的，代表主动选择逃避现实。水面象征感情，她不仅背对感情还蒙蔽双眼，表现全然的逃避与困惑。这是二选一的抉择，却做不出决定甚至拒绝下决定。双剑交叉形成抗拒姿态，封闭的心灵宁愿否定一切也不愿打开内心。代表双方闹僵、对峙冷战的恐怖平衡与假性和平。",
      advice: "Gather all information before making decisions. Sometimes inaction is temporary wisdom.",
      adviceCn: "做出一个决断，无论对与错，不要试图逃避！摘掉眼罩，亲自去看清楚真相。诚实面对自己的内心情感，无论是什么要接受莫逃避，且放松勿抗拒。把蒙眼布取走，将宝剑放下，事情其实没有那么艰难。结合思考和感情做决定会更有效用。长期的紧张抗拒只会影响健康，真正的智慧是勇敢面对而非逃避现实。"
    },
    reversed: {
      keywords: ["Indecision", "Confusion", "Information overload"],
      keywordsCn: ["混乱思维", "错误决定", "情绪失控", "极端选择", "盲目行动", "草率判断", "偏执对立", "无法冷静"],
      meaning: "Continued indecision, confusion, or feeling overwhelmed by too much information.",
      meaningCn: "摘掉眼罩后却看到更加混乱的现实，或者做出了草率错误的决定。可能表示情绪失控，无法保持理智中立的判断。原本的防卫变成了攻击，冷静的思考变成了偏执的对立。不是逃避现实就是走向另一个极端，做出鲁莽或伤害性的选择。失去了宝剑二原有的平衡与冷静，陷入情绪化的混乱决策中。",
      advice: "Trust your instincts and make a decision even with incomplete information.",
      adviceCn: "重新找回内心的平衡与冷静。不要让情绪主导你的判断，也不要因为之前的逃避而走向另一个极端。真正的勇气是在看清现实后仍能保持理智。暂停冲动的行动，给自己时间重新审视选择。寻求专业建议或可信任的人的意见来帮助澄清思路。记住平衡的重要性，避免从一个极端跳到另一个极端。"
    }
  },
  {
    id: 52,
    name: "Three of Swords",
    suit: "swords",
    upright: {
      keywords: ["Heartbreak", "Emotional pain", "Sorrow", "Grief"],
      meaning: "Heartbreak, emotional pain, sorrow, and grief. A period of necessary emotional healing.",
      advice: "Allow yourself to grieve and process emotional pain. Healing takes time."
    },
    reversed: {
      keywords: ["Recovery", "Forgiveness", "Releasing pain"],
      meaning: "Recovery from heartbreak, forgiveness, and releasing emotional pain. Beginning to heal.",
      advice: "Continue your healing process and practice forgiveness for yourself and others."
    }
  },
  {
    id: 53,
    name: "Four of Swords",
    suit: "swords",
    upright: {
      keywords: ["Rest", "Relaxation", "Meditation", "Recuperation"],
      meaning: "Need for rest, relaxation, meditation, and recuperation. Taking a break from mental stress.",
      advice: "Take time to rest and recharge. Meditation and quiet reflection will restore your energy."
    },
    reversed: {
      keywords: ["Restlessness", "Burn out", "Lack of progress"],
      meaning: "Restlessness, burnout, or feeling frustrated with lack of progress during rest periods.",
      advice: "True rest requires letting go of the need to be productive. Allow yourself genuine downtime."
    }
  },
  {
    id: 54,
    name: "Five of Swords",
    suit: "swords",
    upright: {
      keywords: ["Conflict", "Dishonor", "Win at all costs", "Betrayal"],
      meaning: "Conflict with others, dishonorable victory, winning at all costs, or experiencing betrayal.",
      advice: "Consider whether winning is worth the cost to relationships and your integrity."
    },
    reversed: {
      keywords: ["Reconciliation", "Making amends", "Past resentment"],
      meaning: "Reconciliation after conflict, making amends, or releasing past resentments.",
      advice: "Work toward reconciliation and let go of resentments that no longer serve you."
    }
  },
  {
    id: 55,
    name: "Six of Swords",
    suit: "swords",
    upright: {
      keywords: ["Transition", "Change", "Rite of passage", "Release"],
      meaning: "Peaceful transition, positive change, rite of passage, and release from difficult situations.",
      advice: "Trust in the transition process. You're moving toward calmer waters."
    },
    reversed: {
      keywords: ["Personal transition", "Resistance to change", "Unfinished business"],
      meaning: "Internal transition, resistance to necessary change, or unfinished business holding you back.",
      advice: "Address unfinished business and don't resist necessary changes in your life."
    }
  },
  {
    id: 56,
    name: "Seven of Swords",
    suit: "swords",
    upright: {
      keywords: ["Deception", "Getting away with something", "Acting strategically"],
      meaning: "Deception, theft, getting away with something, or acting strategically and independently.",
      advice: "Be honest in your dealings and consider whether your strategies align with your values."
    },
    reversed: {
      keywords: ["Imposter syndrome", "Self-deceit", "Getting caught"],
      meaning: "Imposter syndrome, self-deception, or consequences catching up with past actions.",
      advice: "Address imposter syndrome and be honest with yourself about your capabilities."
    }
  },
  {
    id: 57,
    name: "Eight of Swords",
    suit: "swords",
    upright: {
      keywords: ["Imprisonment", "Entrapment", "Self-imposed restriction"],
      meaning: "Feeling imprisoned or trapped, often by self-imposed restrictions and limiting beliefs.",
      advice: "Examine what mental barriers are holding you back. Many limitations are self-imposed."
    },
    reversed: {
      keywords: ["Self-limiting beliefs", "Inner critic", "Releasing bonds"],
      meaning: "Recognizing self-limiting beliefs, dealing with inner critic, or beginning to release mental bonds.",
      advice: "Challenge your limiting beliefs and silence your harsh inner critic."
    }
  },
  {
    id: 58,
    name: "Nine of Swords",
    suit: "swords",
    upright: {
      keywords: ["Anxiety", "Worry", "Fear", "Nightmares"],
      meaning: "Anxiety, excessive worry, fear, and mental anguish. Nightmares and insomnia from stress.",
      advice: "Address the root causes of your anxiety. Seek support and don't suffer in silence."
    },
    reversed: {
      keywords: ["Inner turmoil", "Deep-seated fears", "Seeking help"],
      meaning: "Deep inner turmoil, confronting deep-seated fears, or finally seeking help for mental distress.",
      advice: "Don't be afraid to seek professional help. You don't have to face your fears alone."
    }
  },
  {
    id: 59,
    name: "Ten of Swords",
    suit: "swords",
    upright: {
      keywords: ["Painful endings", "Deep wounds", "Betrayal", "Crisis"],
      meaning: "Painful endings, deep emotional wounds, betrayal, and reaching rock bottom. A crisis point.",
      advice: "This is the darkest hour before dawn. Acknowledge your pain but know that recovery will come."
    },
    reversed: {
      keywords: ["Recovery", "Learning from past", "Worst is behind"],
      meaning: "Beginning recovery, learning from past pain, and recognizing the worst is behind you.",
      advice: "Focus on recovery and learning from this experience. The worst is truly behind you."
    }
  },
  {
    id: 60,
    name: "Page of Swords",
    suit: "swords",
    upright: {
      keywords: ["Curiosity", "Thirst for knowledge", "New ideas", "Vigilance"],
      meaning: "Intellectual curiosity, thirst for knowledge, new ideas, and mental vigilance.",
      advice: "Stay curious and open to new ideas. Use your mental agility to learn and grow."
    },
    reversed: {
      keywords: ["Self-expression", "All talk, no action", "Haste"],
      meaning: "Struggling with self-expression, being all talk with no action, or acting with excessive haste.",
      advice: "Balance thinking with action. Don't let analysis paralysis prevent you from moving forward."
    }
  },
  {
    id: 61,
    name: "Knight of Swords",
    suit: "swords",
    upright: {
      keywords: ["Ambitious", "Action-oriented", "Driven to succeed", "Fast-thinking"],
      meaning: "Ambitious and action-oriented approach. Driven to succeed with fast thinking and direct action.",
      advice: "Channel your ambition constructively and avoid becoming too aggressive in your approach."
    },
    reversed: {
      keywords: ["Aggressive", "Impulsive", "Lack of forethought"],
      meaning: "Overly aggressive behavior, impulsiveness, and lack of forethought leading to problems.",
      advice: "Think before you act and consider the impact of your words and actions on others."
    }
  },
  {
    id: 62,
    name: "Queen of Swords",
    nameCn: "宝剑皇后",
    suit: "swords",
    suitCn: "宝剑",
    upright: {
      keywords: ["Independence", "Unbiased judgement", "Clear boundaries"],
      keywordsCn: ["淡定冷静", "深思熟虑", "理智冷静", "独立自主", "洞察力强", "公正无私", "思路敏捷", "冰山美人", "为情所伤", "谨慎理性"],
      meaning: "Independent thinking, unbiased judgment, and clear communication with firm boundaries.",
      meaningCn: "戴着蝴蝶花纹王冠象征灵魂和风要素，穿灰色内袍和蓝天灰云披风，表情坚毅似乎皱眉，左手对世界敞开，右手高举宝剑剑尖笔直向上。宝座扶手下有人头花纹象征风之精灵，头顶有高飞的鸟象征智慧。这是四位皇后中最理智冷静的一位，同时展现智慧与悲伤主题。她是公正无私的铁娘子，眼光锐利思想机智，不轻易流露情感但内心绝对刚强坚守原则。她历经风霜为情所伤，宁可洁身自好也不愿被繁杂事情束缚，感情上宁缺勿滥。",
      advice: "Trust your judgment and communicate clearly. Maintain healthy boundaries with others.",
      adviceCn: "淡定冷静，经过深思熟虑所得到的成就！保持理智不要过于情绪化，用你的洞察力看清真相破除迷惑。发挥你的组织能力和沟通技巧，在复杂情况中提供无与伦比的洞见。坚持独立自主的价值观，不要盲目跟随俗流。学会从过去的痛苦经验中获得智慧，给予他人明智的忠告。保持谨慎但不要过于冷漠，真正的力量来自内在的坚强和原则。"
    },
    reversed: {
      keywords: ["Overly emotional", "Harsh", "Bitter"],
      keywordsCn: ["过于冷漠", "严厉苛刻", "孤独封闭", "缺乏温情", "过于理性", "情感创伤", "拒人千里", "完美主义", "批判过度", "难以亲近"],
      meaning: "Being overly emotional in decision-making, harsh in communication, or bitter from past hurts.",
      meaningCn: "过于理智冷静而缺乏人情味，表现得过于严厉苛刻令人难以亲近。可能因为过去的情感创伤而变得过度防备，拒人千里之外。原本的独立自主变成孤独封闭，冷静分析变成冷酷无情。完美主义倾向导致对他人要求过高，批判过度。智慧变成了武器而非帮助，坚持原则变成顽固不化。失去了温暖的人性面向，只剩下冰冷的理性判断。",
      advice: "Balance emotion with logic and avoid letting past hurts make you bitter or harsh.",
      adviceCn: "重新找回内心的温暖，不要让理性完全主导你的人生。学会适度表达情感，给他人更多温暖而非只是冷静的分析。放下过去的情感创伤，不要让痛苦经历变成拒绝他人的藉口。降低完美主义标准，用更多同理心来理解他人的不完美。真正的智慧是知道何时保持理性，何时展现温情。让你的洞察力成为帮助而非判断的工具。"
    }
  },
  {
    id: 63,
    name: "King of Swords",
    nameCn: "宝剑国王",
    suit: "swords",
    suitCn: "宝剑",
    upright: {
      keywords: ["Intellectual power", "Clear thinking", "Authority", "Truth"],
      keywordsCn: ["理性果断", "智慧权威", "将梦想化为现实", "明智决策", "专业权威", "客观理性", "坚定信念", "思路敏捷", "道德标准", "冷静分析"],
      meaning: "Intellectual power, clear thinking, moral authority, and commitment to truth and justice.",
      meaningCn: "四张国王牌中唯一正面出现的，穿蓝色内袍和红色披风，象征智慧必须以行动表现。右手持剑，剑尖偏向行动那边，左手戴权力戒指。背后帷幕饰有蝴蝶花纹象征灵魂和风要素。天空中两只鸟代表智慧与行动的选择。这是理性果断、具有智慧学识的权威人物，客观理性、凡事讲求合理公正，具有坚定信念和完整思想体系。他是专业权威，擅长企划创造，适合法律政治工作。代表明师指点、决策命令，是让人信赖的顾问和专业人士。",
      advice: "Lead with wisdom and integrity. Use your intellectual gifts to serve justice and truth.",
      adviceCn: "将梦想化为现实，用构想去做一些真实的事！运用你的智慧和专业能力成为权威指导者。保持客观理性的判断，以事实和原则为决策基础。发挥你的企划能力和清晰思维，在专业领域建立权威地位。当他人迷惘时，要能一语点醒梦中人。结合理性思考与实际行动，让知识在现实中发挥价值。做一个值得信赖的顾问，以明确的指引帮助他人解决问题。"
    },
    reversed: {
      keywords: ["Abuse of power", "Manipulative", "Tyrannical"],
      keywordsCn: ["滥用权威", "过于严厉", "情感疏离", "冷酷无情", "独断专行", "批判过度", "控制欲强", "缺乏同理心", "固执己见", "忽视情感"],
      meaning: "Abuse of intellectual power, manipulative behavior, or tyrannical use of authority.",
      meaningCn: "过于偏重理性思考而忽视情感需求，表现得过于冷漠疏离。可能滥用专业权威，变得独断专行或过度批判他人。原本的明智决策变成固执己见，坚持原则变成不知变通。控制欲和道德标准过高，缺乏同理心和情感支持。专业知识变成操控他人的工具，失去了服务正义的初衷。智慧权威变成冷酷的统治，忽视了人性的温暖面向。",
      advice: "Use your intelligence ethically and avoid manipulating others for personal gain.",
      adviceCn: "重新平衡理性与感性，不要让专业权威变成冷酷的工具。学会倾听他人的情感需求，提供温暖的支持而非只是冰冷的建议。降低批判标准，用更多同理心来理解他人。避免用智慧去控制或操控，真正的权威来自服务而非统治。在坚持原则的同时，也要保持灵活性和人性温暖。记住专业能力是为了帮助他人，而不是证明自己的优越。"
    }
  },

  // Pentacles Suit (14 cards)
  {
    id: 64,
    name: "Ace of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Manifestation", "New financial opportunity", "Abundance"],
      meaning: "New financial opportunity, material manifestation, and the beginning of prosperity and abundance.",
      advice: "Take advantage of new financial opportunities and work steadily toward material goals."
    },
    reversed: {
      keywords: ["Lost opportunity", "Lack of planning", "Bad investment"],
      meaning: "Lost opportunity, lack of planning and foresight, or bad investment decisions.",
      advice: "Learn from missed opportunities and improve your financial planning and decision-making."
    }
  },
  {
    id: 65,
    name: "Two of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Multiple priorities", "Time management", "Prioritisation", "Adaptability"],
      meaning: "Juggling multiple priorities, time management challenges, and need for adaptability.",
      advice: "Stay flexible and prioritize effectively. Don't take on more than you can handle well."
    },
    reversed: {
      keywords: ["Over-committed", "Disorganisation", "Reprioritising"],
      meaning: "Being over-committed, disorganized, or needing to reprioritize your responsibilities.",
      advice: "Simplify your commitments and get organized. Focus on what truly matters most."
    }
  },
  {
    id: 66,
    name: "Three of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Collaboration", "Teamwork", "Skill-building", "Implementation"],
      meaning: "Successful collaboration, effective teamwork, skill-building, and implementation of plans.",
      advice: "Work collaboratively and continue building your skills. Value others' contributions."
    },
    reversed: {
      keywords: ["Lack of teamwork", "Apathy", "Poor motivation"],
      meaning: "Lack of teamwork, apathy toward shared goals, or poor motivation in group settings.",
      advice: "Address teamwork issues and find ways to motivate yourself and others toward shared goals."
    }
  },
  {
    id: 67,
    name: "Four of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Saving money", "Security", "Conservatism", "Scarcity mindset"],
      meaning: "Saving money, seeking security, conservative approach, or scarcity mindset about resources.",
      advice: "Balance saving with reasonable spending. Don't let fear of scarcity control your decisions."
    },
    reversed: {
      keywords: ["Over-spending", "Greed", "Self-protection"],
      meaning: "Over-spending, greed, excessive self-protection, or being too controlling with resources.",
      advice: "Find balance between saving and spending. Don't let greed or fear dominate your financial decisions."
    }
  },
  {
    id: 68,
    name: "Five of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Financial loss", "Poverty", "Lack mindset", "Isolation"],
      meaning: "Financial hardship, poverty, lack mindset, and feeling isolated or unsupported.",
      advice: "Seek support and don't let pride prevent you from accepting help. This difficult time will pass."
    },
    reversed: {
      keywords: ["Recovery from loss", "Spiritual poverty", "Positive changes"],
      meaning: "Recovery from financial loss, spiritual poverty, or positive changes beginning to manifest.",
      advice: "Focus on recovery and positive changes. Address both material and spiritual needs."
    }
  },
  {
    id: 69,
    name: "Six of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Generosity", "Charity", "Sharing wealth", "Gratitude"],
      meaning: "Generosity, charity, sharing wealth, and gratitude. Balanced giving and receiving.",
      advice: "Practice generosity while maintaining healthy boundaries. Be grateful for what you have."
    },
    reversed: {
      keywords: ["Selfishness", "Unpaid debts", "One-sided charity"],
      meaning: "Selfishness, unpaid debts, or one-sided charity creating imbalanced relationships.",
      advice: "Address financial imbalances and avoid being either overly selfish or overly giving."
    }
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Long-term view", "Sustainable results", "Perseverance", "Investment"],
      meaning: "Taking a long-term view, working toward sustainable results, perseverance, and wise investment.",
      advice: "Be patient with long-term investments and continue working steadily toward your goals."
    },
    reversed: {
      keywords: ["Lack of long-term vision", "Limited success", "Impatience"],
      meaning: "Lack of long-term vision, limited success, or impatience with slow progress.",
      advice: "Develop a long-term vision and be patient with slow but steady progress."
    }
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Apprenticeship", "Repetitive tasks", "Skill development", "Quality"],
      meaning: "Learning through apprenticeship, repetitive tasks, skill development, and commitment to quality.",
      advice: "Continue developing your skills through practice and attention to detail."
    },
    reversed: {
      keywords: ["Lack of focus", "Perfectionism", "Mediocrity"],
      meaning: "Lack of focus, destructive perfectionism, or settling for mediocrity in your work.",
      advice: "Find balance between perfectionism and practical progress. Stay focused on quality improvement."
    }
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Fruits of labor", "Rewards", "Luxury", "Self-reliance"],
      meaning: "Enjoying the fruits of your labor, well-deserved rewards, luxury, and financial independence.",
      advice: "Enjoy your achievements and the independence you've earned through hard work."
    },
    reversed: {
      keywords: ["Self-worth", "Over-investment in work", "Hustling"],
      meaning: "Issues with self-worth, over-investment in work at expense of life, or constant hustling.",
      advice: "Don't tie your self-worth solely to achievements. Find balance between work and life."
    }
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Wealth", "Financial security", "Family", "Legacy"],
      meaning: "Long-term wealth, financial security, family prosperity, and creating a lasting legacy.",
      advice: "Focus on building lasting wealth and security for yourself and future generations."
    },
    reversed: {
      keywords: ["Financial failure", "Lack of planning", "Family disputes"],
      meaning: "Financial failure, lack of long-term planning, or family disputes over money and inheritance.",
      advice: "Address financial planning issues and resolve family conflicts constructively."
    }
  },
  {
    id: 74,
    name: "Page of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Learning", "Studying", "Apprenticeship", "New opportunities"],
      meaning: "Learning new skills, studying, apprenticeship opportunities, and manifestation of new opportunities.",
      advice: "Stay curious and committed to learning. New opportunities are manifesting."
    },
    reversed: {
      keywords: ["Lack of progress", "Procrastination", "Lack of goals"],
      meaning: "Lack of progress, procrastination, or unclear goals affecting your advancement.",
      advice: "Set clear goals and take consistent action. Overcome procrastination through small steps."
    }
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Hard work", "Productivity", "Routine", "Conservatism"],
      meaning: "Dedication to hard work, productivity, following routine, and conservative approach to goals.",
      advice: "Continue working steadily toward your goals. Consistency and reliability will pay off."
    },
    reversed: {
      keywords: ["Self-discipline", "Boredom", "Feeling 'stuck'"],
      meaning: "Issues with self-discipline, boredom with routine, or feeling stuck in current situation.",
      advice: "Improve self-discipline and find ways to add variety to productive routines."
    }
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Nurturing", "Practical", "Providing financially", "Working parent"],
      meaning: "Nurturing provider, practical approach to care, financial provision, and balancing work with family.",
      advice: "Balance nurturing others with practical needs. Take care of both emotional and material well-being."
    },
    reversed: {
      keywords: ["Financial dependency", "Jealousy", "Insecurity"],
      meaning: "Financial dependency, jealousy of others' success, or insecurity about providing for others.",
      advice: "Work toward financial independence and address insecurities constructively."
    }
  },
  {
    id: 77,
    name: "King of Pentacles",
    suit: "pentacles",
    upright: {
      keywords: ["Financial success", "Security", "Discipline", "Abundance"],
      meaning: "Financial success, security, discipline, and abundance achieved through steady effort and wise decisions.",
      advice: "Continue building wealth through discipline and wise investments. Share your abundance generously."
    },
    reversed: {
      keywords: ["Financially inept", "Obsessed with wealth", "Stubborn"],
      meaning: "Financial ineptness, unhealthy obsession with wealth, or stubborn resistance to change.",
      advice: "Address financial skills gaps and don't let wealth become an unhealthy obsession."
    }
  }
];

export const cardSpreads = {
  daily: {
    name: "Daily Draw",
    description: "Single card for daily guidance",
    positions: ["Today's Energy"]
  },
  threeCard: {
    name: "Past, Present, Future",
    description: "Three-card spread for timeline insight",
    positions: ["Past", "Present", "Future"]
  },
  celtic: {
    name: "Celtic Cross",
    description: "Comprehensive 10-card spread",
    positions: [
      "Present Situation",
      "Challenge",
      "Distant Past",
      "Recent Past",
      "Possible Future",
      "Near Future",
      "Your Approach",
      "External Influences",
      "Inner Guidance",
      "Final Outcome"
    ]
  }
};