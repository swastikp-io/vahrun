import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "room - reimagine your new tab | vahrun",
  description:
    "room is a browser extension that replaces your default new tab page with a calm, ad-free stream of images.",
};

export default function RoomPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="min-h-screen lg:h-screen w-full bg-black text-neutral-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-sans select-none overflow-y-auto lg:overflow-hidden no-scrollbar">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-4 flex-shrink-0">
        <Link
          href="/"
          className="text-sm font-mono text-neutral-400 hover:text-white transition-colors"
        >
          /room
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-white px-2.5 py-1"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14 min-h-0 py-2 lg:overflow-hidden no-scrollbar">
        {/* Left Column: Category Label */}
        <div className="w-full lg:w-[16%] flex-shrink-0">
          <span className="text-sm font-normal text-neutral-500 font-sans block">
            browser extension
          </span>
        </div>

        {/* Middle Column: Room Copy & Details */}
        <div className="w-full lg:w-[46%] xl:w-[48%] h-full min-h-0 flex flex-col justify-between py-1 lg:overflow-y-auto select-text pr-2 no-scrollbar">
          <div className="space-y-6">
            {/* Tagline / Subtitle */}
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-200 font-normal leading-relaxed">
              reimagine your new tab
            </p>

            {/* Product Title */}
            <div className="pt-2">
              <h1 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                room
              </h1>

              {/* Main Product Description */}
              <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.6] text-neutral-300 font-normal max-w-xl">
                <p>
                  room is a browser extension that replaces your default new tab page with a calm, ad-free stream of images.
                </p>

                <p>
                  if you're bored from your classic google new tab then room is something you should try.
                </p>

                <p className="pt-2">
                  <a
                    href="https://www.dropbox.com/scl/fo/2k3ta5n8hbadaf9wifgmo/ALbsEVpNhAiK8kRbBx7mSnw?rlkey=hbo8i3crw8paqz8znawb6efs6&st=qra8l1ye&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 text-white hover:text-neutral-400 transition-colors"
                  >
                    Download the extension from here
                  </a>
                </p>

                <p className="text-neutral-400 text-sm">
                  Don't worry the extension is completely safe to download
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Display Image */}
        <div className="w-full lg:w-[38%] xl:w-[36%] h-[350px] sm:h-[450px] lg:h-full flex-shrink-0 relative bg-black overflow-hidden flex items-center justify-center">
          <img
            src={`${basePath}/room.png`}
            alt="room - reimagine your new tab"
            className="w-full h-full object-cover block"
          />
        </div>
      </main>
    </div>
  );
}
