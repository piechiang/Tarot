'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, RotateCcw, Sun, Moon, ArrowUp, Star, Zap, BookOpen, BarChart3, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { calculateNatalChart, type NatalChart, type BirthData as ChartBirthData, getPlanetSignMeaning, getPlanetHouseMeaning } from '@/lib/astrology-calculator'
import { CHINA_CITIES, getCityCoordinates, getProvinces, getCitiesByProvince } from '@/lib/china-cities'

interface BirthData {
  date: string;
  time: string;
  location: string;
  province: string;
  city: string;
  latitude: number;
  longitude: number;
}

export default function Astrology() {
  const { } = useLanguage()
  const [currentStep, setCurrentStep] = useState<'input' | 'generating' | 'results'>('input')
  const [activeTab, setActiveTab] = useState<'chart' | 'interpretation'>('chart')
  const [birthData, setBirthData] = useState<BirthData>({
    date: '',
    time: '12:00',
    location: '',
    province: '',
    city: '',
    latitude: 0,
    longitude: 0
  })
  const [chart, setChart] = useState<NatalChart | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateChart = async () => {
    if (!birthData.date || (!birthData.location && (!birthData.province || !birthData.city))) return

    setIsGenerating(true)
    setCurrentStep('generating')
    setError(null)

    try {
      // 构建日期时间对象
      const [year, month, day] = birthData.date.split('-').map(Number)
      const [hour, minute] = birthData.time.split(':').map(Number)
      const dateTime = new Date(year, month - 1, day, hour, minute)

      // 准备计算数据
      let latitude = birthData.latitude
      let longitude = birthData.longitude
      
      // 如果用户选择了省份和城市，使用精确坐标
      if (birthData.province && birthData.city) {
        const cityCoords = getCityCoordinates(birthData.province, birthData.city)
        if (cityCoords) {
          latitude = cityCoords.lat
          longitude = cityCoords.lng
        }
      }
      
      const chartData: ChartBirthData = {
        dateTime,
        latitude: latitude || 39.9042, // 默认北京坐标
        longitude: longitude || 116.4074,
        timezone: 8 // 简化处理，默认东八区
      }

      // 计算真实星盘
      const calculatedChart = await calculateNatalChart(chartData)
      
      setChart(calculatedChart)
      setCurrentStep('results')
    } catch (err) {
      console.error('星盘计算错误:', err)
      setError('计算星盘时出现错误，请检查输入数据')
      setCurrentStep('input')
    } finally {
      setIsGenerating(false)
    }
  }

  // 获取地理坐标的简化函数（实际应用中应该使用地理编码服务）
  const getCoordinatesFromLocation = (location: string) => {
    // 简化的城市坐标映射
    const cityCoords: Record<string, { lat: number, lon: number }> = {
      '北京': { lat: 39.9042, lon: 116.4074 },
      '上海': { lat: 31.2304, lon: 121.4737 },
      '广州': { lat: 23.1291, lon: 113.2644 },
      '深圳': { lat: 22.5431, lon: 114.0579 },
      '杭州': { lat: 30.2741, lon: 120.1551 },
      '成都': { lat: 30.5728, lon: 104.0668 },
      '西安': { lat: 34.3416, lon: 108.9398 },
      '南京': { lat: 32.0603, lon: 118.7969 },
      'beijing': { lat: 39.9042, lon: 116.4074 },
      'shanghai': { lat: 31.2304, lon: 121.4737 },
      'new york': { lat: 40.7128, lon: -74.0060 },
      'london': { lat: 51.5074, lon: -0.1278 },
      'tokyo': { lat: 35.6762, lon: 139.6503 },
      'paris': { lat: 48.8566, lon: 2.3522 }
    }
    
    const key = location.toLowerCase().trim()
    return cityCoords[key] || { lat: 39.9042, lon: 116.4074 } // 默认北京
  }

  const reset = () => {
    setCurrentStep('input')
    setBirthData({
      date: '',
      time: '12:00',
      location: '',
      province: '',
      city: '',
      latitude: 0,
      longitude: 0
    })
    setChart(null)
    setError(null)
    setIsGenerating(false)
    setActiveTab('chart')
  }

  // 处理省份选择
  const handleProvinceChange = (province: string) => {
    setBirthData(prev => ({
      ...prev,
      province,
      city: '', // 重置城市选择
      location: province
    }))
  }

  // 处理城市选择
  const handleCityChange = (city: string) => {
    const cityCoords = getCityCoordinates(birthData.province, city)
    setBirthData(prev => ({
      ...prev,
      city,
      location: `${prev.province} ${city}`,
      latitude: cityCoords?.lat || 0,
      longitude: cityCoords?.lng || 0
    }))
  }

  if (currentStep === 'input') {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white font-mystical">星盘分析</h2>
          <p className="text-gray-300">
            输入你的出生信息来生成个性化的本命盘和占星洞察。
          </p>
        </div>

        <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-6">
          {/* Birth Date */}
          <div className="space-y-3">
            <label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold text-mystical-gold">
              <Calendar className="w-4 h-4" />
              出生日期
            </label>
            <input
              type="date"
              id="date"
              value={birthData.date}
              onChange={(e) => setBirthData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-mystical-gold focus:outline-none"
              required
            />
          </div>

          {/* Birth Time */}
          <div className="space-y-3">
            <label htmlFor="time" className="flex items-center gap-2 text-sm font-semibold text-mystical-gold">
              <Clock className="w-4 h-4" />
              出生时间
            </label>
            <input
              type="time"
              id="time"
              value={birthData.time}
              onChange={(e) => setBirthData(prev => ({ ...prev, time: e.target.value }))}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-mystical-gold focus:outline-none"
            />
            <p className="text-xs text-gray-400">
              如果不知道确切时间，将使用中午12:00（影响上升星座和宫位）
            </p>
          </div>

          {/* Birth Location */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-mystical-gold">
              <MapPin className="w-4 h-4" />
              出生地点
            </label>
            
            {/* Province Selection */}
            <div className="relative">
              <select
                value={birthData.province}
                onChange={(e) => handleProvinceChange(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-mystical-gold focus:outline-none appearance-none cursor-pointer"
                required
              >
                <option value="">请选择省份/直辖市</option>
                {getProvinces().map(province => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* City Selection */}
            {birthData.province && (
              <div className="relative">
                <select
                  value={birthData.city}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-mystical-gold focus:outline-none appearance-none cursor-pointer"
                  required
                >
                  <option value="">请选择城市</option>
                  {getCitiesByProvince(birthData.province).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            )}

            {/* Manual Input Option */}
            <details className="bg-gray-800/50 rounded-lg">
              <summary className="p-3 text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                或手动输入其他地点
              </summary>
              <div className="px-3 pb-3">
                <input
                  type="text"
                  value={birthData.location}
                  onChange={(e) => {
                    const location = e.target.value
                    const coords = getCoordinatesFromLocation(location)
                    setBirthData(prev => ({ 
                      ...prev, 
                      location,
                      province: '', // 清除下拉选择
                      city: '',
                      latitude: coords.lat,
                      longitude: coords.lon
                    }))
                  }}
                  placeholder="城市，国家（例如：纽约，美国）"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-mystical-gold focus:outline-none"
                />
              </div>
            </details>
            
            {birthData.location && (
              <p className="text-xs text-gray-400">
                已选择：{birthData.location} 
                {birthData.latitude && birthData.longitude && (
                  <span className="ml-2">
                    ({birthData.latitude.toFixed(4)}°, {birthData.longitude.toFixed(4)}°)
                  </span>
                )}
              </p>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-mystical-navy/20 border border-mystical-navy/30 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-mystical-gold">关于你的星盘：</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• 你的太阳星座代表核心性格</li>
              <li>• 你的月亮星座揭示情感本质</li>
              <li>• 你的上升星座显示他人如何看待你</li>
              <li>• 行星位置为你的宇宙蓝图增添深度</li>
            </ul>
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={generateChart}
            disabled={!birthData.date || (!birthData.location && (!birthData.province || !birthData.city)) || isGenerating}
            className="w-full py-3 bg-mystical-gold text-mystical-dark font-bold rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? '计算中...' : '生成星盘'}
          </button>
        </div>
      </div>
    )
  }

  if (currentStep === 'generating') {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-white font-mystical">正在计算你的星盘</h2>
        
        <div className="space-y-6">
          <p className="text-gray-300">
            正在分析{new Date(birthData.date).toLocaleDateString()}在{birthData.location}的行星位置...
          </p>
          
          {/* Animated Zodiac Wheel */}
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 border-4 border-mystical-gold/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-mystical-purple/50 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-4 border-4 border-mystical-gold rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl animate-pulse">✨</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-mystical-gold h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-400">正在绘制你的宇宙蓝图...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!chart) return null

  // 获取主要天体
  const sun = chart.planets.find(p => p.name === 'Sun')
  const moon = chart.planets.find(p => p.name === 'Moon')
  const mercury = chart.planets.find(p => p.name === 'Mercury')
  const venus = chart.planets.find(p => p.name === 'Venus')
  const mars = chart.planets.find(p => p.name === 'Mars')
  const jupiter = chart.planets.find(p => p.name === 'Jupiter')
  const saturn = chart.planets.find(p => p.name === 'Saturn')
  
  // 计算上升星座 - 从上升点黄经计算
  const ascendantSign = chart.summary.risingSign

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white font-mystical">你的本命盘</h2>
        <p className="text-mystical-gold">
          出生于{chart.birthData.dateTime.toLocaleDateString()} {birthData.time} 在 {birthData.location || `${birthData.province} ${birthData.city}`}
        </p>
      </div>
      
      {/* 标签页切换 */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('chart')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === 'chart'
              ? 'bg-mystical-gold text-mystical-dark'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          星盘概览
        </button>
        <button
          onClick={() => setActiveTab('interpretation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === 'interpretation'
              ? 'bg-mystical-gold text-mystical-dark'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          详细解读
        </button>
      </div>

      {/* 标签页内容 */}
      {activeTab === 'chart' ? (
        <div className="space-y-8">
          {/* Big Three */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sun Sign */}
            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border border-mystical-gold/30 rounded-xl p-6 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-mystical-gold">
                <Sun className="w-6 h-6" />
                <h3 className="text-xl font-bold">太阳星座</h3>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{sun?.signChinese} ({sun?.sign})</p>
                <p className="text-sm text-gray-300">第{sun?.house}宫 • {sun?.degree.toFixed(1)}°</p>
                {sun?.retrograde && <p className="text-xs text-red-400">逆行 ℞</p>}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {getPlanetSignMeaning('Sun', sun?.sign || 'Aries', 'zh')}
              </p>
            </div>

            {/* Moon Sign */}
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-mystical-gold/30 rounded-xl p-6 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-mystical-gold">
                <Moon className="w-6 h-6" />
                <h3 className="text-xl font-bold">月亮星座</h3>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{moon?.signChinese} ({moon?.sign})</p>
                <p className="text-sm text-gray-300">第{moon?.house}宫 • {moon?.degree.toFixed(1)}°</p>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {getPlanetSignMeaning('Moon', moon?.sign || 'Aries', 'zh')}
              </p>
            </div>

            {/* Rising Sign */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-mystical-gold/30 rounded-xl p-6 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-mystical-gold">
                <ArrowUp className="w-6 h-6" />
                <h3 className="text-xl font-bold">上升星座</h3>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">上升 {ascendantSign}</p>
                <p className="text-sm text-gray-300">{chart.ascendant.toFixed(1)}°</p>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                上升星座代表你的外在形象和第一印象，是你面对世界的面具。
              </p>
            </div>
          </div>

          {/* Other Planets */}
          <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-6">
            <h3 className="text-2xl font-bold text-mystical-gold text-center">其他行星影响</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[mercury, venus, mars, jupiter, saturn].filter(Boolean).map((planet, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 space-y-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {planet?.name === 'Mercury' && <Zap className="w-4 h-4 text-blue-400" />}
                      {planet?.name === 'Venus' && <Star className="w-4 h-4 text-pink-400" />}
                      <h4 className="text-lg font-bold text-white">{planet?.nameChinese}</h4>
                      {planet?.retrograde && <span className="text-red-400 text-xs">℞</span>}
                    </div>
                    <p className="text-mystical-gold">{planet?.signChinese} ({planet?.sign})</p>
                    <p className="text-xs text-gray-400">第{planet?.house}宫 • {planet?.degree.toFixed(1)}°</p>
                  </div>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">
                    {getPlanetHouseMeaning(planet?.name || '', planet?.house || 1, 'zh')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-4">
            <h3 className="text-2xl font-bold text-mystical-gold text-center">你的占星总结</h3>
            <p className="text-gray-300 leading-relaxed text-center">
              {chart.summary.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-mystical-gold mb-2">主导元素</h4>
                <p className="text-gray-300 text-sm">
                  {chart.summary.dominantElement === 'fire' && '🔥 火象'}
                  {chart.summary.dominantElement === 'earth' && '🌍 土象'}
                  {chart.summary.dominantElement === 'air' && '💨 风象'}
                  {chart.summary.dominantElement === 'water' && '🌊 水象'}
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-mystical-gold mb-2">主导性质</h4>
                <p className="text-gray-300 text-sm">
                  {chart.summary.dominantQuality === 'cardinal' && '⚡ 基本宫'}
                  {chart.summary.dominantQuality === 'fixed' && '🔒 固定宫'}
                  {chart.summary.dominantQuality === 'mutable' && '🔄 变动宫'}
                </p>
              </div>
            </div>

            {chart.aspects.length > 0 && (
              <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-mystical-gold mb-3">重要相位</h4>
                <div className="space-y-2">
                  {chart.aspects.slice(0, 5).map((aspect, index) => (
                    <div key={index} className="text-sm text-gray-300 flex justify-between">
                      <span>{aspect.planet1} {aspect.aspectTypeChinese} {aspect.planet2}</span>
                      <span className="text-gray-400">{aspect.orb.toFixed(1)}°</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-mystical-navy/20 border border-mystical-navy/30 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-mystical-gold mb-2">请记住：</h4>
              <p className="text-sm text-gray-300">
                你的本命盘是可能性的地图，而不是固定的命运。将这些洞察作为自我理解和个人成长的工具。星星引导，但不强制。
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* 详细解读标签页 */
        <div className="space-y-6">
          <div className="bg-black/30 border border-gray-700 rounded-xl p-6">
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: chart.interpretation
                    .replace(/### /g, '<h3 class="text-xl font-bold text-mystical-gold mt-6 mb-4">')
                    .replace(/## /g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/\n/g, '<br />')
                    .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
                    .replace(/<p class="mb-4"><\/p>/g, '')
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="text-center pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab(activeTab === 'chart' ? 'interpretation' : 'chart')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-mystical-navy hover:bg-mystical-navy/80 text-white font-semibold rounded-lg transition-colors"
          >
            {activeTab === 'chart' ? <BookOpen className="w-4 h-4" /> : <BarChart3 className="w-4 h-4" />}
            {activeTab === 'chart' ? '查看详细解读' : '返回星盘概览'}
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-mystical-purple hover:bg-mystical-purple/80 text-white font-semibold rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            新的星盘
          </button>
        </div>
      </div>
    </div>
  )
}