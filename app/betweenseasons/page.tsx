import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "betweenseasons | vahrun",
  description:
    "betweenseasons is an art collective started with friends from India. Every song here is an entry. Every visual is a memory. betweenseasons is a place.",
};

export default function BetweenSeasonsPage() {
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
        {/* Left Column: Section Tag */}
        <div className="w-full lg:w-[14%] xl:w-[16%] flex-shrink-0">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 block pt-1 select-text">
            /betweenseasons
          </span>
        </div>

        {/* Middle Column: Content */}
        <div className="flex-1 space-y-6 max-w-2xl select-text text-[16px] sm:text-[18px] leading-[1.65] text-neutral-300 font-normal">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
            betweenseasons
          </h1>

          <p>
            betweenseasons is an{" "}
            <a
              href="https://www.instagram.com/betweenssns?igsi=eGl6Ynh5bGl3NXUx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white hover:text-neutral-300 transition-colors font-medium cursor-pointer"
            >
              art collective
            </a>{" "}
            started with friends from India. Every song here is an entry. Every visual is a memory.
          </p>

          <p>betweenseasons is a place.</p>

          <p className="text-white font-medium">music lives here.</p>

          <div className="pt-4">
            <img
              src="/OMS-CoverArt.jpg"
              alt="betweenseasons artwork"
              className="w-full max-w-xl border border-neutral-800 shadow-2xl block"
            />
          </div>

          <div className="pt-6 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              How it started
            </h2>

            <p>
              betweenseasons began as a way to put music into the world without putting it into a box.
            </p>

            <p>
              What started with our own releases is slowly becoming something larger : a collective of artists, songs, ideas, and people connected by the music they make and the music they find.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Instagram / community
            </h2>

            <p>
              Songs, recommendations, fragments, stories, and things we're listening to.
            </p>

            <p>
              Follow along as the collective grows.
            </p>

            <p className="pt-1">
              <a
                href="https://www.instagram.com/betweenssns?igsi=eGl6Ynh5bGl3NXUx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-white hover:text-neutral-300 transition-colors font-medium cursor-pointer"
              >
                @betweenssns
              </a>
            </p>
          </div>


        </div>

        {/* Right Column Spacer */}
        <div className="w-full lg:w-[15%] flex-shrink-0 hidden lg:block" />
      </main>
    </div>
  );
}
