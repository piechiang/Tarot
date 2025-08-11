'use client'

import { useState } from 'react'
import { TarotCard } from '../../lib/tarot-data'
import { getCardImageUrl } from '../../lib/tarot-card-enhancer'

interface TarotCardImageProps {
  card: TarotCard
  reversed?: boolean
  className?: string
  showPlaceholder?: boolean
  onImageLoad?: () => void
  onImageError?: () => void
}

export default function TarotCardImage({ 
  card, 
  reversed = false, 
  className = '', 
  showPlaceholder = true,
  onImageLoad,
  onImageError
}: TarotCardImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const imageUrl = getCardImageUrl(card)
  const fallbackUrl = '/images/tarot/card-back.jpg'

  const handleImageLoad = () => {
    setImageLoaded(true)
    onImageLoad?.()
  }

  const handleImageError = () => {
    setImageError(true)
    onImageError?.()
  }

  const renderFallback = () => (
    <div className={`${className} bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-mystical-gold rounded-lg flex flex-col justify-between p-4`}>
      <div className="text-center space-y-2">
        <h4 className="font-bold text-lg text-white">{card.nameCn || card.name}</h4>
        <p className="text-xs text-gray-300 uppercase tracking-wide">
          {card.suitCn || card.suit} • {reversed ? '逆位' : '正位'}
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-mystical-purple to-mystical-navy rounded-full flex items-center justify-center mb-2">
          <span className="text-2xl text-white font-bold">
            {card.suit === 'major' ? '✨' : 
             card.suit === 'cups' ? '🏆' :
             card.suit === 'wands' ? '🔥' :
             card.suit === 'swords' ? '⚔️' : '💰'}
          </span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-300">
          {reversed ? '逆位' : '正位'}
        </p>
      </div>
    </div>
  )

  if (imageError && !showPlaceholder) {
    return renderFallback()
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && showPlaceholder && (
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-mystical-gold rounded-lg flex items-center justify-center">
          <div className="text-center text-mystical-gold">
            <div className="animate-spin text-2xl mb-2">🌟</div>
            <div className="text-xs">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Main image */}
      <img
        src={imageUrl}
        alt={`${card.nameCn || card.name} - ${card.suitCn || card.suit} ${reversed ? '逆位' : '正位'}`}
        className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${
          reversed ? 'transform rotate-180' : ''
        } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
      
      {/* Fallback on image error */}
      {imageError && showPlaceholder && (
        <div className="absolute inset-0 z-20">
          {renderFallback()}
        </div>
      )}
      
      {/* Card info overlay */}
      {imageLoaded && !imageError && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
          <div className="text-center">
            <h5 className="text-white text-sm font-semibold">
              {card.nameCn || card.name}
            </h5>
            <p className="text-xs text-gray-300">
              {reversed ? '逆位' : '正位'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}