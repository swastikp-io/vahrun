import React from "react";
import Link from "next/link";

export default function WorkingOnPage() {
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
        <div className="w-full lg:w-[16%] flex-shrink-0">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 block pt-1 select-text">
            /working-on
          </span>
        </div>

        {/* Right Column: Main Content */}
        <div className="flex-1 max-w-3xl select-text space-y-6">
          <div className="space-y-4 text-[15.5px] sm:text-[17px] leading-[1.65] text-neutral-300 font-normal">
            <p>
              Quit my job to focus on building side projects and making music.
            </p>
            <p>
              Building small tools, plugins, and experiments for people who make things.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
