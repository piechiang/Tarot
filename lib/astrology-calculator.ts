/**
 * 占星术计算器 - 整合VSOP87和ELP2000算法
 * 提供完整的本命盘计算功能
 */

import { 
  dateObjectToJulianDay,
  calculateObliquity,
  julianCenturiesFromJ2000,
  calculateLST,
  calculateHouses,
  findHouseNumber,
  longitudeToZodiacSign
} from './astronomical-utils'

import { calculateAllPlanets, calculatePlanetGeocentric } from './vsop87-planets'
import { calculateMoonPosition } from './elp2000-moon'
import { generateChartInterpretation } from './chart-interpretations'

// 出生数据接口
export interface BirthData {
  dateTime: Date
  latitude: number
  longitude: number
  timezone: number
}

// 天体位置信息
export interface CelestialBody {
  name: string
  nameChinese: string
  longitude: number
  latitude: number
  sign: string
  signChinese: string
  degree: number
  house: number
  retrograde: boolean
}

// 完整星盘数据
export interface NatalChart {
  birthData: BirthData
  houses: number[]
  ascendant: number
  midheaven: number
  planets: CelestialBody[]
  aspects: Aspect[]
  summary: ChartSummary
  interpretation: string // 添加详细解读文案
}

// 相位信息
export interface Aspect {
  planet1: string
  planet2: string
  angle: number
  aspectType: string
  aspectTypeChinese: string
  orb: number
  isApplying: boolean
}

// 星盘总结
export interface ChartSummary {
  sunSign: string
  moonSign: string
  risingSign: string
  dominantElement: string
  dominantQuality: string
  chartPattern: string
  description: string
}

// 相位定义
const ASPECTS = [
  { name: 'Conjunction', nameChinese: '合相', angle: 0, orb: 8 },
  { name: 'Sextile', nameChinese: '六合', angle: 60, orb: 6 },
  { name: 'Square', nameChinese: '刑相', angle: 90, orb: 6 },
  { name: 'Trine', nameChinese: '三合', angle: 120, orb: 6 },
  { name: 'Opposition', nameChinese: '对冲', angle: 180, orb: 8 }
]

// 行星名称映射
const PLANET_INFO = {
  sun: { name: 'Sun', nameChinese: '太阳', symbol: '☉' },
  moon: { name: 'Moon', nameChinese: '月亮', symbol: '☽' },
  mercury: { name: 'Mercury', nameChinese: '水星', symbol: '☿' },
  venus: { name: 'Venus', nameChinese: '金星', symbol: '♀' },
  mars: { name: 'Mars', nameChinese: '火星', symbol: '♂' },
  jupiter: { name: 'Jupiter', nameChinese: '木星', symbol: '♃' },
  saturn: { name: 'Saturn', nameChinese: '土星', symbol: '♄' },
  uranus: { name: 'Uranus', nameChinese: '天王星', symbol: '♅' },
  neptune: { name: 'Neptune', nameChinese: '海王星', symbol: '♆' }
}

/**
 * 检查行星是否逆行
 */
function isRetrograde(planetName: string, julianDay: number): boolean {
  if (planetName === 'sun' || planetName === 'moon') return false
  
  const position1 = calculatePlanetGeocentric(planetName, julianDay - 1)
  const position2 = calculatePlanetGeocentric(planetName, julianDay + 1)
  
  let velocity = position2.longitude - position1.longitude
  if (velocity > 180) velocity -= 360
  if (velocity < -180) velocity += 360
  
  return velocity < 0
}

/**
 * 计算两个角度之间的差值
 */
function angleDifference(angle1: number, angle2: number): number {
  let diff = Math.abs(angle1 - angle2)
  if (diff > 180) diff = 360 - diff
  return diff
}

/**
 * 计算相位
 */
