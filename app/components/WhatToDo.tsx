'use client'

import { ReactNode } from 'react'

interface WhatToDoProps {
  extraSteps?: ReactNode
}

export default function WhatToDo({ extraSteps }: WhatToDoProps) {
  return (
    <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What To Do If You&apos;ve Been Scammed</h2>
        
        <div className="space-y-4">
          <div className="card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">1. Report to Authorities</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• <strong>FBI IC3:</strong> <a href="https://ic3.gov" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ic3.gov</a> (Internet Crime Complaint Center)</li>
              <li>• <strong>FTC:</strong> <a href="https://reportfraud.ftc.gov" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a></li>
              <li>• Local law enforcement</li>
            </ul>
          </div>
          
          <div className="card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">2. Report Wallet Addresses</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• <strong>Chainabuse:</strong> <a href="https://chainabuse.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">chainabuse.com</a></li>
              <li>• <strong>Bitcoin Abuse:</strong> <a href="https://bitcoinabuse.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">bitcoinabuse.com</a></li>
              <li>• Report to exchanges (Binance, Coinbase, Kraken, etc.)</li>
            </ul>
          </div>

          {extraSteps}
          
          <div className="card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{extraSteps ? '4' : '3'}. Report the Discord Account</h3>
            <p className="text-gray-400">Report the impersonator account to Discord Trust &amp; Safety with screenshots of the conversation and the fake username.</p>
          </div>
          
          <div className="card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{extraSteps ? '5' : '4'}. Document Everything</h3>
            <p className="text-gray-400">Save all messages, transaction records, wallet addresses, and screenshots. This evidence is crucial for any investigation.</p>
          </div>
          
          <div className="card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{extraSteps ? '6' : '5'}. Warn Others</h3>
            <p className="text-gray-400">Share this page to help prevent others from falling victim to this scam.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
