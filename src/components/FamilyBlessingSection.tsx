import React from 'react';
import { CrossAndDove, BotanicalFlourish, BrideAndGroomIllustration, CornerOrnament } from './Illustrations.tsx';

export const FamilyBlessingSection: React.FC = () => {
  return (
    <section 
      id="family" 
      className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-12"
      aria-label="Family Invitation and Blessings"
    >
      {/* Hand-illustrated couple centerpiece with grand botanical archway */}
      <div className="flex flex-col items-center text-center">
        <BrideAndGroomIllustration className="w-72 h-80 sm:w-84 sm:h-96 drop-shadow-md transition-transform duration-500 hover:scale-[1.01]" />
        
        <h2 className="font-pinyon text-4xl sm:text-6xl text-[#741C2B] mt-3">
          Gladys Evangeline <span className="text-[#C49A45]">&amp;</span> Vikash Varma
        </h2>
        
        <p className="font-serif-luxury text-sm sm:text-base text-[#71866F] italic mt-1">
          United in Christ • Bound in Eternal Love
        </p>

        <div className="flex justify-center mt-3">
          <BotanicalFlourish className="w-28 h-5 text-[#C49A45]" />
        </div>
      </div>

      {/* SCRIPTURE 1: PROVERBS 31:25 */}
      <div className="bg-[#FAF3E2]/80 rounded-xl p-6 md:p-8 text-center border border-[#C49A45]/30 max-w-2xl mx-auto shadow-xs">
        <div className="flex justify-center mb-2">
          <CrossAndDove className="w-6 h-6 text-[#C49A45]" />
        </div>
        <blockquote className="font-serif-luxury text-lg md:text-xl italic text-[#2D231E] leading-relaxed">
          “She is clothed with strength and dignity; she can laugh at the days to come.”
        </blockquote>
        <p className="font-inscriptional text-xs text-[#741C2B] tracking-widest uppercase font-semibold mt-2">
          — Proverbs 31:25
        </p>
      </div>

      {/* PARENTS & FAMILY INVITATION */}
      <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-12 text-center max-w-3xl mx-auto relative paper-texture">
        {/* Subtle decorative corners */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/30" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none rotate-90">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/30" />
        </div>

        <span className="font-inscriptional text-xs text-[#C49A45] tracking-[0.25em] uppercase font-semibold block mb-2">
          Together With Their Families
        </span>
        
        {/* Bride's Parents */}
        <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#741C2B]">
          Mrs. Chukka Nirmala Kumari
        </h3>
        <p className="font-serif-luxury text-base text-[#C49A45] font-semibold my-0.5">&amp;</p>
        <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#741C2B] mb-4">
          Mr. Raghupatruni Madhusudhana Rao
        </h3>

        {/* Traditional Wording */}
        <p className="font-serif-luxury text-base md:text-lg text-[#2D231E]/90 leading-relaxed max-w-2xl mx-auto my-6">
          solicit the pleasure of your esteemed presence with family on the auspicious occasion of the holy matrimony of their only daughter
        </p>

        {/* Bride's Name */}
        <div className="py-2">
          <h4 className="font-pinyon text-4xl sm:text-5xl font-bold text-[#741C2B]">
            Gladys Evangeline
          </h4>
          <p className="font-serif-luxury text-sm md:text-base text-[#71866F] italic mt-1">
            Beloved granddaughter of Mrs. R. Chittamma
          </p>
        </div>

        <p className="font-pinyon text-3xl sm:text-4xl text-[#C49A45] my-2">
          with
        </p>

        {/* Groom's Family Details */}
        <div className="py-2">
          <h4 className="font-pinyon text-4xl sm:text-5xl font-bold text-[#741C2B]">
            Vikash Varma
          </h4>
          <p className="font-serif-luxury text-sm md:text-base text-[#71866F] italic mt-1 max-w-xl mx-auto">
            Eldest son of Late Mr. Katru Mohan Raju &amp; Mrs. Subhadra,<br />
            of Thogummi village, East Godavari District.
          </p>
        </div>

        <div className="flex justify-center my-6">
          <BotanicalFlourish className="w-24 h-4 text-[#C49A45]" />
        </div>

        <p className="font-serif-luxury text-sm md:text-base text-[#2D231E]/80">
          to bestow your blessings and grace upon the couple as they begin their sacred journey as one.
        </p>
      </div>

      {/* SCRIPTURE 2: PSALMS 145:9 */}
      <div className="bg-[#FAF3E2]/80 rounded-xl p-6 md:p-8 text-center border border-[#C49A45]/30 max-w-2xl mx-auto shadow-xs">
        <blockquote className="font-serif-luxury text-lg md:text-xl italic text-[#2D231E] leading-relaxed">
          “The Lord is good to everyone. He showers compassion on all his creation.”
        </blockquote>
        <p className="font-inscriptional text-xs text-[#741C2B] tracking-widest uppercase font-semibold mt-2">
          — Psalms 145:9
        </p>
      </div>
    </section>
  );
};
