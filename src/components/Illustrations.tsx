import React from 'react';

/**
 * High-craft Christian wedding stationery vector illustrations:
 * Styled after the user's reference design with royal blue 3-piece suit,
 * off-the-shoulder wedding gown, cascading veil, blush bouquet, and archival details.
 */

export const CrossAndDove: React.FC<{ className?: string }> = ({ className = "w-10 h-10 text-[#C49A45]" }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Subtle celestial radiance ring */}
    <circle cx="50" cy="42" r="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
    <circle cx="50" cy="42" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
    
    {/* Ray burst lines */}
    <line x1="50" y1="8" x2="50" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <line x1="50" y1="70" x2="50" y2="76" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <line x1="16" y1="42" x2="22" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <line x1="78" y1="42" x2="84" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Christian Latin Cross with tapered serifs */}
    <path 
      d="M48 18 H52 V36 H68 V40 H52 V86 H48 V40 H32 V36 H48 V18 Z" 
      fill="currentColor"
    />
    
    {/* Holy Spirit Dove descending */}
    <path 
      d="M50 33 C46 28 41 28 37 30 C40 34 45 35 48 36 C47 38 45 42 48 44 C51 41 52 38 50 33 Z" 
      fill="currentColor" 
      opacity="0.95"
    />
    <path 
      d="M52 36 C56 32 62 32 65 35 C61 37 57 38 53 38 C54 40 56 43 53 45 C51 42 51 39 52 36 Z" 
      fill="currentColor" 
      opacity="0.95"
    />
    {/* Tiny olive leaf in beak */}
    <path d="M49 44 C49 47 47 49 45 50 C46 48 47 46 49 44 Z" fill="#71866F" />
  </svg>
);

export const InterlockingRings: React.FC<{ className?: string }> = ({ className = "w-16 h-10 text-[#C49A45]" }) => (
  <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Left Ring */}
    <circle cx="44" cy="36" r="21" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="44" cy="36" r="18" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    
    {/* Solitaire diamond on left ring */}
    <path d="M44 11 L48 15 L44 19 L40 15 Z" fill="currentColor" />
    <path d="M42 9 L44 6 L46 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    
    {/* Right Ring interlocking */}
    <circle cx="76" cy="36" r="21" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="76" cy="36" r="18" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Olive branch flourish nestled underneath */}
    <path d="M22 56 C38 52 82 52 98 56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
    <path d="M34 51 C31 48 34 44 38 46" stroke="#71866F" strokeWidth="1" strokeLinecap="round" />
    <path d="M86 51 C89 48 86 44 82 46" stroke="#71866F" strokeWidth="1" strokeLinecap="round" />
    <circle cx="60" cy="53" r="1.8" fill="currentColor" />
  </svg>
);

export const WeddingBells: React.FC<{ className?: string }> = ({ className = "w-10 h-10 text-[#C49A45]" }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Ribbon Bow */}
    <path d="M40 18 C32 10 24 16 32 24 C36 28 40 22 40 22 C40 22 44 28 48 24 C56 16 48 10 40 18 Z" fill="#741C2B" />
    <circle cx="40" cy="22" r="3" fill="#C49A45" />
    <path d="M38 24 L32 38" stroke="#741C2B" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 24 L48 38" stroke="#741C2B" strokeWidth="2" strokeLinecap="round" />

    {/* Left Bell */}
    <path d="M22 36 C22 28 32 26 36 34 L38 48 C40 54 20 54 22 48 Z" fill="#C49A45" stroke="#9E782E" strokeWidth="1" />
    <circle cx="30" cy="52" r="2.5" fill="#741C2B" />

    {/* Right Bell */}
    <path d="M58 36 C58 28 48 26 44 34 L42 48 C40 54 60 54 58 48 Z" fill="#E5C378" stroke="#9E782E" strokeWidth="1" />
    <circle cx="50" cy="52" r="2.5" fill="#741C2B" />
  </svg>
);

