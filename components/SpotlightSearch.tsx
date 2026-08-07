"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Folder, Music, FileText, Image as ImageIcon, Sparkles, ArrowRight } from "lucide-react";
import { TRACKS, GALLERY_ITEMS } from "@/data/portfolioData";
import { DESKTOP_ICONS, DesktopIconItem } from "@/data/desktopIcons";

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectIcon: (icon: DesktopIconItem) => void;
}

export function SpotlightSearch({
  isOpen,
  onClose,
  onSelectIcon,
}: SpotlightSearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredIcons = DESKTOP_ICONS.filter((icon) =>
    icon.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-28 bg-black/20 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="w-[560px] max-w-[90vw] bg-slate-900/85 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden text-white select-none"
        >
          {/* Search Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              autoFocus
              placeholder="Spotlight Search (Search tracks, folders, designs...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-lg text-white placeholder-slate-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/10"
              >
                Clear
              </button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-[320px] overflow-y-auto p-2 space-y-1">
            {filteredIcons.length > 0 ? (
              filteredIcons.map((icon) => (
                <div
                  key={icon.id}
                  onClick={() => {
                    onSelectIcon(icon);
                    onClose();
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-blue-600/60 cursor-pointer group transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Folder className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-slate-100 group-hover:text-white">
                      {icon.label}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-400 group-hover:text-blue-100">
                    <span className="capitalize">{icon.type}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching desktop files or tracks found for &quot;{query}&quot;
              </div>
            )}
          </div>

          {/* Footer keyboard hint */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-white/10 flex justify-between items-center text-[11px] text-slate-400 font-mono">
            <span>Press ESC to exit</span>
            <span>vahrun spotlight v1.0</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
