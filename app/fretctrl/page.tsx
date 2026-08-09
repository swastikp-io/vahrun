import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fretctrl | vahrun",
  description:
    "FRETCTRL - guitar ideas, without the blank page. Generate guitar MIDI from your musical instincts.",
};

export default function FretctrlPage() {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-black text-neutral-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-sans select-none overflow-y-auto lg:overflow-hidden no-scrollbar">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-4 flex-shrink-0">
        <Link
          href="/"
          className="text-sm font-mono text-neutral-400 hover:text-white transition-colors"
        >
          /fretctrl
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-white px-2.5 py-1"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Content - 3 Column Layout matching reference image */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14 min-h-0 py-2 lg:overflow-hidden no-scrollbar">
        {/* Left Column: Category Label */}
        <div className="w-full lg:w-[16%] flex-shrink-0">
          <span className="text-sm font-normal text-neutral-500 font-sans block">
            product overview
          </span>
        </div>

        {/* Middle Column: FRETCTRL Copy & Details */}
        <div className="w-full lg:w-[46%] xl:w-[48%] h-full min-h-0 flex flex-col justify-between py-1 lg:overflow-y-auto select-text pr-2 no-scrollbar">
          <div className="space-y-6">
            {/* Tagline / Subtitle */}
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-200 font-normal leading-relaxed">
              guitar ideas, without the blank page.
            </p>

            {/* Product Title */}
            <div className="pt-2">
              <h1 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                FRETCTRL
              </h1>

              {/* Main Product Description */}
              <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.6] text-neutral-300 font-normal max-w-xl">
                <p>Generate guitar MIDI from your musical instincts.</p>

                <p>
                  Pick a genre, key, scale, tuning, playing style, fret range
                  and vibe. FRETCTRL turns those choices into playable guitar
                  phrases you can drag straight into your DAW.
                </p>
              </div>

              {/* No Black Box Section */}
              <div className="pt-6 mt-6 border-t border-neutral-800 space-y-3 text-[16px] sm:text-[17px] leading-[1.6] text-neutral-300 font-normal max-w-xl">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                  no black box.
                </h3>
                <p>
                  FRETCTRL doesn’t need to pretend it knows what you’re thinking.
                </p>
                <p>
                  It uses music theory, fretboard positions, rhythmic patterns and
                  guitar-specific rules to build every phrase.
                </p>
                <div className="pt-1 font-medium text-white">
                  <p>You choose the rules.</p>
                  <p>FRETCTRL finds the notes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Res Feature Image */}
        <div className="w-full lg:w-[38%] xl:w-[36%] h-[350px] sm:h-[450px] lg:h-full flex-shrink-0 relative bg-black overflow-hidden flex items-center justify-center">
          <img
            src="https://i.pinimg.com/1200x/4a/75/f2/4a75f294b16d1fa8471f6e365ffb80e1.jpg"
            alt="FRETCTRL"
            className="w-full h-full object-cover block"
          />
        </div>
      </main>
    </div>
  );
}