/**
 * EXQUISITE BRIDE AND GROOM ILLUSTRATION
 * Faithfully styled after the user's uploaded reference image (image.png):
 * - Groom: Royal blue 3-piece tailored suit (jacket, vest, trousers), champagne gold necktie, white rose lapel boutonnière, hand in pocket, styled dark hair.
 * - Bride: Off-the-shoulder ivory wedding dress with sweetheart neckline, gold bridal tiara/headband, dark updo, cascading wavy cathedral veil, holding blush & cream bouquet with dusty blue ribbons, and ornate trailing lace embroidery on skirt.
 */
export const BrideAndGroomIllustration: React.FC<{ className?: string }> = ({ className = "w-80 h-96" }) => (
  <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Illustration of Gladys & Vikash inspired by user reference">
    <defs>
      {/* Soft warm parchment backdrop glow */}
      <radialGradient id="coupleBackdrop" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
        <stop offset="65%" stopColor="#FAF2DF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#F4E6CA" stopOpacity="0.1" />
      </radialGradient>
      {/* Royal blue suit fabric gradients */}
      <linearGradient id="suitBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3C649C" />
        <stop offset="60%" stopColor="#2E5285" />
        <stop offset="100%" stopColor="#213E67" />
      </linearGradient>
      <linearGradient id="vestBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#33588D" />
        <stop offset="100%" stopColor="#234270" />
      </linearGradient>
      {/* Golden champagne silk tie */}
      <linearGradient id="tieGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F2DB9B" />
        <stop offset="60%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#B38E26" />
      </linearGradient>
      {/* Translucent bridal veil shading */}
      <linearGradient id="veilSheer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="40%" stopColor="#FAF8F2" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#F5EFE0" stopOpacity="0.25" />
      </linearGradient>
    </defs>

    {/* Soft background oval aura */}
    <ellipse cx="170" cy="210" rx="150" ry="195" fill="url(#coupleBackdrop)" />
    <ellipse cx="170" cy="210" rx="146" ry="191" stroke="#C49A45" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.45" />

    {/* ========================================================
        CATHEDRAL VEIL (Behind Bride - soft cascading organza)
       ======================================================== */}
    <g id="veil-backdrop">
      <path 
        d="M136 128 C115 140 102 180 98 230 C94 280 82 320 68 345 C64 352 68 360 76 360 C90 358 114 340 125 315 C132 300 138 275 142 245 Z" 
        fill="url(#veilSheer)" 
        stroke="rgba(196, 154, 69, 0.4)" 
        strokeWidth="0.8" 
      />
      {/* Wavy veil ripples */}
      <path d="M106 200 C98 245 92 295 78 335" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
      <path d="M118 220 C114 260 108 300 95 338" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" fill="none" />
    </g>

    {/* ========================================================
        GROOM — VIKASH (Right figure in Royal Blue 3-piece suit)
       ======================================================== */}
    <g id="groom-figure">
      {/* Groom styled hair (dark swept-back pompadour) */}
      <path d="M188 108 C186 94 195 84 210 82 C222 80 232 88 234 98 C235 106 230 114 220 116 C214 116 208 120 204 122 C196 122 188 118 188 108 Z" fill="#251E1A" />
      {/* Sideburn and hair taper */}
      <path d="M198 104 C198 112 202 116 205 120" stroke="#251E1A" strokeWidth="2" strokeLinecap="round" />

      {/* Face & neck profile (facing slightly towards bride) */}
      <path d="M194 104 C192 110 194 118 198 123 C202 128 208 132 215 130 C218 128 222 124 222 118" fill="#F4D3C2" />
      {/* Neck */}
      <path d="M204 126 L202 144 L216 144 L218 126 Z" fill="#EDBFA8" />

      {/* White collared dress shirt */}
      <polygon points="196,140 210,162 224,140 216,134 204,134" fill="#FFFFFF" stroke="#E2DAC8" strokeWidth="0.8" />
      
      {/* Champagne Gold Silk Necktie */}
      <path d="M206 142 L214 142 L216 172 L210 180 L204 172 Z" fill="url(#tieGold)" stroke="#B38E26" strokeWidth="0.5" />
      <polygon points="207,140 213,140 215,147 205,147" fill="#F8E5AE" />

      {/* Royal Blue Waistcoat (Vest) with V-neck */}
      <path d="M190 156 L205 178 L210 195 L215 178 L230 156 L232 222 L188 222 Z" fill="url(#vestBlue)" />
      {/* Vest front seam & tiny buttons */}
      <line x1="210" y1="184" x2="210" y2="220" stroke="#1C355A" strokeWidth="1" />
      <circle cx="210" cy="188" r="1.5" fill="#E5C378" />
      <circle cx="210" cy="198" r="1.5" fill="#E5C378" />
      <circle cx="210" cy="208" r="1.5" fill="#E5C378" />

      {/* Royal Blue Suit Jacket */}
      {/* Right lapel & front */}
      <path d="M178 152 C178 142 186 138 196 138 L206 176 L188 228 L174 200 Z" fill="url(#suitBlue)" />
      {/* Left lapel, shoulder & sleeve */}
      <path d="M224 138 C234 138 248 144 254 154 L264 215 C264 225 258 235 250 236 L244 224 L232 176 Z" fill="url(#suitBlue)" />

      {/* Left Lapel Boutonnière (White rose & green sprig - exact as reference) */}
      <g transform="translate(228, 154)">
        <path d="M0 6 C-3 12 -4 16 -3 18" stroke="#71866F" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="4" r="3.5" fill="#FFFFFF" stroke="#E5C378" strokeWidth="0.5" />
        <circle cx="-1" cy="3" r="2" fill="#FAF6EC" />
        <path d="M2 5 C5 3 6 6 4 8" fill="#71866F" />
      </g>

      {/* Left arm bent with hand in trouser pocket (exact pose from image.png) */}
      <path d="M252 160 L265 212 C265 220 258 226 250 226 L242 222" stroke="url(#suitBlue)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pocket entry slit */}
      <path d="M242 224 L248 240" stroke="#1D365C" strokeWidth="1.2" />

      {/* Royal Blue Trousers */}
      <path d="M192 222 L198 325 L215 325 L216 260 L218 260 L220 325 L238 325 L242 222 Z" fill="#284877" />
      {/* Trouser crease lines */}
      <line x1="206" y1="235" x2="207" y2="320" stroke="#1F395F" strokeWidth="0.8" />
      <line x1="229" y1="235" x2="229" y2="320" stroke="#1F395F" strokeWidth="0.8" />

      {/* Tan / Taupe formal dress shoes */}
      <path d="M196 325 C196 322 205 320 216 325 L216 332 C210 334 196 333 196 325 Z" fill="#8C7360" />
      <path d="M218 325 C218 322 227 320 238 325 L238 332 C232 334 218 333 218 325 Z" fill="#8C7360" />
    </g>

    {/* ========================================================
        BRIDE — GLADYS (Left figure in Off-the-Shoulder gown)
       ======================================================== */}
    <g id="bride-figure">
      {/* Dark elegant hair bun with soft tendrils */}
      <path d="M136 104 C132 94 140 86 152 86 C162 86 170 92 170 102 C170 114 162 124 150 124 C140 124 134 116 136 104 Z" fill="#32221B" />
      {/* Low bridal chignon / hair bun */}
      <circle cx="132" cy="116" r="10" fill="#281A14" />
      
      {/* Shimmering Gold Tiara / Headband (exact as reference) */}
      <path d="M140 92 C146 90 156 90 164 96" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="144" cy="91" r="1.5" fill="#FFF9EA" />
      <circle cx="152" cy="90" r="1.8" fill="#FFF9EA" />
      <circle cx="160" cy="93" r="1.5" fill="#FFF9EA" />

      {/* Face & Graceful Neck profile */}
      <path d="M148 105 C154 105 160 110 162 116 C162 122 158 126 152 128" fill="#F7DDD0" />
      <path d="M150 128 L148 142 L160 142 L160 128 Z" fill="#F0CFC0" />

      {/* Off-the-Shoulder Sweetheart Bodice (Ivory Silk) */}
      {/* Folded draped sleeve bands on upper arms (exact as reference) */}
      <path d="M128 146 C124 150 126 160 134 160 C138 156 138 148 134 146 Z" fill="#FAF6EE" stroke="#E2DAC8" strokeWidth="0.8" />
      <path d="M172 146 C176 150 174 160 166 160 C162 156 162 148 166 146 Z" fill="#FAF6EE" stroke="#E2DAC8" strokeWidth="0.8" />
      
      {/* Sweetheart bodice center */}
      <path d="M134 150 C144 146 150 152 154 152 C158 152 164 146 174 150 L170 195 C164 200 142 200 136 195 Z" fill="#FFFDF8" stroke="#E8DFCD" strokeWidth="1" />
      
      {/* Delicate bodice seam lines */}
      <path d="M146 152 L145 196" stroke="#EDE4D4" strokeWidth="0.8" />
      <path d="M162 152 L163 196" stroke="#EDE4D4" strokeWidth="0.8" />

      {/* Cascading A-line Wedding Gown Skirt */}
      <path 
        d="M136 195 C132 230 118 280 88 340 C110 348 145 350 185 345 C182 285 174 230 170 195 Z" 
        fill="#FFFEFA" 
        stroke="#E8DFCD" 
        strokeWidth="1.2" 
      />

      {/* Skirt Silk Draping & Waves */}
      <path d="M128 240 C118 275 106 310 94 340" stroke="#F0E8D8" strokeWidth="1.2" fill="none" />
      <path d="M145 220 C140 265 132 310 126 345" stroke="#F0E8D8" strokeWidth="1" fill="none" />
      <path d="M160 215 C162 260 165 305 168 344" stroke="#F0E8D8" strokeWidth="1" fill="none" />

      {/* Ornate Swirling Lace Floral Embroidery on Train (exact as reference) */}
      <g stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.85">
        {/* Swirling vine path */}
        <path d="M112 265 C118 275 125 285 118 298 C112 310 102 320 96 332" />
        <path d="M128 285 C135 295 142 308 136 322 C132 332 124 338 118 344" />
        {/* Leaf buds */}
        <path d="M115 272 C112 268 116 265 120 268" fill="#F8E5AE" />
        <path d="M122 288 C126 285 128 290 124 292" fill="#F8E5AE" />
        <path d="M116 302 C110 300 112 306 116 306" fill="#F8E5AE" />
        <path d="M134 300 C138 296 140 302 136 304" fill="#F8E5AE" />
        <path d="M106 320 C102 318 104 324 108 324" fill="#F8E5AE" />
      </g>
    </g>

    {/* ========================================================
        BRIDAL BOUQUET (Blush roses, cream blooms & dusty blue ribbons)
       ======================================================== */}
    <g transform="translate(136, 185)" id="bridal-bouquet">
      {/* Dusty blue eucalyptus leaves (exact as reference) */}
      <path d="M-6 8 C-14 2 -6 -6 4 2" fill="#4B6B94" opacity="0.85" />
      <path d="M22 8 C30 2 22 -6 12 2" fill="#4B6B94" opacity="0.85" />
      <path d="M10 -8 C6 -16 16 -16 12 -6" fill="#4B6B94" opacity="0.85" />

      {/* Soft sage foliage */}
      <path d="M-2 14 C-8 18 -10 10 -4 8" fill="#71866F" opacity="0.7" />
      <path d="M18 14 C24 18 26 10 20 8" fill="#71866F" opacity="0.7" />

      {/* Blush Pink & Cream Rose Blossoms */}
      <circle cx="8" cy="8" r="7" fill="#F7D3CA" stroke="#EAAFA2" strokeWidth="0.8" />
      <circle cx="7" cy="8" r="4.5" fill="#F2B8AA" />
      <circle cx="0" cy="12" r="5.5" fill="#FFF5E8" stroke="#E8DFCD" strokeWidth="0.6" />
      <circle cx="16" cy="12" r="5.5" fill="#F5C6BA" stroke="#EAAFA2" strokeWidth="0.6" />
      <circle cx="8" cy="15" r="4.5" fill="#FFF9F0" stroke="#E8DFCD" strokeWidth="0.6" />

      {/* Trailing Dusty Blue Silk Ribbons (exact as reference image) */}
      <path d="M6 18 C3 28 -2 38 4 52" stroke="#3C649C" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M9 18 C12 28 8 38 14 50" stroke="#2E5285" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M7 18 C9 26 16 34 18 44" stroke="#4B6B94" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </g>

    {/* Grounding floral garland base */}
    <g opacity="0.8">
      <ellipse cx="170" cy="358" rx="80" ry="6" fill="#E8DDC6" />
      <path d="M100 358 C135 354 205 354 240 358" stroke="#C49A45" strokeWidth="1" strokeDasharray="3 3" />
    </g>
  </svg>
);

