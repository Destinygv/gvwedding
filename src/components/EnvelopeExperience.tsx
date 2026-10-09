import React, { useState, useRef } from 'react';
import { MonogramSeal } from './Illustrations.tsx';
import { Volume2, VolumeX, MailOpen } from 'lucide-react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  musicEnabled: boolean;
  onToggleMusic: () => void;
}

export const EnvelopeExperience: React.FC<EnvelopeProps> = ({
  isOpen,
  onOpen,
  musicEnabled,
  onToggleMusic,
}) => {
  const [animating, setAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenClick = () => {
    if (animating || isOpen) return;
    setAnimating(true);

    // 1. Immediately trigger music playback via user gesture (starts at 01:08)
    try {
      if (typeof window.playWeddingMusic === 'function') {
        window.playWeddingMusic();
      } else {
        window.pendingWeddingMusic = true;
      }
    } catch (e) {
      console.warn('Music auto-start error:', e);
    }

    // 2. Play the exact paper rustle audio retrieved from the original invitation
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('/assets/audio/envsound.mp3');
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn('Paper audio play prevented:', err);
      });
    } catch {
      // Audio playback failsafe
    }

    // Short, smooth tactile CSS transition sequence
    setTimeout(() => {
      onOpen();
      setAnimating(false);
    }, 1100);
  };

  if (isOpen && !animating) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-700 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-[#1D1612]/75 backdrop-blur-sm'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Envelope Opening"
    >
      {/* Audio element for paper rustle sound */}
      <audio ref={audioRef} src="/assets/audio/envsound.mp3" preload="auto" />

      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Helper prompt banner */}
        <div className="text-center mb-4 transition-transform duration-500">
          <p className="font-inscriptional text-xs md:text-sm text-[#F8EED8] tracking-[0.2em] uppercase drop-shadow">
            The Holy Matrimony Of
          </p>
          <h1 className="font-pinyon text-4xl md:text-5xl text-[#FFF9EA] mt-0.5 drop-shadow-md">
            Gladys &amp; Vikash
          </h1>
        </div>

        {/* Physical Envelope Container */}
        <div 
          onClick={handleOpenClick}
          className={`relative w-full max-w-[440px] h-[290px] md:h-[310px] cursor-pointer group select-none transition-transform duration-500 hover:scale-[1.01] active:scale-[0.99]`}
          style={{ perspective: '1200px' }}
        >
          {/* Ambient Table Drop Shadow */}
          <div className="absolute inset-x-6 -bottom-5 h-8 bg-black/40 blur-xl rounded-full" />

          {/* Envelope Body (Ivory Texture with Fine Gold Edging) */}
          <div className="absolute inset-0 rounded-lg bg-[#FAF3E0] shadow-2xl overflow-hidden border border-[#C49A45]/40 paper-texture">
            {/* Fine Gold Inset Frame */}
            <div className="absolute inset-2 border border-[#C49A45]/30 rounded pointer-events-none" />
            <div className="absolute inset-3 border border-dashed border-[#C49A45]/20 rounded pointer-events-none" />

            {/* Subtle botanical corner vignettes */}
            <div className="absolute top-2 left-2 text-[#71866F]/30 pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M4 36 C4 16 16 4 36 4" stroke="currentColor" strokeWidth="1" />
                <path d="M4 24 C10 24 16 18 16 12" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>
            <div className="absolute top-2 right-2 text-[#71866F]/30 pointer-events-none rotate-90">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M4 36 C4 16 16 4 36 4" stroke="currentColor" strokeWidth="1" />
                <path d="M4 24 C10 24 16 18 16 12" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Back Fold Geometrics */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 310" preserveAspectRatio="none">
              {/* Lower triangular pocket fold */}
              <path d="M0,310 L220,160 L440,310 Z" fill="#F4E8D0" stroke="rgba(196, 154, 69, 0.45)" strokeWidth="1" />
              {/* Left & Right side flap folds */}
              <path d="M0,0 L220,160 L0,310 Z" fill="#EFE2C5" opacity="0.6" stroke="rgba(196, 154, 69, 0.25)" strokeWidth="0.8" />
              <path d="M440,0 L220,160 L440,310 Z" fill="#ECE0C2" opacity="0.6" stroke="rgba(196, 154, 69, 0.25)" strokeWidth="0.8" />
            </svg>

            {/* Addressed Envelope Face Typography */}
            <div className="absolute inset-x-8 bottom-7 text-center z-10 pointer-events-none">
              <p className="font-inscriptional text-[10px] md:text-[11px] text-[#741C2B] tracking-[0.25em] uppercase font-semibold">
                You Are Cordially Invited
              </p>
              <h2 className="font-pinyon text-3xl md:text-4xl font-bold text-[#741C2B] tracking-wide mt-0.5">
                Gladys &amp; Vikash
              </h2>
              <div className="flex items-center justify-center gap-2 mt-0.5 text-[#71866F] text-xs font-serif-luxury italic">
                <span>October 16 &amp; 17, 2026</span>
                <span>•</span>
                <span>Vizianagaram</span>
              </div>
            </div>
          </div>

          {/* Emerging Letter Slip when animating */}
          <div 
            className={`absolute inset-x-6 top-6 h-[250px] bg-[#FFFDF7] rounded shadow-xl border border-[#C49A45]/30 p-5 flex flex-col items-center justify-center text-center transition-all duration-800 ease-out z-20 pointer-events-none ${
              animating ? '-translate-y-36 opacity-100 shadow-2xl' : 'translate-y-0 opacity-0'
            }`}
          >
            <span className="font-inscriptional text-[9px] text-[#C49A45] tracking-[0.2em]">HOLY MATRIMONY</span>
            <p className="font-pinyon text-3xl text-[#741C2B] mt-1">Gladys &amp; Vikash</p>
            <div className="w-16 h-px bg-[#C49A45]/40 my-2" />
            <p className="font-serif-luxury text-xs text-[#30251F]">Opening invitation...</p>
          </div>

          {/* Top Flap (Opens naturally with 3D rotation) */}
          <div 
            className={`absolute inset-x-0 top-0 h-[155px] origin-top transition-transform duration-700 ease-in-out z-30 pointer-events-none ${
              animating ? '[transform:rotateX(180deg)] shadow-none' : '[transform:rotateX(0deg)]'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 440 155" preserveAspectRatio="none">
              {/* Flap shape */}
              <path d="M0,0 L220,155 L440,0 Z" fill="#F8EED8" stroke="rgba(196, 154, 69, 0.5)" strokeWidth="1.2" />
              {/* Inner gold hairline border */}
              <path d="M14,6 L220,147 L426,6" fill="none" stroke="rgba(196, 154, 69, 0.35)" strokeWidth="0.8" />
            </svg>
          </div>

          {/* G/V Wax Seal Button & Tap Affordance */}
          <div 
            className={`absolute left-1/2 top-[152px] -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
              animating ? 'scale-0 opacity-0' : 'scale-100 opacity-100 group-hover:scale-105'
            }`}
          >
            <div className="relative flex flex-col items-center">
              <MonogramSeal size={74} />
              <div className="mt-3 px-3.5 py-1 bg-[#30251F]/90 text-[#FFF9EA] text-[11px] font-medium tracking-wider uppercase rounded-full shadow-lg border border-[#C49A45]/50 flex items-center gap-1.5 whitespace-nowrap">
                <MailOpen className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Tap Seal to Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Music Preference & Accessibility Toggle */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[#F8EED8]/90">
          <button
            type="button"
            onClick={onToggleMusic}
            className="flex items-center gap-2 hover:text-white transition-colors py-1 px-3 rounded border border-white/20 bg-white/5"
            aria-label="Toggle background music for opening"
          >
            {musicEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Music: On ("Goodness of God")</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-300" />
                <span>Music: Muted</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
