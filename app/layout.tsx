import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '神秘工具 - 塔罗牌、占星术与易经 | Mystical Tools - Tarot, Astrology & I Ching',
  description: '在线占卜工具，包括塔罗牌占卜、星盘分析和易经咨询。仅供娱乐和自我反思使用。Online divination tools including tarot card readings, birth chart analysis, and I Ching consultations. For entertainment and self-reflection purposes only.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-br from-mystical-dark via-gray-900 to-mystical-navy">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}