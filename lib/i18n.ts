export type Language = 'en' | 'zh'

export interface Translations {
  // Navigation
  nav: {
    title: string
    disclaimer: string
    backHome: string
  }
  
  // Home Page
  home: {
    title: string
    subtitle: string
    tarot: {
      title: string
      description: string
      action: string
    }
    iching: {
      title: string
      description: string
      action: string
    }
    astrology: {
      title: string
      description: string
      action: string
    }
    features: {
      title: string
      authentic: {
        title: string
        description: string
      }
      privacy: {
        title: string
        description: string
      }
      mobile: {
        title: string
        description: string
      }
      free: {
        title: string
        description: string
      }
    }
  }
  
  // Tarot
  tarot: {
    title: string
    subtitle: string
    questionFocus: string
    questionPlaceholder: string
    spreads: {
      daily: {
        name: string
        description: string
      }
      threeCard: {
        name: string
        description: string
      }
    }
    categories: {
      general: string
      love: string
      career: string
      education: string
    }
    beginReading: string
    shuffling: string
    shufflingDesc: string
    drawCards: string
    drawCardsDesc: string
    positions: {
      todaysEnergy: string
      past: string
      present: string
      future: string
    }
    upright: string
    reversed: string
    keywords: string
    meaning: string
    guidance: string
    newReading: string
  }
  
  // I Ching
  iching: {
    title: string
    subtitle: string
    questionCategory: string
    questionPlaceholder: string
    categories: {
      general: string
      love: string
      career: string
      health: string
    }
    howItWorks: {
      title: string
      steps: string[]
    }
    castCoins: string
    casting: string
    castingDesc: string
    primaryHexagram: string
    transformedHexagram: string
    generalMeaning: string
    guidanceForSituation: string
    generalAdvice: string
    transformation: string
    transformationDesc: string
    guidanceForTransformation: string
    newConsultation: string
  }
  
  // Astrology
  astrology: {
    title: string
    subtitle: string
    birthDate: string
    birthTime: string
    birthTimeNote: string
    birthLocation: string
    birthLocationPlaceholder: string
    about: {
      title: string
      points: string[]
    }
    generateChart: string
    calculating: string
    calculatingDesc: string
    mappingBlueprint: string
    bornOn: string
    at: string
    in: string
    sunSign: string
    moonSign: string
    risingSign: string
    ascendant: string
    house: string
    otherPlanets: string
    summary: string
    remember: {
      title: string
      content: string
    }
    newChart: string
  }
  
  // Footer
  footer: {
    disclaimer: string
    warning: string
  }
  
