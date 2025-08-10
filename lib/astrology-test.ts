/**
 * 占星算法精度测试
 * 验证VSOP87和ELP2000算法的准确性
 */

import { calculateNatalChart } from './astrology-calculator'
import { calculateAllPlanets } from './vsop87-planets'
import { calculateMoonPosition } from './elp2000-moon'
import { dateObjectToJulianDay } from './astronomical-utils'

// 测试数据 - 已知的天文数据用于对比
const TEST_CASES = [
  {
    name: 'J2000.0 标准历元',
    date: new Date(2000, 0, 1, 12, 0, 0), // 2000年1月1日 12:00 UTC
    expectedSun: 280.46, // 太阳黄经（度）
    expectedMoon: 218.32 // 月球黄经（度）
  },
  {
    name: '2023年春分点',
    date: new Date(2023, 2, 20, 21, 24, 0), // 2023年3月20日
    expectedSun: 0.0, // 春分点，太阳黄经应接近0度
    expectedMoon: null // 月球位置变化快，不做精确对比
  },
  {
    name: '2023年夏至点',
    date: new Date(2023, 5, 21, 14, 57, 0), // 2023年6月21日
    expectedSun: 90.0, // 夏至点，太阳黄经应接近90度
    expectedMoon: null
  }
]

/**
 * 测试行星位置计算精度
 */
export async function testPlanetaryAccuracy() {
  console.log('🔬 开始测试行星位置计算精度...\n')
  
  const results = []
  
  for (const testCase of TEST_CASES) {
    console.log(`📍 测试案例: ${testCase.name}`)
    console.log(`📅 日期: ${testCase.date.toISOString()}`)
    
    const julianDay = dateObjectToJulianDay(testCase.date)
    const planets = calculateAllPlanets(julianDay)
    const moon = calculateMoonPosition(julianDay)
    
    // 测试太阳位置
    if (testCase.expectedSun !== null) {
      const sunError = Math.abs(planets.sun.longitude - testCase.expectedSun)
      const normalizedError = sunError > 180 ? 360 - sunError : sunError
      
      console.log(`☉ 太阳黄经: ${planets.sun.longitude.toFixed(3)}° (期望: ${testCase.expectedSun}°)`)
      console.log(`📏 太阳误差: ${normalizedError.toFixed(3)}°`)
      
      results.push({
        test: testCase.name,
        planet: 'Sun',
        calculated: planets.sun.longitude,
        expected: testCase.expectedSun,
        error: normalizedError,
        withinTolerance: normalizedError <= 0.1
      })
    }
    
    // 测试月球位置
    console.log(`☽ 月球黄经: ${moon.longitude.toFixed(3)}°`)
    console.log(`📏 月球黄纬: ${moon.latitude.toFixed(3)}°`)
    
    if (testCase.expectedMoon !== null) {
      const moonError = Math.abs(moon.longitude - testCase.expectedMoon)
      const normalizedMoonError = moonError > 180 ? 360 - moonError : moonError
      
      console.log(`📏 月球误差: ${normalizedMoonError.toFixed(3)}°`)
      
      results.push({
        test: testCase.name,
        planet: 'Moon', 
        calculated: moon.longitude,
        expected: testCase.expectedMoon,
        error: normalizedMoonError,
        withinTolerance: normalizedMoonError <= 0.1
      })
    }
    
    console.log('---\n')
  }
  
  return results
}

/**
 * 测试完整星盘计算
 */
export async function testFullChartCalculation() {
  console.log('🌟 测试完整星盘计算...\n')
  
  // 使用一个具体的出生数据进行测试
  const birthData = {
    dateTime: new Date(1990, 5, 15, 14, 30, 0), // 1990年6月15日 14:30
    latitude: 39.9042, // 北京
    longitude: 116.4074,
    timezone: 8
  }
  
  console.log('👶 测试出生数据:')
  console.log(`📅 日期时间: ${birthData.dateTime.toISOString()}`)
  console.log(`📍 地点: ${birthData.latitude}°N, ${birthData.longitude}°E`)
  
  try {
    const chart = await calculateNatalChart(birthData)
    
    console.log('\n✨ 星盘计算结果:')
    console.log(`🏠 上升点: ${chart.ascendant.toFixed(2)}°`)
    console.log(`🏢 天顶: ${chart.midheaven.toFixed(2)}°`)
    
    console.log('\n🪐 行星位置:')
    chart.planets.forEach(planet => {
      console.log(`${planet.nameChinese}: ${planet.longitude.toFixed(2)}° (${planet.signChinese} ${planet.degree.toFixed(1)}° 第${planet.house}宫)${planet.retrograde ? ' ℞' : ''}`)
    })
    
    console.log(`\n📊 主导元素: ${chart.summary.dominantElement}`)
    console.log(`📊 主导性质: ${chart.summary.dominantQuality}`)
    
    console.log(`\n🔗 相位数量: ${chart.aspects.length}`)
    chart.aspects.slice(0, 3).forEach(aspect => {
      console.log(`   ${aspect.planet1} ${aspect.aspectTypeChinese} ${aspect.planet2} (容许度: ${aspect.orb.toFixed(1)}°)`)
    })
    
    return {
      success: true,
      chart,
      message: '星盘计算成功完成'
    }
  } catch (error) {
    console.error('❌ 星盘计算失败:', error)
    return {
      success: false,
      chart: null,
      message: `计算失败: ${error}`
    }
  }
}

/**
 * 运行所有测试
 */
export async function runAllTests() {
  console.log('🚀 开始占星算法测试套件\n')
  console.log('='.repeat(50))
  
  // 测试行星精度
  const accuracyResults = await testPlanetaryAccuracy()
  
  // 测试完整计算
  const chartResults = await testFullChartCalculation()
  
  console.log('\n' + '='.repeat(50))
  console.log('📋 测试总结:')
  
  // 精度测试总结
  const accurateResults = accuracyResults.filter(r => r.withinTolerance)
  console.log(`🎯 精度测试: ${accurateResults.length}/${accuracyResults.length} 通过 (±0.1°容差)`)
  
  accuracyResults.forEach(result => {
    const status = result.withinTolerance ? '✅' : '❌'
    console.log(`   ${status} ${result.test} - ${result.planet}: ${result.error.toFixed(3)}° 误差`)
  })
  
  // 功能测试总结
  const chartStatus = chartResults.success ? '✅' : '❌'
  console.log(`${chartStatus} 完整星盘计算: ${chartResults.message}`)
  
  // 整体评估
  const allPassed = accuracyResults.every(r => r.withinTolerance) && chartResults.success
  const overallStatus = allPassed ? '✅ 全部通过' : '⚠️ 部分失败'
  
  console.log(`\n🏆 整体状态: ${overallStatus}`)
  
  if (allPassed) {
    console.log('✨ 恭喜！你的占星算法已达到专业级精度标准！')
    console.log('📈 建议：算法精度满足占星需求（±0.1°），可以用于生产环境。')
  } else {
    console.log('🔧 需要进一步调优算法以达到目标精度。')
  }
  
  return {
    accuracyResults,
    chartResults,
    overallPass: allPassed
  }
}

// 如果直接运行此文件，执行测试
if (typeof window === 'undefined' && require.main === module) {
  runAllTests().catch(console.error)
}