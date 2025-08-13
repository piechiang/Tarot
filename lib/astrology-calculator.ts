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
  longitudeToZodiacSign,
  estimateDeltaTSeconds,
  angleDifference,
  angleSeparation,
  normalizeAngle,
  signedLonDiff,
  HouseCalculation,
  transformReferenceFrame,
  ReferenceFrameTransformOptions
} from './astronomical-utils'

import { calculateAllPlanets, calculatePlanetGeocentric } from './vsop87-planets'
import { calculateMoonPosition } from './elp2000-moon'
import { generateChartInterpretation } from './chart-interpretations'

// 出生数据接口
// IMPORTANT: dateTime must be in UTC to avoid double timezone conversion
// Use UI layer timezone libraries (moment-timezone/luxon) to convert local time to UTC
export interface BirthData {
  dateTime: Date      // Must be UTC - this is used for calculations
  latitude: number    // Degrees: [-90, 90] (South negative, North positive)
  longitude: number   // Degrees: [-180, 180] (West negative, East positive)
  /** @deprecated displayOnly: not used in calculations */ 
  timezone?: number   // Hours offset from UTC, for display purposes only
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
  houses: HouseCalculation  // 使用命名结构而非数组
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

// 相位定义 - 基础容许度
const BASE_ASPECTS = [
  { name: 'Conjunction', nameChinese: '合相', angle: 0, orb: 8 },
  { name: 'Sextile', nameChinese: '六合', angle: 60, orb: 4 },
  { name: 'Square', nameChinese: '刑相', angle: 90, orb: 6 },
  { name: 'Trine', nameChinese: '三合', angle: 120, orb: 6 },
  { name: 'Opposition', nameChinese: '对冲', angle: 180, orb: 8 }
]

// 发光体（太阳/月亮）的额外容许度
const LUMINARY_ORB_BONUS = 2

/**
 * 格式化数值用于展示 - 分离计算精度和展示精度
 * @param value 数值
 * @param decimalPlaces 小数位数，默认2位
 * @returns 格式化后的数值
 */
function formatForDisplay(value: number, decimalPlaces: number = 2): number {
  return +value.toFixed(decimalPlaces)
}

/**
 * 校验出生数据的有效性
 * @param birthData 出生数据
 * @throws Error 当数据无效时
 */
function validateBirthData(birthData: BirthData): void {
  if (!birthData) {
    throw new Error('Birth data is required')
  }
  
  // 验证日期时间
  if (!(birthData.dateTime instanceof Date)) {
    throw new Error('dateTime must be a valid Date object')
  }
  
  if (isNaN(birthData.dateTime.getTime())) {
    throw new Error('dateTime must be a valid date')
  }
  
  // 检查是否为合理的历史日期范围（支持占星计算的常见范围）
  const year = birthData.dateTime.getFullYear()
  if (year < 1800 || year > 2100) {
    console.warn(`Birth year ${year} is outside recommended range [1800, 2100]. Results may have reduced accuracy.`)
  }
  
  // 验证经纬度
  if (typeof birthData.latitude !== 'number' || isNaN(birthData.latitude)) {
    throw new Error('latitude must be a valid number')
  }
  
  if (birthData.latitude < -90 || birthData.latitude > 90) {
    throw new Error(`latitude must be between -90 and 90 degrees, got ${birthData.latitude}`)
  }
  
  if (typeof birthData.longitude !== 'number' || isNaN(birthData.longitude)) {
    throw new Error('longitude must be a valid number')
  }
  
  if (birthData.longitude < -180 || birthData.longitude > 180) {
    throw new Error(`longitude must be between -180 and 180 degrees, got ${birthData.longitude}`)
  }
  
  // 软提示：UTC时间检查
  if (birthData.dateTime.getTimezoneOffset() !== 0) {
    console.warn('dateTime appears to have timezone offset. Ensure it is converted to UTC for accurate calculations.')
  }
  
  // 极地地区警告
  if (Math.abs(birthData.latitude) >= 66.5) {
    console.warn(`Latitude ${birthData.latitude}° is in polar region. House calculations may be imprecise.`)
  }
}

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

// 位置缓存接口 - 带LRU管理
interface PositionCache {
  [key: string]: { longitude: number; latitude: number }
}

interface ReferenceFrameOptions {
  center: 'geo' | 'helio'  // geocentric or heliocentric
  frame: 'ecl-date' | 'j2000'  // ecliptic-of-date or J2000
  applyNutation?: boolean
  applyAberration?: boolean
}

const MAX_CACHE_SIZE = 400
const MAX_CACHE_SIZE_MULTIPLIER = 2  // 紧急上限保护倍数
const MAX_PLANET_SAMPLES = 50        // 每个行星最大采样点数
const positionCache: PositionCache = {}
const cacheKeys: string[] = []


/**
 * 获取缓存统计信息
 */
export function getCacheStats(): { size: number, maxSize: number, planets: Record<string, number> } {
  const planetCounts: Record<string, number> = {}
  
  cacheKeys.forEach(key => {
    const planetName = key.split('|')[0]
    planetCounts[planetName] = (planetCounts[planetName] || 0) + 1
  })
  
  return {
    size: cacheKeys.length,
    maxSize: MAX_CACHE_SIZE,
    planets: planetCounts
  }
}

/**
 * LRU缓存管理函数 - 增强保护机制
 */
function setPositionCache(key: string, value: { longitude: number; latitude: number }): void {
  // 上限倍数保护：防止极端并发导致短时抖动
  if (cacheKeys.length >= MAX_CACHE_SIZE * MAX_CACHE_SIZE_MULTIPLIER) {
    console.warn(`[astrology] Cache size exceeded emergency limit (${MAX_CACHE_SIZE * MAX_CACHE_SIZE_MULTIPLIER}), performing aggressive cleanup`)
    
    // 紧急清理：移除一半缓存
    const keysToRemove = cacheKeys.splice(0, Math.floor(cacheKeys.length / 2))
    keysToRemove.forEach(k => delete positionCache[k])
  }
  
  // 检查单行星采样点上限
  const planetName = key.split('|')[0]
  const planetKeys = cacheKeys.filter(k => k.startsWith(planetName + '|'))
  if (planetKeys.length >= MAX_PLANET_SAMPLES) {
    // 移除该行星最老的采样点
    const oldestPlanetKey = planetKeys[0]
    const index = cacheKeys.indexOf(oldestPlanetKey)
    if (index !== -1) {
      cacheKeys.splice(index, 1)
      delete positionCache[oldestPlanetKey]
    }
  }
  
  // 如果key已存在，从原位置移除
  const existingIndex = cacheKeys.indexOf(key)
  if (existingIndex !== -1) {
    cacheKeys.splice(existingIndex, 1)
  }
  
  // 将key放到队尾（最近使用）
  cacheKeys.push(key)
  positionCache[key] = value
  
  // 标准LRU淘汰策略：移除最老的条目
  if (cacheKeys.length > MAX_CACHE_SIZE) {
    const oldKey = cacheKeys.shift()!
    delete positionCache[oldKey]
  }
}

/**
 * 缓存的行星位置获取函数 - 支持参考系选项
 */
function getCachedPlanetPosition(
  planetName: string, 
  jd: number, 
  options: ReferenceFrameOptions = { center: 'geo', frame: 'ecl-date', applyNutation: true, applyAberration: true }
): { longitude: number; latitude: number } {
  const key = `${planetName}|${jd.toFixed(6)}|${options.center}|${options.frame}|${options.applyNutation}|${options.applyAberration}`
  
  if (!positionCache[key]) {
    let position: { longitude: number; latitude: number }
    
    // 添加临时警告（在完全实现前）
    if (!(options.center === 'geo' && options.frame === 'ecl-date')) {
      console.warn('[astrology] ReferenceFrameOptions requested but transformations are TODO; results may be inconsistent.')
    }
    
    if (planetName === 'moon') {
      // Moon calculation - always geocentric, already in ecliptic-of-date
      position = calculateMoonPosition(jd)
    } else {
      // Planet calculation with reference frame options
      position = calculatePlanetGeocentric(planetName, jd)
      
      // 应用参考系变换
      if (options.frame === 'ecl-date' || options.applyNutation || options.applyAberration) {
        position = transformReferenceFrame(position, jd, undefined, {
          center: options.center,
          frame: options.frame,
          applyNutation: options.applyNutation,
          applyAberration: options.applyAberration
        })
      }
    }
    
    setPositionCache(key, position)
  } else {
    // 缓存命中时也要更新LRU顺序
    setPositionCache(key, positionCache[key])
  }
  
  return positionCache[key]
}

/**
 * 检查行星是否逆行 - 使用自适应采样策略
 */
function isRetrograde(
  planetName: string, 
  jdTT: number, 
  options: ReferenceFrameOptions = { center: 'geo', frame: 'ecl-date' }
): boolean {
  if (planetName === 'sun' || planetName === 'moon') return false
  
  // 使用与速度计算相同的自适应采样策略
  const velocity = calculateDailySpeed(planetName, jdTT, options)
  
  return velocity < 0
}

/**
 * 计算行星的日运动速度 (度/天) - 自适应采样版本（驻点处理）
 */
function calculateDailySpeed(
  planetName: string, 
  jdTT: number, 
  options: ReferenceFrameOptions = { center: 'geo', frame: 'ecl-date' }
): number {
  // 初始步长
  let timeStep = 0.25
  
  const getPosition = (jd: number) => getCachedPlanetPosition(planetName, jd, options).longitude
  
  // 计算初始速度
  let velocity = signedLonDiff(getPosition(jdTT - timeStep), getPosition(jdTT + timeStep)) / (2 * timeStep)
  
  // 如果速度很小（可能接近驻点），使用更精细的采样
  if (Math.abs(velocity) < 0.02) {
    timeStep = 0.1
    const pos1 = getPosition(jdTT - timeStep)
    const pos2 = getPosition(jdTT + timeStep)
    velocity = signedLonDiff(pos1, pos2) / (2 * timeStep)
    
    // 如果仍然很小，进一步细化（特别适用于水/金/火的驻点）
    if (Math.abs(velocity) < 0.005 && ['mercury', 'venus', 'mars'].includes(planetName)) {
      timeStep = 0.05
      const pos1Fine = getPosition(jdTT - timeStep)
      const pos2Fine = getPosition(jdTT + timeStep)
      velocity = signedLonDiff(pos1Fine, pos2Fine) / (2 * timeStep)
    }
  }
  
  return velocity
}

/**
 * 计算相位的动态容许度（考虑行星类型）
 */
function getAspectOrb(aspectName: string, planet1: string, planet2: string): number {
  const baseAspect = BASE_ASPECTS.find(a => a.name === aspectName)
  if (!baseAspect) return 5 // 默认容许度
  
  let orb = baseAspect.orb
  
  // 太阳和月亮有更大的容许度
  if (planet1 === 'Sun' || planet1 === 'Moon') orb += LUMINARY_ORB_BONUS
  if (planet2 === 'Sun' || planet2 === 'Moon') orb += LUMINARY_ORB_BONUS
  
  return orb
}

/**
 * 判断相位是入相还是出相
 */
function isApplyingAspect(
  lon1: number, speed1: number, 
  lon2: number, speed2: number, 
  exactAngle: number
): boolean {
  const currentSeparation = angleSeparation(lon1, lon2)
  
  // 计算未来一小段时间后的位置
  const futureTime = 0.1 // 0.1天后
  const futureLon1 = normalizeAngle(lon1 + speed1 * futureTime)
  const futureLon2 = normalizeAngle(lon2 + speed2 * futureTime)
  const futureSeparation = angleSeparation(futureLon1, futureLon2)
  
  // 如果未来与精确相位的距离小于当前距离，则为入相
  return Math.abs(futureSeparation - exactAngle) < Math.abs(currentSeparation - exactAngle)
}


/**
 * 计算相位 - 改进版本，包含入相/出相判断
 */
function calculateAspects(planets: CelestialBody[], planetSpeeds: Record<string, number>): Aspect[] {
  const aspects: Aspect[] = []
  
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const planet1 = planets[i]
      const planet2 = planets[j]
      const separation = angleSeparation(planet1.longitude, planet2.longitude)
      
      for (const aspectDef of BASE_ASPECTS) {
        const orbMax = getAspectOrb(aspectDef.name, planet1.name, planet2.name)
        const orb = Math.abs(separation - aspectDef.angle)
        
        if (orb <= orbMax) {
          const speed1 = planetSpeeds[planet1.name] || 0
          const speed2 = planetSpeeds[planet2.name] || 0
          const applying = isApplyingAspect(
            planet1.longitude, speed1,
            planet2.longitude, speed2,
            aspectDef.angle
          )
          
          aspects.push({
            planet1: planet1.name,
            planet2: planet2.name,
            angle: separation,  // 保持计算精度，仅在展示时四舍五入
            aspectType: aspectDef.name,
            aspectTypeChinese: aspectDef.nameChinese,
            orb: orb,          // 保持计算精度，仅在展示时四舍五入
            isApplying: applying
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
function analyzeChart(planets: CelestialBody[], ascendant: number): ChartSummary {
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
  // 上升星座通过上升点黄经计算，而不是找第1宫的行星
  const ascendantZodiac = longitudeToZodiacSign(ascendant)
  
  const sunSign = sun?.signChinese || ''
  const moonSign = moon?.signChinese || ''
  const risingSign = ascendantZodiac.signChinese
  
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
 * 计算完整的本命盘 - 改进版本，使用精确时间标准
 */
export async function calculateNatalChart(
  birthData: BirthData, 
  options: ReferenceFrameOptions = { center: 'geo', frame: 'ecl-date' }
): Promise<NatalChart> {
  // 输入校验和边界检查
  validateBirthData(birthData)
  
  // 1. 时间转换：从UTC到TT (Terrestrial Time)
  // IMPORTANT: birthData.dateTime MUST be UTC already
  // UI layer should use timezone libraries to convert local time to UTC
  const jdUTC = dateObjectToJulianDay(birthData.dateTime)  // UT1 ≈ UTC
  
  // 修正：estimateΔTSeconds 已经返回 TT - UT1，不需要再加 32.184s
  const deltaT = estimateDeltaTSeconds(birthData.dateTime)
  const jdTT = jdUTC + deltaT / 86400  // TT = UT1 + ΔT
  
  // 2. 基于TT的天文时间
  const T = julianCenturiesFromJ2000(jdTT)
  
  // 3. 计算真黄道倾角（包含章动）
  const { epsTrue } = calculateObliquity(T)
  
  // 4. 计算当地恒星时（使用UT时间）
  const lst = calculateLST(jdUTC, birthData.longitude)
  
  // 5. 计算宫位（使用真黄道倾角）
  const houses = calculateHouses(lst, birthData.latitude, epsTrue)
  
  // 验证宫位计算结果
  if (!houses.cusps || houses.cusps.length !== 12) {
    throw new Error(`Invalid house calculation: expected 12 cusps, got ${houses.cusps?.length || 0}`)
  }
  
  for (let i = 0; i < 12; i++) {
    const cusp = houses.cusps[i]
    if (typeof cusp !== 'number' || isNaN(cusp)) {
      throw new Error(`Invalid house cusp ${i + 1}: must be a valid number, got ${cusp}`)
    }
  }
  
  const ascendant = houses.asc   // 上升点
  const midheaven = houses.mc    // 天顶
  
  // 6. 计算所有行星位置（使用TT时间以获得精确的星历表）
  const planetPositions = calculateAllPlanets(jdTT)
  // TODO: Add reference frame options to calculateAllPlanets
  
  // 7. 特别计算月球位置（使用ELP2000）
  const moonPosition = calculateMoonPosition(jdTT)
  // TODO: Add reference frame options to calculateMoonPosition
  planetPositions.moon = moonPosition
  
  // 8. 计算行星速度（用于相位分析）
  const planetSpeeds: Record<string, number> = {}
  for (const rawPlanetName of Object.keys(planetPositions)) {
    // 确保键名小写一致性
    const normalizedName = rawPlanetName.toLowerCase()
    const planetInfo = PLANET_INFO[normalizedName as keyof typeof PLANET_INFO]
    
    if (planetInfo) {
      // 使用标准化的行星名称作为键（如 "Sun", "Moon" 等）
      const planetKey = planetInfo.name
      planetSpeeds[planetKey] = calculateDailySpeed(normalizedName, jdTT, options)
    } else {
      // 后备方案：使用原始名称
      console.warn(`Unknown planet name: ${rawPlanetName}, using as-is`)
      planetSpeeds[rawPlanetName] = calculateDailySpeed(normalizedName, jdTT, options)
    }
  }
  
  // 9. 构建天体对象数组
  const planets: CelestialBody[] = []
  
  for (const [rawPlanetName, position] of Object.entries(planetPositions)) {
    const normalizedName = rawPlanetName.toLowerCase()
    const planetInfo = PLANET_INFO[normalizedName as keyof typeof PLANET_INFO]
    if (!planetInfo) {
      console.warn(`Skipping unknown planet: ${rawPlanetName}`)
      continue
    }
    
    const zodiac = longitudeToZodiacSign(position.longitude)
    const house = findHouseNumber(position.longitude, houses.cusps)
    const retrograde = isRetrograde(normalizedName, jdTT, options)
    
    planets.push({
      name: planetInfo.name,
      nameChinese: planetInfo.nameChinese,
      longitude: formatForDisplay(normalizeAngle(position.longitude)),
      latitude: formatForDisplay(position.latitude),
      sign: zodiac.sign,
      signChinese: zodiac.signChinese,
      degree: formatForDisplay(zodiac.degree),
      house,
      retrograde
    })
  }
  
  // 10. 计算相位（包含入相/出相分析）
  const aspects = calculateAspects(planets, planetSpeeds)
  
  // 11. 分析星盘（使用正确的上升星座）
  const summary = analyzeChart(planets, ascendant)
  
  const chart: NatalChart = {
    birthData,
    houses,
    ascendant,
    midheaven,
    planets,
    aspects,
    summary,
    interpretation: '' // 临时占位
  }
  
  // 12. 生成详细解读
  chart.interpretation = generateChartInterpretation(chart)
  
  // 13. 清空位置缓存（如果需要）
  // 在某些使用场景下可能需要在每次计算后清空缓存
  // clearPositionCache()
  
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

/**
 * 清空位置缓存（可选使用）
 */
export function clearPositionCache(): void {
  Object.keys(positionCache).forEach(key => delete positionCache[key])
  cacheKeys.length = 0
}