  // Common
  common: {
    loading: string
    error: string
    retry: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      title: "✨ Mystical Tools",
      disclaimer: "For entertainment and self-reflection only",
      backHome: "← Back to Home"
    },
    home: {
      title: "Discover Your Path",
      subtitle: "Explore the mysteries of tarot, astrology, and ancient wisdom through our interactive divination tools.",
      tarot: {
        title: "Tarot Reading",
        description: "Draw cards from the traditional 78-card deck and receive insights into your past, present, and future.",
        action: "Start Reading →"
      },
      iching: {
        title: "I Ching Oracle",
        description: "Consult the ancient Chinese Book of Changes through the traditional three-coin method.",
        action: "Cast Coins →"
      },
      astrology: {
        title: "Birth Chart",
        description: "Generate your natal chart and discover insights about your personality and life path.",
        action: "Create Chart →"
      },
      features: {
        title: "Why Choose Mystical Tools?",
        authentic: {
          title: "✨ Authentic Experience",
          description: "Based on traditional methods and interpretations used for centuries."
        },
        privacy: {
          title: "🔒 Privacy Focused",
          description: "Your readings are private and not stored or shared with anyone."
        },
        mobile: {
          title: "📱 Mobile Friendly",
          description: "Optimized for all devices, get guidance wherever you are."
        },
        free: {
          title: "💝 Completely Free",
          description: "All tools and readings are free to use with no hidden costs."
        }
      }
    },
    tarot: {
      title: "Tarot Reading",
      subtitle: "Focus on your question and let the cards guide you to deeper understanding.",
      questionFocus: "Reading Focus",
      questionPlaceholder: "What would you like guidance on today?",
      spreads: {
        daily: {
          name: "Daily Draw",
          description: "Single card for daily guidance"
        },
        threeCard: {
          name: "Past, Present, Future",
          description: "Three-card spread for timeline insight"
        }
      },
      categories: {
        general: "General",
        love: "Love",
        career: "Career",
        education: "Education"
      },
      beginReading: "Begin Reading",
      shuffling: "Shuffling the Cards",
      shufflingDesc: "The cards are being shuffled... Focus on your question and let the universe guide the selection.",
      drawCards: "Draw Your Cards",
      drawCardsDesc: "The cards have been shuffled. Click below to draw your",
      positions: {
        todaysEnergy: "Today's Energy",
        past: "Past",
        present: "Present",
        future: "Future"
      },
      upright: "Upright",
      reversed: "Reversed",
      keywords: "Keywords:",
      meaning: "Meaning:",
      guidance: "Guidance:",
      newReading: "New Reading"
    },
    iching: {
      title: "I Ching Oracle",
      subtitle: "The ancient Chinese Book of Changes offers wisdom through 64 hexagrams. Focus on your question and cast the virtual coins.",
      questionCategory: "Question Category",
      questionPlaceholder: "What guidance do you seek from the I Ching?",
      categories: {
        general: "General",
        love: "Love",
        career: "Career",
        health: "Health"
      },
      howItWorks: {
        title: "How it works:",
        steps: [
          "Focus clearly on your question",
          "Six virtual coins will be cast to build your hexagram",
          "Each line represents different aspects of your situation",
          "Changing lines indicate areas of transformation"
        ]
      },
      castCoins: "Cast the Coins",
      casting: "Casting the Coins",
      castingDesc: "The coins are revealing your hexagram.",
      primaryHexagram: "Primary Hexagram",
      transformedHexagram: "Transformed Hexagram",
      generalMeaning: "General Meaning:",
      guidanceForSituation: "Guidance for Your Situation:",
      generalAdvice: "General Advice:",
      transformation: "Transformation",
      transformationDesc: "indicating transformation from",
      guidanceForTransformation: "Guidance for the Transformation:",
      newConsultation: "New Consultation"
    },
    astrology: {
      title: "Birth Chart Reading",
      subtitle: "Enter your birth information to generate your personalized natal chart and astrological insights.",
      birthDate: "Birth Date",
      birthTime: "Birth Time",
      birthTimeNote: "If unknown, 12:00 PM will be used (affects rising sign and house positions)",
      birthLocation: "Birth Location",
      birthLocationPlaceholder: "City, Country (e.g., New York, USA)",
      about: {
        title: "About Your Birth Chart:",
        points: [
          "Your Sun sign represents your core personality",
          "Your Moon sign reveals your emotional nature",
          "Your Rising sign shows how others see you",
          "Planet positions add depth to your cosmic blueprint"
        ]
      },
      generateChart: "Generate Birth Chart",
      calculating: "Calculating Your Chart",
      calculatingDesc: "Analyzing planetary positions for",
      mappingBlueprint: "Mapping your cosmic blueprint...",
      bornOn: "Born on",
      at: "at",
      in: "in",
      sunSign: "Sun Sign",
      moonSign: "Moon Sign",
      risingSign: "Rising Sign",
      ascendant: "Ascendant",
      house: "House",
      otherPlanets: "Other Planetary Influences",
      summary: "Your Astrological Summary",
      remember: {
        title: "Remember:",
        content: "Your birth chart is a map of possibilities, not a fixed destiny. Use these insights as a tool for self-understanding and personal growth. The stars incline, they do not compel."
      },
      newChart: "New Chart"
    },
    footer: {
      disclaimer: "Disclaimer: These tools are for entertainment and self-reflection purposes only.",
      warning: "Not a substitute for professional advice in legal, medical, financial, or psychological matters."
    },
    common: {
      loading: "Loading...",
      error: "Error",
      retry: "Retry"
    }
  },
  zh: {
    nav: {
      title: "✨ 神秘工具",
      disclaimer: "仅供娱乐和自我反思使用",
      backHome: "← 返回首页"
    },
    home: {
      title: "发现你的道路",
      subtitle: "通过我们的互动占卜工具探索塔罗牌、占星术和古代智慧的奥秘。",
      tarot: {
        title: "塔罗牌占卜",
        description: "从传统的78张牌组中抽取卡片，获得关于过去、现在和未来的洞察。",
        action: "开始占卜 →"
      },
      iching: {
        title: "易经占卜",
        description: "通过传统的三枚铜钱法咨询古老的中国《易经》。",
        action: "投掷铜钱 →"
      },
      astrology: {
        title: "星盘分析",
        description: "生成你的本命盘，发现关于你的性格和人生道路的洞察。",
        action: "创建星盘 →"
      },
      features: {
        title: "为什么选择神秘工具？",
        authentic: {
          title: "✨ 正宗体验",
          description: "基于几个世纪以来使用的传统方法和解释。"
        },
        privacy: {
          title: "🔒 隐私保护",
          description: "你的占卜结果是私密的，不会被存储或与任何人分享。"
        },
        mobile: {
          title: "📱 移动友好",
          description: "为所有设备优化，随时随地获得指导。"
        },
        free: {
          title: "💝 完全免费",
          description: "所有工具和占卜都免费使用，无隐藏费用。"
        }
      }
    },
    tarot: {
      title: "塔罗牌占卜",
      subtitle: "专注于你的问题，让卡片引导你获得更深层的理解。",
      questionFocus: "占卜焦点",
      questionPlaceholder: "今天你希望得到什么指导？",
      spreads: {
        daily: {
          name: "每日一卡",
          description: "单张牌的日常指导"
        },
        threeCard: {
          name: "过去、现在、未来",
          description: "三张牌的时间线洞察"
        }
      },
      categories: {
        general: "综合",
        love: "爱情",
        career: "事业",
        education: "学业"
      },
      beginReading: "开始占卜",
      shuffling: "洗牌中",
      shufflingDesc: "正在洗牌中...专注于你的问题，让宇宙引导选择。",
      drawCards: "抽取你的卡片",
      drawCardsDesc: "卡片已经洗好。点击下方抽取你的",
      positions: {
        todaysEnergy: "今日能量",
        past: "过去",
        present: "现在",
        future: "未来"
      },
      upright: "正位",
      reversed: "逆位",
      keywords: "关键词：",
      meaning: "含义：",
      guidance: "指导：",
      newReading: "新的占卜"
    },
    iching: {
      title: "易经占卜",
      subtitle: "古老的中国《易经》通过64个卦象提供智慧。专注于你的问题并投掷虚拟铜钱。",
      questionCategory: "问题类别",
      questionPlaceholder: "你寻求易经的什么指导？",
      categories: {
        general: "综合",
        love: "情感",
        career: "事业",
        health: "健康"
      },
      howItWorks: {
        title: "使用方法：",
        steps: [
          "清楚地专注于你的问题",
          "将投掷六枚虚拟铜钱来构建你的卦象",
          "每一爻代表你情况的不同方面",
          "变爻表示转化的领域"
        ]
      },
      castCoins: "投掷铜钱",
      casting: "投掷铜钱中",
      castingDesc: "铜钱正在揭示你的卦象。",
      primaryHexagram: "本卦",
      transformedHexagram: "之卦",
      generalMeaning: "总体含义：",
      guidanceForSituation: "针对你情况的指导：",
      generalAdvice: "综合建议：",
      transformation: "变化",
      transformationDesc: "表示从",
      guidanceForTransformation: "变化指导：",
      newConsultation: "新的咨询"
    },
    astrology: {
      title: "星盘分析",
      subtitle: "输入你的出生信息来生成个性化的本命盘和占星洞察。",
      birthDate: "出生日期",
      birthTime: "出生时间",
      birthTimeNote: "如果不知道确切时间，将使用中午12:00（影响上升星座和宫位）",
      birthLocation: "出生地点",
      birthLocationPlaceholder: "城市，国家（例如：北京，中国）",
      about: {
        title: "关于你的星盘：",
        points: [
          "你的太阳星座代表核心性格",
          "你的月亮星座揭示情感本质",
          "你的上升星座显示他人如何看待你",
          "行星位置为你的宇宙蓝图增添深度"
        ]
      },
      generateChart: "生成星盘",
      calculating: "计算你的星盘中",
      calculatingDesc: "正在分析行星位置",
      mappingBlueprint: "绘制你的宇宙蓝图中...",
      bornOn: "出生于",
      at: "于",
      in: "在",
      sunSign: "太阳星座",
      moonSign: "月亮星座",
      risingSign: "上升星座",
      ascendant: "上升点",
      house: "宫",
      otherPlanets: "其他行星影响",
      summary: "你的占星总结",
      remember: {
        title: "请记住：",
        content: "你的星盘是可能性的地图，而不是固定的命运。将这些洞察作为自我理解和个人成长的工具。星象倾向，但不强制。"
      },
      newChart: "新的星盘"
    },
    footer: {
      disclaimer: "免责声明：这些工具仅用于娱乐和自我反思目的。",
      warning: "不能替代法律、医疗、财务或心理方面的专业建议。"
    },
    common: {
      loading: "加载中...",
      error: "错误",
      retry: "重试"
    }
  }
}