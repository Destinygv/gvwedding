import React from 'react';
import { MapPin, ExternalLink, Navigation, Train, Plane } from 'lucide-react';
import { CrossAndDove, CornerOrnament } from './Illustrations.tsx';

export const VenueSection: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Cantonment+Baptist+Church+Vizianagaram+Andhra+Pradesh';

  return (
    <section 
      id="venue"
      className="relative py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto"
      aria-label="Wedding Venue & Location Details"
    >
      {/* Decorative section header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-2">
          <CrossAndDove className="w-8 h-8 text-[#C49A45]" />
        </div>
        <p className="font-inscriptional text-xs md:text-sm text-[#C49A45] tracking-[0.25em] uppercase font-semibold">
          Holy Sanctuary &amp; Venue
        </p>
        <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#741C2B] mt-1">
          The Ceremony Church
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C49A45]/60 to-transparent mx-auto mt-3" />
      </div>

      {/* Main 2-Column Desktop Composition */}
      <div className="bg-[#FFFDF8] rounded-2xl stationery-border p-6 md:p-10 paper-texture relative">
        {/* Subtle corner ornaments */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/30" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none rotate-90">
          <CornerOrnament className="w-8 h-8 text-[#C49A45]/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE — Venue Information */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <span className="text-xs font-semibold text-[#71866F] tracking-widest uppercase font-inscriptional block mb-1">
              Ceremony Sanctuary
            </span>
            <h3 className="font-serif-luxury text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D231E] tracking-wide leading-tight">
              CANTONMENT BAPTIST CHURCH
            </h3>
            <p className="font-sans-clean text-sm md:text-base text-[#71866F] font-medium mt-1">
              Vizianagaram, Andhra Pradesh
            </p>

            {/* Ceremony Schedule Callout */}
            <div className="my-6 p-4 rounded-xl bg-[#FAF3E2]/80 border border-[#C49A45]/40 text-left shadow-xs">
              <span className="text-[11px] font-semibold text-[#741C2B] uppercase tracking-wider font-inscriptional block">
                WEDDING CEREMONY
              </span>
              <p className="font-serif-luxury text-lg font-bold text-[#2D231E] mt-0.5">
                Saturday, 17 October 2026
              </p>
              <p className="text-sm text-[#741C2B] font-medium">
                10:00 AM • Lunch follows
              </p>
            </div>

            <p className="font-serif-luxury text-sm md:text-base text-[#2D231E]/80 italic mb-6 leading-relaxed">
              We look forward to worshiping and sharing this sacred vow before God and loved ones within this historic sanctuary.
            </p>

            {/* Beautiful VIEW LOCATION link */}
            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#741C2B] text-[#FFF9EA] font-medium text-sm tracking-wider uppercase hover:bg-[#8C2335] active:scale-[0.98] transition-all shadow-md group"
              >
                <MapPin className="w-4 h-4 text-[#E5C378] group-hover:scale-110 transition-transform" />
                <span>View Location</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <p className="text-[11px] text-stone-500 mt-2 font-sans-clean">
                Opens Google Maps for Cantonment Baptist Church, Vizianagaram
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Church Photograph */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle outer decorative gold halo */}
              <div className="absolute -inset-2.5 border border-[#C49A45]/30 rounded-2xl arch-frame pointer-events-none" />
              
              {/* Main photograph frame */}
              <div className="relative overflow-hidden arch-frame rounded-b-xl border-2 border-[#C49A45]/60 bg-[#FAF3E2] shadow-xl">
                <img
                  src="/assets/images/church.jpg"
                  alt="Historic facade of Cantonment Baptist Church in Vizianagaram"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-[340px] md:h-[420px] object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Subtle bottom caption bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1D1612]/85 via-[#1D1612]/45 to-transparent p-4 text-center">
                  <p className="font-serif-luxury text-sm text-[#FFF9EA] tracking-wide font-medium">
                    Cantonment Baptist Church Facade
                  </p>
                  <p className="text-[10px] text-[#F8EED8]/85 font-sans-clean uppercase tracking-wider">
                    Vizianagaram, Andhra Pradesh
                  </p>
                </div>
              </div>

              {/* Small botanical accent on lower corner */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#FAF3E2] border border-[#C49A45]/40 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#71866F]" />
              </div>
            </div>
          </div>

        </div>

        {/* Travel & Transit Guidance Cards (Tiny Details) */}
        <div className="mt-10 pt-6 border-t border-[#C49A45]/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-clean text-[#2D231E]">
          <div className="p-3.5 rounded-lg bg-[#FAF3E2]/60 border border-[#C49A45]/20 flex items-start gap-3">
            <Train className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#741C2B] uppercase tracking-wider text-[11px] font-inscriptional">
                By Train / Railway
              </p>
              <p className="text-stone-600 mt-0.5">
                Vizianagaram Junction (VZM) is ~2 km from the Church. Autos and taxis are readily available.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#FAF3E2]/60 border border-[#C49A45]/20 flex items-start gap-3">
            <Plane className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#741C2B] uppercase tracking-wider text-[11px] font-inscriptional">
                By Air / Flight
              </p>
              <p className="text-stone-600 mt-0.5">
                Visakhapatnam Airport (VTZ) is ~55 km away with convenient highway taxi connectivity via NH16.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