function calculateAspects(planets: CelestialBody[]): Aspect[] {
  const aspects: Aspect[] = []
  
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const planet1 = planets[i]
      const planet2 = planets[j]
      const angle = angleDifference(planet1.longitude, planet2.longitude)
      
      for (const aspectDef of ASPECTS) {
        const orb = Math.abs(angle - aspectDef.angle)
        if (orb <= aspectDef.orb) {
          aspects.push({
            planet1: planet1.name,
            planet2: planet2.name,
            angle,
            aspectType: aspectDef.name,
            aspectTypeChinese: aspectDef.nameChinese,
            orb,
            isApplying: true // 简化处理
          })
          break
        }
      }
    }
  }
  
  return aspects
}

/**
 * 分析星盘模式和元素分布
 */
function analyzeChart(planets: CelestialBody[]): ChartSummary {
  const elements = { fire: 0, earth: 0, air: 0, water: 0 }
  const qualities = { cardinal: 0, fixed: 0, mutable: 0 }
  
  // 统计元素和性质分布
  planets.forEach(planet => {
    const sign = planet.sign
    
    // 火象星座
    if (['Aries', 'Leo', 'Sagittarius'].includes(sign)) {
      elements.fire++
    }
    // 土象星座
    else if (['Taurus', 'Virgo', 'Capricorn'].includes(sign)) {
      elements.earth++
    }
    // 风象星座
    else if (['Gemini', 'Libra', 'Aquarius'].includes(sign)) {
      elements.air++
    }
    // 水象星座
    else if (['Cancer', 'Scorpio', 'Pisces'].includes(sign)) {
      elements.water++
    }
    
    // 基本星座
    if (['Aries', 'Cancer', 'Libra', 'Capricorn'].includes(sign)) {
      qualities.cardinal++
    }
    // 固定星座
    else if (['Taurus', 'Leo', 'Scorpio', 'Aquarius'].includes(sign)) {
      qualities.fixed++
    }
    // 变动星座
    else if (['Gemini', 'Virgo', 'Sagittarius', 'Pisces'].includes(sign)) {
      qualities.mutable++
    }
  })
  
  // 找出主导元素
  const dominantElement = Object.keys(elements).reduce((a, b) => 
    elements[a as keyof typeof elements] > elements[b as keyof typeof elements] ? a : b
  )
  
  const dominantQuality = Object.keys(qualities).reduce((a, b) => 
    qualities[a as keyof typeof qualities] > qualities[b as keyof typeof qualities] ? a : b
  )
  
  // 获取关键星座
  const sun = planets.find(p => p.name === 'Sun')
  const moon = planets.find(p => p.name === 'Moon')
  const asc = planets.find(p => p.house === 1)
  
  const sunSign = sun?.signChinese || ''
  const moonSign = moon?.signChinese || ''
  const risingSign = asc?.signChinese || ''
  
  // 生成描述
  const elementMap: Record<string, string> = {
    fire: '火象能量主导，具有热情、冲动和领导特质',
    earth: '土象能量主导，具有稳定、实际和踏实特质', 
    air: '风象能量主导，具有理性、沟通和思维特质',
    water: '水象能量主导，具有情感、直觉和同理特质'
  }
  
  const qualityMap: Record<string, string> = {
    cardinal: '开创性强，喜欢主动发起和领导',
    fixed: '稳定性强，具有坚持和专注特质',
    mutable: '适应性强，灵活变通和多元发展'
  }
  
  const description = `你的星盘显示${elementMap[dominantElement]}，${qualityMap[dominantQuality]}。${sunSign}太阳赋予你核心特质，${moonSign}月亮反映你的内在情感需求，而${risingSign}上升则是你展现给世界的面貌。`
  
  return {
    sunSign,
    moonSign, 
    risingSign,
    dominantElement,
    dominantQuality,
    chartPattern: 'Standard', // 简化处理
    description
  }
}

/**
 * 计算完整的本命盘
 */
