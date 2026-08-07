"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Music, Disc } from "lucide-react";
import { VAHRUN_BIO } from "@/data/portfolioData";

interface StickyNoteProps {
  onOpenFolder?: (folderId: string) => void;
}

export function StickyNote({ onOpenFolder }: StickyNoteProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      initial={{ scale: 0.95, opacity: 0, y: -10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-[9%] left-[54%] md:left-[56%] z-10 w-[290px] sm:w-[320px] cursor-grab active:cursor-grabbing select-none"
    >
      {/* Sticky Note Container */}
      <div className="relative p-5 bg-gradient-to-b from-[#fffab3] via-[#fffa9e] to-[#fff37a] text-slate-800 rounded-sm shadow-[0_12px_28px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.12)] border-t border-[#ffffd1]">
        {/* Top Sticky Header line */}
        <div className="h-3 -mx-5 -mt-5 mb-3 bg-[#fff785] border-b border-[#f3eb69] rounded-t-sm flex items-center justify-between px-3">
          <div className="flex space-x-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
          <div className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Stickies
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 font-sans text-[13px] leading-snug tracking-tight text-slate-900 font-medium">
          {/* Title */}
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-950 lowercase">
              {VAHRUN_BIO.name}
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-1 text-slate-800 lowercase">
            <p>music producer from lucknow</p>
            <p>crafting soundscapes that</p>
            <p>blend emotion, texture, and</p>
            <p>storytelling.</p>
          </div>

          {/* Songs platform callout */}
          <div className="space-y-2 pt-1 border-t border-amber-300/60 lowercase">
            <p>songs out on spotify,</p>
            <p>apple music & youtube.</p>

            {/* Platform Quick Buttons */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <a
                href={VAHRUN_BIO.socials.spotify}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-2 py-0.5 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-950 border border-emerald-600/30 rounded text-[11px] font-semibold transition-colors"
              >
                <Disc className="w-3 h-3 text-emerald-700" />
                <span>Spotify</span>
              </a>
              <a
                href={VAHRUN_BIO.socials.appleMusic}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-2 py-0.5 bg-rose-600/10 hover:bg-rose-600/20 text-rose-950 border border-rose-600/30 rounded text-[11px] font-semibold transition-colors"
              >
                <Music className="w-3 h-3 text-rose-700" />
                <span>Apple Music</span>
              </a>
              <a
                href={VAHRUN_BIO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-2 py-0.5 bg-red-600/10 hover:bg-red-600/20 text-red-950 border border-red-600/30 rounded text-[11px] font-semibold transition-colors"
              >
                <svg className="w-3 h-3 text-red-700 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-1 text-slate-800 lowercase">
            <p>also work in video editing</p>
            <p>and graphic designing.</p>
          </div>
        </div>

        {/* Bottom Corner Fold Effect */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-amber-300 to-transparent shadow-sm pointer-events-none" />
      </div>
    </motion.div>
  );
}
