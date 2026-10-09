import React, { useState } from 'react';
import { Share2, Copy, Check, X, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareMessage = `You are cordially invited to celebrate the Holy Matrimony of Gladys Evangeline & Vikash Varma on October 16 & 17, 2026 at Cantonment Baptist Church, Vizianagaram.\n\nView the invitation: ${currentUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gladys & Vikash Wedding Invitation',
          text: 'You are cordially invited to celebrate the Holy Matrimony of Gladys Evangeline & Vikash Varma.',
          url: currentUrl,
        });
      } catch {
        // Share dismissed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Share Wedding Invitation"
    >
      <div className="bg-[#FFFDF7] rounded-2xl stationery-border p-6 md:p-8 max-w-sm w-full relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-[#741C2B] rounded-full"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#FAF3E0] border border-[#C49A45]/40 flex items-center justify-center mx-auto mb-2 text-[#741C2B]">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#741C2B]">
            Share Invitation
          </h3>
          <p className="font-sans-clean text-xs text-[#71866F] mt-1">
            Send this joy to family and friends
          </p>
        </div>

        <div className="space-y-3">
          {/* WhatsApp Direct Share */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          {/* Native Mobile Share */}
          {'share' in navigator && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full py-2.5 px-4 rounded-lg bg-[#741C2B] text-[#FFF9EA] font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#8C2335] transition shadow-sm"
            >
              <Share2 className="w-4 h-4 text-[#E5C378]" />
              <span>Share to Other Apps</span>
            </button>
          )}

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded-lg bg-[#FAF3E0] text-[#30251F] border border-[#C49A45]/40 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#F4E8D0] transition shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C49A45]" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