export async function calculateNatalChart(birthData: BirthData): Promise<NatalChart> {
  const julianDay = dateObjectToJulianDay(birthData.dateTime)
  const T = julianCenturiesFromJ2000(julianDay)
  
  // 计算黄道倾角
  const obliquity = calculateObliquity(T)
  
  // 计算当地恒星时
  const lst = calculateLST(julianDay, birthData.longitude)
  
  // 计算宫位
  const houses = calculateHouses(lst, birthData.latitude, obliquity)
  const ascendant = houses[0]  // 第1宫 = 上升点
  const midheaven = houses[9]  // 第10宫 = 天顶
  
  // 计算所有行星位置
  const planetPositions = calculateAllPlanets(julianDay)
  
  // 特别计算月球位置（使用ELP2000）
  const moonPosition = calculateMoonPosition(julianDay)
  planetPositions.moon = moonPosition
  
  // 构建天体对象数组
  const planets: CelestialBody[] = []
  
  for (const [planetName, position] of Object.entries(planetPositions)) {
    const planetInfo = PLANET_INFO[planetName as keyof typeof PLANET_INFO]
    if (!planetInfo) continue
    
    const zodiac = longitudeToZodiacSign(position.longitude)
    const house = findHouseNumber(position.longitude, houses)
    const retrograde = isRetrograde(planetName, julianDay)
    
    planets.push({
      name: planetInfo.name,
      nameChinese: planetInfo.nameChinese,
      longitude: position.longitude,
      latitude: position.latitude,
      sign: zodiac.sign,
      signChinese: zodiac.signChinese,
      degree: zodiac.degree,
      house,
      retrograde
    })
  }
  
  // 计算相位
  const aspects = calculateAspects(planets)
  
  // 分析星盘
  const summary = analyzeChart(planets)
  
  const chart = {
    birthData,
    houses,
    ascendant,
    midheaven,
    planets,
    aspects,
    summary,
    interpretation: '' // 临时占位
  }
  
  // 生成详细解读
  chart.interpretation = generateChartInterpretation(chart)
  
  return chart
}

/**
 * 获取行星在星座的详细含义
 */
