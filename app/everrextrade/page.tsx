'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lightbox from '../components/Lightbox'
import InvestigationNav from '../components/InvestigationNav'
import WhatToDo from '../components/WhatToDo'
import RelatedScams from '../components/RelatedScams'
import InvestigationFooter from '../components/InvestigationFooter'

export default function EverrexTradePage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (src: string) => setLightboxImage(src)
  const closeLightbox = () => setLightboxImage(null)

  const handleKeyDown = (e: React.KeyboardEvent, src: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openLightbox(src)
    }
  }

  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/Article">
      <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
      <InvestigationNav totalLoss="$114,800+" totalLossShort="$114.8K+" />

      {/* Hero Warning Section */}
      <section className="relative py-10 sm:py-16 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="warning-pulse inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-red-600 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider" role="alert">
            Scam Alert - Active Investigation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6" itemProp="headline">
            <span className="gradient-text">EverrexTrade</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2" itemProp="description">
            EverrexTrade.com is a fake forex/stocks trading platform promoted through Discord impersonation using <strong className="text-yellow-400">typosquatting</strong>. 
            The scammer impersonates a real community admin to lure victims into depositing money on a fraudulent website filled with <strong className="text-yellow-400">Latin placeholder text</strong>.
          </p>
          <div className="card inline-block p-3 sm:p-4 rounded-lg">
            <p className="text-gray-400 text-xs sm:text-sm">Fraudulent Trading Platform</p>
            <p className="text-red-400 font-mono text-base sm:text-lg break-all">everrextrade.com</p>
          </div>
        </div>
      </section>

      {/* Investigation Status Banner */}
      <section className="py-6 sm:py-8 px-4 border-b border-gray-800 bg-yellow-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-6 rounded-xl border-2 border-yellow-500 bg-yellow-900/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-yellow-400">Investigation In Progress</h2>
                <p className="text-gray-300 text-xs sm:text-sm">Blockchain analysis pending - cryptocurrency addresses not yet captured</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-xs">Platform Evidence</p>
                  <p className="text-green-400 font-bold">Documented</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Discord Impersonation</p>
                  <p className="text-green-400 font-bold">Confirmed</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Domain Analysis</p>
                  <p className="text-green-400 font-bold">Complete</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Crypto Addresses</p>
                  <p className="text-yellow-400 font-bold">Pending</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center">
              <strong className="text-yellow-300">This page will be updated</strong> as crypto wallet addresses and blockchain transaction data are obtained and analyzed.
            </p>
          </div>
        </div>
      </section>

      {/* Typosquatting Alert */}
      <section className="py-6 sm:py-8 px-4 border-b border-gray-800 bg-orange-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-6 rounded-xl border-2 border-orange-500 bg-orange-900/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-orange-400">Typosquatting Attack Detected</h2>
                <p className="text-gray-300 text-xs sm:text-sm">The scammer added &quot;_pm&quot; to a real admin&apos;s username</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-gray-400 mb-4 text-xs sm:text-sm">Can you spot the difference?</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">REAL ADMIN USERNAME</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-green-400">salmaogs</p>
                </div>
                <div className="text-2xl sm:text-3xl text-gray-600">vs</div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">SCAMMER USERNAME</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-red-400">salmaogs<span className="text-red-300 underline decoration-4">_pm</span></p>
                </div>
              </div>
              <p className="text-orange-300 text-xs sm:text-sm">
                The scammer added the suffix <code className="bg-red-900/50 px-1 rounded">_pm</code>: <code className="bg-green-900/50 px-1 rounded">salmaogs</code> became <code className="bg-red-900/50 px-1 rounded">salmaogs_pm</code>
              </p>
            </div>
            
            <div className="mt-4 bg-red-900/20 p-3 rounded-lg text-center">
              <p className="text-red-300 text-xs sm:text-sm">
                <strong>Same target, different scam:</strong> This is the same real admin (<code className="bg-black/30 px-1 rounded">salmaogs</code>) also impersonated by the <Link href="/trucopy" className="text-purple-400 hover:underline">TruCopy</Link> scam as <code className="bg-black/30 px-1 rounded">_salma_ogs</code> and the <Link href="/oxycapitals" className="text-red-400 hover:underline">OxyCapitals</Link> scam as <code className="bg-black/30 px-1 rounded">sajmaogs</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">How This Scam Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">1</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-red-400">Impersonation</h3>
              <p className="text-gray-400 text-xs sm:text-base">Scammer creates Discord account <code className="bg-black/30 px-1 rounded text-red-300">salmaogs_pm</code> mimicking a real admin.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">2</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-orange-400">Social Engineering</h3>
              <p className="text-gray-400 text-xs sm:text-base">DMs victims asking about their &quot;trading progress&quot; to build false trust.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">3</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-yellow-400">Fake Platform</h3>
              <p className="text-gray-400 text-xs sm:text-base">Directs to everrextrade.com — a template scam site with Latin lorem ipsum text.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">4</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-green-400">Theft</h3>
              <p className="text-gray-400 text-xs sm:text-base">Victims deposit crypto/money which is immediately stolen by the scammer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Platform Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Fake Platform Evidence</h2>
          <p className="text-center text-gray-400 mb-2 text-sm sm:text-base">Screenshots of the fraudulent EverrexTrade website</p>
          <p className="text-center text-gray-500 text-xs mb-6 sm:mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/everrextrade/scam trading platform.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/everrextrade/scam trading platform.jpg')}>
              <img src="/evidence/everrextrade/scam trading platform.jpg" alt="EverrexTrade fake trading platform homepage showing stock tickers and account types" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-red-400 text-sm">Fake Trading Homepage</h4>
                <p className="text-gray-500 text-xs">Stock tickers, &quot;Complete Stocks Trading Experience&quot; — designed to look like a real broker</p>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/everrextrade/latin slop scam everexx page.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/everrextrade/latin slop scam everexx page.jpg')}>
              <img src="/evidence/everrextrade/latin slop scam everexx page.jpg" alt="EverrexTrade about page with Latin lorem ipsum placeholder text exposing it as a template scam" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-red-400 text-sm">Latin Placeholder Text (Dead Giveaway)</h4>
                <p className="text-gray-500 text-xs">&quot;Optio cumque nihil impedit quo minus...&quot; — lorem ipsum proves this is a scam template</p>
              </div>
            </div>
          </div>

          {/* Latin Text Analysis */}
          <div className="mt-6 card p-5 sm:p-6 rounded-xl border-2 border-red-500 bg-red-950/20">
            <h3 className="text-lg font-semibold mb-4 text-red-400 text-center">Scam Template Evidence: Latin Lorem Ipsum</h3>
            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <p className="text-gray-500 text-xs mb-2">Text found on the EverrexTrade &quot;About&quot; page:</p>
              <blockquote className="text-red-300 italic text-sm border-l-4 border-red-600 pl-4">
                &quot;Optio cumque nihil impedit quo minus id quod maxime place at facere possimus, omnis voluptas assumenda omnis dolors repellendus tempori bus autem quibusdam dolorem eum fugiat quo voluptas.&quot;
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm text-center">
              This is <strong className="text-red-300">Latin lorem ipsum placeholder text</strong> left by the scam template developers. 
              No legitimate trading platform would have untranslated Latin filler text on their website. 
              This proves the site was built from a pre-made scam kit without even bothering to replace the placeholder content.
            </p>
          </div>

          {/* Platform Red Flags */}
          <div className="mt-6 card p-5 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <h4 className="text-yellow-400 font-semibold text-sm mb-3">Platform Red Flags</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Latin lorem ipsum placeholder text on the About page</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Claims to be operating &quot;Since 2012&quot; — domain registered 2018</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">WHOIS hidden behind Domains By Proxy (GoDaddy)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Promoted exclusively via Discord impersonation DMs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">No regulatory registration or compliance information</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Generic stock template site with fake ticker data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Impersonation Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Discord Impersonation Evidence</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Side-by-side comparison of the fake scammer account vs the real admin</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fake Account */}
            <div className="card rounded-xl overflow-hidden border-2 border-red-600">
              <div className="bg-red-600 px-4 py-2 text-center">
                <span className="font-bold text-white uppercase tracking-wider text-sm">Fake Scammer Account</span>
              </div>
              <div className="cursor-zoom-in" onClick={() => openLightbox('/evidence/everrextrade/fake admin typosquatter attack.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/everrextrade/fake admin typosquatter attack.jpg')}>
                <img src="/evidence/everrextrade/fake admin typosquatter attack.jpg" alt="Fake Discord account salmaogs_pm impersonating real admin Salma" className="w-full" loading="lazy" />
              </div>
              <div className="p-4 bg-red-950/30">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Username:</span>
                    <code className="text-red-400 bg-black/30 px-2 rounded">salmaogs_pm</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Member Since:</span>
                    <span className="text-red-400 font-semibold">Feb 12, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mutual Servers:</span>
                    <span className="text-red-400">0 (No Mutual Servers)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Roles:</span>
                    <span className="text-red-400">None</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connections:</span>
                    <span className="text-red-400">None</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Activity:</span>
                    <span className="text-red-400">None</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Account */}
            <div className="card rounded-xl overflow-hidden border-2 border-green-600">
              <div className="bg-green-600 px-4 py-2 text-center">
                <span className="font-bold text-white uppercase tracking-wider text-sm">Real Admin Account</span>
              </div>
              <div className="cursor-zoom-in" onClick={() => openLightbox('/evidence/everrextrade/real admin.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/everrextrade/real admin.jpg')}>
                <img src="/evidence/everrextrade/real admin.jpg" alt="Real Discord admin account Salma - username salmaogs" className="w-full" loading="lazy" />
              </div>
              <div className="p-4 bg-green-950/30">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Username:</span>
                    <code className="text-green-400 bg-black/30 px-2 rounded">salmaogs</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Member Since:</span>
                    <span className="text-green-400 font-semibold">Jun 12, 2020</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mutual Servers:</span>
                    <span className="text-green-400">1 Mutual Server</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Roles:</span>
                    <span className="text-green-400">FOUNDER — CEO + 4 more</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connections:</span>
                    <span className="text-green-400">X (3,459 Posts)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bio Note:</span>
                    <span className="text-green-400">&quot;ONLY ACCOUNT&quot;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <h4 className="text-yellow-400 font-semibold text-sm mb-2">How to Spot the Fake</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• <strong className="text-yellow-300">Username suffix:</strong> Fake adds <code className="bg-black/30 px-1 rounded">_pm</code> (<code className="bg-black/30 px-1 rounded">salmaogs_pm</code>) vs real (<code className="bg-black/30 px-1 rounded">salmaogs</code>)</li>
              <li>• <strong className="text-yellow-300">Account age:</strong> Fake created Feb 2025 (5 years newer than real account from 2020)</li>
              <li>• <strong className="text-yellow-300">No mutual servers:</strong> Scammer account has zero connection to the actual community</li>
              <li>• <strong className="text-yellow-300">No roles:</strong> Real admin has FOUNDER — CEO, flow analyst, flow master, Server Booster roles; scammer has none</li>
              <li>• <strong className="text-yellow-300">No connections:</strong> Real admin has a verified X/Twitter account with 3,459 posts; scammer has nothing</li>
              <li>• <strong className="text-yellow-300">Copied bio:</strong> Scammer duplicated the real admin&apos;s bio but uses a different Linktree link (<code className="bg-black/30 px-1 rounded">linktr.ee/OnlyGainsSociety</code> vs real <code className="bg-black/30 px-1 rounded">linktr.ee/salmaogs</code>)</li>
              <li>• <strong className="text-yellow-300">Real account warns:</strong> States &quot;ONLY ACCOUNT / DMS ALWAYS OPEN&quot; indicating awareness of impersonators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scammer Conversation Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Scammer Conversation Evidence</h2>
          <p className="text-center text-gray-400 mb-2 text-sm sm:text-base">Actual messages from the scammer directing victims to EverrexTrade</p>
          <p className="text-center text-gray-500 text-xs mb-6 sm:mb-8">Click image to expand</p>
          
          <div className="max-w-3xl mx-auto">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/everrextrade/scam convo.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/everrextrade/scam convo.jpg')}>
              <img src="/evidence/everrextrade/scam convo.jpg" alt="Discord conversation with EverrexTrade scammer salmaogs_pm directing victim to fake trading platform" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-red-400 text-sm">Full Scam Conversation</h4>
                <p className="text-gray-500 text-xs">Scammer builds rapport then directs to everrextrade.com</p>
              </div>
            </div>
          </div>

          {/* Conversation Breakdown */}
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-center text-gray-300 mb-4">Conversation Timeline</h3>
            
            <div className="card p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-red-600/30 text-red-400 text-xs rounded">SCAMMER</span>
                <span className="text-gray-500 text-xs">Feb 4, 2026 — 9:49 AM</span>
              </div>
              <p className="text-gray-300 text-sm italic">&quot;Hello @Kev how are you doing today, and how&apos;s your trading progress been lately?&quot;</p>
              <p className="text-gray-500 text-xs mt-1">Initial contact — friendly opener to build rapport</p>
            </div>

            <div className="card p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-red-600/30 text-red-400 text-xs rounded">SCAMMER</span>
                <span className="text-gray-500 text-xs">Feb 5, 2026 — 6:24 AM</span>
              </div>
              <p className="text-gray-300 text-sm italic">&quot;I believe you&apos;re following up with the calls and puts on the server. Do you have any questions or concerns about our trading algorithm?&quot;</p>
              <p className="text-gray-500 text-xs mt-1">Follow-up — references server activity to seem legitimate</p>
            </div>

            <div className="card p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-blue-600/30 text-blue-400 text-xs rounded">VICTIM</span>
                <span className="text-gray-500 text-xs">Feb 5, 2026 — 9:17 AM</span>
              </div>
              <p className="text-gray-300 text-sm italic">&quot;whats the site of the algorithm&quot;</p>
            </div>

            <div className="card p-4 rounded-lg border-l-4 border-red-500 border-2 border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-red-600/30 text-red-400 text-xs rounded">SCAMMER</span>
                <span className="text-gray-500 text-xs">Feb 5, 2026 — 9:54 AM</span>
              </div>
              <p className="text-gray-300 text-sm italic">&quot;In order to join live sessions, learn from my experience and grow your trading account simultaneously, log on to the expert mirror trading broker and register an account <span className="text-red-400 font-semibold">https://everrextrade.com/</span>. When you&apos;re done with that, let me know so I can guide you through.&quot;</p>
              <p className="text-red-400 text-xs mt-1 font-semibold">THE TRAP — directs victim to the scam platform</p>
            </div>
          </div>
          
          <div className="mt-6 card p-4 rounded-xl bg-yellow-900/20 border border-yellow-700 max-w-3xl mx-auto">
            <p className="text-yellow-400 text-center text-sm">
              <strong>Warning:</strong> The scammer uses professional language and references &quot;live sessions,&quot; &quot;mirror trading,&quot; and &quot;expert brokers&quot; to sound legitimate. 
              No real admin would DM you unsolicited investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Domain / WHOIS Analysis */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Domain &amp; WHOIS Analysis</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Technical analysis of the everrextrade.com domain</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* WHOIS Screenshot */}
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/everrextrade/whois.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/everrextrade/whois.jpg')}>
              <img src="/evidence/everrextrade/whois.jpg" alt="WHOIS record for everrextrade.com showing GoDaddy registration and privacy proxy" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-blue-400 text-sm">WHOIS Lookup</h4>
                <p className="text-gray-500 text-xs">Domain registration hidden behind privacy proxy</p>
              </div>
            </div>

            {/* Domain Details */}
            <div className="card p-5 rounded-xl border border-blue-700/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Domain Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Domain:</span>
                  <span className="text-red-400 font-mono">everrextrade.com</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Registered:</span>
                  <span className="text-gray-300">March 13, 2018</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Expires:</span>
                  <span className="text-yellow-400">March 13, 2026</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Last Updated:</span>
                  <span className="text-gray-300">July 24, 2025</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Registrar:</span>
                  <span className="text-gray-300">GoDaddy.com, LLC</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Privacy:</span>
                  <span className="text-red-400">Domains By Proxy, LLC</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Nameservers:</span>
                  <span className="text-gray-300 text-xs">ns1.v12hosting.com<br />ns2.v12hosting.com</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">DNSSEC:</span>
                  <span className="text-red-400">Unsigned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Domain Red Flags */}
          <div className="mt-6 card p-5 rounded-xl bg-red-950/20 border border-red-700/50">
            <h4 className="text-red-400 font-semibold text-sm mb-3">Domain Red Flags</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">WHOIS hidden</strong> — legitimate brokers proudly display company registration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">Claims &quot;Since 2012&quot;</strong> — but domain registered in 2018</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">Privacy proxy</strong> — Domains By Proxy used to hide operator identity</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">Budget hosting</strong> — V12Hosting, not enterprise-grade infrastructure</span>
              </div>
            </div>
          </div>

          {/* Reporting Info */}
          <div className="mt-6 card p-4 rounded-xl bg-green-950/20 border border-green-700/50">
            <h4 className="text-green-400 font-semibold text-sm mb-2">Report This Domain</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Registrar Abuse Contact:</p>
                <p className="text-green-300">abuse@godaddy.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Registrar Abuse Phone:</p>
                <p className="text-green-300">480-624-2505</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Scam Network */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-purple-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Connected Scam Network</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            The same real admin (<code className="bg-black/30 px-1 rounded">salmaogs</code>) has been impersonated by at least 4 different scam operations
          </p>
          
          <div className="card p-5 sm:p-6 rounded-xl border-2 border-purple-500 bg-purple-950/30 mb-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">Impersonation Pattern Map</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="text-center p-3 bg-green-900/30 rounded border border-green-700">
                <div className="text-gray-400 text-xs mb-1">REAL ADMIN</div>
                <div className="text-green-400 text-lg font-bold">salmaogs</div>
                <div className="text-gray-500 text-xs mt-1">Discord account since June 2020</div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓ Impersonated by ↓</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="text-center p-3 bg-red-900/30 rounded border border-red-700">
                  <div className="text-gray-400 text-xs mb-1">OXYCAPITALS SCAM</div>
                  <div className="text-red-400 font-bold">sajmaogs</div>
                  <div className="text-gray-500 text-xs mt-1">Changed l→j</div>
                </div>
                <div className="text-center p-3 bg-orange-900/30 rounded border border-orange-700">
                  <div className="text-gray-400 text-xs mb-1">MIRROREXP SCAM</div>
                  <div className="text-orange-400 font-bold">_atraveller</div>
                  <div className="text-gray-500 text-xs mt-1">Different admin impersonated</div>
                </div>
                <div className="text-center p-3 bg-purple-900/30 rounded border border-purple-700">
                  <div className="text-gray-400 text-xs mb-1">TRUCOPY SCAM</div>
                  <div className="text-purple-400 font-bold">_salma_ogs</div>
                  <div className="text-gray-500 text-xs mt-1">Added underscores</div>
                </div>
                <div className="text-center p-3 bg-yellow-900/30 rounded border border-yellow-700">
                  <div className="text-gray-400 text-xs mb-1">EVERREXTRADE SCAM</div>
                  <div className="text-yellow-400 font-bold">salmaogs_pm</div>
                  <div className="text-gray-500 text-xs mt-1">Added _pm suffix</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <p className="text-yellow-400 text-center text-sm">
              <strong>Criminal Network Pattern:</strong> Multiple scam operations targeting the same community admin suggests either a coordinated criminal network 
              or widely shared scam playbooks. Each operation uses a different fake trading platform but identical impersonation methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Blockchain Analysis Pending */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Blockchain Analysis</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Cryptocurrency wallet and transaction analysis</p>
          
          <div className="card p-8 sm:p-12 rounded-2xl border-2 border-dashed border-gray-600 text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">Pending Investigation</h3>
            <p className="text-gray-500 mb-4 max-w-md mx-auto">
              Cryptocurrency deposit addresses from the EverrexTrade platform have not yet been captured. 
              Once obtained, full blockchain transaction tracing and money flow analysis will be published here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                <span className="text-gray-500">Wallet Addresses:</span>{' '}
                <span className="text-yellow-400 font-semibold">Not Yet Captured</span>
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                <span className="text-gray-500">Transaction Analysis:</span>{' '}
                <span className="text-yellow-400 font-semibold">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedScams exclude="everrextrade" />

      <WhatToDo extraSteps={
        <div className="card p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">3. Report to Domain Registrar</h3>
          <p className="text-gray-400 text-sm">
            Report everrextrade.com to GoDaddy&apos;s abuse team at <strong className="text-blue-300">abuse@godaddy.com</strong> or 
            call <strong className="text-blue-300">480-624-2505</strong>. Request an investigation into the domain for promoting investment fraud.
          </p>
        </div>
      } />

      <InvestigationFooter
        currentPage="everrextrade"
        tags={['EverrexTrade Scam', 'Fake Forex Platform', 'Discord Impersonation', 'Typosquatting Alert', 'Crypto Scam 2026']}
      />
    </main>
  )
}
