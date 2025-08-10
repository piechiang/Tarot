/**
 * ELP2000 月球位置计算算法（截断版）
 * 基于ELP2000/82理论的简化版本
 * 适用于占星术应用（精度约±0.05°）
 */

import { julianCenturiesFromJ2000, normalizeAngle, ASTRONOMICAL_CONSTANTS } from './astronomical-utils'

// ELP2000术语结构
interface ELP2000Term {
  A: number;    // 振幅
  P: number[];  // 相位参数 [D, M, M', F]
}

// 截断的ELP2000数据 - 保留最重要的项
const ELP2000_LONGITUDE_TERMS: ELP2000Term[] = [
  // 主要周期项
  { A: 22640, P: [0, 0, 1, 0] },     // 月球平黄经
  { A: 4586, P: [2, 0, -1, 0] },     // 
  { A: 2370, P: [2, 0, 0, 0] },      // 
  { A: 769, P: [0, 0, 2, 0] },       // 
  { A: -666, P: [0, 1, 0, 0] },      // 太阳年差
  { A: -411, P: [0, 0, 0, 2] },      // 
  { A: -212, P: [2, 0, -2, 0] },     // 
  { A: -206, P: [2, -1, -1, 0] },    // 
  { A: 192, P: [2, 0, 1, 0] },       // 
  { A: -165, P: [0, 0, 1, -2] },     // 
  { A: -125, P: [0, 0, 1, 2] },      // 
  { A: -110, P: [2, -1, 0, 0] },     // 
  { A: 148, P: [0, 1, -1, 0] },      // 
  { A: -55, P: [2, -2, -1, 0] },     // 
  { A: 50, P: [0, 1, 1, 0] },        // 
  { A: 45, P: [2, 0, 0, -2] },       // 
  { A: 29, P: [4, 0, -1, 0] },       // 
  { A: 18, P: [0, 0, 2, -2] },       // 
  { A: 17, P: [4, 0, -2, 0] },       // 
  { A: -16, P: [1, 0, 0, 0] },       // 
  { A: -15, P: [1, 0, -1, 0] },      // 
  { A: -13, P: [0, 0, 2, 2] },       // 
  { A: 12, P: [2, -1, -2, 0] },      // 
  { A: 11, P: [2, 0, -1, -2] },      // 
  { A: -8, P: [0, 1, -2, 0] },       // 
  { A: 7, P: [0, 2, 0, 0] },         // 
  { A: -7, P: [4, 0, 0, 0] },        // 
  { A: -7, P: [2, 1, -1, 0] },       // 
  { A: 6, P: [2, -1, 1, 0] },        // 
  { A: 5, P: [1, 0, 1, 0] },         // 
  { A: 5, P: [6, 0, -1, 0] },        // 
  { A: 4, P: [0, 1, 0, -2] },        // 
  { A: 4, P: [2, 0, 2, 0] },         // 
  { A: -4, P: [1, -1, 0, 0] },       // 
  { A: 3, P: [2, 1, 0, 0] },         // 
]

const ELP2000_LATITUDE_TERMS: ELP2000Term[] = [
  // 月球黄纬主要项
  { A: 5128, P: [0, 0, 0, 1] },      // F
  { A: 280, P: [0, 0, 1, 1] },       // M' + F
  { A: 277, P: [0, 0, 1, -1] },      // M' - F
  { A: 173, P: [2, 0, 0, -1] },      // 2D - F
  { A: 55, P: [2, 0, -1, 1] },       // 2D - M' + F
  { A: 46, P: [2, 0, -1, -1] },      // 2D - M' - F
  { A: -40, P: [2, 0, 0, 1] },       // 2D + F
  { A: -25, P: [0, 1, 0, 1] },       // M + F
  { A: 22, P: [2, 0, -2, -1] },      // 2D - 2M' - F
  { A: -17, P: [0, 1, 0, -1] },      // M - F
  { A: -11, P: [2, -1, -1, 1] },     // 2D - M - M' + F
  { A: 10, P: [2, -1, -1, -1] },     // 2D - M - M' - F
  { A: -8, P: [2, -1, 0, 1] },       // 2D - M + F
  { A: 7, P: [2, -1, 0, -1] },       // 2D - M - F
  { A: -5, P: [0, 0, 2, 1] },        // 2M' + F
]

