'use client'

import { useState } from 'react'
import { generateHexagram, hexagrams } from '../../lib/iching-data'
import { Coins, RotateCcw, Heart, Briefcase, Activity, HelpCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

type QuestionCategory = 'love' | 'career' | 'health' | 'general'
type CastingStep = 'setup' | 'casting' | 'results'

interface CastingResult {
  primary: any;
  changing?: any;
  changingLines: number[];
}

export default function IChing() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState<CastingStep>('setup')
  const [questionCategory, setQuestionCategory] = useState<QuestionCategory>('general')
  const [question, setQuestion] = useState('')
  const [isCasting, setIsCasting] = useState(false)
  const [castingLine, setCastingLine] = useState(0)
  const [result, setResult] = useState<CastingResult | null>(null)

  const categoryIcons = {
    love: <Heart className="w-4 h-4" />,
    career: <Briefcase className="w-4 h-4" />,
    health: <Activity className="w-4 h-4" />,
    general: <HelpCircle className="w-4 h-4" />
  }

  const castCoins = () => {
    setIsCasting(true)
    setCurrentStep('casting')
    setCastingLine(0)

    // Simulate casting 6 lines with delays
    let lineCount = 0
    const interval = setInterval(() => {
      setCastingLine(lineCount + 1)
      lineCount++
      
      if (lineCount >= 6) {
        clearInterval(interval)
        setTimeout(() => {
          const castResult = generateHexagram()
          setResult(castResult)
          setIsCasting(false)
          setCurrentStep('results')
        }, 500)
      }
    }, 1000)
  }

  const reset = () => {
    setCurrentStep('setup')
    setQuestion('')
    setResult(null)
    setCastingLine(0)
    setIsCasting(false)
  }

  const renderHexagram = (lines: boolean[], title: string, isChanging?: boolean, changingLines?: number[]) => (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-center text-mystical-gold">{title}</h4>
      <div className="space-y-2">
        {lines.slice().reverse().map((isSolid, index) => {
          const lineIndex = 5 - index
          const isChangingLine = changingLines?.includes(lineIndex)
          return (
            <div
              key={lineIndex}
              className={`hexagram-line w-24 mx-auto ${!isSolid ? 'broken-line' : ''} ${
                isChangingLine ? 'animate-pulse bg-yellow-500' : ''
              }`}
            />
          )
        })}
      </div>
    </div>
  )

  if (currentStep === 'setup') {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white font-mystical">易经占卜</h2>
          <p className="text-gray-300">
            古老的中国《易经》通过64个卦象提供智慧。专注于你的问题并投掷虚拟铜钱。
          </p>
        </div>

        <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-6">
          {/* Question Category */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-mystical-gold">问题类别</label>
            <div className="grid grid-cols-2 gap-3">
              {(['love', 'career', 'health', 'general'] as QuestionCategory[]).map((category) => {
                const categoryNames = {
                  love: '情感',
                  career: '事业',
                  health: '健康',
                  general: '综合'
                }
                return (
                  <button
                    key={category}
                    onClick={() => setQuestionCategory(category)}
                    className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                      questionCategory === category 
                        ? 'bg-mystical-gold text-mystical-dark' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {categoryIcons[category]}
                    <span>{categoryNames[category]}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Question Input */}
          <div className="space-y-3">
            <label htmlFor="question" className="text-sm font-semibold text-mystical-gold">
              你的问题
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="你寻求易经的什么指导？"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-mystical-gold focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Instructions */}
          <div className="bg-mystical-navy/20 border border-mystical-navy/30 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-mystical-gold">使用方法：</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• 清楚地专注于你的问题</li>
              <li>• 将投掷六枚虚拟铜钱来构建你的卦象</li>
              <li>• 每一爻代表你情况的不同方面</li>
              <li>• 变爻表示转化的领域</li>
            </ul>
          </div>

          <button
            onClick={castCoins}
            disabled={!question.trim()}
            className="w-full py-3 bg-mystical-gold text-mystical-dark font-bold rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            投掷铜钱
          </button>
        </div>
      </div>
    )
  }

  if (currentStep === 'casting') {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-white font-mystical">投掷铜钱中</h2>
        
        <div className="space-y-6">
          <p className="text-gray-300">
            正在投掷第 {castingLine} 爻，共6爻... 铜钱正在揭示你的卦象。
          </p>
          
          {/* Animated Coins */}
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((coin) => (
              <div
                key={coin}
                className={`w-12 h-12 rounded-full border-2 border-mystical-gold flex items-center justify-center transition-transform duration-500 ${
                  isCasting ? 'animate-spin' : ''
                }`}
                style={{
                  animationDelay: `${coin * 0.1}s`,
                  backgroundColor: Math.random() > 0.5 ? '#F59E0B' : '#1F2937'
                }}
              >
                <Coins className="w-6 h-6 text-white" />
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-mystical-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${(castingLine / 6) * 100}%` }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (!result) return null

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white font-mystical">你的易经占卜结果</h2>
        {question && (
          <p className="text-mystical-gold italic">"{question}"</p>
        )}
      </div>

      {/* Hexagrams */}
      <div className={`grid ${result.changing ? 'md:grid-cols-2' : 'justify-center'} gap-8`}>
        <div className="bg-black/30 border border-gray-700 rounded-xl p-6 text-center">
          {renderHexagram(result.primary.lines, `${result.primary.chineseName} (${result.primary.name})`, false, result.changingLines)}
          <p className="text-sm text-gray-400 mt-4">本卦</p>
        </div>

        {result.changing && (
          <div className="bg-black/30 border border-gray-700 rounded-xl p-6 text-center">
            {renderHexagram(result.changing.lines, `${result.changing.chineseName} (${result.changing.name})`)}
            <p className="text-sm text-gray-400 mt-4">之卦</p>
          </div>
        )}
      </div>

      {/* Primary Interpretation */}
      <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-mystical-gold">
            {result.primary.chineseName} ({result.primary.name})
          </h3>
          <p className="text-lg italic text-gray-300">{result.primary.judgmentCn || result.primary.judgment}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">总体含义：</h4>
            <p className="text-gray-300 leading-relaxed">{result.primary.meaningCn || result.primary.meaning}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-mystical-gold">针对你情况的指导：</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {result.primary.adviceCn?.[questionCategory] || result.primary.advice[questionCategory]}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-mystical-gold">综合建议：</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {result.primary.adviceCn?.general || result.primary.advice.general}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Changing Lines Interpretation */}
      {result.changing && result.changingLines.length > 0 && (
        <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-mystical-gold">变化</h3>
          <p className="text-gray-300">
            你的卦象包含 {result.changingLines.length} 个变爻，
            表示从<strong>{result.primary.chineseName}</strong>转变为<strong>{result.changing.chineseName}</strong>。
          </p>
          <p className="text-gray-300 leading-relaxed">
            {result.changing.meaningCn || result.changing.meaning}
          </p>
          <div className="pt-2">
            <h4 className="font-semibold text-mystical-gold mb-2">变化指导：</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {result.changing.adviceCn?.[questionCategory] || result.changing.advice[questionCategory]}
            </p>
          </div>
        </div>
      )}

      <div className="text-center pt-6">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-mystical-purple hover:bg-mystical-purple/80 text-white font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          新的咨询
        </button>
      </div>
    </div>
  )
}