export const BotanicalFlourish: React.FC<{ className?: string }> = ({ className = "w-32 h-6 text-[#C49A45]" }) => (
  <svg viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="80" cy="15" r="2.5" fill="currentColor" />
    <path d="M72 15 C60 15 45 12 25 15 C10 17 0 15 0 15" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M88 15 C100 15 115 12 135 15 C150 17 160 15 160 15" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    
    <path d="M62 14 C60 10 65 7 69 11" fill="currentColor" opacity="0.8" />
    <path d="M46 16 C48 20 43 23 39 19" fill="currentColor" opacity="0.8" />
    <path d="M32 14 C30 10 35 7 39 11" fill="currentColor" opacity="0.8" />

    <path d="M98 14 C100 10 95 7 91 11" fill="currentColor" opacity="0.8" />
    <path d="M114 16 C112 20 117 23 121 19" fill="currentColor" opacity="0.8" />
    <path d="M128 14 C130 10 125 7 121 11" fill="currentColor" opacity="0.8" />
  </svg>
);

export const CornerOrnament: React.FC<{ className?: string }> = ({ className = "w-12 h-12 text-[#C49A45]" }) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4 46 V12 C4 7.5 7.5 4 12 4 H46" stroke="currentColor" strokeWidth="1" />
    <path d="M9 46 V14 C9 11.2 11.2 9 14 9 H46" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.7" />
    <circle cx="14" cy="14" r="2" fill="currentColor" />
    <path d="M14 14 C18 22 26 26 36 26" stroke="#71866F" strokeWidth="0.8" opacity="0.7" />
    <circle cx="22" cy="22" r="1.5" fill="#741C2B" />
  </svg>
);

export const MonogramSeal: React.FC<{ size?: number; className?: string }> = ({ size = 68, className = "" }) => (
  <div 
    style={{ width: size, height: size }} 
    className={`relative rounded-full shadow-md flex items-center justify-center select-none ${className}`}
  >
    {/* Wax texture / gradient */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8C2335] via-[#741C2B] to-[#54121E] border-2 border-[#A83849]/50 shadow-inner" />
    
    {/* Outer embossed ring */}
    <div className="absolute inset-1 rounded-full border border-[#E5C378]/50" />
    <div className="absolute inset-1.5 rounded-full border border-dashed border-[#E5C378]/30" />

    {/* Embossed Monogram letters G & V in Pinyon script */}
    <div className="relative z-10 flex items-center justify-center font-pinyon font-bold text-[#F8EED8] drop-shadow-sm">
      <span className="text-2xl">G</span>
      <span className="text-xs font-serif-luxury text-[#E5C378] mx-0.5">&amp;</span>
      <span className="text-2xl">V</span>
    </div>
  </div>
);