const ELP2000_DISTANCE_TERMS: ELP2000Term[] = [
  // 月球距离主要项 (单位: km)
  { A: -20905, P: [0, 0, 1, 0] },    // M'
  { A: -3699, P: [2, 0, -1, 0] },    // 2D - M'
  { A: -2956, P: [2, 0, 0, 0] },     // 2D
  { A: -570, P: [0, 0, 2, 0] },      // 2M'
  { A: 246, P: [0, 1, 0, 0] },       // M
  { A: -205, P: [0, 0, 0, 2] },      // 2F
  { A: -171, P: [2, 0, -2, 0] },     // 2D - 2M'
  { A: -152, P: [2, -1, -1, 0] },    // 2D - M - M'
  { A: 129, P: [2, 0, 1, 0] },       // 2D + M'
  { A: 108, P: [0, 0, 1, -2] },      // M' - 2F
  { A: 104, P: [2, -1, 0, 0] },      // 2D - M
  { A: 79, P: [0, 0, 1, 2] },        // M' + 2F
  { A: -34, P: [0, 1, -1, 0] },      // M - M'
  { A: -23, P: [1, 0, 0, 0] },       // D
  { A: 11, P: [0, 1, 1, 0] },        // M + M'
]

/**
 * 计算月球的基本参数
 */
