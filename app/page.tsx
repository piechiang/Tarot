'use client'

import { useState } from 'react'
import { Spade, Star, Coins, Languages } from 'lucide-react'
import TarotReading from './components/TarotReading'
import IChing from './components/IChing'
import Astrology from './components/Astrology'
import { useLanguage } from '@/lib/language-context'

type Tool = 'tarot' | 'iching' | 'astrology' | null

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<Tool>(null)
  const { language, setLanguage, t } = useLanguage()

  if (selectedTool) {
    return (
      <div>
        <header className="border-b border-gray-800 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-mystical-gold font-mystical">
                {t.nav.title}
              </h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-mystical-purple/20 hover:bg-mystical-purple/40 rounded-lg transition-colors"
                >
                  <Languages className="w-4 h-4" />
                  {language === 'zh' ? 'English' : '中文'}
                </button>
                <p className="text-sm text-gray-400 hidden sm:block">
                  {t.nav.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <button
              onClick={() => setSelectedTool(null)}
              className="mb-6 px-4 py-2 bg-mystical-purple hover:bg-mystical-purple/80 rounded-lg transition-colors"
            >
              {t.nav.backHome}
            </button>
            
            {selectedTool === 'tarot' && <TarotReading />}
            {selectedTool === 'iching' && <IChing />}
            {selectedTool === 'astrology' && <Astrology />}
          </div>
        </main>
        <footer className="border-t border-gray-800 mt-16 py-8 text-center text-gray-400">
          <div className="container mx-auto px-4">
            <p className="text-sm mb-2">
              <strong>{t.footer.disclaimer.split(':')[0]}:</strong> {t.footer.disclaimer.split(':')[1]}
            </p>
            <p className="text-xs">
              {t.footer.warning}
            </p>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div>
      <header className="border-b border-gray-800 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-mystical-gold font-mystical">
              {t.nav.title}
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="flex items-center gap-2 px-3 py-1 text-sm bg-mystical-purple/20 hover:bg-mystical-purple/40 rounded-lg transition-colors"
              >
                <Languages className="w-4 h-4" />
                {language === 'zh' ? 'English' : '中文'}
              </button>
              <p className="text-sm text-gray-400 hidden sm:block">
                {t.nav.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-mystical">
              {t.home.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.home.subtitle}
            </p>
          </div>

          {/* Tool Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tarot Card */}
            <div
              onClick={() => setSelectedTool('tarot')}
              className="group cursor-pointer bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-mystical-gold/20 rounded-xl p-8 hover:border-mystical-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-mystical-gold/20 rounded-full flex items-center justify-center group-hover:bg-mystical-gold/30 transition-colors">
                  <Spade className="w-8 h-8 text-mystical-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mystical">{t.home.tarot.title}</h3>
                <p className="text-gray-300">
                  {t.home.tarot.description}
                </p>
                <div className="pt-2">
                  <span className="text-mystical-gold font-semibold">{t.home.tarot.action}</span>
                </div>
              </div>
            </div>

            {/* I Ching Card */}
            <div
              onClick={() => setSelectedTool('iching')}
              className="group cursor-pointer bg-gradient-to-br from-amber-900/50 to-orange-900/50 border border-mystical-gold/20 rounded-xl p-8 hover:border-mystical-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-mystical-gold/20 rounded-full flex items-center justify-center group-hover:bg-mystical-gold/30 transition-colors">
                  <Coins className="w-8 h-8 text-mystical-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mystical">{t.home.iching.title}</h3>
                <p className="text-gray-300">
                  {t.home.iching.description}
                </p>
                <div className="pt-2">
                  <span className="text-mystical-gold font-semibold">{t.home.iching.action}</span>
                </div>
              </div>
            </div>

            {/* Astrology Card */}
            <div
              onClick={() => setSelectedTool('astrology')}
              className="group cursor-pointer bg-gradient-to-br from-blue-900/50 to-teal-900/50 border border-mystical-gold/20 rounded-xl p-8 hover:border-mystical-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-mystical-gold/20 rounded-full flex items-center justify-center group-hover:bg-mystical-gold/30 transition-colors">
                  <Star className="w-8 h-8 text-mystical-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white font-mystical">{t.home.astrology.title}</h3>
                <p className="text-gray-300">
                  {t.home.astrology.description}
                </p>
                <div className="pt-2">
                  <span className="text-mystical-gold font-semibold">{t.home.astrology.action}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center space-y-8 max-w-4xl mx-auto pt-12 border-t border-gray-800">
            <h3 className="text-3xl font-bold text-white font-mystical">{t.home.features.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left space-y-2">
                <h4 className="text-xl font-semibold text-mystical-gold">{t.home.features.authentic.title}</h4>
                <p className="text-gray-300">{t.home.features.authentic.description}</p>
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-xl font-semibold text-mystical-gold">{t.home.features.privacy.title}</h4>
                <p className="text-gray-300">{t.home.features.privacy.description}</p>
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-xl font-semibold text-mystical-gold">{t.home.features.mobile.title}</h4>
                <p className="text-gray-300">{t.home.features.mobile.description}</p>
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-xl font-semibold text-mystical-gold">{t.home.features.free.title}</h4>
                <p className="text-gray-300">{t.home.features.free.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-16 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p className="text-sm mb-2">
            <strong>{t.footer.disclaimer.split('：')[0]}：</strong> {t.footer.disclaimer.split('：')[1] || t.footer.disclaimer.split(':')[1]}
          </p>
          <p className="text-xs">
            {t.footer.warning}
          </p>
        </div>
      </footer>
    </div>
  )
}