/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeExperience } from './components/EnvelopeExperience.tsx';
import { VenueSection } from './components/VenueSection.tsx';
import { CeremoniesSection } from './components/CeremoniesSection.tsx';
import { CeremonialFlow } from './components/CeremonialFlow.tsx';
import { FamilyBlessingSection } from './components/FamilyBlessingSection.tsx';
import { CelebrationCountdown } from './components/CelebrationCountdown.tsx';
import { MusicPlayer } from './components/MusicPlayer.tsx';
import { ShareModal } from './components/ShareModal.tsx';
import { CrossAndDove, BotanicalFlourish, MonogramSeal, WeddingBells } from './components/Illustrations.tsx';
import { Share2, Mail } from 'lucide-react';

export default function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // When envelope opens, trigger song playback
  const handleOpenEnvelope = () => {
    setEnvelopeOpen(true);
    setIsPlayingMusic(true);
  };

  const handleReopenEnvelope = () => {
    setEnvelopeOpen(false);
  };

  return (
    <div className="min-h-screen text-[#2D231E] selection:bg-[#E4B3A9] selection:text-[#2D231E] flex flex-col relative overflow-x-hidden">
      
      {/* 1. TACTILE ENVELOPE OPENING EXPERIENCE */}
      <EnvelopeExperience
        isOpen={envelopeOpen}
        onOpen={handleOpenEnvelope}
        musicEnabled={isPlayingMusic}
        onToggleMusic={() => {}}
      />

      {/* 2. TOP BAR (3-Zone Contract) */}
      <header className="sticky top-0 z-30 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#C49A45]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark in Romantic Pinyon Script */}
          <a 
            href="#" 
            className="font-pinyon text-3xl sm:text-4xl font-bold tracking-wide text-[#741C2B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            Gladys <span className="text-[#C49A45] mx-0.5">&amp;</span> Vikash
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase font-inscriptional text-[#2D231E]/80">
            <a href="#family" className="hover:text-[#741C2B] transition-colors whitespace-nowrap shrink-0">Family</a>
            <a href="#ceremonies" className="hover:text-[#741C2B] transition-colors whitespace-nowrap shrink-0">Ceremonies</a>
            <a href="#venue" className="hover:text-[#741C2B] transition-colors whitespace-nowrap shrink-0">Sanctuary</a>
            <a href="#liturgy" className="hover:text-[#741C2B] transition-colors whitespace-nowrap shrink-0">Order of Service</a>
          </nav>

          {/* Zone 3: 1 Primary Action (Share Invitation + Replay Envelope) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleReopenEnvelope}
              title="View tactile envelope again"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C49A45]/40 text-xs font-semibold text-[#741C2B] hover:bg-[#FAF3E2] transition shadow-xs whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Envelope</span>
            </button>
            <button
              type="button"
              onClick={() => setIsShareModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#741C2B] text-[#FFF9EA] text-xs font-semibold uppercase tracking-wider hover:bg-[#8C2335] active:scale-95 transition shadow-xs whitespace-nowrap shrink-0"
            >
              <Share2 className="w-3.5 h-3.5 text-[#E5C378]" />
              <span>Share</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. HERO STATIONERY SECTION */}
      <section className="relative pt-12 pb-14 md:py-20 px-4 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="flex justify-center items-center gap-3 mb-3">
            <CrossAndDove className="w-9 h-9 text-[#C49A45]" />
          </div>

          <p className="font-inscriptional text-xs md:text-sm text-[#C49A45] tracking-[0.3em] uppercase font-semibold">
            The Holy Matrimony Celebration
          </p>

          <h1 className="font-pinyon text-5xl sm:text-7xl md:text-8xl text-[#741C2B] tracking-wide mt-3 mb-1 drop-shadow-xs">
            Gladys Evangeline
          </h1>
          
          <div className="flex items-center justify-center gap-4 my-1">
            <div className="w-12 sm:w-24 h-px bg-[#C49A45]/40" />
            <span className="font-pinyon text-4xl sm:text-6xl text-[#C49A45]">&amp;</span>
            <div className="w-12 sm:w-24 h-px bg-[#C49A45]/40" />
          </div>

          <h1 className="font-pinyon text-5xl sm:text-7xl md:text-8xl text-[#741C2B] tracking-wide mb-6 drop-shadow-xs">
            Vikash Varma
          </h1>

          <p className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#2D231E]/90 max-w-xl mx-auto italic leading-relaxed">
            Together with our families, we joyfully invite you to unite with us in prayer and celebration.
          </p>

          {/* Date & Sanctuary Pill-free Badge */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 py-3 rounded-xl bg-[#FFFDF8]/90 border border-[#C49A45]/40 shadow-xs">
            <span className="font-serif-luxury text-base font-bold text-[#741C2B]">
              16 &amp; 17 October 2026
            </span>
            <span className="hidden sm:inline text-[#C49A45]">|</span>
            <span className="font-sans-clean text-xs font-semibold text-[#71866F] uppercase tracking-wider">
              Cantonment Baptist Church, Vizianagaram
            </span>
          </div>

          <div className="flex justify-center mt-8">
            <BotanicalFlourish className="w-32 h-6 text-[#C49A45]" />
          </div>
        </div>
      </section>

      {/* 4. CELEBRATION COUNTDOWN */}
      <CelebrationCountdown />

      {/* 5. FAMILY INVITATION, SCRIPTURES & GROOM'S LINEAGE */}
      <FamilyBlessingSection />

      {/* 6. CEREMONIES SECTION (Betrothal & Wedding) */}
      <CeremoniesSection />

      {/* 7. ORDER OF SERVICE LITURGY FLOW */}
      <div id="liturgy">
        <CeremonialFlow />
      </div>

      {/* 8. CHURCH VENUE SECTION (Desktop 2-column with prominent photo & VIEW LOCATION) */}
      <VenueSection />

      {/* 9. CLOSING BLESSING & FOOTER */}
      <footer className="mt-auto pt-16 pb-24 px-4 bg-[#FAF2DE]/80 border-t border-[#C49A45]/30 text-center relative">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-4">
            <WeddingBells className="w-8 h-8 text-[#C49A45]" />
            <MonogramSeal size={58} />
          </div>
          
          <h3 className="font-pinyon text-3xl md:text-4xl font-bold text-[#741C2B]">
            Gladys <span className="text-[#C49A45]">&amp;</span> Vikash
          </h3>
          <p className="font-serif-luxury text-sm md:text-base text-[#2D231E]/80 italic mt-2 max-w-lg mx-auto">
            “And now these three remain: faith, hope, and love. But the greatest of these is love.”
          </p>
          <p className="font-inscriptional text-[11px] text-[#71866F] tracking-widest uppercase mt-1">
            — 1 Corinthians 13:13
          </p>

          <div className="w-20 h-px bg-[#C49A45]/30 mx-auto my-6" />

          <p className="font-sans-clean text-xs text-stone-600">
            We solicit your esteemed presence and heartfelt prayers.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => setIsShareModalOpen(true)}
              className="text-[#741C2B] hover:underline font-medium flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Wedding Invitation</span>
            </button>
            <span className="text-stone-400">·</span>
            <button
              type="button"
              onClick={handleReopenEnvelope}
              className="text-[#741C2B] hover:underline font-medium flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Replay Envelope Opening</span>
            </button>
          </div>

          <p className="text-[11px] text-stone-500 mt-8 font-serif-luxury">
            October 16 &amp; 17, 2026 • Cantonment Baptist Church, Vizianagaram, Andhra Pradesh
          </p>
        </div>
      </footer>

      {/* 10. FLOATING BACKGROUND MUSIC PLAYER */}
      <MusicPlayer isPlaying={isPlayingMusic} />

      {/* 11. SHARE INVITATION MODAL */}
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />

    </div>
  );
}