export function getPlanetSignMeaning(planet: string, sign: string, language: 'en' | 'zh' = 'zh'): string {
  if (language === 'zh') {
    // 尝试从详细数据中获取简化版本的解读
    try {
      // 这里我们使用一个简化的解读，从JSON数据中提取星座部分
      const planetSignMap: Record<string, Record<string, string>> = {
        'Sun': {
          'Aries': '太阳在白羊座带来开创与直接的表达，你更倾向以行动的方式推动自我实现。',
          'Taurus': '太阳在金牛座带来稳健与务实的表达，你更倾向以耐心的方式推动自我实现。',
          'Gemini': '太阳在双子座带来机敏与好奇的表达，你更倾向以沟通的方式推动自我实现。',
          'Cancer': '太阳在巨蟹座带来照护与敏感的表达，你更倾向以归属的方式推动自我实现。',
          'Leo': '太阳在狮子座带来自信与表演的表达，你更倾向以创造的方式推动自我实现。',
          'Virgo': '太阳在处女座带来细致与服务的表达，你更倾向以完善的方式推动自我实现。',
          'Libra': '太阳在天秤座带来和谐与合作的表达，你更倾向以平衡的方式推动自我实现。',
          'Scorpio': '太阳在天蝎座带来深度与转化的表达，你更倾向以洞察的方式推动自我实现。',
          'Sagittarius': '太阳在射手座带来探索与哲学的表达，你更倾向以扩展的方式推动自我实现。',
          'Capricorn': '太阳在摩羯座带来务实与责任的表达，你更倾向以建构的方式推动自我实现。',
          'Aquarius': '太阳在水瓶座带来独立与创新的表达，你更倾向以改革的方式推动自我实现。',
          'Pisces': '太阳在双鱼座带来直觉与同理的表达，你更倾向以融合的方式推动自我实现。'
        },
        'Moon': {
          'Aries': '月亮在白羊座带来直接的情感表达，需要独立的情感空间来平衡内在需求。',
          'Taurus': '月亮在金牛座带来稳定的情感表达，需要安全的情感环境来平衡内在需求。',
          'Gemini': '月亮在双子座带来多变的情感表达，需要智性的情感交流来平衡内在需求。',
          'Cancer': '月亮在巨蟹座带来深刻的情感表达，需要归属的情感连接来平衡内在需求。',
          'Leo': '月亮在狮子座带来热烈的情感表达，需要被欣赏的情感认可来平衡内在需求。',
          'Virgo': '月亮在处女座带来内敛的情感表达，需要有序的情感环境来平衡内在需求。',
          'Libra': '月亮在天秤座带来和谐的情感表达，需要平衡的情感关系来平衡内在需求。',
          'Scorpio': '月亮在天蝎座带来深沉的情感表达，需要深度的情感连接来平衡内在需求。',
          'Sagittarius': '月亮在射手座带来自由的情感表达，需要探索的情感体验来平衡内在需求。',
          'Capricorn': '月亮在摩羯座带来克制的情感表达，需要稳定的情感结构来平衡内在需求。',
          'Aquarius': '月亮在水瓶座带来超脱的情感表达，需要友谊的情感支持来平衡内在需求。',
          'Pisces': '月亮在双鱼座带来敏感的情感表达，需要精神的情感寄托来平衡内在需求。'
        }
      }
      
      const meaning = planetSignMap[planet]?.[sign]
      if (meaning) {
        return meaning
      }
    } catch (error) {
      console.log('获取行星星座含义出错:', error)
    }
  }
  
  // 默认返回基础描述
  return language === 'zh' 
    ? `${planet}位于${sign}，带来独特的能量组合。`
    : `${planet} in ${sign} brings a unique energy combination.`
}

/**
 * 获取行星在宫位的含义
 */
export function getPlanetHouseMeaning(planet: string, house: number, language: 'en' | 'zh' = 'zh'): string {
  if (language === 'zh') {
    const houseDescriptions = {
      1: '影响个人形象与自我表达，展现你最直接的个性特质。',
      2: '影响财富观念与价值体系，关注物质安全与资源管理。',
      3: '影响沟通方式与学习能力，重视信息交流与知识获取。',
      4: '影响家庭关系与内在安全，关注情感根基与归属感。',
      5: '影响创造表达与娱乐爱好，展现艺术天赋与浪漫情怀。',
      6: '影响工作态度与健康管理，注重服务精神与日常习惯。',
      7: '影响伴侣关系与合作模式，重视平等伙伴与协调配合。',
      8: '影响深层转化与共享资源，关注心理探索与投资理财。',
      9: '影响哲学信念与远行探索，追求智慧真理与精神成长。',
      10: '影响事业发展与社会地位，展现公众形象与职业成就。',
      11: '影响友谊网络与理想愿景，重视团体活动与社会理想。',
      12: '影响潜意识探索与精神修养，关注内在成长与奉献服务。'
    }
    
    return houseDescriptions[house as keyof typeof houseDescriptions] || '影响着相应的生活领域。'
  }
  
  const houseNames = {
    1: '1st House (Self)', 2: '2nd House (Resources)', 3: '3rd House (Communication)', 4: '4th House (Home)',
    5: '5th House (Creativity)', 6: '6th House (Service)', 7: '7th House (Relationships)', 8: '8th House (Transformation)',
    9: '9th House (Philosophy)', 10: '10th House (Career)', 11: '11th House (Friendship)', 12: '12th House (Spirituality)'
  }
  
  const houseName = houseNames[house as keyof typeof houseNames] || `${house}th House`
  return `${planet} in ${houseName} influences how you express yourself in this area of life.`
}