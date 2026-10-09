import React, { useState, useEffect } from 'react';
import { InterlockingRings, CornerOrnament } from './Illustrations.tsx';

export const CelebrationCountdown: React.FC = () => {
  // Target: Saturday, October 17, 2026 at 10:00 AM IST (UTC+5:30)
  const targetDate = new Date('2026-10-17T10:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section 
      aria-label="Wedding celebration countdown"
      className="py-10 px-4 max-w-4xl mx-auto"
    >
      <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-10 relative overflow-hidden text-center paper-texture">
        {/* Subtle corner flourishes */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/40" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none rotate-90">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/40" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none -rotate-90">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/40" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none rotate-180">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/40" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex justify-center mb-2">
            <InterlockingRings className="w-12 h-7 text-[#C49A45]" />
          </div>
          <span className="font-inscriptional text-xs text-[#C49A45] tracking-[0.25em] uppercase font-semibold">
            Until We Say “I Do”
          </span>
          <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#741C2B] mt-0.5 mb-6">
            Counting Down with Joy &amp; Thanksgiving
          </h3>

          {/* Time digits grid */}
          <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto">
            <div className="p-3 sm:p-4 rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/30">
              <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#741C2B] block tabular-nums">
                {timeLeft.days}
              </span>
              <span className="font-inscriptional text-[10px] sm:text-xs text-[#71866F] uppercase tracking-wider block mt-1">
                Days
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/30">
              <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#741C2B] block tabular-nums">
                {timeLeft.hours}
              </span>
              <span className="font-inscriptional text-[10px] sm:text-xs text-[#71866F] uppercase tracking-wider block mt-1">
                Hours
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/30">
              <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#741C2B] block tabular-nums">
                {timeLeft.minutes}
              </span>
              <span className="font-inscriptional text-[10px] sm:text-xs text-[#71866F] uppercase tracking-wider block mt-1">
                Minutes
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/30">
              <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#741C2B] block tabular-nums">
                {timeLeft.seconds}
              </span>
              <span className="font-inscriptional text-[10px] sm:text-xs text-[#71866F] uppercase tracking-wider block mt-1">
                Seconds
              </span>
            </div>
          </div>

          <p className="font-serif-luxury text-sm text-[#2D231E]/80 italic mt-6">
            Saturday, 17 October 2026 • 10:00 AM • Cantonment Baptist Church, Vizianagaram
          </p>
        </div>
      </div>
    </section>
  );
};
