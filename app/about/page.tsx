"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio Player for "sunn vahrun edit.mp3"
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const audioUrl = `${basePath}/sunn%20vahrun%20edit.mp3`;
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipSeconds = (sec: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(
      0,
      Math.min(duration || 300, audioRef.current.currentTime + sec)
    );
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="min-h-screen w-full bg-black text-neutral-100 flex flex-col p-4 sm:p-6 lg:p-10 pb-24 sm:pb-32 font-sans select-none overflow-y-auto">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-6 sm:pb-8 flex-shrink-0">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors select-text"
        >
          vahrun.com
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-700 hover:border-white px-2.5 py-1"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Container with Label-to-Content Alignment */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-2">
        {/* Left Content Sections */}
        <div className="flex-1 space-y-10 sm:space-y-12 max-w-4xl select-text">
          {/* Section 1: /about */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 lg:gap-10">
            <div className="w-full sm:w-28 lg:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-500 pt-0.5">
              <span>/about</span>
            </div>
            <div className="flex-1 space-y-4 text-[15.5px] sm:text-[17px] leading-[1.65] text-neutral-300 font-normal">
              <p>
                Hi! My name is vahrun – welcome to my corner of the internet. I’m a
                music producer and creative developer living in Lucknow, India. I make
                electronic, soundscape, and textured music.
              </p>
              <p>
                I spend most of my time creating stuff. When I’m not doing that, I go on
                walks, journal, experiment with modular synth cables, cook, and listen to
                music (lately: OAFF, sudan, Fred again..., demotapes and many more).
                Born and raised in Lucknow.
              </p>
            </div>
          </div>

          {/* Section 2: my interests */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 lg:gap-10">
            <div className="w-full sm:w-28 lg:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-500 pt-0.5">
              <span>my interests</span>
            </div>
            <div className="flex-1 space-y-1.5 text-[15.5px] sm:text-[17px] text-neutral-300 font-normal">
              <p>
                music production
              </p>
              <p>web development</p>
              <p>sound design</p>

              <p>interface design</p>
              <p>journaling</p>
              <p>graphic design</p>

            </div>
          </div>

          {/* Section 3: hire me */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 lg:gap-10 pt-2">
            <div className="w-full sm:w-28 lg:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-500 pt-0.5">
              <span>hire me</span>
            </div>
            <div className="flex-1 text-[15.5px] sm:text-[17px] leading-[1.65] text-neutral-300 font-normal max-w-xl">
              <p>
                Currently open to freelance web + product work & sound design. I’m a
                full stack web developer and creative developer who can design, develop, and ship
                products with strong empathy for users.{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=music.swastikpatel@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  Email
                </a>{" "}
                me if you’d like to chat.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Photo & Sleek Symmetric Audio Player Card */}
        <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 flex flex-col gap-6 pt-2 lg:pt-0 pb-12 sm:pb-20">
          {/* Portrait Photo */}
          <div className="w-full h-[220px] sm:h-[260px] lg:h-[240px] bg-neutral-900 overflow-hidden relative border border-neutral-800">
            <img
              src="https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
              alt="vahrun"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Sleek, Perfectly Symmetric Audio Player Card Widget */}
          <div className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-2xl p-5 shadow-xl space-y-4">
            {/* Header Track Info */}
            <div className="flex items-center gap-3.5">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/5f/91/135f918d-0515-fb9f-b4f8-97c0989daee9/199538692631.jpg/592x592bb.webp"
                alt="Track Cover"
                className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-white/10 shadow-md"
              />
              <div className="overflow-hidden space-y-0.5">
                <h4 className="font-semibold text-white text-sm sm:text-base truncate tracking-tight">
                  sunn (vahrun edit)
                </h4>
                <p className="text-xs text-neutral-400 font-medium">vahrun</p>
                <span className="inline-block text-[10px] font-mono bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full">
                  Audio Edit
                </span>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex flex-col items-center gap-3 pt-2">
              <div className="flex items-center justify-center gap-5 w-full">
                {/* Skip Back 10s */}
                <button
                  onClick={() => skipSeconds(-10)}
                  className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Rewind 10s"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                    />
                  </svg>
                </button>

                {/* Play / Pause Toggle Button */}
                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-lg"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 fill-current translate-x-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Skip Forward 10s */}
                <button
                  onClick={() => skipSeconds(10)}
                  className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Forward 10s"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z"
                    />
                  </svg>
                </button>
              </div>

              {/* Interactive Seeker Progress Bar */}
              <div className="w-full flex items-center gap-3 text-[11px] font-mono text-neutral-400 pt-1">
                <span className="w-9 text-right">{formatTime(currentTime)}</span>
                <div
                  onClick={handleSeek}
                  className="flex-1 h-2 bg-white/15 hover:bg-white/25 rounded-full cursor-pointer overflow-hidden transition-colors relative"
                >
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100"
                    style={{
                      width: `${(currentTime / (duration || 1)) * 100}%`,
                    }}
                  />
                </div>
                <span className="w-9 text-left">
                  {formatTime(duration || 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
