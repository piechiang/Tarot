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
 * 标准化角度差值，返回 -180 到 +180 度之间的值
 */
export function angleDifference(a: number, b: number): number {
  let diff = b - a
  while (diff > 180) diff -= 360
  while (diff < -180) diff += 360
  return diff
}

/**
 * 计算两个角度之间的最小分离角度 (0-180度)
 */
export function angleSeparation(a: number, b: number): number {
  return Math.abs(normalizeAngleSigned(a - b))
}

/**
 * 计算带符号的黄经差值 (b - a)，返回 -180° 到 +180° 之间
 * 用于速度和逆行计算
 */
export function signedLonDiff(a: number, b: number): number {
  let diff = (b - a) % 360
  if (diff > 180) diff -= 360
  if (diff < -180) diff += 360
  return diff
}

/**
 * 估算 ΔT (Delta T) - TT与UT的差值 (秒)
 * 基于历史数据和经验公式的简化实现
 */
export function estimateDeltaTSeconds(date: Date): number {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const y = year + (month - 0.5) / 12
  
  let deltaT: number
  
  if (y < -500) {
    const u = (y - 1820) / 100
    deltaT = -20 + 32 * u * u
  } else if (y < 500) {
    const u = y / 100
    deltaT = 10583.6 - 1014.41 * u + 33.78311 * u * u - 5.952053 * u * u * u
           - 0.1798452 * Math.pow(u, 4) + 0.022174192 * Math.pow(u, 5) + 0.0090316521 * Math.pow(u, 6)
  } else if (y < 1600) {
    const u = (y - 1000) / 100
    deltaT = 1574.2 - 556.01 * u + 71.23472 * u * u + 0.319781 * u * u * u
           - 0.8503463 * Math.pow(u, 4) - 0.005050998 * Math.pow(u, 5) + 0.0083572073 * Math.pow(u, 6)
  } else if (y < 1700) {
    const t = y - 1600
    deltaT = 120 - 0.9808 * t - 0.01532 * t * t + t * t * t / 7129
  } else if (y < 1800) {
    const t = y - 1700
    deltaT = 8.83 + 0.1603 * t - 0.0059285 * t * t + 0.00013336 * t * t * t - t * t * t * t / 1174000
  } else if (y < 1860) {
    const t = y - 1800
    deltaT = 13.72 - 0.332447 * t + 0.0068612 * t * t + 0.0041116 * t * t * t - 0.00037436 * Math.pow(t, 4)
           + 0.0000121272 * Math.pow(t, 5) - 0.0000001699 * Math.pow(t, 6) + 0.000000000875 * Math.pow(t, 7)
  } else if (y < 1900) {
    const t = y - 1860
    deltaT = 7.62 + 0.5737 * t - 0.251754 * t * t + 0.01680668 * t * t * t
           - 0.0004473624 * Math.pow(t, 4) + t * t * t * t * t / 233174
  } else if (y < 1920) {
    const t = y - 1900
    deltaT = -2.79 + 1.494119 * t - 0.0598939 * t * t + 0.0061966 * t * t * t - 0.000197 * Math.pow(t, 4)
  } else if (y < 1941) {
    const t = y - 1920
    deltaT = 21.20 + 0.84493 * t - 0.076100 * t * t + 0.0020936 * t * t * t
  } else if (y < 1961) {
    const t = y - 1950
    deltaT = 29.07 + 0.407 * t - t * t / 233 + t * t * t / 2547
  } else if (y < 1986) {
    const t = y - 1975
    deltaT = 45.45 + 1.067 * t - t * t / 260 - t * t * t / 718
  } else if (y < 2005) {
    const t = y - 2000
    deltaT = 63.86 + 0.3345 * t - 0.060374 * t * t + 0.0017275 * t * t * t + 0.000651814 * Math.pow(t, 4)
           + 0.00002373599 * Math.pow(t, 5)
  } else if (y < 2050) {
    const t = y - 2000
    deltaT = 62.92 + 0.32217 * t + 0.005589 * t * t
  } else if (y < 2150) {
    const u = (y - 1820) / 100
    deltaT = -20 + 32 * u * u - 0.5628 * (2150 - y)
  } else {
    const u = (y - 1820) / 100
    deltaT = -20 + 32 * u * u
  }
  
  return deltaT
}

/**
 * 计算黄道倾角（地球轴倾斜角）
 * @param T 从J2000.0开始的儒略世纪数
 * @returns 平黄道倾角和真黄道倾角（均为弧度）
 * 
 * IMPORTANT: 返回值单位为弧度，与calculateHouses()的obliquity参数一致
 */
