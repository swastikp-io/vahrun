"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ExternalLink, Image as ImageIcon } from "lucide-react";
import { GalleryItem } from "@/data/portfolioData";

interface QuickLookModalProps {
  item: GalleryItem | null;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
}

export function QuickLookModal({
  item,
  zIndex,
  onClose,
  onFocus,
}: QuickLookModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          onMouseDown={onFocus}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ zIndex }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[520px] max-w-[92vw] bg-slate-900/90 border border-white/20 rounded-2xl shadow-2xl overflow-hidden text-white select-none"
        >
          {/* Header Bar */}
          <div className="h-9 bg-slate-800/80 px-3 flex items-center justify-between border-b border-slate-700/60 cursor-grab active:cursor-grabbing">
            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 border border-red-600/60"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600/60 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600/60 opacity-60" />
            </div>
            <span className="text-xs font-semibold text-slate-300">
              {item.title} — Quick Look
            </span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-700/60 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Image Display */}
          <div className="p-4 flex flex-col items-center">
            <div
              className={`w-full h-72 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center border border-white/10 shadow-inner relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />
              <ImageIcon className="w-16 h-16 text-white/40 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-lg text-xs font-medium text-slate-200">
                {item.caption}
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="w-full mt-3 flex justify-between items-center text-xs text-slate-400">
              <span>Category: {item.category}</span>
              <span className="text-indigo-400 font-mono font-medium">
                Vahrun Visual Archives
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
