"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
}

const TRACK_DATA: Track = {
  title: "one more sunday",
  artist: "vahrun",
  coverUrl: "/OMS-CoverArt.jpg",
  audioUrl: "/one more sunday.mp3",
};

export default function SpotifyPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Format time in seconds to m:ss
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Playback error:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Handle time update from audio tag
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle loaded metadata (duration)
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle track ended
  const handleEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  // Handle scrub/seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Skip back to 0:00
  const handleSkipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  };

  // Skip forward to end or reset
  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full font-sans select-none">
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={TRACK_DATA.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Low-profile Compact Transparent Player Container */}
      <div className="w-full max-w-xl bg-transparent border border-neutral-800 rounded-none p-3.5 sm:p-4 transition-all duration-300">
        {/* Top Row: Album Cover, Track Info & Inline Controls */}
        <div className="flex items-center justify-between gap-3">
          {/* Left: Cover Art & Track Info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className="relative shrink-0 cursor-pointer group"
              onClick={togglePlay}
            >
              <img
                src={TRACK_DATA.coverUrl}
                alt={TRACK_DATA.title}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-none object-cover border border-neutral-800 transition-opacity group-hover:opacity-90"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/OMS-CoverArt.png";
                }}
              />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-white leading-snug truncate">
                {TRACK_DATA.title}
              </h2>
              <p className="text-xs font-normal text-neutral-400 truncate">
                {TRACK_DATA.artist}
              </p>
            </div>
          </div>

          {/* Right: Inline Playback Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Skip Back */}
            <button
              onClick={handleSkipBack}
              className="text-white hover:text-neutral-400 transition-colors p-1 cursor-pointer"
              title="Previous"
            >
              <SkipBack className="w-4 h-4 fill-current" />
            </button>

            {/* Square Play / Pause Button */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-none bg-white text-black hover:bg-neutral-200 flex items-center justify-center transition-all duration-200 cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-black stroke-none" />
              ) : (
                <Play className="w-4 h-4 fill-black stroke-none ml-0.5" />
              )}
            </button>

            {/* Skip Forward */}
            <button
              onClick={handleSkipForward}
              className="text-white hover:text-neutral-400 transition-colors p-1 cursor-pointer"
              title="Next"
            >
              <SkipForward className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Timeline Progress Bar */}
        <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400 mt-2.5">
          <span className="w-8 text-right shrink-0">
            {formatTime(currentTime)}
          </span>

          <div className="relative flex-1 flex items-center h-3 cursor-pointer group/timeline">
            {/* Background Track Line */}
            <div className="w-full h-1 bg-neutral-800 rounded-none overflow-hidden relative">
              <div
                className="h-full bg-neutral-300 rounded-none transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Thumb handle */}
            <div
              className="absolute w-2.5 h-2.5 bg-white rounded-none top-1/2 -translate-y-1/2 transition-all duration-75 -translate-x-1/2 pointer-events-none"
              style={{ left: `${progressPercent}%` }}
            />

            {/* Range Input */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
            />
          </div>

          <span className="w-8 shrink-0">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
