import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, ExternalLink, Music, ChevronUp, ChevronDown } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
    playWeddingMusic?: () => void;
    pendingWeddingMusic?: boolean;
    weddingPlayerInstance?: any;
  }
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const playerRef = useRef<any>(null);

  // Initialize YouTube IFrame API and wire automatic start on envelope opening
  useEffect(() => {
    const startPlayback = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.unMute();
          playerRef.current.seekTo(68, true); // Exact start at 01:08 as requested
          playerRef.current.playVideo();
          setHasStarted(true);
        } catch (e) {
          console.warn('Playback start error:', e);
        }
      } else {
        window.pendingWeddingMusic = true;
      }
    };

    // Global trigger called directly from the envelope tap gesture
    window.playWeddingMusic = startPlayback;

    // Define YouTube API Ready callback
    window.onYouTubeIframeAPIReady = () => {
      try {
        playerRef.current = new window.YT.Player('ytWeddingAudio', {
          height: '140',
          width: '240',
          videoId: 'SuPCTBmISzQ',
          playerVars: {
            start: 68, // 01:08 start time
            autoplay: 0,
            controls: 1,
            playsinline: 1,
            rel: 0,
            modestbranding: 1,
          },
          events: {
            onReady: (event: any) => {
              window.weddingPlayerInstance = event.target;
              // If envelope was opened before YouTube finished loading, start immediately
              if (window.pendingWeddingMusic) {
                try {
                  event.target.unMute();
                  event.target.seekTo(68, true);
                  event.target.playVideo();
                  setHasStarted(true);
                } catch (err) {}
              }
            },
            onStateChange: (event: any) => {
              if (event.data === 1) {
                setHasStarted(true);
              }
            },
          },
        });
      } catch (err) {
        console.warn('YouTube API initialization:', err);
      }
    };

    // Load YouTube iframe script
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else if (window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      delete window.playWeddingMusic;
    };
  }, []);

  // When isPlaying changes from envelope open
  useEffect(() => {
    if (isPlaying && window.playWeddingMusic) {
      window.playWeddingMusic();
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (playerRef.current && typeof playerRef.current.isMuted === 'function') {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        } else {
          playerRef.current.mute();
          setIsMuted(true);
        }
      } catch (e) {}
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <aside 
      aria-label="Background music" 
      className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] select-none"
    >
      <div className="bg-[#FFFDF8]/95 backdrop-blur-md border border-[#C49A45]/40 rounded-xl shadow-xl overflow-hidden transition-all duration-300">
        
        {/* Expandable mini-dock showing video if requested */}
        <div 
          className={`transition-all duration-300 overflow-hidden bg-black/90 ${
            isExpanded ? 'h-[140px] w-[240px]' : 'h-0 w-0'
          }`}
        >
          {/* Target for YouTube IFrame Player */}
          <div id="ytWeddingAudio" />
        </div>

        {/* Clean, discreet audio status bar (NO PLAY/PAUSE BUTTON that gets confused) */}
        <div className="px-3 py-2 flex items-center gap-3">
          
          {/* Animated music icon badge */}
          <div className="w-8 h-8 rounded-full bg-[#741C2B] text-[#FFF9EA] flex items-center justify-center shrink-0 shadow-xs">
            <Music className={`w-4 h-4 text-[#E5C378] ${hasStarted ? 'animate-bounce' : ''}`} />
          </div>

          {/* Song info and status */}
          <div 
            className="flex flex-col min-w-0 pr-1 cursor-pointer" 
            onClick={() => setIsExpanded(!isExpanded)}
            title="Click to view video dock"
          >
            <span className="text-[11px] font-bold text-[#741C2B] uppercase tracking-wider font-inscriptional truncate">
              Goodness Of God
            </span>
            <div className="flex items-center gap-1 text-[10px] text-[#71866F] font-serif-luxury italic truncate">
              <span>{hasStarted ? 'Playing from 01:08' : 'Plays automatically on envelope open'}</span>
            </div>
          </div>

          {/* Mute/Unmute sound toggle */}
          <button
            type="button"
            onClick={toggleMute}
            title={isMuted ? 'Unmute music' : 'Mute music'}
            className="p-1.5 rounded-md hover:bg-[#FAF2DF] text-[#741C2B] transition shrink-0"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-stone-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Expand/Collapse mini dock */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Minimize video' : 'Expand video'}
            className="text-stone-400 hover:text-[#741C2B] transition p-1 shrink-0"
            aria-label="Toggle video dock"
          >
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>

          {/* Direct YouTube link */}
          <a
            href="https://youtu.be/SuPCTBmISzQ?t=68"
            target="_blank"
            rel="noopener noreferrer"
            title="Open video directly on YouTube"
            className="text-stone-400 hover:text-[#741C2B] transition-colors p-1 shrink-0"
            aria-label="Open track on YouTube"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </aside>
  );
};