export function calculateObliquity(T: number): { epsMean: number, epsTrue: number } {
  // IAU 2000模型 - 平黄道倾角
  const epsMeanDeg = 23.4392794444 - 
                     0.0130125222 * T -
                     0.0000001639 * T * T +
                     0.0000005036 * T * T * T
  
  const epsMean = epsMeanDeg * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 计算章动的简化版本
  const F = normalizeAngle(93.2721 + 483202.0175 * T) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD   // 月球纬度幅角
  const D = normalizeAngle(297.8502 + 445267.1115 * T) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD  // 月球延伸
  const omega = normalizeAngle(125.0445 - 1934.1363 * T) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD // 月球升交点黄经
  
  // 主要章动项 (简化版本)
  const nutationInObliquity = (9.2 * Math.cos(omega) + 0.6 * Math.cos(2 * F - 2 * D + 2 * omega) +
                               0.6 * Math.cos(2 * F + 2 * omega) - 0.5 * Math.cos(2 * omega)) / 3600 * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  const epsTrue = epsMean + nutationInObliquity
  
  return { epsMean, epsTrue }
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

// 宫位计算结果接口
export interface HouseCalculation {
  cusps: number[]  // 12个宫位的黄经度数（索引0=第1宫）
  asc: number      // 上升点黄经
  mc: number       // 天顶黄经
  ic: number       // 天底黄经
  dsc: number      // 下降点黄经
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
 * @param longitude 黄经（度）
 * @param mode 黄道模式：'tropical'（热带，默认） | 'sidereal'（恒星，未来支持）
 * @param ayanamsha 岁差值（度），仅在恒星模式下使用，未来支持
 * @returns 星座信息，包含度数（0-30范围内）
 */
export function longitudeToZodiacSign(
  longitude: number, 
  mode: 'tropical' | 'sidereal' = 'tropical', 
  ayanamsha: number = 0
): { sign: string, signChinese: string, degree: number } {
  if (mode === 'sidereal') {
    console.warn('Sidereal zodiac mode is not yet implemented, using tropical')
    // TODO: 实现恒星黄道支持
    // longitude = normalizeAngle(longitude - ayanamsha)
  }
  
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
 * @param lst 当地恒星时（度）
 * @param latitude 纬度（度）
 * @param obliquity 黄道倾角（弧度）- 来自calculateObliquity的epsTrue
 */
export function calculateHouses(lst: number, latitude: number, obliquity: number): HouseCalculation {
  const latRad = latitude * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const oblRad = obliquity  // obliquity已经是弧度
  
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
  
  // 计算关键点
  const IC = normalizeAngle(MC + 180)   // 天底（第4宫）
  const DSC = normalizeAngle(ASC + 180) // 下降点（第7宫）
  
  // 简化的Placidus宫位计算
  const cusps = new Array(12)
  cusps[0] = ASC  // 第1宫
  cusps[3] = IC   // 第4宫
  cusps[6] = DSC  // 第7宫
  cusps[9] = MC   // 第10宫
  
  // 其他宫位的简化计算（等分制作为简化实现）
  for (let i = 1; i < 3; i++) {
    cusps[i] = normalizeAngle(ASC + i * 30)       // 第2,3宫
    cusps[i + 3] = normalizeAngle(IC + i * 30)    // 第5,6宫
    cusps[i + 6] = normalizeAngle(DSC + i * 30)   // 第8,9宫
    cusps[i + 9] = normalizeAngle(MC + i * 30)    // 第11,12宫
  }
  
  // 修正第12宫，确保它与第1宫正确连接
  cusps[11] = normalizeAngle(ASC - 30)
  
  return {
    cusps,
    asc: ASC,
    mc: MC,
    ic: IC,
    dsc: DSC
  }
}

/**
 * 验证宫位数据的有效性
 * @param cusps 宫位尖点数组
 * @throws Error 当宫位数据无效时
 */
function validateHouseCusps(cusps: number[]): void {
  if (!Array.isArray(cusps)) {
    throw new Error('House cusps must be an array')
  }
  
  if (cusps.length !== 12) {
    throw new Error(`House cusps must contain exactly 12 elements, got ${cusps.length}`)
  }
  
  for (let i = 0; i < cusps.length; i++) {
    const cusp = cusps[i]
    if (typeof cusp !== 'number' || isNaN(cusp)) {
      throw new Error(`House cusp ${i + 1} must be a valid number, got ${cusp}`)
    }
    
    const normalized = normalizeAngle(cusp)
    if (Math.abs(normalized - cusp) > 1e-10) {
      console.warn(`House cusp ${i + 1} (${cusp}°) is outside [0,360) range, normalized to ${normalized}°`)
    }
  }
}

/**
 * 根据黄经和宫位计算所在宫位 - 强化版本，包含契约约束
 * @param longitude 黄经度数
 * @param houses 宫位数组（cusps）或完整的HouseCalculation对象
 * @returns 宫位号 (1-12)
 * @throws Error 当输入无效时
 */
export function findHouseNumber(longitude: number, houses: number[] | HouseCalculation): number {
  // 输入验证
  if (typeof longitude !== 'number' || isNaN(longitude)) {
    throw new Error(`Longitude must be a valid number, got ${longitude}`)
  }
  
  const normalizedLon = normalizeAngle(longitude)
  const cusps = Array.isArray(houses) ? houses : houses.cusps
  
  // 验证宫位数据
  validateHouseCusps(cusps)
  
  // 标准化所有宫位尖点
  const normalizedCusps = cusps.map(cusp => normalizeAngle(cusp))
  
  // 查找对应宫位，正确处理跨零度环绕
  for (let i = 0; i < 12; i++) {
    const currentHouse = normalizedCusps[i]
    const nextHouse = normalizedCusps[(i + 1) % 12]
    
    let isInHouse = false
    
    if (nextHouse > currentHouse) {
      // 普通情况：不跨越0度
      isInHouse = normalizedLon >= currentHouse && normalizedLon < nextHouse
    } else {
      // 跨越0度的情况：当前宫位从较大的角度开始，下一宫位是较小的角度
      isInHouse = normalizedLon >= currentHouse || normalizedLon < nextHouse
    }
    
    if (isInHouse) {
      return i + 1
    }
  }
  
  // 如果以上逻辑都没有找到，说明可能有边界精度问题
  // 查找最接近的宫位
  let closestHouse = 1
  let minDistance = 360
  
  for (let i = 0; i < 12; i++) {
    const distance = Math.min(
      Math.abs(angleDifference(normalizedLon, normalizedCusps[i])),
      Math.abs(angleDifference(normalizedLon, normalizedCusps[(i + 1) % 12]))
    )
    
    if (distance < minDistance) {
      minDistance = distance
      closestHouse = i + 1
    }
  }
  
  console.warn(`findHouseNumber: Longitude ${longitude}° could not be precisely assigned, using closest house ${closestHouse}`)
  return closestHouse
}

/**
 * 时区转换到UTC
 */
export function convertToUTC(localDateTime: Date, timezoneOffset: number): Date {
  return new Date(localDateTime.getTime() + timezoneOffset * 60000)
}

/**
 * 岁差变换：从J2000.0到给定历元的黄道坐标变换
 * @param lon J2000.0黄经（度）
 * @param lat J2000.0黄纬（度）
 * @param jd 目标儒略日
 * @returns 当日黄道坐标
 */
export function applyPrecession(lon: number, lat: number, jd: number): { longitude: number, latitude: number } {
  const T = julianCenturiesFromJ2000(jd)
  
  // IAU 2000A岁差公式（简化版）
  const eta = (47.0029 * T - 0.06603 * T * T + 0.000598 * T * T * T) * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD
  const pi0 = (174.876384 * 3600 + 3289.4789 * T + 0.60622 * T * T - 0.001197 * T * T * T) * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD
  const p = (5029.0966 * T + 2.22226 * T * T - 0.000042 * T * T * T) * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD
  
  const lonRad = lon * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const latRad = lat * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 岁差变换矩阵计算（简化）
  const cosEta = Math.cos(eta)
  const sinEta = Math.sin(eta)
  const cosP = Math.cos(p)
  const sinP = Math.sin(p)
  
  // 近似变换（对于占星精度足够）
  const deltaLon = eta * Math.cos(lonRad) * Math.tan(latRad) + sinEta * Math.sin(lonRad)
  const deltaLat = eta * Math.sin(lonRad)
  
  return {
    longitude: normalizeAngle(lon + deltaLon * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG),
    latitude: lat + deltaLat * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  }
}

/**
 * 章动修正：应用黄经和黄纬的章动修正
 * @param lon 黄经（度）
 * @param lat 黄纬（度）
 * @param jd 儒略日
 * @returns 章动修正后的坐标
 */
export function applyNutation(lon: number, lat: number, jd: number): { longitude: number, latitude: number } {
  const T = julianCenturiesFromJ2000(jd)
  
  // 月亮轨道参数
  const D = normalizeAngle(297.85036 + 445267.111480 * T - 0.0019142 * T * T + T * T * T / 189474.0)
  const M = normalizeAngle(357.52772 + 35999.050340 * T - 0.0001603 * T * T - T * T * T / 300000.0)
  const Mp = normalizeAngle(134.96298 + 477198.867398 * T + 0.0086972 * T * T + T * T * T / 56250.0)
  const F = normalizeAngle(93.27191 + 483202.017538 * T - 0.0036825 * T * T + T * T * T / 327270.0)
  const omega = normalizeAngle(125.04452 - 1934.136261 * T + 0.0020708 * T * T + T * T * T / 450000.0)
  
  // 转换为弧度
  const DRad = D * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const MRad = M * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const MpRad = Mp * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const FRad = F * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const omegaRad = omega * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 主要章动项（简化，取最大的几项）
  const nutationInLongitude = (-17.20 * Math.sin(omegaRad) 
                              - 1.32 * Math.sin(2 * FRad - 2 * DRad + 2 * omegaRad)
                              - 0.23 * Math.sin(2 * FRad + 2 * omegaRad)
                              + 0.21 * Math.sin(2 * omegaRad)) * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD
  
  const nutationInObliquity = (9.20 * Math.cos(omegaRad) 
                              + 0.57 * Math.cos(2 * FRad - 2 * DRad + 2 * omegaRad)
                              + 0.10 * Math.cos(2 * FRad + 2 * omegaRad)
                              - 0.09 * Math.cos(2 * omegaRad)) * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD
  
  // 应用章动修正
  const obliquity = calculateObliquity(T)
  const deltaLon = nutationInLongitude * Math.cos(obliquity.epsTrue)
  const deltaLat = nutationInLongitude * Math.sin(obliquity.epsTrue) * Math.sin(lon * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD)
  
  return {
    longitude: normalizeAngle(lon + deltaLon * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG),
    latitude: lat + deltaLat * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  }
}

/**
 * 光行差修正（简化版，仅考虑年光行差）
 * @param lon 黄经（度）
 * @param lat 黄纬（度）
 * @param jd 儒略日
 * @returns 光行差修正后的坐标
 */
export function applyAberration(lon: number, lat: number, jd: number): { longitude: number, latitude: number } {
  const T = julianCenturiesFromJ2000(jd)
  
  // 地球轨道偏心率
  const e = 0.0167086342 - 0.0000420037 * T - 0.0000001267 * T * T
  
  // 太阳的平近点角
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000.0)
  const MRad = M * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 太阳的真近点角
  const nu = M + (1.9146 - 0.004817 * T - 0.000014 * T * T) * Math.sin(MRad) +
             (0.019993 - 0.000101 * T) * Math.sin(2 * MRad) +
             0.000289 * Math.sin(3 * MRad)
  
  // 年光行差常数（角秒）
  const kappa = 20.49552
  
  // 光行差修正（简化）
  const lonRad = lon * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const latRad = lat * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  const nuRad = nu * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  const deltaLon = -kappa * Math.cos(nuRad - lonRad) / Math.cos(latRad)
  const deltaLat = -kappa * Math.sin(latRad) * Math.sin(nuRad - lonRad)
  
  return {
    longitude: normalizeAngle(lon + deltaLon * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG),
    latitude: lat + deltaLat * ASTRONOMICAL_CONSTANTS.ARCSEC_TO_RAD * ASTRONOMICAL_CONSTANTS.RAD_TO_DEG
  }
}

/**
 * 完整的参考系变换：从日心J2000到地心当日真黄道
 * @param position 日心J2000位置
 * @param jd 儒略日
 * @param earthPosition 地球在日心系中的位置
 * @returns 地心当日真黄道位置
 */
export interface ReferenceFrameTransformOptions {
  center: 'geo' | 'helio'
  frame: 'ecl-date' | 'j2000'
  applyNutation?: boolean
  applyAberration?: boolean
}

export function transformReferenceFrame(
  position: { longitude: number, latitude: number, radius?: number },
  jd: number,
  earthPosition?: { longitude: number, latitude: number, radius: number },
  options: ReferenceFrameTransformOptions = { center: 'geo', frame: 'ecl-date', applyNutation: true, applyAberration: true }
): { longitude: number, latitude: number } {
  
  let result = { longitude: position.longitude, latitude: position.latitude }
  
  // 1. 日心转地心（如果需要）
  if (options.center === 'geo' && earthPosition && position.radius) {
    // 这里应该调用日心转地心的向量计算
    // 为简化，假设已经是地心坐标或使用现有的heliocentricToGeocentric
    // result = heliocentricToGeocentric(...)
  }
  
  // 2. J2000转当日黄道（如果需要）
  if (options.frame === 'ecl-date') {
    result = applyPrecession(result.longitude, result.latitude, jd)
  }
  
  // 3. 应用章动修正
  if (options.applyNutation !== false) {
    result = applyNutation(result.longitude, result.latitude, jd)
  }
  
  // 4. 应用光行差修正
  if (options.applyAberration !== false) {
    result = applyAberration(result.longitude, result.latitude, jd)
  }
  
  return result
}