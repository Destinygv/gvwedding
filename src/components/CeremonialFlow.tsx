import React from 'react';
import { Church, BookOpen, Heart, Bell, Music2, Users } from 'lucide-react';
import { BotanicalFlourish } from './Illustrations.tsx';

export const CeremonialFlow: React.FC = () => {
  return (
    <section 
      aria-label="Order of Service"
      className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto"
    >
      <div className="text-center mb-10">
        <span className="font-inscriptional text-xs text-[#C49A45] tracking-[0.25em] uppercase font-semibold">
          Traditional Liturgy &amp; Fellowship
        </span>
        <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#741C2B] mt-1">
          Order of Holy Matrimony
        </h3>
        <div className="flex justify-center mt-2">
          <BotanicalFlourish className="w-24 h-4 text-[#C49A45]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Betrothal Evening Flow */}
        <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-8 paper-texture">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#C49A45]/30">
            <span className="w-8 h-8 rounded-full bg-[#FAF3E2] border border-[#C49A45]/40 flex items-center justify-center text-[#741C2B]">
              <Church className="w-4 h-4" />
            </span>
            <div>
              <span className="font-inscriptional text-[10px] text-[#71866F] uppercase tracking-wider block">
                Friday, 16 October 2026 • 7:00 PM
              </span>
              <h4 className="font-serif-luxury text-xl font-bold text-[#741C2B]">
                Betrothal Service Flow
              </h4>
            </div>
          </div>

          <div className="space-y-4 font-sans-clean text-xs text-[#2D231E]">
            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">I.</span>
              <div>
                <p className="font-semibold text-stone-800">Opening Prayer &amp; Hymns of Praise</p>
                <p className="text-stone-500 font-serif-luxury text-sm">Thanksgiving for God's divine guidance</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">II.</span>
              <div>
                <p className="font-semibold text-stone-800">Devotional Message / Sermon</p>
                <p className="text-[#741C2B] font-medium font-serif-luxury text-sm">Sis. Shantha Kumari Mondithoka (Dean of Academics, HITHA)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">III.</span>
              <div>
                <p className="font-semibold text-stone-800">Formal Betrothal Pledge &amp; Prayer</p>
                <p className="text-stone-500 font-serif-luxury text-sm">Blessing of the families and couple</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">IV.</span>
              <div>
                <p className="font-semibold text-stone-800">Benediction &amp; Fellowship Dinner</p>
                <p className="text-[#71866F] font-semibold font-serif-luxury text-sm">Community Hall, Cantonment Baptist Church</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Ceremony Liturgy Flow */}
        <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-8 paper-texture">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#C49A45]/30">
            <span className="w-8 h-8 rounded-full bg-[#FAF3E2] border border-[#C49A45]/40 flex items-center justify-center text-[#741C2B]">
              <Heart className="w-4 h-4 fill-[#E4B3A9]/30" />
            </span>
            <div>
              <span className="font-inscriptional text-[10px] text-[#71866F] uppercase tracking-wider block">
                Saturday, 17 October 2026 • 10:00 AM
              </span>
              <h4 className="font-serif-luxury text-xl font-bold text-[#741C2B]">
                Holy Matrimony Liturgy
              </h4>
            </div>
          </div>

          <div className="space-y-4 font-sans-clean text-xs text-[#2D231E]">
            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">I.</span>
              <div>
                <p className="font-semibold text-stone-800">Processional &amp; Invocation Prayer</p>
                <p className="text-stone-500 font-serif-luxury text-sm">Presided by Rev. Dr. N. Varun Deepak</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">II.</span>
              <div>
                <p className="font-semibold text-stone-800">Holy Scripture &amp; Wedding Sermon</p>
                <p className="text-[#741C2B] font-medium font-serif-luxury text-sm">Rev. K. Yohan</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">III.</span>
              <div>
                <p className="font-semibold text-stone-800">Solemnisation of Holy Vows &amp; Rings</p>
                <p className="text-stone-500 font-serif-luxury text-sm">Rev. S.E. Sukumar Patnaik &amp; Rev. G. Moses Kumar</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-inscriptional font-bold text-[#C49A45] w-6 shrink-0 pt-0.5">IV.</span>
              <div>
                <p className="font-semibold text-stone-800">Benediction, Signing of Register &amp; Lunch</p>
                <p className="text-[#71866F] font-semibold font-serif-luxury text-sm">Fellowship feast follows the service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
