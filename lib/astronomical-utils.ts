/**
 * 天文计算工具函数
 * 用于支持VSOP87和ELP2000算法的基础计算
 */

// 常量定义
export const ASTRONOMICAL_CONSTANTS = {
  // 儒略日基准日期 (J2000.0)
  J2000: 2451545.0,
  // 度数转弧度
  DEG_TO_RAD: Math.PI / 180.0,
  // 弧度转度数
  RAD_TO_DEG: 180.0 / Math.PI,
  // 角秒转弧度
  ARCSEC_TO_RAD: Math.PI / (180.0 * 3600.0),
  // 一世纪的天数
  DAYS_PER_CENTURY: 36525.0,
  // 地球轨道离心率 (J2000.0)
  EARTH_ECCENTRICITY: 0.0167086342,
  // 黄道倾角 (J2000.0)
  OBLIQUITY_J2000: 23.4392794444 * Math.PI / 180.0
}

/**
 * 日期转换为儒略日
 */
export function dateToJulianDay(year: number, month: number, day: number, hour: number = 12, minute: number = 0, second: number = 0): number {
  // 调整月份和年份（天文算法标准）
  if (month <= 2) {
    year -= 1
    month += 12
  }
  
  const A = Math.floor(year / 100)
  const B = 2 - A + Math.floor(A / 4)
  
  const JD = Math.floor(365.25 * (year + 4716)) + 
             Math.floor(30.6001 * (month + 1)) + 
             day + B - 1524.5 + 
             (hour + minute / 60 + second / 3600) / 24
  
  return JD
}

/**
 * JavaScript Date对象转儒略日
 */
export function dateObjectToJulianDay(date: Date): number {
  return dateToJulianDay(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  )
}

/**
 * 计算从J2000.0开始的儒略世纪数
 */
export function julianCenturiesFromJ2000(julianDay: number): number {
  return (julianDay - ASTRONOMICAL_CONSTANTS.J2000) / ASTRONOMICAL_CONSTANTS.DAYS_PER_CENTURY
}

/**
 * 规范化角度到0-360度范围
 */
export function normalizeAngle(angle: number): number {
  let normalized = angle % 360
  if (normalized < 0) normalized += 360
  return normalized
}

/**
 * 规范化角度到-180到180度范围
 */
export function normalizeAngleSigned(angle: number): number {
  let normalized = normalizeAngle(angle)
  if (normalized > 180) normalized -= 360
  return normalized
}

/**
 * 计算黄道倾角（地球轴倾斜角）
 */
export function calculateObliquity(T: number): number {
  // IAU 2000模型
  const obliquity = 23.4392794444 - 
                   0.0130125222 * T -
                   0.0000001639 * T * T +
                   0.0000005036 * T * T * T
  
  return obliquity * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
}

/**
 * 黄道坐标转赤道坐标
 */
export function eclipticToEquatorial(longitude: number, latitude: number, obliquity: number): { ra: number, dec: number } {
  const lonRad = longitude * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const latRad = latitude * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  const cosLat = Math.cos(latRad)
  const sinLat = Math.sin(latRad)
  const cosLon = Math.cos(lonRad)
  const sinLon = Math.sin(lonRad)
  const cosObl = Math.cos(obliquity)
  const sinObl = Math.sin(obliquity)
  
  const ra = Math.atan2(sinLon * cosObl - Math.tan(latRad) * sinObl, cosLon)
  const dec = Math.asin(sinLat * cosObl + cosLat * sinObl * sinLon)
  
  return {
    ra: normalizeAngle(ra * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG),
    dec: dec * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  }
}

/**
 * 计算格林尼治平恒星时
 */
export function calculateGMST(julianDay: number): number {
  const T = (julianDay - ASTRONOMICAL_CONSTANTS.J2000) / ASTRONOMICAL_CONSTANTS.DAYS_PER_CENTURY
  
  // IAU公式计算GMST
  let gmst = 280.46061837 + 
            360.98564736629 * (julianDay - ASTRONOMICAL_CONSTANTS.J2000) +
            0.000387933 * T * T -
            T * T * T / 38710000
  
  return normalizeAngle(gmst)
}

/**
 * 计算当地恒星时
 */
export function calculateLST(julianDay: number, longitude: number): number {
  const gmst = calculateGMST(julianDay)
  return normalizeAngle(gmst + longitude)
}

/**
 * 赤道坐标转地平坐标
 */
