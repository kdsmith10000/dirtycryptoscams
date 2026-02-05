'use client'

import Link from 'next/link'

interface InvestigationNavProps {
  totalLoss: string
  totalLossShort: string
}

export default function InvestigationNav({ totalLoss, totalLossShort }: InvestigationNavProps) {
  return (
    <nav className="bg-gradient-to-r from-red-950 to-purple-950 border-b border-red-800 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2">
        <Link href="/" className="text-gray-400 hover:text-white text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Back to Dirty Crypto</span>
          <span className="sm:hidden">Back</span>
        </Link>
        
        {/* Total Loss Counter - Desktop */}
        <div className="hidden md:flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-red-700/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wider leading-none">Total Documented Losses</p>
            <p className="text-red-500 font-black text-lg leading-tight">{totalLoss}</p>
          </div>
        </div>

        {/* Mobile Loss Counter */}
        <div className="flex md:hidden items-center gap-1.5 bg-black/40 px-2 py-1.5 rounded-lg border border-red-700/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-500 font-black text-sm leading-tight">{totalLossShort}</p>
        </div>

        <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap hidden sm:inline">Scam Exposure Network</span>
        <span className="text-red-500 font-bold text-xs uppercase tracking-wider sm:hidden">Scam Alert</span>
      </div>
    </nav>
  )
}
