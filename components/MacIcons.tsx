import React from "react";

export function MacFolderIcon({
  badge,
  className = "w-16 h-16",
}: {
  badge?: "icloud" | "download" | "star";
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 64 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b9df8" />
            <stop offset="100%" stopColor="#106fc4" />
          </linearGradient>
          <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5bb3ff" />
            <stop offset="50%" stopColor="#2b8ae2" />
            <stop offset="100%" stopColor="#156fbe" />
          </linearGradient>
          <linearGradient id="folderTab" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4aa5f9" />
            <stop offset="100%" stopColor="#2279cd" />
          </linearGradient>
        </defs>

        {/* Back tab */}
        <path
          d="M 4 8 C 4 5.7 5.7 4 8 4 L 24 4 C 27 4 28.5 6 30 8 L 33 12 L 56 12 C 58.2 12 60 13.8 60 16 L 60 46 C 60 48.2 58.2 50 56 50 L 8 50 C 5.7 50 4 48.2 4 46 Z"
          fill="url(#folderTab)"
        />

        {/* Inner sheet accent */}
        <rect
          x="7"
          y="11"
          width="50"
          height="34"
          rx="3"
          fill="#e2f1ff"
          opacity="0.9"
        />

        {/* Front flap */}
        <path
          d="M 2 15 C 2 13.3 3.3 12 5 12 L 59 12 C 60.7 12 62 13.3 62 15 L 62 47 C 62 49.2 60.2 51 58 51 L 6 51 C 3.8 51 2 49.2 2 47 Z"
          fill="url(#folderFront)"
        />

        {/* Top edge highlight */}
        <path
          d="M 5 13 L 59 13"
          stroke="#9bcfff"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Badges */}
      {badge === "icloud" && (
        <div className="absolute bottom-1 right-2 bg-blue-600/80 rounded-full p-0.5 text-white shadow">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>
      )}
      {badge === "download" && (
        <div className="absolute bottom-1 right-2 bg-blue-600/90 rounded-full p-1 text-white shadow border border-white/40">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      {badge === "star" && (
        <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow">
          <svg className="w-6 h-6 fill-yellow-300 stroke-yellow-500" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function MacDocIcon({
  type = "docx",
  className = "w-14 h-16",
}: {
  type?: "docx" | "pptx" | "txt";
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 50 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Document Body */}
        <path
          d="M 4 4 C 4 1.8 5.8 0 8 0 L 34 0 L 46 12 L 46 58 C 46 60.2 44.2 62 42 62 L 8 62 C 5.8 62 4 60.2 4 58 Z"
          fill="#FFFFFF"
        />

        {/* Folded Corner */}
        <path d="M 34 0 L 46 12 L 34 12 Z" fill="#E2E8F0" />
        <path d="M 34 0 L 34 12 L 46 12" stroke="#CBD5E1" strokeWidth="1" />

        {/* Header Ribbon / Icon */}
        {type === "txt" ? (
          <>
            <rect x="10" y="16" width="30" height="20" rx="3" fill="#D97706" />
            <text
              x="25"
              y="30"
              fill="#FFFFFF"
              fontSize="9"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
            >
              TXT
            </text>
            {/* Document Text Lines */}
            <line x1="10" y1="42" x2="40" y2="42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="48" x2="36" y2="48" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="54" x2="28" y2="54" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : type === "docx" ? (
          <>
            <rect x="10" y="16" width="30" height="20" rx="3" fill="#2B579A" />
            <text
              x="25"
              y="31"
              fill="#FFFFFF"
              fontSize="12"
              fontWeight="bold"
              fontFamily="Arial"
              textAnchor="middle"
            >
              W
            </text>
            {/* Fake document lines */}
            <line x1="10" y1="42" x2="40" y2="42" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="48" x2="34" y2="48" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="54" x2="28" y2="54" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <>
            <rect x="10" y="16" width="30" height="20" rx="3" fill="#D24726" />
            <text
              x="25"
              y="31"
              fill="#FFFFFF"
              fontSize="12"
              fontWeight="bold"
              fontFamily="Arial"
              textAnchor="middle"
            >
              P
            </text>
            {/* Fake PPT presentation lines */}
            <rect x="10" y="42" width="14" height="12" rx="1" fill="#FED7AA" />
            <line x1="28" y1="44" x2="40" y2="44" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="50" x2="36" y2="50" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}

export function MacAudioIcon({ className = "w-14 h-16" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 50 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Document Body */}
        <path
          d="M 4 4 C 4 1.8 5.8 0 8 0 L 34 0 L 46 12 L 46 58 C 46 60.2 44.2 62 42 62 L 8 62 C 5.8 62 4 60.2 4 58 Z"
          fill="#F8FAFC"
        />
        {/* Folded Corner */}
        <path d="M 34 0 L 46 12 L 34 12 Z" fill="#E2E8F0" />

        {/* Silver/Grey Music Note */}
        <circle cx="20" cy="44" r="5" fill="#64748B" />
        <circle cx="34" cy="40" r="5" fill="#64748B" />
        <path
          d="M 25 44 L 25 22 L 39 18 L 39 40"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 25 22 L 39 18"
          stroke="#334155"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function MacZipIcon({ className = "w-14 h-16" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 50 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <path
          d="M 4 4 C 4 1.8 5.8 0 8 0 L 34 0 L 46 12 L 46 58 C 46 60.2 44.2 62 42 62 L 8 62 C 5.8 62 4 60.2 4 58 Z"
          fill="#E2E8F0"
        />
        <path d="M 34 0 L 46 12 L 34 12 Z" fill="#CBD5E1" />

        {/* Zipper strap */}
        <rect x="21" y="4" width="8" height="42" fill="#94A3B8" />
        <rect x="23" y="8" width="4" height="3" fill="#334155" />
        <rect x="23" y="14" width="4" height="3" fill="#334155" />
        <rect x="23" y="20" width="4" height="3" fill="#334155" />
        <rect x="23" y="26" width="4" height="3" fill="#334155" />
        <rect x="23" y="32" width="4" height="3" fill="#334155" />

        {/* Zipper pull */}
        <rect x="20" y="38" width="10" height="12" rx="2" fill="#475569" />
        <circle cx="25" cy="44" r="2" fill="#E2E8F0" />
        <text x="25" y="58" fontSize="8" fontWeight="bold" fill="#475569" textAnchor="middle">
          ZIP
        </text>
      </svg>
    </div>
  );
}

export function MacShortcutsIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-600 to-pink-500 rounded-2xl p-2 shadow-lg flex items-center justify-center border border-white/20">
        <svg className="w-9 h-9 text-white drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M12 3v18M3 12h18"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16 8l4 4-4 4M8 16l-4-4 4-4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function MacAfterEffectsIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="w-full h-full bg-[#00005b] rounded-xl border-2 border-[#9999ff] p-1.5 flex items-center justify-center shadow-lg">
        <span className="font-sans text-2xl font-black tracking-tighter text-[#9999ff]">
          Ae
        </span>
      </div>
    </div>
  );
}

export function MacIronPalaceIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="w-full h-full bg-gradient-to-tr from-cyan-800 to-sky-500 rounded-xl p-1 shadow-md border border-white/30 flex flex-col items-center justify-center">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export function MacImageThumbnail({
  gradient = "from-slate-800 to-indigo-950",
  caption,
  className = "w-16 h-16",
}: {
  gradient?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`relative group cursor-pointer ${className}`}>
      {/* Outer border mimicking macOS photo thumbnail */}
      <div className="w-full h-full p-1 bg-white/90 dark:bg-slate-800/90 rounded-md shadow-md border border-slate-300/80 dark:border-slate-700/80 flex flex-col overflow-hidden">
        <div className={`w-full h-full rounded bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
          {/* Subtle grid/image texture effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
          <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function MacVideoThumbnail({
  className = "w-16 h-16",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full p-1 bg-slate-900 rounded-md shadow-md border border-slate-700 flex flex-col overflow-hidden">
        {/* Film strip header */}
        <div className="h-2 bg-slate-800 border-b border-slate-700 flex justify-between px-1 items-center">
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
        </div>
        <div className="w-full flex-1 bg-gradient-to-tr from-purple-900 via-indigo-950 to-slate-950 flex items-center justify-center relative">
          <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white fill-white ml-0.5" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
