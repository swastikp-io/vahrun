"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Music2,
  Video,
  Palette,
  ExternalLink,
} from "lucide-react";

interface AboutMeNoteModalProps {
  isOpen: boolean;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
}

export function AboutMeNoteModal({
  isOpen,
  zIndex,
  onClose,
  onFocus,
}: AboutMeNoteModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          onMouseDown={onFocus}
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ zIndex }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[520px] max-w-[94vw] bg-amber-50/95 dark:bg-slate-900/95 border border-amber-200/60 dark:border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 select-none backdrop-blur-2xl"
        >
          {/* macOS Title Bar */}
          <div className="h-10 bg-amber-100/70 dark:bg-slate-800/80 px-3.5 flex items-center justify-between border-b border-amber-200/80 dark:border-slate-700/80 cursor-grab active:cursor-grabbing">
            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 border border-red-600/60 transition-colors"
                title="Close"
              />
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 border border-yellow-600/60 transition-colors"
                title="Minimize"
              />
              <div className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600/60 opacity-70" />
            </div>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-amber-900/80 dark:text-slate-200">
              <FileText className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              <span>aboutme.txt — Notes</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-amber-200/50 dark:hover:bg-slate-700/60 rounded text-amber-800 dark:text-slate-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Note Body Content */}
          <div className="p-5 sm:p-6 overflow-y-auto max-h-[80vh]">
            {/* Embedded Image Header */}
            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-md border border-amber-200/60 dark:border-slate-700/60 mb-5 group">
              <img
                src="https://i.pinimg.com/1200x/04/82/5b/04825b69ad1faa29428e16eb3819f49a.jpg"
                alt="Vahrun About Me"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <span className="text-xs font-mono font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                  aboutme.txt
                </span>
                <span className="text-[11px] text-amber-200 bg-amber-900/60 backdrop-blur-md px-2 py-0.5 rounded">
                  Lucknow, IN
                </span>
              </div>
            </div>

            {/* Formatted Text Note */}
            <div className="bg-amber-100/40 dark:bg-slate-800/40 border border-amber-200/50 dark:border-slate-700/50 rounded-xl p-4 sm:p-5 space-y-4">
              <div className="text-sm sm:text-base font-medium leading-relaxed font-sans text-slate-800 dark:text-slate-100 space-y-3">
                <p className="whitespace-pre-line">
                  music producer from lucknow{"\n"}
                  crafting soundscapes that{"\n"}
                  blend emotion, texture, and{"\n"}
                  storytelling.
                </p>

                <div className="pt-1 pb-1">
                  <p className="whitespace-pre-line">
                    songs out on spotify,{"\n"}
                    apple music & youtube.
                  </p>

                  {/* Interactive Quick Links */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a
                      href="https://open.spotify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-xs hover:scale-105"
                    >
                      <Music2 className="w-3.5 h-3.5" />
                      <span>Spotify</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                    <a
                      href="https://music.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-pink-600 hover:bg-pink-500 text-white rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-xs hover:scale-105"
                    >
                      <Music2 className="w-3.5 h-3.5" />
                      <span>Apple Music</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-xs hover:scale-105"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>

                <p className="whitespace-pre-line pt-1">
                  also work in video editing{"\n"}
                  and graphic designing.
                </p>
              </div>
            </div>

            {/* Note Footer Metadata */}
            <div className="mt-4 pt-3 border-t border-amber-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <Palette className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>TextEdit Note • Vahrun Portfolio</span>
              </div>
              <span className="font-mono text-amber-700 dark:text-amber-400">
                1.4 KB
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
