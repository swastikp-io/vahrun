"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Bluetooth,
  Airplay,
  Sun,
  Volume2,
  Moon,
  Music,
  Disc,
} from "lucide-react";
import { VAHRUN_BIO, TRACKS } from "@/data/portfolioData";

interface ControlCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ControlCenter({ isOpen, onClose }: ControlCenterProps) {
  const [displayBrightness, setDisplayBrightness] = useState<number>(90);
  const [soundVolume, setSoundVolume] = useState<number>(75);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-auto" onClick={onClose}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-8 right-3 w-80 bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/40 dark:border-slate-700/60 rounded-2xl shadow-2xl p-3 space-y-3 text-slate-900 dark:text-slate-100 select-none"
        >
          {/* Top Toggles Block */}
          <div className="grid grid-cols-2 gap-2">
            {/* Connectivity block */}
            <div className="p-2.5 bg-white/60 dark:bg-slate-800/60 rounded-xl space-y-2 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-full bg-blue-600 text-white">
                  <Wifi className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">Wi-Fi</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Vahrun Studio
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-full bg-blue-600 text-white">
                  <Bluetooth className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">
                    Bluetooth
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Audio Interface
                  </div>
                </div>
              </div>
            </div>

            {/* Dark mode & Airdrop */}
            <div className="grid grid-rows-2 gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2.5 rounded-xl border flex items-center space-x-2 transition-colors ${
                  isDarkMode
                    ? "bg-blue-600 text-white border-blue-500"
                    : "bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50"
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="text-xs font-bold">Dark Mode</span>
              </button>
              <div className="p-2.5 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50 flex items-center space-x-2">
                <Airplay className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-bold">AirPlay</span>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-2 p-2.5 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
            {/* Display Brightness */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                <span className="flex items-center space-x-1">
                  <Sun className="w-3 h-3" />
                  <span>Display</span>
                </span>
                <span>{displayBrightness}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={displayBrightness}
                onChange={(e) => setDisplayBrightness(Number(e.target.value))}
                className="w-full accent-blue-600 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Sound Volume */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                <span className="flex items-center space-x-1">
                  <Volume2 className="w-3 h-3" />
                  <span>Sound</span>
                </span>
                <span>{soundVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={soundVolume}
                onChange={(e) => setSoundVolume(Number(e.target.value))}
                className="w-full accent-blue-600 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Now Playing Widget */}
          <div className="p-2.5 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 rounded-xl text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Disc className="w-4 h-4 text-white animate-spin" />
              </div>
              <div>
                <div className="text-xs font-bold line-clamp-1">
                  Handling Anti-Performance
                </div>
                <div className="text-[10px] text-blue-100">vahrun</div>
              </div>
            </div>
            <Music className="w-4 h-4 text-blue-200" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
