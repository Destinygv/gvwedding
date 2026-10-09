import React from 'react';
import { InterlockingRings, BotanicalFlourish, CornerOrnament } from './Illustrations.tsx';

export const CeremoniesSection: React.FC = () => {
  return (
    <section 
      id="ceremonies"
      className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16"
      aria-label="Ceremony Schedules and Ministers"
    >
      {/* SECTION INTRO */}
      <div className="text-center max-w-xl mx-auto">
        <div className="flex justify-center mb-3">
          <InterlockingRings className="w-14 h-8 text-[#C49A45]" />
        </div>
        <p className="font-inscriptional text-xs text-[#C49A45] tracking-[0.25em] uppercase font-semibold">
          Sacred Celebrations
        </p>
        <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#741C2B] mt-1">
          Programme of Events
        </h2>
        <div className="w-20 h-px bg-[#C49A45]/50 mx-auto mt-2" />
      </div>

      {/* 1. BETROTHAL CEREMONY */}
      <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-12 relative overflow-hidden paper-texture">
        {/* Corner filigree */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <CornerOrnament className="w-7 h-7 text-[#C49A45]/30" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none rotate-90">
          <CornerOrnament className="w-7 h-7 text-[#C49A45]/30" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="font-inscriptional text-xs md:text-sm text-[#741C2B] tracking-[0.2em] uppercase font-semibold">
            The Holy Engagement
          </span>
          <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#2D231E] mt-1">
            Betrothal Ceremony
          </h3>
          <p className="font-pinyon text-3xl md:text-4xl font-bold text-[#741C2B] mt-1">
            Gladys <span className="text-[#C49A45]">&amp;</span> Vikash
          </p>

          <div className="my-6 py-4 px-6 inline-block rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/30 shadow-xs">
            <p className="font-inscriptional text-xs text-[#71866F] uppercase tracking-wider font-semibold">
              Date &amp; Time
            </p>
            <p className="font-serif-luxury text-xl md:text-2xl font-bold text-[#741C2B] mt-0.5">
              Friday, 16 October 2026
            </p>
            <p className="text-sm font-medium text-[#2D231E]">
              7:00 PM
            </p>
          </div>

          <div className="space-y-1 mb-6">
            <p className="font-serif-luxury text-lg font-semibold text-[#2D231E]">
              Cantonment Baptist Church Community Hall
            </p>
            <p className="font-sans-clean text-sm text-[#71866F]">
              Vizianagaram
            </p>
            <p className="text-xs uppercase tracking-widest text-[#741C2B] font-semibold pt-1">
              Dinner follows
            </p>
          </div>

          <div className="w-24 h-px bg-[#C49A45]/30 mx-auto my-6" />

          {/* Betrothal Speaker Block */}
          <div className="pt-2">
            <span className="font-inscriptional text-[11px] text-[#C49A45] tracking-[0.2em] uppercase font-semibold block mb-1">
              Betrothal Speaker
            </span>
            <h4 className="font-serif-luxury text-xl md:text-2xl font-bold text-[#2D231E]">
              Sis. Shantha Kumari Mondithoka
            </h4>
            <p className="font-sans-clean text-xs md:text-sm text-[#71866F] mt-0.5">
              Dean of Academics, HITHA, Hyderabad
            </p>
          </div>
        </div>
      </div>

      {/* 2. WEDDING CEREMONY & MINISTERS */}
      <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-12 relative overflow-hidden paper-texture">
        {/* Corner filigree */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <CornerOrnament className="w-7 h-7 text-[#C49A45]/30" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none rotate-90">
          <CornerOrnament className="w-7 h-7 text-[#C49A45]/30" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="font-inscriptional text-xs md:text-sm text-[#C49A45] tracking-[0.25em] uppercase font-semibold">
            Solemnisation of Holy Matrimony
          </span>
          <h3 className="font-serif-luxury text-3xl md:text-5xl font-bold text-[#741C2B] mt-1">
            Wedding Ceremony
          </h3>
          <p className="font-serif-luxury text-base md:text-lg text-[#71866F] italic mt-1">
            In the Holy Presence of God and Congregation
          </p>

          <div className="my-6 py-4 px-8 inline-block rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/30 shadow-xs">
            <p className="font-inscriptional text-xs text-[#71866F] uppercase tracking-wider font-semibold">
              Wedding Service
            </p>
            <p className="font-serif-luxury text-xl md:text-2xl font-bold text-[#741C2B] mt-0.5">
              Saturday, 17 October 2026
            </p>
            <p className="text-sm font-medium text-[#2D231E]">
              10:00 AM
            </p>
          </div>

          <div className="space-y-1 mb-8">
            <p className="font-serif-luxury text-xl font-bold text-[#2D231E]">
              Cantonment Baptist Church
            </p>
            <p className="font-sans-clean text-sm text-[#71866F]">
              Vizianagaram
            </p>
            <p className="text-xs uppercase tracking-widest text-[#741C2B] font-semibold pt-1">
              Lunch follows
            </p>
          </div>

          <div className="flex justify-center my-6">
            <BotanicalFlourish className="w-28 h-5 text-[#C49A45]" />
          </div>

          {/* WEDDING CEREMONY MINISTERS SECTION */}
          <div className="pt-4">
            <h4 className="font-inscriptional text-xs md:text-sm text-[#741C2B] tracking-[0.25em] uppercase font-bold mb-8">
              Wedding Ceremony Ministers
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              
              {/* PRESIDED BY */}
              <div className="p-5 rounded-xl bg-[#FAF3E2]/60 border border-[#C49A45]/30 shadow-xs">
                <span className="font-inscriptional text-[10px] text-[#C49A45] tracking-[0.2em] uppercase font-semibold block mb-1">
                  Presided By
                </span>
                <p className="font-serif-luxury text-lg md:text-xl font-bold text-[#2D231E]">
                  Rev. Dr. N. Varun Deepak
                </p>
              </div>

              {/* MESSAGE / SERMON */}
              <div className="p-5 rounded-xl bg-[#FAF3E2]/60 border border-[#C49A45]/30 shadow-xs">
                <span className="font-inscriptional text-[10px] text-[#C49A45] tracking-[0.2em] uppercase font-semibold block mb-1">
                  Message / Sermon
                </span>
                <p className="font-serif-luxury text-lg md:text-xl font-bold text-[#2D231E]">
                  Rev. K. Yohan
                </p>
              </div>

            </div>

            {/* TO BE SOLEMNIZED BY (Full width) */}
            <div className="mt-8 p-6 rounded-xl bg-[#FAF3E2]/70 border border-[#C49A45]/40 max-w-xl mx-auto shadow-xs">
              <span className="font-inscriptional text-[10px] text-[#C49A45] tracking-[0.25em] uppercase font-semibold block mb-2">
                To Be Solemnized By
              </span>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 font-serif-luxury text-lg md:text-xl font-bold text-[#741C2B]">
                <span>Rev. S.E. Sukumar Patnaik</span>
                <span className="text-[#C49A45] font-normal text-sm">&amp;</span>
                <span>Rev. G. Moses Kumar</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
