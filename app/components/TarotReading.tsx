'use client'

import { useState, useEffect } from 'react'
import { tarotCards, cardSpreads, TarotCard } from '../../lib/tarot-data'
import { enhanceTarotCards, getCardImageUrl } from '../../lib/tarot-card-enhancer'
import TarotCardImage from './TarotCardImage'
import { Shuffle, RotateCcw, Heart, Briefcase, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface DrawnCard {
  card: TarotCard;
  reversed: boolean;
  position: string;
}

type SpreadType = 'daily' | 'threeCard'
type QuestionType = 'general' | 'love' | 'career' | 'education'

export default function TarotReading() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState<'setup' | 'shuffling' | 'drawing' | 'results'>('setup')
  const [selectedSpread, setSelectedSpread] = useState<SpreadType>('daily')
  const [questionType, setQuestionType] = useState<QuestionType>('general')
  const [question, setQuestion] = useState('')
  const [isShuffling, setIsShuffling] = useState(false)
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([])
  const [revealedCards, setRevealedCards] = useState<number>(0)
  
  // Use enhanced tarot cards with image URLs
  const enhancedCards = enhanceTarotCards(tarotCards)

  const shuffle = () => {
    setIsShuffling(true)
    setCurrentStep('shuffling')
    
    setTimeout(() => {
      setIsShuffling(false)
      setCurrentStep('drawing')
    }, 2000)
  }

  const drawCards = () => {
    const spread = cardSpreads[selectedSpread]
    const numberOfCards = spread.positions.length
    const shuffledCards = [...enhancedCards].sort(() => Math.random() - 0.5)
    
    const drawn: DrawnCard[] = []
    for (let i = 0; i < numberOfCards; i++) {
      drawn.push({
        card: shuffledCards[i],
        reversed: Math.random() < 0.3, // 30% chance of reversed card
        position: spread.positions[i]
      })
    }
    
    setDrawnCards(drawn)
    setRevealedCards(0)
    setCurrentStep('results')
    
    // Auto-reveal cards one by one
    drawn.forEach((_, index) => {
      setTimeout(() => {
        setRevealedCards(prev => prev + 1)
      }, (index + 1) * 1000)
    })
  }

  const reset = () => {
    setCurrentStep('setup')
    setQuestion('')
    setDrawnCards([])
    setRevealedCards(0)
  }

  const getQuestionIcon = (type: QuestionType) => {
    switch (type) {
      case 'love': return <Heart className="w-4 h-4" />
      case 'career': return <Briefcase className="w-4 h-4" />
      case 'education': return <GraduationCap className="w-4 h-4" />
      default: return null
    }
  }

  if (currentStep === 'setup') {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white font-mystical">{t.tarot.title}</h2>
          <p className="text-gray-300">
            {t.tarot.subtitle}
          </p>
        </div>

        <div className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-6">
          {/* Question Type */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-mystical-gold">{t.tarot.questionFocus}</label>
            <div className="grid grid-cols-2 gap-3">
              {(['general', 'love', 'career', 'education'] as QuestionType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setQuestionType(type)}
                  className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                    questionType === type 
                      ? 'bg-mystical-purple text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {getQuestionIcon(type)}
                  <span className="capitalize">{t.tarot.categories[type]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question Input */}
          <div className="space-y-3">
            <label htmlFor="question" className="text-sm font-semibold text-mystical-gold">
              你的问题（可选）
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t.tarot.questionPlaceholder}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-mystical-gold focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Spread Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-mystical-gold">牌阵选择</label>
            <div className="grid gap-3">
              {(['daily', 'threeCard'] as SpreadType[]).map((spread) => (
                <button
                  key={spread}
                  onClick={() => setSelectedSpread(spread)}
                  className={`text-left p-4 rounded-lg transition-colors ${
                    selectedSpread === spread 
                      ? 'bg-mystical-purple text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <div className="font-semibold">{t.tarot.spreads[spread].name}</div>
                  <div className="text-sm opacity-80">{t.tarot.spreads[spread].description}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={shuffle}
            className="w-full py-3 bg-mystical-gold text-mystical-dark font-bold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {t.tarot.beginReading}
          </button>
        </div>
      </div>
    )
  }

  if (currentStep === 'shuffling') {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-white font-mystical">{t.tarot.shuffling}</h2>
        <div className="space-y-6">
          <div className="relative mx-auto w-32 h-48">
            <div className={`absolute inset-0 card-back rounded-lg transform transition-transform duration-1000 ${isShuffling ? 'animate-spin' : ''}`}>
              <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-mystical-gold rounded-lg flex items-center justify-center">
                <Shuffle className="w-12 h-12 text-mystical-gold" />
              </div>
            </div>
          </div>
          <p className="text-gray-300">
            {t.tarot.shufflingDesc}
          </p>
        </div>
      </div>
    )
  }

  if (currentStep === 'drawing') {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-white font-mystical">{t.tarot.drawCards}</h2>
        <div className="space-y-6">
          <p className="text-gray-300">
            {t.tarot.drawCardsDesc}{t.tarot.spreads[selectedSpread].name.toLowerCase()}。
          </p>
          <button
            onClick={drawCards}
            className="px-8 py-3 bg-mystical-gold text-mystical-dark font-bold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            抽取卡片
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white font-mystical">你的{t.tarot.spreads[selectedSpread].name}</h2>
        {question && (
          <p className="text-mystical-gold italic">"{question}"</p>
        )}
      </div>

      {/* Cards Display */}
      <div className={`grid gap-6 ${selectedSpread === 'threeCard' ? 'md:grid-cols-3' : 'justify-center'}`}>
        {drawnCards.map((drawn, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-center text-lg font-semibold text-mystical-gold">
              {drawn.position}
            </h3>
            
            <div className="mystical-card mx-auto w-44 h-80 relative bg-gray-900 rounded-lg border border-gray-700">
              {revealedCards > index ? (
                <TarotCardImage
                  card={drawn.card}
                  reversed={drawn.reversed}
                  className="w-full h-full animate-card-flip"
                  showPlaceholder={true}
                />
              ) : (
                <div className="w-full h-full card-back rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-mystical-gold rounded-lg flex items-center justify-center">
                    <div className="text-center text-mystical-gold">
                      <div className="text-3xl mb-2">🌟</div>
                      <div className="text-xs">Card {index + 1}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Card Interpretations */}
      {revealedCards === drawnCards.length && (
        <div className="space-y-6 animate-fade-in">
          {drawnCards.map((drawn, index) => (
            <div key={index} className="bg-black/30 border border-gray-700 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-mystical-gold">
                  {drawn.position}: {drawn.card.nameCn || drawn.card.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  drawn.reversed ? 'bg-red-900 text-red-200' : 'bg-green-900 text-green-200'
                }`}>
                  {drawn.reversed ? '逆位' : '正位'}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-1">关键词：</h4>
                  <p className="text-gray-300 text-sm">
                    {drawn.reversed 
                      ? (drawn.card.reversed.keywordsCn || drawn.card.reversed.keywords).join('、')
                      : (drawn.card.upright.keywordsCn || drawn.card.upright.keywords).join('、')
                    }
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-1">含义：</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {drawn.reversed 
                      ? (drawn.card.reversed.meaningCn || drawn.card.reversed.meaning)
                      : (drawn.card.upright.meaningCn || drawn.card.upright.meaning)
                    }
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-1">指导：</h4>
                  <p className="text-mystical-gold text-sm leading-relaxed">
                    {drawn.reversed 
                      ? (drawn.card.reversed.adviceCn || drawn.card.reversed.advice)
                      : (drawn.card.upright.adviceCn || drawn.card.upright.advice)
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center pt-6">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-mystical-purple hover:bg-mystical-purple/80 text-white font-semibold rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              新的占卜
            </button>
          </div>
        </div>
      )}
    </div>
  )
}