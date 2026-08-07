"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  SkipBack,
  SkipForward,
  Disc,
  ExternalLink,
  Music,
} from "lucide-react";
import { Track, VAHRUN_BIO } from "@/data/portfolioData";

interface AudioPlayerWindowProps {
  track: Track;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
}

export function AudioPlayerWindow({
  track,
  zIndex,
  onClose,
  onFocus,
}: AudioPlayerWindowProps) {
  const [isPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(24);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.div
      onMouseDown={onFocus}
      drag
      dragMomentum={false}
      dragElastic={0.05}
      initial={{ scale: 0.85, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ zIndex }}
      className="absolute top-[10%] sm:top-[18%] left-[3%] sm:left-[32%] w-[360px] sm:w-[420px] max-w-[94vw] rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/30 dark:border-slate-700/60 bg-slate-900/90 backdrop-blur-2xl text-white select-none"
    >
      {/* Title bar */}
      <div className="h-9 bg-slate-800/80 px-3 flex items-center justify-between cursor-grab active:cursor-grabbing border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 border border-red-600/60"
          />
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 border border-yellow-600/60"
          />
          <button className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 border border-emerald-600/60" />
        </div>
        <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300">
          <Music className="w-3.5 h-3.5 text-rose-400" />
          <span>QuickLook - Audio</span>
        </div>
        <div className="w-12" />
      </div>

      {/* Main Player Body */}
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        {/* Album Artwork & Rotating Vinyl effect */}
        <div className="relative w-40 h-40 rounded-2xl bg-gradient-to-tr from-slate-950 via-indigo-950 to-blue-900 p-2 shadow-2xl flex items-center justify-center border border-white/20 group">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="w-32 h-32 rounded-full border-4 border-slate-800 bg-slate-950 flex items-center justify-center shadow-inner relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e1b4b_0,transparent_70%)]" />
            <Disc className="w-12 h-12 text-slate-400 opacity-60" />
            <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center shadow" />
          </motion.div>
        </div>

        {/* Track Metadata */}
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white">
            {track.title}
          </h3>
          <p className="text-xs text-indigo-300 font-medium mt-0.5">
            {VAHRUN_BIO.name} • {track.album} ({track.year})
          </p>
        </div>

        {/* Audio Spectrum Visualizer */}
        <div className="w-full h-8 flex items-end justify-center space-x-1 px-4">
          {[
            40, 70, 30, 90, 50, 80, 100, 60, 30, 85, 45, 95, 60, 80, 40, 70, 90,
            50,
          ].map((height, idx) => (
            <motion.div
              key={idx}
              animate={{
                height: isPlaying
                  ? [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`]
                  : "20%",
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6 + (idx % 4) * 0.1,
                ease: "easeInOut",
              }}
              className="w-1.5 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-full"
            />
          ))}
        </div>

        {/* Scrubber Progress Bar */}
        <div className="w-full space-y-1">
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>0:48</span>
            <span>{track.duration}</span>
          </div>
        </div>

        {/* Playing Status Indicator (Always Playing) */}
        <div className="flex items-center space-x-6">
          <button className="text-slate-400 hover:text-white transition-colors cursor-default">
            <SkipBack className="w-5 h-5 opacity-60" />
          </button>
          <div
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg cursor-default"
            title="Now Playing — Continuous Loop"
          >
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
          <button className="text-slate-400 hover:text-white transition-colors cursor-default">
            <SkipForward className="w-5 h-5 opacity-60" />
          </button>
        </div>

        {/* Links */}
        <div className="pt-2 border-t border-slate-800/80 w-full flex justify-center space-x-3 text-xs">
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:underline flex items-center space-x-1"
          >
            <span>Listen on Spotify</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
