export interface TarotCard {
  id: number;
  name: string;
  nameCn?: string;
  suit: 'major' | 'cups' | 'wands' | 'swords' | 'pentacles';
  suitCn?: string;
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
    upright: {
      keywords: ["New beginnings", "Innocence", "Spontaneity", "Adventure"],
      keywordsCn: ["新开始", "纯真", "自发性", "冒险"],
      meaning: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
      meaningCn: "愚者代表新的开始，对未来抱有信心，缺乏经验，不知道该期待什么，拥有新手运气，即兴发挥和相信宇宙。",
      advice: "Trust in yourself and embrace new opportunities. Take calculated risks and remain open to possibilities.",
      adviceCn: "相信自己，拥抱新的机会。承担经过计算的风险，对各种可能性保持开放。"
    },
    reversed: {
      keywords: ["Recklessness", "Risk-taking", "Foolishness", "Lack of direction"],
      keywordsCn: ["鲁莽", "冒险", "愚蠢", "缺乏方向"],
      meaning: "The reversed Fool suggests recklessness, risk-taking without thought, foolishness, and a lack of direction or purpose.",
      meaningCn: "逆位的愚者暗示鲁莽、不假思索的冒险、愚蠢和缺乏方向或目标。",
      advice: "Think before you act. Consider the consequences of your decisions and seek guidance if needed.",
      adviceCn: "行动前要三思。考虑你决定的后果，必要时寻求指导。"
    }
  },
  {
    id: 1,
    name: "The Magician",
    nameCn: "魔术师",
    suit: "major",
    suitCn: "大奥秘",
    upright: {
      keywords: ["Manifestation", "Willpower", "Creation", "Skill"],
      keywordsCn: ["显化", "意志力", "创造", "技能"],
      meaning: "The Magician represents manifestation, resourcefulness, power, and inspired action. You have the tools to achieve your goals.",
      meaningCn: "魔术师代表显化、机智、力量和受启发的行动。你拥有实现目标所需的工具。",
      advice: "Focus your energy and use your skills to manifest your desires. You have everything you need to succeed.",
      adviceCn: "集中你的能量，运用技能来显化你的愿望。你拥有成功所需的一切。"
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
    suit: "major",
    upright: {
      keywords: ["Justice", "Fairness", "Truth", "Cause and effect", "Law"],
      meaning: "Justice represents justice, fairness, truth, cause and effect, and law. Decisions will be made fairly and with integrity.",
      advice: "Seek truth and act with integrity. Fair judgment will be rendered in your situation."
    },
    reversed: {
      keywords: ["Unfairness", "Lack of accountability", "Dishonesty"],
      meaning: "The reversed Justice suggests unfairness, lack of accountability, and dishonesty in dealings.",
      advice: "Take responsibility for your actions. Seek to make amends if you have acted unfairly."
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    suit: "major",
    upright: {
      keywords: ["Waiting", "Surrender", "Letting go", "New perspective"],
      meaning: "The Hanged Man represents waiting, surrender, letting go, and gaining new perspective through stillness.",
      advice: "Sometimes inaction is the best action. Let go of control and trust the process."
    },
    reversed: {
      keywords: ["Delays", "Resistance", "Stalling", "Indecision"],
      meaning: "The reversed Hanged Man suggests delays, resistance to change, stalling, and indecision.",
      advice: "Stop resisting necessary changes. Move forward even if the path isn't completely clear."
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
    suit: "major",
    upright: {
      keywords: ["Balance", "Moderation", "Patience", "Purpose", "Meaning"],
      meaning: "Temperance represents balance, moderation, patience, purpose, and meaning. Finding the middle path brings harmony.",
      advice: "Seek balance and moderation in all things. Patience will help you achieve your long-term goals."
    },
    reversed: {
      keywords: ["Imbalance", "Excess", "Self-healing", "Re-alignment"],
      meaning: "The reversed Temperance suggests imbalance, excess, and the need for self-healing and re-alignment.",
      advice: "Address areas of imbalance in your life. Practice moderation and self-care."
    }
  },
  {
    id: 15,
    name: "The Devil",
    suit: "major",
    upright: {
      keywords: ["Bondage", "Addiction", "Sexuality", "Materialism"],
      meaning: "The Devil represents bondage, addiction, sexuality, and materialism. Being trapped by material desires or unhealthy patterns.",
      advice: "Examine what may be controlling you. Break free from limiting beliefs and unhealthy attachments."
    },
    reversed: {
      keywords: ["Freedom", "Release", "Reclaiming power", "Independence"],
      meaning: "The reversed Devil suggests freedom, release, reclaiming personal power, and independence from constraining forces.",
      advice: "You're breaking free from limitations. Continue to reclaim your personal power and independence."
    }
  },
  {
    id: 16,
    name: "The Tower",
    suit: "major",
    upright: {
      keywords: ["Sudden change", "Upheaval", "Chaos", "Revelation", "Awakening"],
      meaning: "The Tower represents sudden change, upheaval, chaos, revelation, and awakening. Dramatic change that clears the way for something new.",
      advice: "Accept that some structures in your life need to fall. This upheaval will ultimately lead to positive change."
    },
    reversed: {
      keywords: ["Personal transformation", "Fear of change", "Avoiding disaster"],
      meaning: "The reversed Tower suggests personal transformation, fear of change, and potentially avoiding disaster through awareness.",
      advice: "Don't resist necessary personal transformation. Face your fears about change."
    }
  },
  {
    id: 17,
    name: "The Star",
    suit: "major",
    upright: {
      keywords: ["Hope", "Faith", "Purpose", "Renewal", "Spirituality"],
      meaning: "The Star represents hope, faith, purpose, renewal, and spirituality. A time of healing and renewed faith in the future.",
      advice: "Keep faith in your dreams and aspirations. Healing and renewal are coming into your life."
    },
    reversed: {
      keywords: ["Lack of faith", "Despair", "Self-trust", "Disconnection"],
      meaning: "The reversed Star suggests lack of faith, despair, loss of self-trust, and feeling disconnected from purpose.",
      advice: "Reconnect with your inner guidance and renew your faith. Trust that better times are ahead."
    }
  },
  {
    id: 18,
    name: "The Moon",
    suit: "major",
    upright: {
      keywords: ["Illusion", "Fear", "Anxiety", "Subconscious", "Intuition"],
      meaning: "The Moon represents illusion, fear, anxiety, subconscious influences, and trusting intuition over logic.",
      advice: "Trust your intuition but be aware of illusions. Face your fears and anxieties with courage."
    },
    reversed: {
      keywords: ["Release of fear", "Repressed emotion", "Inner confusion"],
      meaning: "The reversed Moon suggests release of fear, repressed emotions surfacing, and inner confusion being resolved.",
      advice: "Work through repressed emotions and fears. Clarity will come as you face your shadow self."
    }
  },
  {
    id: 19,
    name: "The Sun",
    suit: "major",
    upright: {
      keywords: ["Positivity", "Fun", "Warmth", "Success", "Vitality", "Joy"],
      meaning: "The Sun represents positivity, fun, warmth, success, vitality, and joy. A time of happiness and achievement.",
      advice: "Embrace joy and celebrate your successes. Share your positive energy with others."
    },
    reversed: {
      keywords: ["Inner child", "Feeling down", "Overly optimistic"],
      meaning: "The reversed Sun suggests connecting with your inner child, feeling down temporarily, or being overly optimistic.",
      advice: "Reconnect with simple pleasures and your playful nature. Balance optimism with realism."
    }
  },
  {
    id: 20,
    name: "Judgement",
    suit: "major",
    upright: {
      keywords: ["Judgement", "Rebirth", "Inner calling", "Forgiveness"],
      meaning: "Judgement represents judgement, rebirth, inner calling, and forgiveness. A time of spiritual awakening and second chances.",
      advice: "Listen to your inner calling and embrace your higher purpose. Forgive yourself and others."
    },
    reversed: {
      keywords: ["Self-doubt", "Inner critic", "Ignoring the call"],
      meaning: "The reversed Judgement suggests self-doubt, harsh inner critic, and ignoring your inner calling or higher purpose.",
      advice: "Silence your inner critic and trust your inner wisdom. Don't ignore your calling to something greater."
    }
  },
  {
    id: 21,
    name: "The World",
    suit: "major",
    upright: {
      keywords: ["Completion", "Integration", "Accomplishment", "Travel"],
      meaning: "The World represents completion, integration, accomplishment, and travel. The successful end of the Fool's journey.",
      advice: "Celebrate your achievements and prepare for new adventures. You have accomplished something significant."
    },
    reversed: {
      keywords: ["Incomplete", "Lack of closure", "Stagnation"],
      meaning: "The reversed World suggests something incomplete, lack of closure, and stagnation in progress.",
      advice: "Identify what needs to be completed before moving forward. Seek closure in unfinished matters."
    }
  },

  // Cups Suit (14 cards)
  {
    id: 22,
    name: "Ace of Cups",
    suit: "cups",
    upright: {
      keywords: ["Love", "New relationships", "Compassion", "Creativity"],
      meaning: "A new beginning in emotional matters. The start of love, friendship, or creative projects.",
      advice: "Open your heart to new emotional experiences and creative inspirations."
    },
    reversed: {
      keywords: ["Self-love", "Intuition", "Repressed emotions"],
      meaning: "Focus on self-love and emotional healing before engaging with others.",
      advice: "Practice self-compassion and work on healing emotional wounds."
    }
  },
  {
    id: 23,
    name: "Two of Cups",
    suit: "cups",
    upright: {
      keywords: ["Unified love", "Partnership", "Mutual attraction"],
      meaning: "A strong partnership or romantic connection based on mutual respect and understanding.",
      advice: "Nurture your important relationships and seek balance in partnerships."
    },
    reversed: {
      keywords: ["Breakup", "Imbalance", "Self-love"],
      meaning: "Relationship difficulties or the need to focus on self-love before partnering with others.",
      advice: "Address relationship imbalances or take time to work on yourself."
    }
  },
  {
    id: 24,
    name: "Three of Cups",
    suit: "cups",
    upright: {
      keywords: ["Celebration", "Friendship", "Community", "Collaboration"],
      meaning: "Celebration, friendship, and community support. A time of joy with others.",
      advice: "Celebrate your achievements with friends and embrace community support."
    },
    reversed: {
      keywords: ["Independence", "Alone time", "Cancelled plans"],
      meaning: "Need for independence, spending time alone, or social plans being disrupted.",
      advice: "Take time for yourself when needed, but don't isolate completely."
    }
  },
  {
    id: 25,
    name: "Four of Cups",
    suit: "cups",
    upright: {
      keywords: ["Apathy", "Contemplation", "Disconnection", "Boredom"],
      meaning: "Feeling apathetic or disconnected. Missing opportunities due to lack of interest.",
      advice: "Open yourself to new opportunities and don't let boredom blind you to possibilities."
    },
    reversed: {
      keywords: ["Motivation", "New possibilities", "Acceptance"],
      meaning: "Renewed motivation and willingness to accept new opportunities or possibilities.",
      advice: "Embrace new opportunities with renewed enthusiasm and energy."
    }
  },
  {
    id: 26,
    name: "Five of Cups",
    suit: "cups",
    upright: {
      keywords: ["Regret", "Failure", "Disappointment", "Pessimism"],
      meaning: "Dwelling on past failures or disappointments. Focusing on what went wrong rather than what remains.",
      advice: "Learn from past mistakes but don't let regret consume you. Focus on what you still have."
    },
    reversed: {
      keywords: ["Personal setbacks", "Self-forgiveness", "Moving on"],
      meaning: "Beginning to heal from setbacks and practicing self-forgiveness. Ready to move forward.",
      advice: "Forgive yourself for past mistakes and focus on healing and moving forward."
    }
  },
  {
    id: 27,
    name: "Six of Cups",
    suit: "cups",
    upright: {
      keywords: ["Revisiting the past", "Childhood memories", "Innocence"],
      meaning: "Nostalgia, childhood memories, and innocence. Reconnecting with your past or inner child.",
      advice: "Embrace pleasant memories but don't get stuck in the past. Learn from your history."
    },
    reversed: {
      keywords: ["Living in the past", "Forgiveness", "Lacking playfulness"],
      meaning: "Being too focused on the past or needing to forgive past hurts to move forward.",
      advice: "Release past hurts and focus on creating new positive memories."
    }
  },
  {
    id: 28,
    name: "Seven of Cups",
    suit: "cups",
    upright: {
      keywords: ["Opportunities", "Choices", "Wishful thinking", "Illusion"],
      meaning: "Many options and opportunities, but also confusion and illusion. Too many choices to make.",
      advice: "Ground your dreams in reality and choose your opportunities carefully."
    },
    reversed: {
      keywords: ["Alignment", "Personal values", "Overwhelmed by choices"],
      meaning: "Finding clarity in choices by aligning with personal values, or feeling overwhelmed by options.",
      advice: "Use your values as a guide to make clear decisions among many options."
    }
  },
  {
    id: 29,
    name: "Eight of Cups",
    suit: "cups",
    upright: {
      keywords: ["Disappointment", "Abandonment", "Withdrawal", "Escapism"],
      meaning: "Walking away from a disappointing situation. Seeking something more meaningful.",
      advice: "Sometimes walking away is the right choice. Trust your instincts about what serves you."
    },
    reversed: {
      keywords: ["Trying one more time", "Indecision", "Aimless drifting"],
      meaning: "Attempting to salvage a situation one more time, or drifting without clear direction.",
      advice: "Decide whether to recommit fully or let go completely. Avoid half-measures."
    }
  },
  {
    id: 30,
    name: "Nine of Cups",
    suit: "cups",
    upright: {
      keywords: ["Contentment", "Satisfaction", "Gratitude", "Wish come true"],
      meaning: "Emotional fulfillment and satisfaction. Getting what you wished for. The 'wish card'.",
      advice: "Enjoy your achievements and express gratitude for what you have accomplished."
    },
    reversed: {
      keywords: ["Inner happiness", "Materialism", "Dissatisfaction"],
      meaning: "Seeking inner happiness rather than external validation, or dissatisfaction despite material success.",
      advice: "Find happiness within yourself rather than seeking it through external achievements."
    }
  },
  {
    id: 31,
    name: "Ten of Cups",
    suit: "cups",
    upright: {
      keywords: ["Happiness", "Marriage", "Family", "Long-term success"],
      meaning: "Emotional fulfillment in relationships and family. Harmony and happiness in personal life.",
      advice: "Cherish your relationships and create harmony in your personal life."
    },
    reversed: {
      keywords: ["Shattered dreams", "Broken family", "Bad investments"],
      meaning: "Disruption in family harmony or relationships. Disappointment in personal life.",
      advice: "Work on healing family relationships and don't give up on your dreams of happiness."
    }
  },
  {
    id: 32,
    name: "Page of Cups",
    suit: "cups",
    upright: {
      keywords: ["Creative opportunities", "Intuitive messages", "Curiosity"],
      meaning: "A messenger of emotional or creative opportunities. New artistic projects or intuitive insights.",
      advice: "Pay attention to your intuitive messages and embrace creative opportunities."
    },
    reversed: {
      keywords: ["Emotional immaturity", "Insecurity", "Escapism"],
      meaning: "Emotional immaturity or insecurity affecting your relationships or creative expression.",
      advice: "Work on emotional maturity and address insecurities that hold you back."
    }
  },
  {
    id: 33,
    name: "Knight of Cups",
    suit: "cups",
    upright: {
      keywords: ["Romance", "Charm", "Knight in shining armor", "Idealist"],
      meaning: "A romantic idealist bringing emotional messages. Following your heart and dreams.",
      advice: "Follow your heart but balance emotion with practical considerations."
    },
    reversed: {
      keywords: ["Moodiness", "Disappointment", "Overemotional"],
      meaning: "Moodiness, emotional manipulation, or disappointment in romantic matters.",
      advice: "Manage your emotions constructively and avoid manipulative behavior."
    }
  },
  {
    id: 34,
    name: "Queen of Cups",
    suit: "cups",
    upright: {
      keywords: ["Compassion", "Calm", "Comfort", "Intuition"],
      meaning: "Emotional maturity, compassion, and intuitive wisdom. A nurturing and supportive presence.",
      advice: "Trust your intuition and offer compassionate support to others and yourself."
    },
    reversed: {
      keywords: ["Emotional insecurity", "Codependency", "Self-care"],
      meaning: "Emotional insecurity, codependency, or neglecting self-care while caring for others.",
      advice: "Practice self-care and establish healthy emotional boundaries."
    }
  },
  {
    id: 35,
    name: "King of Cups",
    suit: "cups",
    upright: {
      keywords: ["Emotional balance", "Compassion", "Diplomacy"],
      meaning: "Emotional maturity and balance. Compassionate leadership and diplomatic solutions.",
      advice: "Lead with emotional intelligence and maintain balance between heart and mind."
    },
    reversed: {
      keywords: ["Emotional manipulation", "Moodiness", "Lack of compassion"],
      meaning: "Using emotions to manipulate others or lacking compassion and emotional control.",
      advice: "Use your emotional intelligence ethically and practice genuine compassion."
    }
  },

  // Wands Suit (14 cards)
  {
    id: 36,
    name: "Ace of Wands",
    suit: "wands",
    upright: {
      keywords: ["Inspiration", "New opportunities", "Growth", "Potential"],
      meaning: "A spark of inspiration and new creative or career opportunities. Raw potential waiting to be developed.",
      advice: "Act on your inspiration and take advantage of new opportunities with enthusiasm."
    },
    reversed: {
      keywords: ["Lack of energy", "Delays", "False starts"],
      meaning: "Lack of energy or motivation, delays in projects, or false starts in new ventures.",
      advice: "Reassess your goals and wait for the right timing before proceeding."
    }
  },
  {
    id: 37,
    name: "Two of Wands",
    suit: "wands",
    upright: {
      keywords: ["Future planning", "Making decisions", "Leaving comfort zone"],
      meaning: "Planning for the future and making important decisions. Ready to leave your comfort zone.",
      advice: "Make concrete plans and be willing to take calculated risks to achieve your goals."
    },
    reversed: {
      keywords: ["Poor planning", "Lack of foresight", "Fear of unknown"],
      meaning: "Poor planning, lack of foresight, or fear preventing you from taking necessary action.",
      advice: "Improve your planning and don't let fear hold you back from pursuing opportunities."
    }
  },
  {
    id: 38,
    name: "Three of Wands",
    suit: "wands",
    upright: {
      keywords: ["Progress", "Expansion", "Foresight", "Overseas opportunities"],
      meaning: "Expansion of horizons and long-term planning paying off. Progress in your endeavors.",
      advice: "Continue with your long-term plans and consider expanding your scope or reach."
    },
    reversed: {
      keywords: ["Playing small", "Lack of foresight", "Delays"],
      meaning: "Playing small, lack of foresight, or delays in expansion and progress.",
      advice: "Think bigger and don't limit yourself. Plan more carefully for future success."
    }
  },
  {
    id: 39,
    name: "Four of Wands",
    suit: "wands",
    upright: {
      keywords: ["Celebration", "Joyful reunion", "Homecoming", "Wedding"],
      meaning: "Celebration, joyful reunions, and achieving stability. A happy homecoming or milestone.",
      advice: "Take time to celebrate your achievements and enjoy harmonious relationships."
    },
    reversed: {
      keywords: ["Home conflicts", "Delayed celebrations", "Lack of support"],
      meaning: "Conflicts at home, delayed celebrations, or lack of support from family or community.",
      advice: "Work on resolving home conflicts and build supportive relationships."
    }
  },
  {
    id: 40,
    name: "Five of Wands",
    suit: "wands",
    upright: {
      keywords: ["Conflict", "Disagreements", "Competition", "Tension"],
      meaning: "Minor conflicts, disagreements, and healthy competition. Tension that leads to growth.",
      advice: "Work through disagreements constructively and use competition as motivation."
    },
    reversed: {
      keywords: ["Avoiding conflict", "Respecting differences", "Inner conflict"],
      meaning: "Avoiding conflict, learning to respect differences, or dealing with inner conflict.",
      advice: "Address conflicts directly but respectfully. Work on resolving inner contradictions."
    }
  },
  {
    id: 41,
    name: "Six of Wands",
    suit: "wands",
    upright: {
      keywords: ["Success", "Public recognition", "Progress", "Self-confidence"],
      meaning: "Success and public recognition for your achievements. Victory and increased self-confidence.",
      advice: "Enjoy your success but stay humble. Use your achievements to inspire others."
    },
    reversed: {
      keywords: ["Private achievement", "Personal definition of success", "Fall from grace"],
      meaning: "Private achievement, defining success for yourself, or experiencing a fall from grace.",
      advice: "Define success on your own terms and don't rely solely on public recognition."
    }
  },
  {
    id: 42,
    name: "Seven of Wands",
    suit: "wands",
    upright: {
      keywords: ["Challenge", "Competition", "Perseverance", "Maintaining control"],
      meaning: "Standing your ground against challenges and competition. Perseverance in difficult times.",
      advice: "Stand firm in your convictions and don't give up when facing opposition."
    },
    reversed: {
      keywords: ["Exhaustion", "Give up", "Lack of self-belief"],
      meaning: "Feeling exhausted by constant challenges or giving up too easily due to lack of self-belief.",
      advice: "Rest and recharge, then recommit to your goals with renewed self-belief."
    }
  },
  {
    id: 43,
    name: "Eight of Wands",
    suit: "wands",
    upright: {
      keywords: ["Swiftness", "Speed", "Progress", "Quick decisions"],
      meaning: "Swift action, rapid progress, and quick decisions. Things moving at high speed.",
      advice: "Act quickly on opportunities and maintain momentum in your projects."
    },
    reversed: {
      keywords: ["Delays", "Frustration", "Resisting change"],
      meaning: "Delays, frustration with slow progress, or resisting necessary changes.",
      advice: "Be patient with delays and don't resist beneficial changes to your plans."
    }
  },
  {
    id: 44,
    name: "Nine of Wands",
    suit: "wands",
    upright: {
      keywords: ["Resilience", "Courage", "Persistence", "Last stand"],
      meaning: "Resilience and courage in the face of adversity. Persistence despite challenges.",
      advice: "You're closer to success than you think. Don't give up now."
    },
    reversed: {
      keywords: ["Inner resources", "Struggle", "Paranoia"],
      meaning: "Drawing on inner resources, struggling with paranoia, or feeling defensive.",
      advice: "Trust in your inner strength and don't let paranoia cloud your judgment."
    }
  },
  {
    id: 45,
    name: "Ten of Wands",
    suit: "wands",
    upright: {
      keywords: ["Burden", "Hard work", "Responsibility", "Burn out"],
      meaning: "Heavy burdens and responsibilities. Hard work that may lead to burnout.",
      advice: "Delegate responsibilities and don't take on more than you can handle."
    },
    reversed: {
      keywords: ["Doing it all", "Carrying the burden", "Delegation"],
      meaning: "Trying to do everything yourself or learning to delegate and share responsibilities.",
      advice: "Learn to delegate and share the load. You don't have to do everything alone."
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
    suit: "swords",
    upright: {
      keywords: ["Breakthrough", "New ideas", "Mental clarity", "Success"],
      meaning: "Mental breakthrough, new ideas, and clarity of thought. Success through intellectual pursuits.",
      advice: "Use your mental clarity to cut through confusion and pursue new intellectual challenges."
    },
    reversed: {
      keywords: ["Confusion", "Brutal thoughts", "Chaos"],
      meaning: "Mental confusion, harsh or brutal thoughts, and chaotic thinking patterns.",
      advice: "Clear your mind and avoid harsh or destructive thinking patterns."
    }
  },
  {
    id: 51,
    name: "Two of Swords",
    suit: "swords",
    upright: {
      keywords: ["Difficult decisions", "Weighing options", "Indecision", "Stalemate"],
      meaning: "Difficult decisions, weighing options carefully, indecision, or being in a stalemate situation.",
      advice: "Gather all information before making decisions. Sometimes inaction is temporary wisdom."
    },
    reversed: {
      keywords: ["Indecision", "Confusion", "Information overload"],
      meaning: "Continued indecision, confusion, or feeling overwhelmed by too much information.",
      advice: "Trust your instincts and make a decision even with incomplete information."
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
    suit: "swords",
    upright: {
      keywords: ["Independence", "Unbiased judgement", "Clear boundaries"],
      meaning: "Independent thinking, unbiased judgment, and clear communication with firm boundaries.",
      advice: "Trust your judgment and communicate clearly. Maintain healthy boundaries with others."
    },
    reversed: {
      keywords: ["Overly emotional", "Harsh", "Bitter"],
      meaning: "Being overly emotional in decision-making, harsh in communication, or bitter from past hurts.",
      advice: "Balance emotion with logic and avoid letting past hurts make you bitter or harsh."
    }
  },
  {
    id: 63,
    name: "King of Swords",
    suit: "swords",
    upright: {
      keywords: ["Intellectual power", "Clear thinking", "Authority", "Truth"],
      meaning: "Intellectual power, clear thinking, moral authority, and commitment to truth and justice.",
      advice: "Lead with wisdom and integrity. Use your intellectual gifts to serve justice and truth."
    },
    reversed: {
      keywords: ["Abuse of power", "Manipulative", "Tyrannical"],
      meaning: "Abuse of intellectual power, manipulative behavior, or tyrannical use of authority.",
      advice: "Use your intelligence ethically and avoid manipulating others for personal gain."
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