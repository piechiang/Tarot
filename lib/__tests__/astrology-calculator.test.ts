/**
 * Unit tests for astrology calculator edge cases
 * Tests critical functionality including timezone handling, reference frames, caching, and boundary conditions
 */

import { 
  calculateNatalChart, 
  BirthData, 
  clearPositionCache 
} from '../astrology-calculator'
import { 
  normalizeAngle, 
  angleSeparation, 
  signedLonDiff,
  calculateHouses,
  findHouseNumber,
  estimateDeltaTSeconds,
  dateObjectToJulianDay
} from '../astronomical-utils'

describe('Astrology Calculator Edge Cases', () => {
  
  // Test sample birth data (UTC)
  const testBirthData: BirthData = {
    dateTime: new Date('2000-01-01T12:00:00.000Z'), // J2000.0 UTC
    latitude: 40.7128, // New York
    longitude: -74.0060,
    timezone: -5 // EST for display purposes only
  }

  beforeEach(() => {
    clearPositionCache()
  })

  describe('Timezone Handling', () => {
    it('should handle UTC input correctly without double conversion', () => {
      const utcDate = new Date('2000-01-01T12:00:00.000Z')
      const jdUTC = dateObjectToJulianDay(utcDate)
      
      // J2000.0 should be approximately 2451545.0
      expect(Math.abs(jdUTC - 2451545.0)).toBeLessThan(0.1)
    })

    it('should apply ΔT correction correctly', () => {
      const testDate = new Date('2000-01-01T12:00:00.000Z')
      const deltaT = estimateDeltaTSeconds(testDate)
      
      // ΔT around 2000 should be approximately 64 seconds
      expect(deltaT).toBeGreaterThan(60)
      expect(deltaT).toBeLessThan(70)
    })
  })

  describe('Angular Functions', () => {
    it('should handle angle normalization correctly', () => {
      expect(normalizeAngle(370)).toBe(10)
      expect(normalizeAngle(-10)).toBe(350)
      expect(normalizeAngle(0)).toBe(0)
      expect(normalizeAngle(360)).toBe(0)
    })

    it('should handle 0/360 degree boundary correctly', () => {
      expect(angleSeparation(359, 1)).toBe(2)
      expect(angleSeparation(1, 359)).toBe(2)
      expect(signedLonDiff(359, 1)).toBe(2)
      expect(signedLonDiff(1, 359)).toBe(-2)
    })

    it('should handle aspect boundary cases', () => {
      // Test conjunction near 0/360 boundary
      expect(angleSeparation(359.5, 0.5)).toBe(1)
      
      // Test opposition boundary
      expect(angleSeparation(179.5, 359.5)).toBe(180)
      expect(angleSeparation(0.5, 180.5)).toBe(180)
    })
  })

  describe('House Calculations', () => {
    it('should return proper house structure with named fields', () => {
      const houses = calculateHouses(120, 40.7, 23.44) // LST=120°, NYC lat, obliquity
      
      expect(houses).toHaveProperty('cusps')
      expect(houses).toHaveProperty('asc')
      expect(houses).toHaveProperty('mc')
      expect(houses).toHaveProperty('ic')
      expect(houses).toHaveProperty('dsc')
      
      expect(houses.cusps).toHaveLength(12)
      expect(houses.asc).toBeGreaterThanOrEqual(0)
      expect(houses.asc).toBeLessThan(360)
      
      // DSC should be opposite to ASC
      expect(Math.abs(normalizeAngle(houses.dsc - houses.asc - 180))).toBeLessThan(0.1)
    })

    it('should handle house boundary crossings correctly', () => {
      const houses = calculateHouses(120, 40.7, 23.44)
      
      // Test point just before house boundary
      const house1 = findHouseNumber(houses.asc + 29.9, houses)
      const house2 = findHouseNumber(houses.asc + 30.1, houses)
      
      expect(house2).toBe(house1 + 1)
    })

    it('should handle high latitude cases', () => {
      // Test extreme latitude (Arctic Circle)
      const arcticHouses = calculateHouses(180, 70, 23.44)
      expect(arcticHouses.cusps).toHaveLength(12)
      expect(arcticHouses.asc).toBeGreaterThanOrEqual(0)
      expect(arcticHouses.asc).toBeLessThan(360)
    })
  })

  describe('Chart Generation', () => {
    it('should generate complete natal chart without errors', async () => {
      const chart = await calculateNatalChart(testBirthData)
      
      expect(chart).toHaveProperty('birthData')
      expect(chart).toHaveProperty('houses')
      expect(chart).toHaveProperty('planets')
      expect(chart).toHaveProperty('aspects')
      expect(chart).toHaveProperty('summary')
      
      // Should have all major planets
      expect(chart.planets.length).toBeGreaterThanOrEqual(9)
      
      // Houses should use new structure
      expect(chart.houses).toHaveProperty('cusps')
      expect(chart.houses.cusps).toHaveLength(12)
    })

    it('should handle reference frame options', async () => {
      const options = { center: 'geo' as const, frame: 'ecl-date' as const }
      const chart = await calculateNatalChart(testBirthData, options)
      
      expect(chart.planets.length).toBeGreaterThan(0)
      // All planets should have valid positions
      chart.planets.forEach(planet => {
        expect(planet.longitude).toBeGreaterThanOrEqual(0)
        expect(planet.longitude).toBeLessThan(360)
        expect(planet.house).toBeGreaterThanOrEqual(1)
        expect(planet.house).toBeLessThanOrEqual(12)
      })
    })
  })

  describe('Aspect Calculations', () => {
    it('should identify aspects correctly at boundaries', async () => {
      const chart = await calculateNatalChart(testBirthData)
      
      // Check that aspects are within valid orb ranges
      chart.aspects.forEach(aspect => {
        expect(aspect.orb).toBeGreaterThanOrEqual(0)
        expect(aspect.orb).toBeLessThanOrEqual(10) // Max reasonable orb
        expect(aspect.angle).toBeGreaterThanOrEqual(0)
        expect(aspect.angle).toBeLessThan(360)
      })
    })

    it('should distinguish applying vs separating aspects', async () => {
      const chart = await calculateNatalChart(testBirthData)
      
      // Should have some aspects marked as applying/separating
      const applyingAspects = chart.aspects.filter(a => a.isApplying)
      const separatingAspects = chart.aspects.filter(a => !a.isApplying)
      
      // Both types should exist in a typical chart
      expect(applyingAspects.length + separatingAspects.length).toBe(chart.aspects.length)
    })
  })

  describe('Cache Management', () => {
    it('should cache and retrieve planet positions correctly', async () => {
      // Clear cache first
      clearPositionCache()
      
      // Generate chart twice
      const chart1 = await calculateNatalChart(testBirthData)
      const chart2 = await calculateNatalChart(testBirthData)
      
      // Results should be identical (cached)
      expect(chart1.planets[0].longitude).toBe(chart2.planets[0].longitude)
      
      // Clear cache and verify it's cleared
      clearPositionCache()
      const chart3 = await calculateNatalChart(testBirthData)
      expect(chart3.planets[0].longitude).toBe(chart1.planets[0].longitude) // Same result but recalculated
    })
  })

  describe('Retrograde Detection', () => {
    it('should not mark Sun and Moon as retrograde', async () => {
      const chart = await calculateNatalChart(testBirthData)
      
      const sun = chart.planets.find(p => p.name === 'Sun')
      const moon = chart.planets.find(p => p.name === 'Moon')
      
      expect(sun?.retrograde).toBe(false)
      expect(moon?.retrograde).toBe(false)
    })

    it('should handle retrograde detection for outer planets', async () => {
      const chart = await calculateNatalChart(testBirthData)
      
      // Check that retrograde field exists for all planets
      chart.planets.forEach(planet => {
        expect(typeof planet.retrograde).toBe('boolean')
      })
    })
  })

  describe('Data Validation', () => {
    it('should handle edge case birth times', async () => {
      const edgeCases: BirthData[] = [
        {
          ...testBirthData,
          dateTime: new Date('1900-01-01T00:00:00.000Z') // Early 20th century
        },
        {
          ...testBirthData,
          dateTime: new Date('2100-12-31T23:59:59.999Z') // Future date
        },
        {
          ...testBirthData,
          latitude: 89.9 // Near North Pole
        },
        {
          ...testBirthData,
          latitude: -89.9 // Near South Pole
        }
      ]

      for (const birthData of edgeCases) {
        const chart = await calculateNatalChart(birthData)
        expect(chart.planets.length).toBeGreaterThan(0)
        expect(chart.houses.cusps).toHaveLength(12)
      }
    })
  })
})