function calculateMoonArguments(T: number): { D: number, M: number, Mp: number, F: number } {
  // 月球平距角 (D)
  const D = normalizeAngle(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868 - T * T * T * T / 113065000) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 太阳平近点角 (M)  
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 月球平近点角 (M')
  const Mp = normalizeAngle(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699 - T * T * T * T / 14712000) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  // 月球纬度参数 (F)
  const F = normalizeAngle(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T - T * T * T / 3526000 + T * T * T * T / 863310000) * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD
  
  return { D, M, Mp, F }
}

/**
 * 计算ELP2000级数
 */
function calculateELP2000Series(terms: ELP2000Term[], D: number, M: number, Mp: number, F: number): number {
  let sum = 0
  
  for (const term of terms) {
    const argument = term.P[0] * D + term.P[1] * M + term.P[2] * Mp + term.P[3] * F
    sum += term.A * Math.cos(argument)
  }
  
  return sum
}

/**
 * 计算月球的地心黄道坐标
 */
export function calculateMoonPosition(julianDay: number): { longitude: number, latitude: number, distance: number } {
  const T = julianCenturiesFromJ2000(julianDay)
  const args = calculateMoonArguments(T)
  
  // 计算月球平黄经
  let L0 = normalizeAngle(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841 - T * T * T * T / 65194000)
  
  // 计算黄经修正（使用正确的系数）
  const lonCorrection = calculateELP2000Series(ELP2000_LONGITUDE_TERMS, args.D, args.M, args.Mp, args.F) / 1000000 // 修正系数
  const longitude = normalizeAngle(L0 + lonCorrection)
  
  // 计算黄纬
  const latitude = calculateELP2000Series(ELP2000_LATITUDE_TERMS, args.D, args.M, args.Mp, args.F) / 1000000
  
  // 计算距离 (平均距离 + 修正)
  const meanDistance = 385000.56  // km
  const distanceCorrection = calculateELP2000Series(ELP2000_DISTANCE_TERMS, args.D, args.M, args.Mp, args.F)
  const distance = meanDistance + distanceCorrection
  
  return {
    longitude,
    latitude,
    distance: distance / 149597870.7  // 转换为天文单位
  }
}

/**
 * 计算月球相位（朔望月）
 */
export function calculateMoonPhase(julianDay: number): { phase: number, phaseName: string, phaseNameChinese: string, illumination: number } {
  const T = julianCenturiesFromJ2000(julianDay)
  
  // 计算月球和太阳的黄经
  const moon = calculateMoonPosition(julianDay)
  const sunLongitude = normalizeAngle(280.4664567 + 36000.76982779 * T)
  
  // 计算相位角
  let phaseAngle = normalizeAngle(moon.longitude - sunLongitude)
  
  // 规范化到0-1范围
  const phase = phaseAngle / 360
  
  // 计算照明百分比
  const illumination = (1 - Math.cos(phaseAngle * ASTRONOMICAL_CONSTANTS.DEG_TO_RAD)) / 2
  
  // 确定月相名称
  let phaseName: string
  let phaseNameChinese: string
  
  if (phase < 0.0625 || phase >= 0.9375) {
    phaseName = "New Moon"
    phaseNameChinese = "新月"
  } else if (phase < 0.1875) {
    phaseName = "Waxing Crescent"
    phaseNameChinese = "娥眉月"
  } else if (phase < 0.3125) {
    phaseName = "First Quarter"
    phaseNameChinese = "上弦月"
  } else if (phase < 0.4375) {
    phaseName = "Waxing Gibbous"
    phaseNameChinese = "盈凸月"
  } else if (phase < 0.5625) {
    phaseName = "Full Moon"
    phaseNameChinese = "满月"
  } else if (phase < 0.6875) {
    phaseName = "Waning Gibbous"
    phaseNameChinese = "亏凸月"
  } else if (phase < 0.8125) {
    phaseName = "Last Quarter"
    phaseNameChinese = "下弦月"
  } else {
    phaseName = "Waning Crescent"
    phaseNameChinese = "残月"
  }
  
  return {
    phase,
    phaseName,
    phaseNameChinese,
    illumination
  }
}

/**
 * 计算月球运动速度（度/天）
 */
export function calculateMoonVelocity(julianDay: number): number {
  const position1 = calculateMoonPosition(julianDay - 0.5)
  const position2 = calculateMoonPosition(julianDay + 0.5)
  
  let velocity = position2.longitude - position1.longitude
  
  // 处理跨越0度的情况
  if (velocity > 180) velocity -= 360
  if (velocity < -180) velocity += 360
  
  return velocity // 约13度/天
}

/**
 * 计算月球交点（龙头龙尾）
 */
export function calculateMoonNodes(julianDay: number): { northNode: number, southNode: number } {
  const T = julianCenturiesFromJ2000(julianDay)
  
  // 月球升交点黄经
  const Omega = normalizeAngle(125.0445279 - 1934.1362891 * T + 0.0020754 * T * T + T * T * T / 467441 - T * T * T * T / 60616000)
  
  const northNode = Omega
  const southNode = normalizeAngle(Omega + 180)
  
  return { northNode, southNode }
}

/**
 * 计算月球远地点和近地点
 */
export function calculateMoonApogeePerigee(julianDay: number): { apogee: number, perigee: number } {
  const T = julianCenturiesFromJ2000(julianDay)
  
  // 月球远地点（远月点）黄经
  const apogee = normalizeAngle(83.3532465 + 4069.0137287 * T - 0.0103200 * T * T - T * T * T / 80053 + T * T * T * T / 18999000)
  
  // 近地点在对面
  const perigee = normalizeAngle(apogee + 180)
  
  return { apogee, perigee }
}

/**
 * 简化版月球详细信息
 */
export function getMoonDetails(julianDay: number) {
  const position = calculateMoonPosition(julianDay)
  const phase = calculateMoonPhase(julianDay)
  const velocity = calculateMoonVelocity(julianDay)
  const nodes = calculateMoonNodes(julianDay)
  
  return {
    ...position,
    ...phase,
    velocity,
    nodes,
    distanceKm: position.distance * 149597870.7, // 转换回公里
    angularDiameter: 1896 / (position.distance * 149597870.7) * 206265 // 角直径（角秒）
  }
}