export function equatorialToHorizontal(ra: number, dec: number, lst: number, latitude: number): { azimuth: number, altitude: number } {
  const hourAngle = normalizeAngleSigned(lst - ra) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const decRad = dec * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const latRad = latitude * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  const sinAlt = Math.sin(decRad) * Math.sin(latRad) + 
                 Math.cos(decRad) * Math.cos(latRad) * Math.cos(hourAngle)
  
  const altitude = Math.asin(sinAlt)
  
  const y = -Math.sin(hourAngle)
  const x = Math.tan(decRad) * Math.cos(latRad) - Math.sin(latRad) * Math.cos(hourAngle)
  
  let azimuth = Math.atan2(y, x) * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  if (azimuth < 0) azimuth += 360
  
  return {
    azimuth: normalizeAngle(azimuth),
    altitude: altitude * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  }
}

/**
 * 计算太阳的平近点角
 */
export function solarMeanAnomaly(T: number): number {
  const M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000
  return normalizeAngle(M) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
}

/**
 * 计算地心距离修正
 */
export function earthRadiusVector(T: number): number {
  const M = solarMeanAnomaly(T)
  const C = (1.9146 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * M) +
            0.000289 * Math.sin(3 * M)
  
  const nu = M + C * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const R = 1.000001018 * (1 - ASTRONOMICAL_CONSTANTS.EARTH_ECCENTRICITY * ASTRONOMICAL_CONSTANTS.EARTH_ECCENTRICITY) / 
            (1 + ASTRONOMICAL_CONSTANTS.EARTH_ECCENTRICITY * Math.cos(nu))
  
  return R
}

/**
 * 星座名称映射
 */
export const ZODIAC_SIGNS = {
  names: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
          'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
  namesChinese: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座',
                 '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
}

/**
 * 根据黄经计算星座
 */
export function longitudeToZodiacSign(longitude: number): { sign: string, signChinese: string, degree: number } {
  const normalizedLon = normalizeAngle(longitude)
  const signIndex = Math.floor(normalizedLon / 30)
  const degree = normalizedLon % 30
  
  return {
    sign: ZODIAC_SIGNS.names[signIndex],
    signChinese: ZODIAC_SIGNS.namesChinese[signIndex],
    degree: degree
  }
}

/**
 * 计算宫位（使用Placidus宫位制）
 */
export function calculateHouses(lst: number, latitude: number, obliquity: number): number[] {
  const latRad = latitude * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const oblRad = obliquity
  
  // 计算第10宫（天顶）
  const MC = lst
  
  // 计算第1宫（上升点）
  const sinLat = Math.sin(latRad)
  const cosLat = Math.cos(latRad)
  const tanObl = Math.tan(oblRad)
  
  const y = -Math.cos(lst * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD)
  const x = Math.sin(lst * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD) / tanObl - sinLat / (tanObl * cosLat)
  
  let ASC = Math.atan2(y, x) * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  if (ASC < 0) ASC += 360
  
  // 简化的Placidus宫位计算
  const houses = new Array(12)
  houses[0] = ASC  // 第1宫
  houses[9] = MC   // 第10宫
  houses[3] = normalizeAngle(ASC + 180)  // 第4宫
  houses[6] = normalizeAngle(MC + 180)   // 第7宫
  
  // 其他宫位的简化计算
  for (let i = 1; i <= 3; i++) {
    houses[i] = normalizeAngle(houses[0] + i * 30)      // 第2,3,4宫
    houses[i + 3] = normalizeAngle(houses[3] + i * 30)  // 第5,6,7宫
    houses[i + 6] = normalizeAngle(houses[6] + i * 30)  // 第8,9,10宫
    houses[i + 9] = normalizeAngle(houses[9] + i * 30)  // 第11,12,1宫
  }
  
  return houses
}

/**
 * 根据黄经和宫位计算所在宫位
 */
export function findHouseNumber(longitude: number, houses: number[]): number {
  const normalizedLon = normalizeAngle(longitude)
  
  for (let i = 0; i < 12; i++) {
    const currentHouse = houses[i]
    const nextHouse = houses[(i + 1) % 12]
    
    if (nextHouse > currentHouse) {
      if (normalizedLon >= currentHouse && normalizedLon < nextHouse) {
        return i + 1
      }
    } else {
      // 跨越0度的情况
      if (normalizedLon >= currentHouse || normalizedLon < nextHouse) {
        return i + 1
      }
    }
  }
  
  return 1 // 默认返回第1宫
}

/**
 * 时区转换到UTC
 */
export function convertToUTC(localDateTime: Date, timezoneOffset: number): Date {
  return new Date(localDateTime.getTime() + timezoneOffset * 60000)
}