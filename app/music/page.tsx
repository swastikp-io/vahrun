import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import SpotifyPlayer from "./components/SpotifyPlayer";

export const metadata: Metadata = {
  title: "music | vahrun",
  description:
    "My music is scattered around the internet; spotify / apple music, soundcloud, youtube.",
};

export default function MusicPage() {
  return (
    <div className="min-h-screen w-full bg-black text-neutral-100 flex flex-col justify-between p-4 sm:p-6 lg:p-10 pb-24 sm:pb-32 font-sans select-none overflow-y-auto no-scrollbar">
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
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-white px-2.5 py-1 cursor-pointer"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-2">
        {/* Left Column: /music Tag */}
        <div className="w-full lg:w-[14%] xl:w-[16%] flex-shrink-0">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 block pt-1 select-text">
            /music
          </span>
        </div>

        {/* Middle Column: Copy & Spotify Player */}
        <div className="flex-1 max-w-3xl select-text">
          <p className="text-[17px] sm:text-[19px] leading-[1.65] text-neutral-200 font-normal">
            My music is scattered around the internet;{" "}
            <a
              href="https://open.spotify.com/artist/2tRx1njcfoGrTaDPPNj5OK"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              spotify
            </a>{" "}
            /{" "}
            <a
              href="https://music.apple.com/us/artist/vahrun/1745512124"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              apple music
            </a>
            ,{" "}
            <a
              href="https://soundcloud.com/itsvahrun"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              soundcloud
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@whyrunvahrun"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              youtube
            </a>
            .
          </p>

          <div className="mt-8 space-y-6">
            <img
              src="https://i.pinimg.com/736x/1f/ad/cb/1fadcbecedc6df3b686af2d449b10354.jpg"
              alt="music visual 1"
              className="w-full max-w-xl border border-neutral-800 shadow-2xl block rounded-none"
            />
            <img
              src="https://i.pinimg.com/736x/67/95/5f/67955fd91ae063ee7306b0ddba461a68.jpg"
              alt="music visual 2"
              className="w-full max-w-xl border border-neutral-800 shadow-2xl block rounded-none"
            />
            <img
              src="https://i.pinimg.com/736x/49/76/3d/49763dd8d2114e6278e600d7121b20dc.jpg"
              alt="music visual 3"
              className="w-full max-w-xl border border-neutral-800 shadow-2xl block rounded-none"
            />
          </div>

          {/* Featured Music Player moved to bottom of page */}
          <div className="mt-10">
            <SpotifyPlayer />
          </div>
        </div>

        {/* Right Column Spacer */}
        <div className="w-full lg:w-[10%] flex-shrink-0 hidden lg:block" />
      </main>
    </div>
  );
}
