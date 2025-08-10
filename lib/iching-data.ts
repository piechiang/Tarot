export interface Hexagram {
  id: number;
  name: string;
  chineseName: string;
  lines: boolean[]; // true = solid line, false = broken line
  judgment: string;
  judgmentCn?: string;
  meaning: string;
  meaningCn?: string;
  advice: {
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
}

export const hexagrams: Hexagram[] = [
  {
    id: 1,
    name: "The Creative",
    chineseName: "乾",
    lines: [true, true, true, true, true, true],
    judgment: "The Creative works sublime success, furthering through perseverance.",
    judgmentCn: "乾：元、亨、利、贞。",
    meaning: "This hexagram represents pure creative energy, leadership, and the beginning of all things. It embodies strength, power, and the masculine principle. When you receive this hexagram, it suggests that you have the power and energy to create positive change in your life.",
    meaningCn: "此卦象征纯粹的创造能量、领导力和万物的开始。它体现了力量、权威和阳性原则。当你得到此卦时，表明你拥有创造积极变化的力量和能量。乾卦代表天，象征刚健、奋进、自强不息的精神。",
    advice: {
      love: "Take the lead in your romantic relationships. Be confident and decisive in matters of the heart.",
      career: "Excellent time for leadership roles and new ventures. Your creative energy will bring success.",
      health: "Focus on building strength and vitality. Physical activity and positive energy will benefit you greatly.",
      general: "Trust in your abilities and take action. This is a time of great potential and creative power."
    },
    adviceCn: {
      love: "在感情关系中要主动引领。在情感问题上要自信果断，以诚待人。",
      career: "这是担任领导职务和开展新事业的绝佳时机。你的创造能量将带来成功。",
      health: "专注于增强体力和活力。体育锻炼和积极的心态对你大有裨益。",
      general: "相信自己的能力并积极行动。这是充满巨大潜力和创造力的时期。"
    }
  },
  {
    id: 2,
    name: "The Receptive",
    chineseName: "坤",
    lines: [false, false, false, false, false, false],
    judgment: "The Receptive brings about sublime success, furthering through the perseverance of a mare.",
    judgmentCn: "坤：元亨，利牝马之贞。",
    meaning: "This hexagram represents receptivity, nurturing, and the feminine principle. It suggests the power of yielding, being open to guidance, and supporting others. It's about finding strength in gentleness and wisdom in listening.",
    meaningCn: "此卦代表包容、滋养和阴性原则。它暗示柔顺的力量，开放接受指导，支持他人。它教导我们在温柔中寻找力量，在倾听中获得智慧。坤卦代表地，象征厚德载物、包容万象的品质。",
    advice: {
      love: "Be receptive and supportive in your relationships. Listen deeply and offer nurturing energy to your partner.",
      career: "Work collaboratively and support your team. Success comes through cooperation rather than competition.",
      health: "Focus on rest, nutrition, and gentle healing. Your body needs nurturing and care right now.",
      general: "Practice patience and receptivity. Allow others to lead while you provide support and wisdom."
    },
    adviceCn: {
      love: "在感情关系中要包容和支持。深度倾听并给予伴侣滋养的能量。",
      career: "与团队合作并支持同事。通过合作而非竞争获得成功。",
      health: "专注于休息、营养和温和的疗愈。你的身体现在需要滋养和关怀。",
      general: "练习耐心和包容。允许他人领导，同时你提供支持和智慧。"
    }
  },
  {
    id: 3,
    name: "Difficulty at the Beginning",
    chineseName: "屯",
    lines: [true, false, false, false, true, false],
    judgment: "Difficulty at the Beginning works sublime success, furthering through perseverance.",
    judgmentCn: "屯：元亨利贞，勿用有攸往，利建侯。",
    meaning: "This hexagram indicates initial difficulties and challenges that must be overcome. Like a plant struggling to break through the earth, growth requires perseverance through initial obstacles. The situation is complex but contains great potential.",
    meaningCn: "此卦表示初始的困难和必须克服的挑战。如同植物努力破土而出，成长需要通过坚持不懈来克服初始障碍。情况虽复杂但蕴含巨大潜力。屯卦象征万物初生的艰难，但只要坚持，终将获得成功。",
    advice: {
      love: "Relationships may face initial challenges, but persistence will lead to growth. Don't give up too easily.",
      career: "New projects face early obstacles. Stay committed to your goals and seek help when needed.",
      health: "Address health issues early and persistently. Initial efforts will lead to long-term improvement.",
      general: "Persevere through initial difficulties. What seems challenging now contains seeds of future success."
    },
    adviceCn: {
      love: "感情关系可能面临初期挑战，但坚持会带来成长。不要轻易放弃。",
      career: "新项目面临早期障碍。坚持你的目标，在需要时寻求帮助。",
      health: "及早且持续地解决健康问题。初期的努力会带来长期改善。",
      general: "坚持度过初期困难。现在看似困难的事情蕴含着未来成功的种子。"
    }
  },
  {
    id: 4,
    name: "Youthful Folly",
    chineseName: "蒙",
    lines: [false, true, false, false, false, true],
    judgment: "Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me.",
    judgmentCn: "蒙：亨。匪我求童蒙，童蒙求我。",
    meaning: "This hexagram represents inexperience, learning, and the need for guidance. It suggests that ignorance can be overcome through sincere desire to learn and proper instruction. Humility and openness to teaching are essential.",
    meaningCn: "此卦代表缺乏经验、学习和需要指导。它表明无知可以通过真诚的学习愿望和正确的指导来克服。谦逊和对教学的开放态度是必不可少的。蒙卦象征启蒙教育，强调师生关系中的主动求学。",
    advice: {
      love: "Approach relationships with sincerity and willingness to learn. Don't pretend to know more than you do.",
      career: "Seek mentorship and guidance. Admit what you don't know and be eager to learn from others.",
      health: "Consult experts and follow professional advice. Don't rely on guesswork for your health.",
      general: "Embrace your beginner's mind. True wisdom comes from recognizing what you don't know."
    },
    adviceCn: {
      love: "以诚待人，愿意在感情中学习成长。不要假装比实际懂得更多。",
      career: "寻求导师和指导。承认自己不知道的，积极向他人学习。",
      health: "咨询专家并遵循专业建议。不要凭猜测处理健康问题。",
      general: "保持初学者的心态。真正的智慧来自认识到自己的不知。"
    }
  },
  {
    id: 5,
    name: "Waiting",
    chineseName: "需",
    lines: [true, true, true, false, true, false],
    judgment: "Waiting. If you are sincere, you have light and success; perseverance brings good fortune.",
    judgmentCn: "需：有孚，光亨，贞吉。",
    meaning: "This hexagram counsels patience and waiting for the right moment. It's not about passive waiting, but active preparation and maintaining inner strength while circumstances develop. Trust in the natural timing of events.",
    meaningCn: "此卦指导耐心等待合适的时机。这不是被动等待，而是积极准备并在情况发展中保持内在力量。相信事件的自然时机。需卦象征等待时机，强调在等待中保持诚信和准备。",
    advice: {
      love: "Don't rush romantic developments. Allow relationships to unfold naturally in their own time.",
      career: "Wait for the right opportunities while staying prepared. Patience will be rewarded with better prospects.",
      health: "Allow healing to happen naturally. Don't push too hard; give your body time to recover.",
      general: "Practice active patience. Stay alert and prepared while allowing events to unfold naturally."
    },
    adviceCn: {
      love: "不要急于推进感情发展。让关系在适当的时候自然展开。",
      career: "在保持准备的同时等待合适的机会。耐心将获得更好的前景。",
      health: "让治疗自然进行。不要过度勉强，给身体时间恢复。",
      general: "练习积极的耐心。在事件自然展开时保持警觉和准备。"
    }
  },
  {
    id: 6,
    name: "Conflict",
    chineseName: "訟",
    lines: [false, true, false, true, true, true],
    judgment: "Conflict: You are sincere and are being obstructed. A cautious halt halfway brings good fortune.",
    judgmentCn: "訟：有孚窒惕，中吉。",
    meaning: "This hexagram indicates conflict and discord, whether internal or external. It suggests the need to avoid prolonged disputes and find ways to resolve disagreements. Sometimes strategic withdrawal is wiser than continued confrontation.",
    meaningCn: "此卦表明冲突和不和，无论是内在还是外在的。它建议需要避免长期争端并寻找解决分歧的方法。有时战略性撤退比继续对抗更明智。訟卦提醒我们慎重处理争讼。",
    advice: {
      love: "Address conflicts directly but avoid prolonged arguments. Seek compromise and understanding.",
      career: "Handle workplace conflicts diplomatically. Sometimes stepping back prevents escalation.",
      health: "Address conflicting health advice carefully. Seek second opinions when treatments contradict.",
      general: "Choose your battles wisely. Not every conflict needs to be fought to the end."
    },
    adviceCn: {
      love: "直接处理冲突但避免长期争论。寻求妥协和理解。",
      career: "外交地处理工作场所冲突。有时退一步防止事态升级。",
      health: "谨慎处理相互矛盾的健康建议。当治疗方案冲突时寻求第二意见。",
      general: "明智地选择你的战斗。不是每个冲突都需要战斗到底。"
    }
  },
  {
    id: 7,
    name: "The Army",
    chineseName: "師",
    lines: [false, true, false, false, false, false],
    judgment: "The Army needs perseverance and a strong man. Good fortune without blame.",
    judgmentCn: "師：貞丈人吉，無咎。",
    meaning: "This hexagram represents organized effort, discipline, and leadership in challenging times. It suggests the need for strong guidance and collective action to overcome obstacles. Unity and discipline are essential for success.",
    meaningCn: "此卦代表有组织的努力、纪律和在困难时期的领导力。它暗示需要强有力的指导和集体行动来克服障碍。团结和纪律是成功的关键。師卦强调正确领导的重要性。",
    advice: {
      love: "Strong leadership may be needed in your relationship. Take charge when your partner needs support.",
      career: "Lead your team through challenges with discipline and clear direction. Unity brings success.",
      health: "Take disciplined approach to health. Create structured routines and stick to them consistently.",
      general: "Organize your efforts and maintain discipline. Strong leadership will guide you through difficulties."
    },
    adviceCn: {
      love: "在你的关系中可能需要强有力的领导。当伴侣需要支持时主动承担。",
      career: "以纪律和明确方向领导团队度过挑战。团结带来成功。",
      health: "对健康采取纪律性方法。建立结构化例程并坚持执行。",
      general: "组织你的努力并保持纪律。强有力的领导将引导你度过困难。"
    }
  },
  {
    id: 8,
    name: "Holding Together",
    chineseName: "比",
    lines: [false, false, false, true, false, true],
    judgment: "Holding Together brings good fortune. But let him reexamine himself as to whether he possesses sublimity, constancy, and perseverance.",
    judgmentCn: "比：吉。原筮，元永貞，無咎。",
    meaning: "This hexagram emphasizes unity, cooperation, and mutual support. It suggests finding your place within a group or community and working together toward common goals. Examine your own worthiness to be part of such unity.",
    meaningCn: "此卦强调团结、合作和相互支持。它建议在群体或社区中找到自己的位置，共同努力实现共同目标。审视自己是否配得上成为这种团结的一部分。比卦象征亲密和谐的关系。",
    advice: {
      love: "Build strong bonds through mutual support and shared values. Unity strengthens relationships.",
      career: "Focus on teamwork and building alliances. Success comes through cooperation with others.",
      health: "Seek support from others in your health journey. Join groups or find partners for mutual encouragement.",
      general: "Cultivate meaningful connections and work together with others toward shared goals."
    },
    adviceCn: {
      love: "通过相互支持和共同价值观建立牢固的纽带。团结加强关系。",
      career: "专注于团队合作和建立联盟。通过与他人合作获得成功。",
      health: "在健康之旅中寻求他人支持。加入团体或找到伙伴相互鼓励。",
      general: "培养有意义的联系，与他人合作实现共同目标。"
    }
  },
  {
    id: 9,
    name: "The Taming Power of the Small",
    chineseName: "小畜",
    lines: [true, true, true, false, true, true],
    judgment: "The Taming Power of the Small has success. Dense clouds, no rain from our western region.",
    judgmentCn: "小畜：亨。密雲不雨，自我西郊。",
    meaning: "This hexagram represents gentle influence and gradual progress. Small, consistent efforts accumulate into significant change. It suggests that persistence in small matters will eventually bring about transformation.",
    meaningCn: "此卦代表温和的影响和渐进的进步。微小而持续的努力会积累成重大的变化。它表明在小事上的坚持最终会带来转变。小畜卦强调积少成多的力量。",
    advice: {
      love: "Small gestures of love and kindness accumulate into deep connection. Don't underestimate little acts of care.",
      career: "Make steady progress through consistent small efforts. Don't expect dramatic changes overnight.",
      health: "Small, consistent healthy habits will compound into significant wellness improvements over time.",
      general: "Focus on consistency in small matters. Gentle persistence achieves more than forceful action."
    },
    adviceCn: {
      love: "小小的爱的表示和善意会积累成深厚的连接。不要低估关怀的小举动。",
      career: "通过持续的小努力取得稳步进展。不要期待一夜之间的戏剧性变化。",
      health: "微小而持续的健康习惯会随时间复合成显著的健康改善。",
      general: "专注于小事的一致性。温和的坚持比强力行动取得更多成就。"
    }
  },
  {
    id: 10,
    name: "Treading",
    chineseName: "履",
    lines: [true, true, false, true, false, true],
    judgment: "Treading. Treading upon the tail of the tiger. It does not bite the man. Success.",
    judgmentCn: "履：履虎尾，不咥人，亨。",
    meaning: "This hexagram represents careful conduct in dangerous or delicate situations. It suggests the need for proper behavior, respect, and careful attention to protocol when dealing with powerful forces or authority figures.",
    meaningCn: "此卦代表在危险或微妙情况下的谨慎行为。它暗示在与强大力量或权威人物打交道时需要恰当的行为、尊重和仔细注意礼节。履卦教导我们如何在复杂环境中保持适当的态度。",
    advice: {
      love: "Treat your partner with proper respect and attention. Navigate relationship challenges with grace and care.",
      career: "Show proper respect to authority figures. Careful, appropriate behavior will keep you safe in challenging situations.",
      health: "Approach health challenges with proper respect and follow professional guidance carefully.",
      general: "Conduct yourself appropriately in all situations. Proper behavior and respect will protect you from harm."
    },
    adviceCn: {
      love: "以恰当的尊重和关注对待你的伴侣。优雅和谨慎地应对关系挑战。",
      career: "对权威人物表示适当的尊重。谨慎、适当的行为会在挑战性情况下保护你。",
      health: "以适当的尊重对待健康挑战，仔细遵循专业指导。",
      general: "在所有情况下都要恰当地表现自己。适当的行为和尊重会保护你免受伤害。"
    }
  },
  {
    id: 11,
    name: "Peace",
    chineseName: "泰",
    lines: [false, false, false, true, true, true],
    judgment: "Peace. The small departs, the great approaches. Good fortune. Success.",
    judgmentCn: "泰：小往大來，吉亨。",
    meaning: "This hexagram represents harmony, prosperity, and good fortune. Heaven and Earth are in proper relationship, creating conditions for growth and success. It's a time when everything flows smoothly and obstacles diminish.",
    meaningCn: "此卦代表和谐、繁荣和好运。天地处于适当的关系中，为成长和成功创造条件。这是一切顺利进行、障碍减少的时期。泰卦象征太平盛世，万事亨通。",
    advice: {
      love: "Enjoy harmony and mutual understanding in your relationships. This is a favorable time for love.",
      career: "Take advantage of favorable conditions for advancement and success. Opportunities are abundant.",
      health: "Good time for health and vitality. Maintain balanced lifestyle to preserve this positive energy.",
      general: "Make the most of this fortunate period. Use this time of harmony to advance your important goals."
    },
    adviceCn: {
      love: "享受关系中的和谐和相互理解。这是爱情的有利时期。",
      career: "利用有利条件获得进步和成功。机会很多。",
      health: "健康和活力的好时机。保持平衡的生活方式来维持这种积极能量。",
      general: "充分利用这个幸运时期。利用这个和谐的时间推进你的重要目标。"
    }
  },
  {
    id: 12,
    name: "Standstill",
    chineseName: "否",
    lines: [true, true, true, false, false, false],
    judgment: "Standstill. Evil people do not further the perseverance of the superior man. The great departs; the small approaches.",
    judgmentCn: "否：否之匪人，不利君子貞。大往小來。",
    meaning: "This hexagram represents stagnation, obstacles, and unfavorable conditions. Communication is blocked, and progress is difficult. It's a time to maintain inner strength and wait for better conditions rather than forcing action.",
    meaningCn: "此卦代表停滞、障碍和不利条件。沟通受阻，进展困难。这是维持内在力量并等待更好条件的时候，而不是强迫行动。否卦提醒我们在逆境中保持定力。",
    advice: {
      love: "Relationships may face obstacles and poor communication. Focus on maintaining inner harmony rather than forcing connection.",
      career: "Unfavorable time for new ventures. Maintain your position and wait for better opportunities.",
      health: "Health may face challenges. Focus on maintaining strength and avoiding additional stress.",
      general: "Accept temporary stagnation and maintain inner strength. Don't waste energy fighting unchangeable circumstances."
    },
    adviceCn: {
      love: "关系可能面临障碍和沟通不良。专注于维持内心和谐，而不是强迫连接。",
      career: "不利于新事业的时期。保持你的位置，等待更好的机会。",
      health: "健康可能面临挑战。专注于保持体力，避免额外压力。",
      general: "接受暂时的停滞，保持内在力量。不要浪费精力对抗不可改变的环境。"
    }
  },
  {
    id: 13,
    name: "Fellowship with Men",
    chineseName: "同人",
    lines: [true, false, true, true, true, true],
    judgment: "Fellowship with Men in the open. Success. It furthers one to cross the great water.",
    judgmentCn: "同人於野，亨。利涉大川。",
    meaning: "This hexagram emphasizes universal fellowship, cooperation, and shared goals. It suggests the importance of working together with others in openness and trust. Unity based on shared principles brings success.",
    meaningCn: "此卦强调普世的同伴关系、合作和共同目标。它暗示了在开放和信任中与他人合作的重要性。基于共同原则的团结带来成功。同人卦象征大同世界的理想。",
    advice: {
      love: "Build relationships based on shared values and open communication. True fellowship strengthens love.",
      career: "Collaborate openly with colleagues and build networks based on mutual trust and shared goals.",
      health: "Benefit from community support and shared health goals. Join groups that support your wellness journey.",
      general: "Seek fellowship with like-minded people. Open cooperation and shared values create powerful alliances."
    },
    adviceCn: {
      love: "建立在共同价值观和开放沟通基础上的关系。真正的伙伴关系加强爱情。",
      career: "与同事开放合作，建立在相互信任和共同目标基础上的网络。",
      health: "从社区支持和共同健康目标中受益。加入支持你健康之旅的团体。",
      general: "与志同道合的人寻求伙伴关系。开放的合作和共同价值观创造强大的联盟。"
    }
  },
  {
    id: 14,
    name: "Possession in Great Measure",
    chineseName: "大有",
    lines: [true, true, true, false, true, false],
    judgment: "Possession in Great Measure: Supreme success.",
    judgmentCn: "大有：元亨。",
    meaning: "This hexagram represents abundance, great wealth, and supreme success. It indicates a time of prosperity and achievement, but also reminds us of the responsibility that comes with abundance. Share your blessings with others.",
    meaningCn: "此卦代表丰盛、巨大财富和至高成功。它表明这是繁荣和成就的时期，但也提醒我们丰盛带来的责任。与他人分享你的福气。大有卦象征丰富和成功，但需要保持谦逊。",
    advice: {
      love: "Your relationships are blessed with abundance and joy. Share your happiness and support others in love.",
      career: "Great success and prosperity in your professional life. Use your achievements to help others advance as well.",
      health: "Excellent vitality and health. Use your energy to help others and maintain balance in all things.",
      general: "Enjoy your success and abundance, but remember to share your blessings and help those in need."
    },
    adviceCn: {
      love: "你的关系充满丰盛和快乐。分享你的幸福，在爱情中支持他人。",
      career: "专业生洿中的巨大成功和繁荣。利用你的成就帮助他人也取得进步。",
      health: "极佳的活力和健康。用你的能量帮助他人，在所有事情上保持平衡。",
      general: "享受你的成功和丰盛，但记住分享你的福气，帮助有需要的人。"
    }
  },
  {
    id: 15,
    name: "Modesty",
    chineseName: "謙",
    lines: [false, false, true, false, false, false],
    judgment: "Modesty creates success. The superior man carries things through.",
    judgmentCn: "謙：亨，君子有終。",
    meaning: "This hexagram represents humility, modesty, and the power of not seeking glory for oneself. True strength comes from humility and service to others. Modesty attracts respect and creates lasting success.",
    meaningCn: "此卦代表谦逊、谦让和不为自己谋求荣耀的力量。真正的力量来自谦逊和对他人的服务。谦逊吸引尊重，创造持久的成功。謙卦是64卦中唯一六爐皆吉的卦象。",
    advice: {
      love: "Practice humility in relationships. True love flourishes when ego takes a back seat to genuine care.",
      career: "Lead through service rather than seeking personal glory. Modest behavior earns lasting respect and success.",
      health: "Approach health with humble acceptance and patience. Don't let pride interfere with getting help when needed.",
      general: "Cultivate genuine humility. Modesty and service to others create more lasting success than self-promotion."
    },
    adviceCn: {
      love: "在关系中保持谦逊。当自我让位给真正的关怀时，真爱才会蓬勃发展。",
      career: "通过服务而不是追求个人荣耀来领导。谦逊的行为赢得持久的尊重和成功。",
      health: "以谦逊的接受和耐心对待健康。不要让骄傲妨碍在需要时获得帮助。",
      general: "培养真正的谦逊。谦逊和对他人的服务比自我推销创造更持久的成功。"
    }
  },
  {
    id: 16,
    name: "Enthusiasm",
    chineseName: "豫",
    lines: [false, false, false, false, true, false],
    judgment: "Enthusiasm. It furthers one to install helpers and to set armies marching.",
    judgmentCn: "豫：利建侯行師。",
    meaning: "This hexagram represents enthusiasm, joy, and the power of positive energy to inspire others. It suggests a time when enthusiasm can overcome obstacles and inspire collective action. Share your positive energy with others.",
    meaningCn: "此卦代表热情、快乐和积极能量激励他人的力量。它暗示这是热情可以克服障碍并激发集体行动的时期。与他人分享你的积极能量。豫卦象征快乐和乐观的力量。",
    advice: {
      love: "Bring enthusiasm and joy to your relationships. Your positive energy will inspire deeper connection and happiness.",
      career: "Use your enthusiasm to motivate others and lead positive changes. Your energy is contagious and powerful.",
      health: "Maintain enthusiasm for healthy living. Positive attitude significantly impacts physical wellbeing.",
      general: "Let your natural enthusiasm inspire others and create positive momentum in all areas of life."
    },
    adviceCn: {
      love: "给你的关系带来热情和快乐。你的积极能量将激发更深层次的连接和幸福。",
      career: "用你的热情激励他人并领导积极变化。你的能量具有传染性和强大的力量。",
      health: "保持对健康生活的热情。积极的态度显著影响身体健康。",
      general: "让你的自然热情激励他人，在生活的各个领域创造积极的动力。"
    }
  },
  {
    id: 17,
    name: "Following",
    chineseName: "隨",
    lines: [true, false, false, true, true, false],
    judgment: "Following has supreme success. Perseverance furthers. No blame.",
    meaning: "This hexagram teaches the wisdom of following when appropriate, adapting to circumstances, and knowing when to lead and when to follow. It's about flexible response to changing situations and following what is right and beneficial.",
    advice: {
      love: "Sometimes following your partner's lead strengthens the relationship. Practice flexible give and take.",
      career: "Know when to lead and when to follow. Adapt your approach based on circumstances and what serves the greater good.",
      health: "Follow professional medical advice and adapt your health practices based on your body's needs.",
      general: "Practice adaptive wisdom. Sometimes following others or circumstances is the path to success."
    }
  },
  {
    id: 18,
    name: "Work on What Has Been Spoiled",
    chineseName: "蠱",
    lines: [false, true, true, false, true, true],
    judgment: "Work on What Has Been Spoiled has supreme success. It furthers one to cross the great water.",
    meaning: "This hexagram indicates the need to repair damage, correct mistakes, and restore what has been corrupted. It requires courage to address problems that others may have created or neglected. Transformation through correction is possible.",
    advice: {
      love: "Address relationship problems that have been neglected. Healing and restoration require honest work and commitment.",
      career: "Take responsibility for fixing workplace problems, even if you didn't create them. Your efforts will bring improvement.",
      health: "Address health issues that have been neglected or worsened. Consistent corrective action will restore wellbeing.",
      general: "Don't avoid problems or blame others. Take constructive action to repair and restore what needs fixing."
    }
  },
  {
    id: 19,
    name: "Approach",
    chineseName: "臨",
    lines: [true, true, false, false, false, false],
    judgment: "Approach has supreme success. Perseverance furthers. When the eighth month comes, there will be misfortune.",
    meaning: "This hexagram represents favorable approach and growing influence. It's a time of increasing power and opportunity, but warns that this favorable period is temporary. Make the most of current opportunities while they last.",
    advice: {
      love: "Favorable time for approaching someone romantically or deepening existing relationships. Act while conditions are good.",
      career: "Excellent time to approach new opportunities and expand your influence. Take advantage of current favorable conditions.",
      health: "Good time for health improvements and new wellness approaches. Begin positive changes now while momentum is strong.",
      general: "Take advantage of this favorable period to advance your goals. Remember that conditions will change, so act now."
    }
  },
  {
    id: 20,
    name: "Contemplation",
    chineseName: "觀",
    lines: [false, false, true, true, true, true],
    judgment: "Contemplation. The ablution has been made, but not yet the offering.",
    meaning: "This hexagram emphasizes the importance of careful observation, contemplation, and gaining perspective before taking action. It's about understanding deeper truths through patient observation and reflection.",
    advice: {
      love: "Take time to truly observe and understand your partner's needs and feelings before acting.",
      career: "Step back and observe the bigger picture before making important career decisions. Perspective is valuable.",
      health: "Contemplate your overall health patterns and lifestyle before making changes. Understanding precedes healing.",
      general: "Practice mindful observation and reflection. True understanding comes through patient contemplation."
    }
  }
];

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